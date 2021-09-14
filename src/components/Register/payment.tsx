import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  TableFooter,
  TextField,
  Typography,
  Button,
  Card,
} from "@material-ui/core";
import { Details } from "../../pages/_app";
import { seatCount } from "../../pages/_app";
import axios from "axios";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  promosection: {
    float: "right",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },
  textfield: {
    margin: "8px",
    width: "90%",
  },
  btn: {
    margin: "8px",
    width: "90%",
  },
});

interface formprops {
  userDetails: Details;
  updateDetails: (details: any) => void;
  handleNext: () => void;
  handleBack: () => void;
}
const checkPromo = async (promo) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_BACKEND}/checkPromo`,
      promo
    );
    if (res)
      document.getElementById("message").innerHTML = "Promo Code Applied";
    return res;
  } catch (e) {
    document.getElementById("message").innerHTML =
      "Error, No Such Promo Code Found";
    return false;
  }
};
export default function Payment(props: formprops) {
  const classes = useStyles();
  const [promoCode, setPromocode] = React.useState<string>();
  const [discount, setDiscount] = React.useState(0);
  const [seats, setSeats] = React.useState({
    workshopA: 0,
    workshopB: 0,
  });
  const values = props.userDetails;
  const [bill, setBill] = React.useState({
    wa1: 500,
    wa2: 500,
    ewa1: 0,
    ewa2: 0,
    d: 0,
    total: 1000,
  });
  const handlePromo = async (promoCode) => {
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
  };
  React.useEffect(() => {
    seatCount()
      .then((res) => {
        setSeats(res);
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
        console.log(e);
      });
  }, ["/register"]);

  return (
    <>
      <Grid container className={classes.promosection}>
        <Grid item xs={12} lg={7}>
          <TextField
            label="Promo Code"
            variant="outlined"
            value={promoCode}
            className={classes.textfield}
            onChange={(e) => {
              setPromocode(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Button
            variant="outlined"
            color="primary"
            className={classes.btn}
            onClick={() => {
              handlePromo(promoCode);
            }}
          >
            Apply
          </Button>
        </Grid>
        <Grid item lg={12}>
          <p
            style={{ marginRight: "10px", textAlign: "right" }}
            id="message"
          ></p>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Sr. No.</TableCell>
              <TableCell align="center">Workshop</TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Seats Left</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Discount</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="left">1</TableCell>
              <TableCell align="center">
                <Typography component="h6">Finance</Typography>
              </TableCell>
              <TableCell align="center">15-Oct-2021</TableCell>
              <TableCell align="center">{`${
                200 - seats.workshopA
              }/200`}</TableCell>
              <TableCell align="center">Rs {bill.wa1}</TableCell>
              <TableCell align="center">Rs {bill.ewa1}</TableCell>
              <TableCell align="center">Rs {bill.wa1 - bill.ewa1}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">2</TableCell>
              <TableCell align="center">
                <Typography component="h6">Data Science</Typography>
              </TableCell>
              <TableCell align="center">17-Oct-2021</TableCell>
              <TableCell align="center">{`${
                200 - seats.workshopB
              }/200`}</TableCell>
              <TableCell align="center">Rs {bill.wa2}</TableCell>
              <TableCell align="center">Rs {bill.ewa2}</TableCell>
              <TableCell align="center">Rs {bill.wa2 - bill.ewa2}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} align="right">
                Sub Total
              </TableCell>
              <TableCell />
              <TableCell align="center">Rs {bill.d + bill.total}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} align="right">
                Discount
              </TableCell>
              <TableCell align="center">Rs {bill.d}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5} align="right">
                Total
              </TableCell>
              <TableCell />
              <TableCell align="center">Rs {bill.total}</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </TableContainer>

      <Grid container>
        <Button variant="outlined">Back</Button>
        <Button variant="outlined">Pay</Button>
      </Grid>
    </>
  );
}
