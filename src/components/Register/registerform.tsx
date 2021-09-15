import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Details } from "../../pages/_app";
const useStyles = makeStyles({
  root: {
    margin: "auto",
    border: "solid,3px,black",
    justifyContent: "center",
    justifyItems: "center",
  },
  paper: {
    boxSizing: "border-box",
    borderRadius: "10px",
    margin: "5px",
    padding: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textfield: {
    margin: "20px",
    padding: "10px",
    width: "400px",
    textAlign: "center",
    height: "50px",
  },
  btn: {
    margin: "10px",
    width: "150px",
    alignItems: "center",
  },
});

interface formprops {
  userDetails: Details;
  updateDetails: (details: any) => void;
  handleNext: () => void;
}
const RegisterForm = (props: formprops) => {
  const classes = useStyles();
  const values = props.userDetails;

  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <form>
          <Paper className={classes.paper} elevation={4}>
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="Name"
              name="name"
              type="text"
              required
              value={values.name}
              onChange={(event) => {
                props.updateDetails({ ...values, name: event.target.value });
              }}
            />
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="Email"
              name="email"
              type="email"
              required
              value={values.email}
              onChange={(event) => {
                props.updateDetails({ ...values, email: event.target.value });
              }}
            />
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="Phone"
              name="phone"
              type="text"
              required
              value={values.phone}
              onChange={(event) => {
                props.updateDetails({ ...values, phone: event.target.value });
              }}
            />
            <TextField
              variant="outlined"
              fullWidth
              className={classes.textfield}
              label="College"
              name="college"
              type="text"
              required
              value={values.college}
              onChange={(event) => {
                props.updateDetails({ ...values, college: event.target.value });
              }}
            />
          </Paper>
          <Grid container alignItems="center" className={classes.root}>
            <Button
              className={classes.btn}
              type="submit"
              variant="outlined"
              disabled={
                !values.name ||
                !values.email ||
                !values.phone ||
                !values.college
              }
              onClick={props.handleNext}
            >
              Next
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
};
export default RegisterForm;
