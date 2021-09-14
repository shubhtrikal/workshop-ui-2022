import { Grid, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import React from "react";
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
});

interface details {
  name: string;
  email: string;
  phone: string;
  college: string;
}
const Registerform = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<details>({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  return (
    <>
      <Grid container alignItems="center" className={classes.root}>
        <Paper className={classes.paper} elevation={4}>
          <TextField
            variant="outlined"
            fullWidth
            className={classes.textfield}
            label="Name"
            name="name"
            type="text"
            value={values.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValues({ ...values, name: e.target.value });
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            className={classes.textfield}
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValues({ ...values, email: e.target.value });
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            className={classes.textfield}
            label="Phone"
            name="phone"
            type="text"
            value={values.phone}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValues({ ...values, phone: e.target.value });
            }}
          />
          <TextField
            variant="outlined"
            fullWidth
            className={classes.textfield}
            label="College"
            name="college"
            type="text"
            value={values.college}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setValues({ ...values, college: e.target.value });
            }}
          />
        </Paper>
      </Grid>
    </>
  );
};
export default Registerform;
