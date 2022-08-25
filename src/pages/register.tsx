import React from 'react';
import Appbar from '../components/appbar';
import Steppers from '../components/Register/stepper';
import Registerform from '../components/Register/registerform';
import WorkshopTable from '../components/Register/workshoptable';
import Payment from '../components/Register/payment';
import { Button } from '@material-ui/core';
import { Details } from './_app';
import { Container, Grid, Box } from '@material-ui/core';

interface RegisterProps {
  userDetails: Details;
  updateDetails: () => void;
}
const Register: React.FC<RegisterProps> = ({ userDetails, updateDetails }) => {
  const [activeStep, setactiveStep] = React.useState(0);
  const next = () => {
    setactiveStep(activeStep + 1);
  };
  const prev = () => {
    setactiveStep(activeStep - 1);
  };

  return (
    <>
      <Container maxWidth='lg'>
        {/* <Box className='title'>
          <h2>
            <span>
              Registrations for Flair Haven'21 are now closed! See you again
              next year.
            </span>
          </h2>
          <h2>
            <span>
              <a
                href='https://versionbeta.istemanit.in/'
                style={{ color: '#2E5984' }}
              >
                Click Here
              </a>{' '}
              to participate in Version Beta 4.0 Hackathon.
            </span>
          </h2>
        </Box> */}
        <Steppers activeStep={activeStep} />
        {activeStep == 0 ? (
          <Registerform
            userDetails={userDetails}
            updateDetails={updateDetails}
            handleNext={next}
          />
        ) : activeStep == 1 ? (
          <WorkshopTable
            userDetails={userDetails}
            updateDetails={updateDetails}
            handleNext={next}
            handleBack={prev}
          />
        ) : (
          <Payment
            userDetails={userDetails}
            updateDetails={updateDetails}
            handleNext={next}
            handleBack={prev}
          />
        )}
      </Container>
    </>
  );
};
export default Register;
