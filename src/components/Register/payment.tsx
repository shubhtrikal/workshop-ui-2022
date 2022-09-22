import React, { useEffect } from 'react';
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
import ScrollDialog from '../terms';
import { seatCount } from '../../utils';
import { Details } from '../../pages/_app';
import { loadScript, checkPromo, saveUser } from '../../utils';
import { useRouter } from 'next/dist/client/router';
import LoadingScreen from '../loadingscreen';
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
  const [openDialog, setOpenDialog] = React.useState(false);
  const [promoCode, setPromocode] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [terms, setTerms] = React.useState<boolean>(false);
  const [discount, setDiscount] = React.useState<number>(0);
  const [message, setMessage] = React.useState<string>('');
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

  // useEffect(() => {
  //   const d = Math.ceil(
  //     ((bill.wa1 + bill.wa2 - bill.ewa1 - bill.ewa2) * discount) / 100
  //   );
  //   const total = bill.wa1 + bill.wa2 - (bill.ewa1 + bill.ewa2 + d);
  //   setBill({
  //     ...bill,
  //     d: d,
  //     total: total,
  //   });
  //   document.getElementById('message').innerHTML = 'Promo Code Applied';
  // }, [discount]);

  interface PromoRes {
    valid: boolean;
    discount: number;
    single: boolean;
  }
  const handlePromo = async (promoCode: string) => {
    promoCode = promoCode.trim();
    const res: PromoRes = await checkPromo(promoCode);
    console.log(res.valid);

    if(res.valid)
    {
      if(!res.single)
        if(values.workshopA && values.workshopB)
        {
          setMessage('Promo Code Applied');
          setDiscount(res.discount);
        }
        else{
          setMessage('Promo Code is not applicable for single workshop');
          setDiscount(0);
        }
      else
      {
        setMessage('Promo Code Applied');
        setDiscount(res.discount);
      }
    }
    else {
        setDiscount(0);
        setMessage('No Such Promo Code Found');
    }

    const d = Math.ceil(
        ((bill.wa1 + bill.wa2 - bill.ewa1 - bill.ewa2) * discount) / 100
    );
    const total = bill.wa1 + bill.wa2 - (bill.ewa1 + bill.ewa2 + d);
  
    setBill({
      ...bill,
      d: d,
      total: total,
    });
    // if (
    //   res.valid &&
    //   promoCode === `COMBO10` &&
    //   values.workshopA &&
    //   values.workshopB
    // ) {
    //   setMessage('Promo Code Applied');
    //   setDiscount(res.discount);
    //   return;
    // }

    // if (res.valid && promoCode !== `COMBO10`) {
    //   if (promoCode === 'MANIT20')
    //     alert(
    //       'In case you are using a code generated for MANIT students, your status as a MANITian would be verified. In case of discrepancy, the refund would not be generated and would lead to cancellation of the registration for Flair Haven.'
    //     );
    //   setMessage('Promo Code Applied');
    //   setDiscount(res.discount);
    //   return;
    // }

    // const d = Math.ceil(
    //   ((bill.wa1 + bill.wa2 - bill.ewa1 - bill.ewa2) * discount) / 100
    // );
    // const total = bill.wa1 + bill.wa2 - (bill.ewa1 + bill.ewa2 + d);

    // setBill({
    //   ...bill,
    //   d: d,
    //   total: total,
    // });
    // if (promoCode === `COMBO10`)
    //   setMessage(

    //     'This Promo Code is applicable only when you select both workshop'
    //   );
    // else {
    //   setDiscount(0);
    //   setMessage('No Such Promo Code Found');
    // }
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
      image: '/images/iste-logo.jpeg',
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
        return res;

        if (res == undefined) return new Error('something Went Wrong');
      })
      .then((res) => {
        const wa1 = values.workshopA ? 500 : 0;
        const wa2 = values.workshopB ? 500 : 0;
        const ewa1 =
          values.workshopA && res.workshopA < 50 && promoCode !== 'MANIT20'
            ? 50
            : 0;
        const ewa2 =
          values.workshopB && res.workshopB < 50 && promoCode !== 'MANIT20'
            ? 50
            : 0;
        const d = Math.ceil(((wa1 + wa2 - ewa1 - ewa2) * discount) / 100);
        const total = wa1 + wa2 - (ewa1 + ewa2 + d);
        // console.log(bill, 'before', ewa2);

        setBill({
          wa1: values.workshopA ? 500 : 0,
          wa2: values.workshopB ? 500 : 0,
          ewa1:
            values.workshopA && res.workshopA < 50 && promoCode !== 'MANIT20'
              ? 50
              : 0,
          ewa2:
            values.workshopB && res.workshopB < 50 && promoCode !== 'MANIT20'
              ? 50
              : 0,
          d: d,
          total: total,
        });
        // console.log(bill, 'after');
      })
      .catch((e) => {
        alert('Error , Please Try Again');
        router.push('/');
        // console.log(e);
      })
      .finally(() => {
        setLoading(false);
        // console.log(bill, seats, 'finally');
      });
  }, ['/register', discount]);
  if (loading) return <LoadingScreen loading />;
  return (
    <>
      <ScrollDialog
        openDialog={openDialog}
        onClose={() => setOpenDialog(false)}
      />
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
            <p style={{ marginRight: '10px', textAlign: 'left' }} id='message'>
              {message}
            </p>
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
              <TableCell align='center'>Early Bird Discount</TableCell>
              <TableCell align='center'>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {values.workshopA && (
              <TableRow>
                <TableCell align='left'>1</TableCell>
                <TableCell align='center'>
                  <Typography component='h6'>
                  Machine Learning
                  </Typography>
                </TableCell>
                <TableCell align='center'>24-25 September 2022</TableCell>
                <TableCell align='center'>{`${
                  250 - seats.workshopA
                }/250`}</TableCell>
                <TableCell align='center'>₹ {bill.wa1}</TableCell>
                <TableCell align='center'>₹ {bill.ewa1}</TableCell>
                <TableCell align='center'>₹ {bill.wa1 - bill.ewa1}</TableCell>
              </TableRow>
            )}
            {values.workshopB && (
              <TableRow>
                <TableCell align='left'>{values.workshopA ? 2 : 1}</TableCell>
                <TableCell align='center'>
                  <Typography component='h6'>Data Structures and Algorithms</Typography>
                </TableCell>
                <TableCell align='center'>1-2 October 2022</TableCell>
                <TableCell align='center'>{`${
                  250 - seats.workshopB
                }/250`}</TableCell>
                <TableCell align='center'>₹ {bill.wa2}</TableCell>
                <TableCell align='center'>₹ {bill.ewa2}</TableCell>
                <TableCell align='center'>₹ {bill.wa2 - bill.ewa2}</TableCell>
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
                <b>Promo Code Discount</b>
              </TableCell>
              <TableCell />
              <TableCell align='center'>- ₹ {bill.d}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} align='right'>
                <b>Total</b>
              </TableCell>
              <TableCell />
              <TableCell align='center'>
                <b> ₹ {bill.total}</b>
              </TableCell>
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
          color='primary'
        />{' '}
        <Typography variant='h6' component='p'>
          {' '}
          I Accept all{' '}
          <a onClick={() => setOpenDialog(true)} style={{ color: '#2E5984' }}>
            Terms and Conditions
          </a>{' '}
          of ISTE-SC MANIT
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
