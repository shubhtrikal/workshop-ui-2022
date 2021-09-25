import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Grid,
  TableFooter,
  TextField,
  Typography,
  Button,
  Checkbox,
  Box,
} from '@material-ui/core';
import { seatCount } from '../../utils';
import { Details } from '../../pages/_app';
import { loadScript, checkPromo, saveUser } from '../../utils';
import { useRouter } from 'next/dist/client/router';

const useStyles = makeStyles((theme) => ({
  root: {
    border: 'solid,3px,black',
    justifyContent: 'center',
    justifyItems: 'center',
    margin: '20px 0',
  },
  table: {
    minWidth: 650,
  },
  promosection: {
    margin: '20px',
    width: '30%',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
  },
  textfield: {
    margin: '8px',
    width: '90%',
  },
  pbtn: {
    margin: '8px',
    width: '90%',
    transition: 'all 0.2s linear',
    '&:hover': {
      background: '#2c2c51',
      color: 'white',
    },
  },
  btn: {
    margin: '10px',
    width: '150px',
    alignItems: 'center',
    transition: 'all 0.2s linear',
    '&:hover': {
      background: '#2c2c51',
      color: 'white',
    },
  },
}));

interface props {
  userDetails: Details;
  updateDetails: (details: any) => void;
  handleNext: () => void;
  handleBack: () => void;
}

export default function Payment(props: props) {
  const router = useRouter();
  const classes = useStyles();
  const values = props.userDetails;
  const [promoCode, setPromocode] = React.useState<string>();
  const [discount, setDiscount] = React.useState<number>(0);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [terms, setTerms] = React.useState<boolean>(false);
  const [seats, setSeats] = React.useState({
    workshopA: 0,
    workshopB: 0,
  });

  const [bill, setBill] = React.useState({
    wa1: 500,
    wa2: 500,
    ewa1: 0,
    ewa2: 0,
    d: 0,
    total: 1000,
  });
  const handlePromo = async (promoCode: string) => {
    setLoading(true);
    const res = await checkPromo(promoCode);
    if (!res) setDiscount(10);
    const d = Math.ceil(
      ((bill.wa1 + bill.wa2 - bill.ewa1 - bill.ewa2) * discount) / 100
    );
    const total = bill.wa1 + bill.wa2 - (bill.ewa1 + bill.ewa2 + d);

    setBill({
      ...bill,
      d: d,
      total: total,
    });
    setLoading(false);
  };
  const displayRazorpay = async (values: Details) => {
    const { name, email, phone, college } = values;
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/razorpay`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: bill.total * 100,
      }),
    }).then((t) => t.json());

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
      currency: 'INR',
      amount: (bill.total * 100).toString(),
      order_id: data.id,
      name: 'ISTE SC MANIT',
      description: 'Payment for workshop',
      image: '/logo.jpeg',
      handler: function (response) {
        setLoading(true);
        saveUser(
          values,
          bill.total.toString(),
          response.razorpay_payment_id,
          seats.workshopA,
          seats.workshopB,
          promoCode
        )
          .then((res) => {
            if (res.error) {
              props.updateDetails({
                orderId: data.id,
                success: false,
                name: null,
                email: null,
                phone: null,
                college: null,
                discountPercentage: null,
                discountValue: null,
                amount: null,
                workshopA: null,
                workshopB: null,
              });
              router.push('/failure');
            } else {
              props.updateDetails({
                orderId: data.id,
                success: true,
                name: res.name,
                email: res.email,
                phone: res.phone,
                workshopA: res.workshopA,
                workshopB: res.workshopB,
                college: res.college,
                discountPercentage: discount,
                discountValue: bill.d.toString(),
                amount: bill.total.toString(),
              });
              router.push('/success');
            }
          })
          .catch((err) => {
            props.updateDetails({
              orderId: data.id,
              success: false,
              name: null,
              email: null,
              phone: null,
              college: null,
              discountPercentage: null,
              discountValue: null,
              amount: null,
              workshopA: null,
              workshopB: null,
            });
            router.push('/failure');
          })
          .finally(() => {
            setLoading(false);
          });
      },
      prefill: {
        name,
        email,
        mobile: phone,
      },
    };
    const _window = window as any;
    const paymentObject = new _window.Razorpay(options);
    paymentObject.open();
  };
  React.useEffect(() => {
    setLoading(true);
    seatCount()
      .then((res) => {
        if (res) setSeats(res);
        const wa1 = values.workshopA ? 500 : 0;
        const wa2 = values.workshopB ? 500 : 0;
        const ewa1 = values.workshopA && seats.workshopA < 50 ? 50 : 0;
        const ewa2 = values.workshopB && seats.workshopB < 50 ? 50 : 0;
        const d = Math.ceil(((wa1 + wa2 - ewa1 - ewa2) * discount) / 100);
        const total = wa1 + wa2 - (ewa1 + ewa2 + d);

        setBill({
          wa1: wa1,
          wa2: wa2,
          ewa1: ewa1,
          ewa2: ewa2,
          d: d,
          total: total,
        });
      })
      .catch((e) => {
        alert('Error , Please Try Again');
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, ['/register']);

  return (
    <>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        className={classes.promosection}
      >
        <Grid item xs={12} lg={8}>
          <TextField
            label='Promo Code'
            variant='outlined'
            size='small'
            value={promoCode}
            className={classes.textfield}
            onChange={(e) => {
              setPromocode(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Button
            variant='outlined'
            color='primary'
            className={classes.pbtn}
            onClick={() => {
              handlePromo(promoCode);
            }}
          >
            Apply
          </Button>
        </Grid>
        <Grid container item lg={12} alignItems='flex-start'>
          <Box ml={1} mt={1}>
            <p
              style={{ marginRight: '10px', textAlign: 'right' }}
              id='message'
            ></p>
          </Box>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='left'>Sr. No.</TableCell>
              <TableCell align='center'>Workshop</TableCell>
              <TableCell align='center'>Date</TableCell>
              <TableCell align='center'>Seats Left</TableCell>
              <TableCell align='center'>Price</TableCell>
              <TableCell align='center'>Discount</TableCell>
              <TableCell align='center'>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.workshopA && (
              <TableRow>
                <TableCell align='left'>1</TableCell>
                <TableCell align='center'>
                  <Typography component='h6'>Finance</Typography>
                </TableCell>
                <TableCell align='center'>15-Oct-2021</TableCell>
                <TableCell align='center'>{`${
                  200 - seats.workshopA
                }/200`}</TableCell>
                <TableCell align='center'>Rs {bill.wa1}</TableCell>
                <TableCell align='center'>Rs {bill.ewa1}</TableCell>
                <TableCell align='center'>Rs {bill.wa1 - bill.ewa1}</TableCell>
              </TableRow>
            )}
            {values.workshopB && (
              <TableRow>
                <TableCell align='left'>{values.workshopA ? 2 : 1}</TableCell>
                <TableCell align='center'>
                  <Typography component='h6'>Data Science</Typography>
                </TableCell>
                <TableCell align='center'>17-Oct-2021</TableCell>
                <TableCell align='center'>{`${
                  200 - seats.workshopB
                }/200`}</TableCell>
                <TableCell align='center'>Rs {bill.wa2}</TableCell>
                <TableCell align='center'>Rs {bill.ewa2}</TableCell>
                <TableCell align='center'>Rs {bill.wa2 - bill.ewa2}</TableCell>
              </TableRow>
            )}
            {/* <TableRow>
              <TableCell colSpan={5} align="right">
                Sub Total
              </TableCell>
              <TableCell />
              <TableCell align="center">Rs {bill.d + bill.total}</TableCell>
            </TableRow> */}
            <TableRow>
              <TableCell colSpan={5} align='right'>
                Discount
              </TableCell>
              <TableCell align='center'>Rs {bill.d}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} align='right'>
                Total
              </TableCell>
              <TableCell />
              <TableCell align='center'>Rs {bill.total}</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </TableContainer>
      <Grid container alignItems='center' className={classes.root}>
        <Checkbox
          onChange={() => {
            setTerms(!terms);
          }}
        />{' '}
        <Typography variant='h6' component='h6'>
          {' '}
          Accept Terms and Conditions
        </Typography>
      </Grid>
      <Grid container className={classes.root}>
        <Button
          className={classes.btn}
          variant='outlined'
          onClick={props.handleBack}
        >
          Back
        </Button>
        <Button
          className={classes.btn}
          disabled={!bill.total || !terms}
          variant='outlined'
          onClick={() => {
            displayRazorpay(values);
          }}
        >
          PAY
        </Button>
      </Grid>
    </>
  );
}
