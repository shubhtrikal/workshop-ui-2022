import React from 'react';
import { CssBaseline, LinearProgress } from '@material-ui/core';
import { useRouter, Router } from 'next/router';
import { makeStyles, Theme } from '@material-ui/core/styles';
import '../styles.css';

import axios from 'axios';
import LoadingScreen from '../components/loadingscreen';

const useStyles = makeStyles((theme: Theme) => ({
  linearLoading: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.modal + 1,
  },
  error: {
    background: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    padding: theme.spacing(1, 3),
  },
}));

export type Details = {
  orderId: string | null;
  workshopA: boolean | null;
  workshopB: boolean | null;
  name: string | null;
  college: string | null;
  email: string | null;
  phone: string | null;
  success: boolean | null;
  discountPercentage: string | null;
  amount: string | null;
  discountValue: string | null;
} | null;

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => {
  const router = useRouter();
  const classes = useStyles();
  const paths = router.route.split('/');

  /* Page loading animation */
  const [routeChange, setRouteChange] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [userDetails, setUserDetails] = React.useState<Details>({
    name: '',
    email: '',
    phone: '',
    college: '',
    workshopA: false,
    workshopB: false,
    amount: '',
    discountPercentage: '',
    discountValue: '',
    orderId: '',
    success: false,
  });
  Router.events.on('routeChangeStart', () => {
    setLoading(true);
  });
  Router.events.on('routeChangeComplete', () => setLoading(false));
  Router.events.on('routeChangeError', () => setLoading(false));

  const updateDetails = (a: Details) => setUserDetails(a);

  /* Error reporting */

  return (
    <>
      <CssBaseline />

      {routeChange && <LoadingScreen loading />}

      <Component
        userDetails={userDetails}
        updateDetails={updateDetails}
        {...pageProps}
      />
    </>
  );
};

export default MyApp;
