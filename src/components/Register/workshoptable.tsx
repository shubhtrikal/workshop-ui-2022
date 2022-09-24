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
  Checkbox,
  TableFooter,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import { Details } from '../../pages/_app';
import { seatCount } from '../../utils';
import LoadingScreen from '../loadingscreen';
import { useRouter } from 'next/router';
const useStyles = makeStyles({
  root: {
    margin: 'auto',
    border: 'solid,3px,black',
    justifyContent: 'center',
    justifyItems: 'center',
    marginBottom: '20px',
  },
  table: {
    minWidth: 650,
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
});

interface tableprops {
  userDetails: Details;
  updateDetails: (details: any) => void;
  handleNext: () => void;
  handleBack: () => void;
}
export default function WorkshopTable(props: tableprops) {
  const router = useRouter();
  const classes = useStyles();
  const values = props.userDetails;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [workshopA, setWorkshopA] = React.useState<boolean>(values.workshopA);
  const [workshopB, setWorkshopB] = React.useState<boolean>(values.workshopB);
  const [seats, setSeats] = React.useState({
    workshopA: 0,
    workshopB: 0,
  });
  React.useEffect(() => {
    setLoading(true);
    seatCount()
      .then((res) => {
        // console.log(res);
        if (!res) {
          alert('Something Went Wrong');
          router.push('/');
        }
        if (res) setSeats(res);
      })
      .catch((e) => {
        alert('Something Went Wrong');
        router.push('/');
        // console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, ['/register']);

  if (loading) return <LoadingScreen loading />;
  return (
    <>
      <Grid container alignItems='center' className={classes.root}>
        <Box mb={5} mt={5}>
          <Typography variant='h6'>
            Hurry Up! First 50 students of Each Workshop will get 10% discount
          </Typography>
        </Box>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell align='left'>Sr. No.</TableCell>
                <TableCell align='center'>Workshop</TableCell>
                <TableCell align='center'>Date</TableCell>
                <TableCell align='center'>Seats Left</TableCell>
                <TableCell align='center'>Price</TableCell>
                <TableCell align='center'>Register</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* <TableRow>
                <TableCell align='left'>1</TableCell>
                <TableCell align='center'>
                  <Typography component='h6'>Machine Learning</Typography>
                  <Typography component='p' variant='inherit'>
                    Immersive Workshop on Machine Learning
                  </Typography>
                </TableCell>
                <TableCell align='center'>24-25 September 2022</TableCell>
                <TableCell align='center'>{`${
                  250 - seats.workshopA
                }/250`}</TableCell>
                <TableCell align='center'>₹ 500</TableCell>
                <TableCell align='center'>
                  <Checkbox
                    checked={values.workshopA}
                    onChange={(e) => {
                      props.updateDetails({
                        ...values,
                        workshopA: !workshopA,
                      });
                      setWorkshopA(!workshopA);
                    }}
                  />
                </TableCell>
              </TableRow> */}
              <TableRow>
                <TableCell align='left'>1</TableCell>
                <TableCell align='center'>
                  <Typography component='h6'>
                  Data Structures and Algorithms
                  </Typography>
                  <Typography component='p' variant='inherit'>
                    Engrossing Workshop on Data Structures and Algorithms
                  </Typography>
                </TableCell>
                <TableCell align='center'> 1-2 October 2022</TableCell>
                <TableCell align='center'>
                  {`${250 - seats.workshopB}/250`}
                </TableCell>
                <TableCell align='center'> ₹ 500</TableCell>
                <TableCell align='center'>
                  <Checkbox
                    checked={values.workshopB}
                    onChange={(e) => {
                      props.updateDetails({
                        ...values,
                        workshopB: !workshopB,
                      });
                      setWorkshopB(!workshopB);
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter />
          </Table>
        </TableContainer>
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
          variant='outlined'
          onClick={props.handleNext}
          disabled={!values.workshopA && !values.workshopB}
        >
          NEXT
        </Button>
      </Grid>
    </>
  );
}
