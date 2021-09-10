import React from 'react';
import { CssBaseline, LinearProgress } from '@material-ui/core';
import { useRouter, Router } from 'next/router';
import { makeStyles, Theme } from '@material-ui/core/styles';

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
  orderId: string;
  dataStructure: boolean | null;
  dataScience: boolean | null;
  workshopA: boolean | null;
  workshopB: boolean | null;
  name: string | null;
  college: string | null;
  email: string | null;
  phone: string | null;
  success: boolean;
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
  const [details, setDetails] = React.useState<Details>(null);
  Router.events.on('routeChangeStart', () => {
    setRouteChange(true);
  });
  Router.events.on('routeChangeComplete', () => setRouteChange(false));
  Router.events.on('routeChangeError', () => setRouteChange(false));
  const [loading, setLoading] = React.useState<boolean>(false);

  const payment = (a: Details) => setDetails(a);

  /* Error reporting */

  return (
    <>
      <CssBaseline />

      {routeChange && (
        <LinearProgress color='secondary' className={classes.linearLoading} />
      )}

      <Component payment={payment} details={details} {...pageProps} />
    </>
  );
};

export default MyApp;
