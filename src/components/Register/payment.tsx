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
  Checkbox,
  Grid,
  TableFooter,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { Details } from "../../pages/_app";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface formprops {
  userDetails: Details;
  updateDetails: (details: any) => void;
  handleNext: () => void;
  handleBack: () => void;
}
export default function Payment(props: formprops) {
  const classes = useStyles();
  const values = props.userDetails;
  return (
    <>
      <Grid>
        <Typography>
          {" "}
          <b> Name </b>
          {values.name}
        </Typography>
        <TextField variant="outlined" />
        <Button variant="outlined">Apply Promo Code</Button>
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
              <TableCell align="center">200</TableCell>
              <TableCell align="center">Rs 500</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">2</TableCell>
              <TableCell align="center">
                <Typography component="h6">Data Science</Typography>
              </TableCell>
              <TableCell align="center">17-Oct-2021</TableCell>
              <TableCell align="center">200</TableCell>
              <TableCell align="center">Rs 500</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Coupoun Discount</TableCell>
              <TableCell align="center">0</TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="left">Total</TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="center">1000</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter></TableFooter>
        </Table>
      </TableContainer>
    </>
  );
}
