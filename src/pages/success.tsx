import React from 'react';
import { Details } from './_app';
import { useRouter } from 'next/router';
import {
  Box,
  ListItem,
  ListItemText,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import Invoice from '../components/Register/invoice';

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
const Sucess: React.FC<PageProps> = ({ userDetails }) => {
  const router = useRouter();
  const classes = useStyles();

  const [open, setOpen] = React.useState<boolean>(false);
  const onClose = () => setOpen(false);
  React.useEffect(() => {
    if (userDetails.name === '') {
      router.push('/register');
    }
  });

  if (userDetails.name === '') {
    return (
      <div className={classes.root}>
        <Box className={classes.heading}>
          <Box className={classes.icon}>
            <CircularProgress thickness={4} />
          </Box>
        </Box>
      </div>
    );
  }

  return (
    <>
      <div className={classes.root}>
        <Box className={classes.heading}>
          <Box className={classes.icon}>
            <CheckCircleOutlinedIcon
              style={{ color: '#55cc51', fontSize: 180 }}
            />
          </Box>

          <ListItem>
            <ListItemText
              primary={'Success !'}
              primaryTypographyProps={{ variant: 'h2', align: 'center' }}
              secondary={
                'Your payment has been successful! Get ready to shine in Version Beta Workshops'
              }
              secondaryTypographyProps={{ align: 'center', variant: 'h6' }}
            />
          </ListItem>
          <Box className={classes.button}>
            <Button
              variant={'contained'}
              color={'primary'}
              onClick={() => setOpen(true)}
              className={classes.btn}
            >
              Show Details
            </Button>
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
          <Invoice open={open} onClose={onClose} details={userDetails} />
        </Box>
      </div>
    </>
  );
};
export default Sucess;
