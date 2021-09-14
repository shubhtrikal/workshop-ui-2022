import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Checkbox, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function WorkshopTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Typography>
        {" "}
        Note: First 50 students of Each Workshop will get 10 % discount
      </Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Sr. No.</TableCell>
            <TableCell align="center">Workshop</TableCell>
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Seats Left</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Register</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="left">1</TableCell>
            <TableCell align="center">
              <Typography component="h6">Finance</Typography>
              <Typography component="p" variant="inherit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ipsam?
              </Typography>
            </TableCell>
            <TableCell align="center">15-Oct-2021</TableCell>
            <TableCell align="center">200</TableCell>
            <TableCell align="center">Rs 500</TableCell>
            <TableCell align="center">
              <Checkbox />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="left">2</TableCell>
            <TableCell align="center">
              <Typography component="h6">Data Science</Typography>
              <Typography component="p" variant="inherit">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                ipsam?
              </Typography>
            </TableCell>
            <TableCell align="center">17-Oct-2021</TableCell>
            <TableCell align="center">200</TableCell>
            <TableCell align="center">Rs 500</TableCell>
            <TableCell align="center">
              <Checkbox />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
