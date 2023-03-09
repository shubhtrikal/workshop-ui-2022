import React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link, Typography } from '@material-ui/core';

import Button from '@material-ui/core/Button';

import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  body: {
    fontFamily: 'Nunito',
    height: '100vh',
    textAlign: 'justify',
  },

  title: {
    fontFamily: 'Nunito',
    fontWeight: 600,
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  link: {
    cursor: 'pointer',
  },
}));

interface Props {
  openPrice: boolean;
  onClose: () => void;
}
const ScrollDialog: React.FC<Props> = ({ openPrice, onClose }) => {
  const classes = useStyles();
  const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setScroll(scrollType);
  };

  const handleClose = () => {
    onClose();
  };

  //const descriptionElementRef = React.useRef<HTMLElement>(null);

  return (
    <div>
      <Dialog
        open={openPrice}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby='scroll-dialog-title'
        aria-describedby='scroll-dialog-description'
      >
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText className={classes.body}>
            <Typography variant='h6' className={classes.title}>
              <b>PRICE DETAILS</b>
            </Typography>
            <br /> This website is operated by the{' '}
            <b>
              Indian Society for Technical Education Students’ Chapter MANIT
              (ISTE SC MANIT)
            </b>
            <br/>
            <b>
                The Price of each workshop is 500 Rs. per participant.
            </b>
            <br /> Questions about the Price Details should be sent to us at{' '}
            <Link className={classes.link}>istescmanit@gmail.com</Link>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ScrollDialog;
