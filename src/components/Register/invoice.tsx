import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import {
  makeStyles,
  Theme,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ListItemText,
  Link,
} from '@material-ui/core';
import { Details } from '../../pages/_app';
import { useRouter } from 'next/router';

const getDate = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles(
  ({ typography: { fontWeightMedium }, spacing, breakpoints }: Theme) => ({
    subheaderLeft: {
      float: 'left',
    },
    subheaderRight: {
      float: 'right',
      paddingRight: spacing(0),
    },
    customer: {
      width: '160px',
      textAlign: 'right',
      MarginRight: '5px',
    },
    message: {
      textAlign: 'center',
      marginTop: '8%',
    },
    boxMain: {
      display: 'flex',
    },
    table: {
      marginTop: '10%',
      paddingTop: spacing(5),
      marginBottom: '10%',
    },
    container: {
      height: '842px',
      width: '595px',
    },
    button: {
      float: 'right',
    },
    headerActions: {
      position: 'absolute',
      right: spacing(0),
      top: spacing(0),
      paddingBottom: spacing(4),
    },
    avatar: {
      color: 'transparent',
      width: 'calc(100%-2px)',
      height: 'calc(100%-2px)',
      objectFit: 'cover',
      textAlign: 'center',
      textIndent: '10000px',
      borderRadius: 'inherit',
      backgroundColor: 'transparent',
    },
    position: {
      position: 'absolute',
      right: spacing(8),
      top: spacing(2),
    },
    desc: {
      margin: 'auto',
      width: 'fit-content',
    },
  })
);

interface InvoiceProps {
  open: boolean;
  onClose: () => void;
  details: Details;
}
const Invoice: React.FC<InvoiceProps> = ({ open, onClose, details }) => {
  const classes = useStyles();
  const router = useRouter();
  const [hide, setHide] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (hide == false) {
      window.print();
      setHide(true);
    }
  }, [hide]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth={'md'}
        onClose={onClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>
          {'Workshop Details'}
        </DialogTitle>
        <DialogContent>
          <Box>
            <Box className={classes.subheaderLeft}>
              <Box className={classes.boxMain}>
                <Box>
                  <Typography
                    display='inline'
                    color='textSecondary'
                    variant='body2'
                  >
                    Name :
                  </Typography>
                </Box>
                &nbsp;{details.name}
              </Box>
              <Box className={classes.boxMain}>
                <Box>
                  <Typography
                    display='inline'
                    color='textSecondary'
                    variant='body2'
                  >
                    Email :
                  </Typography>
                </Box>
                &nbsp;{details.email}
              </Box>
              <Box className={classes.boxMain}>
                <Box>
                  <Typography
                    display='inline'
                    color='textSecondary'
                    variant='body2'
                  >
                    college
                  </Typography>
                </Box>
                &nbsp; {details.college}
              </Box>
              <Box className={classes.boxMain}>
                <Box>
                  <Typography
                    display='inline'
                    color='textSecondary'
                    variant='body2'
                  >
                    Phone
                  </Typography>
                </Box>
                &nbsp; {details.phone}
              </Box>
            </Box>
            <Box className={classes.subheaderRight}>
              <Box className={classes.boxMain}>
                <Box>
                  <Typography
                    display='inline'
                    color='textSecondary'
                    variant='body2'
                  >
                    Order Number :
                  </Typography>
                </Box>
                &nbsp;{details.orderId}
              </Box>
              <Box className={classes.boxMain}>
                <Box>
                  <Typography
                    display='inline'
                    color='textSecondary'
                    variant='body2'
                  >
                    Order Date :
                  </Typography>
                </Box>
                &nbsp;{getDate()}
              </Box>
            </Box>
          </Box>
          <TableContainer className={classes.table}>
            <Table aria-label='spanning table'>
              <TableHead>
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Venue</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {details.workshopA && (
                  <TableRow key={1}>
                    <TableCell>
                      <ListItemText
                        primary={'WorkshopA'}
                        primaryTypographyProps={{ variant: 'body2' }}
                        secondary={
                          'Best oppurtunity for all python enthusiasts'
                        }
                      />
                    </TableCell>
                    <TableCell>{'12-13 Oct 2020'}</TableCell>
                    <TableCell>{'Online Platform'}</TableCell>
                    <TableCell>{'₹ 600'}</TableCell>
                  </TableRow>
                )}
                {details.workshopB && (
                  <TableRow key={1}>
                    <TableCell>
                      <ListItemText
                        primary={'WorkShop B'}
                        primaryTypographyProps={{ variant: 'body2' }}
                        secondary={'Best oppurtunity for all job-freaks'}
                      />
                    </TableCell>
                    <TableCell>{'17-18 Oct 2020'}</TableCell>
                    <TableCell>{'Online Platform'}</TableCell>
                    <TableCell>{'₹ 600'}</TableCell>
                  </TableRow>
                )}

                <TableRow>
                  <TableCell rowSpan={3} />
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell>-</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={1}>Discount</TableCell>
                  <TableCell>{details.discountPercentage}</TableCell>
                  <TableCell> ₹ {details.discountValue}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell> ₹ {details.amount}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <DialogContentText
            id='alert-dialog-slide-description'
            className={classes.desc}
          >
            ** This is not any offcial recipt or invoice. These details are for
            user convience. Read our Terms & Conditions
          </DialogContentText>
        </DialogContent>
        {hide && (
          <DialogActions>
            <Button onClick={onClose} color='primary'>
              Cancel
            </Button>
            <Button
              onClick={() => setHide(false)}
              variant={'contained'}
              color='primary'
            >
              Print
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
};

export default Invoice;
