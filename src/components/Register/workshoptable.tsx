import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Checkbox, TableFooter, Typography } from "@material-ui/core";
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
export default function WorkshopTable(props: formprops) {
  const classes = useStyles();
  const values = props.userDetails;

  const [workshopA, setWorkshopA] = React.useState(values.workshopA);
  const [workshopB, setWorkshopB] = React.useState(values.workshopB);
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
              <Checkbox
                checked={values.workshopA}
                onChange={(e) => {
                  setWorkshopA(!workshopA);
                  props.updateDetails({
                    ...values,
                    workshopA: workshopA,
                  });
                  console.log(workshopA);
                }}
              />
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
              <Checkbox
                checked={values.workshopB}
                onChange={(e) => {
                  setWorkshopB(!workshopB);
                  props.updateDetails({
                    ...values,
                    workshopB: workshopB,
                  });
                }}
              />
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter></TableFooter>
      </Table>
    </TableContainer>
  );
}
