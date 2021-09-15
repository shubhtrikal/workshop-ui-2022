import React from "react";
import Appbar from "../components/appbar";
import Steppers from "../components/Register/stepper";
import Registerform from "../components/Register/registerform";
import WorkshopTable from "../components/Register/workshoptable";
import Payment from "../components/Register/payment";
import { Button } from "@material-ui/core";
import { Details } from "./_app";

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
      <Appbar />
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
    </>
  );
};
export default Register;
