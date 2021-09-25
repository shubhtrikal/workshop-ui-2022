import React from 'react';
import { Grid, Box, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Details } from '../../pages/_app';
const useStyles = makeStyles({
  box: {
    borderRadius: '10px',
    marginTop: '30px',
    marginBottom: '20px',
    padding: '20px 10px 30px',
    boxShadow: '0px 20px 40px 0px rgb(12 0 46 / 6%)',
    fontFamily: 'Nunito',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '95%',
    marginLeft: 'auto',
  },
  textfield: {
    margin: '20px',
    padding: '10px',
    width: '400px',
    textAlign: 'center',
    height: '50px',
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

interface formprops {
  userDetails: Details;
  updateDetails: (details: any) => void;
  handleNext: () => void;
}
const RegisterForm = (props: formprops) => {
  const classes = useStyles();
  const values = props.userDetails;

  return (
    <Grid container alignItems='center' justifyContent='center'>
      <form>
        <Box className={classes.box}>
          <TextField
            variant='outlined'
            fullWidth
            className={classes.textfield}
            label='Name'
            name='name'
            type='text'
            required
            value={values.name}
            onChange={(event) => {
              props.updateDetails({ ...values, name: event.target.value });
            }}
          />
          <TextField
            variant='outlined'
            fullWidth
            className={classes.textfield}
            label='Email'
            name='email'
            type='email'
            required
            value={values.email}
            onChange={(event) => {
              props.updateDetails({ ...values, email: event.target.value });
            }}
          />
          <TextField
            variant='outlined'
            fullWidth
            className={classes.textfield}
            label='Phone'
            name='phone'
            type='text'
            required
            value={values.phone}
            onChange={(event) => {
              props.updateDetails({ ...values, phone: event.target.value });
            }}
          />
          <TextField
            variant='outlined'
            fullWidth
            className={classes.textfield}
            label='College'
            name='college'
            type='text'
            required
            value={values.college}
            onChange={(event) => {
              props.updateDetails({ ...values, college: event.target.value });
            }}
          />
        </Box>
        <Grid container alignItems='center' justifyContent='center'>
          <Button
            className={classes.btn}
            type='submit'
            variant='outlined'
            disabled={
              !values.name || !values.email || !values.phone || !values.college
            }
            onClick={props.handleNext}
          >
            Next
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
export default RegisterForm;
