import React from 'react';
import { Details } from './_app';
import { useRouter } from 'next/router';
import { Box, ListItem, ListItemText, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

const useStyles = makeStyles({
  root: {
    marginTop: '-40px',
  },

  heading: {
    marginTop: '25vh',
    marginBottom: '20px',
    paddingTop: '40px',
  },
  icon: {
    width: 'fit-content',
    margin: 'auto',
  },
  button: {
    width: 'fit-content',
    margin: 'auto',
  },
  btn: {
    margin: '10px',
  },
});

interface PageProps {
  userDetails: Details;
}
const failure: React.FC<PageProps> = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Box className={classes.heading}>
          <Box className={classes.icon}>
            <CancelOutlinedIcon style={{ color: '#ff4141', fontSize: 180 }} />
          </Box>

          <ListItem>
            <ListItemText
              primary={'Failure !'}
              primaryTypographyProps={{ variant: 'h2', align: 'center' }}
              secondary={
                'Your payment has been Failed ! Try again or contact us at flairhaven.istemanit@gmail.com'
              }
              secondaryTypographyProps={{ align: 'center', variant: 'h6' }}
            />
          </ListItem>
          <Box className={classes.button}>
            <Button
              onClick={() => {
                router.push('/');
              }}
              variant={'contained'}
              color={'primary'}
              className={classes.btn}
            >
              Home
            </Button>
          </Box>
        </Box>
      </div>
    </>
  );
};
export default failure;
