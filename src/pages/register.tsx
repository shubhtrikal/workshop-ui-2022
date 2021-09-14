import { Button } from "@material-ui/core";
import React from "react";
import Appbar from "../components/appbar";
import Registerform from "../components/Register/registerform";
import Steppers from "../components/Register/stepper";
import WorkshopTable from "../components/Register/workshoptable";
import Payment from "../components/Register/payment";
import { Details } from "./_app";
import { seatCount } from "./_app";
const register = () => {
  const [userDetails, setUserDetails] = React.useState<Details>({
    orderId: "",
    workshopA: true,
    workshopB: true,
    name: "",
    college: "",
    email: "",
    phone: "",
    success: false,
    discountPercentage: "",
    amount: "",
    discountValue: "",
  });
  const updateDetails = (details) => {
    setUserDetails({ ...userDetails, ...details });
  };
  const [activeStep, setactiveStep] = React.useState(0);
  const next = () => {
    setactiveStep(activeStep + 1);
    console.log(userDetails);
  };
  const prev = () => {
    setactiveStep(activeStep - 1);
    console.log(userDetails);
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
      <Button variant="outlined" onClick={prev} disabled={activeStep == 0}>
        Back
      </Button>
      <Button variant="outlined" onClick={next} disabled={activeStep == 2}>
        Next
      </Button>
    </>
  );
};
export default register;
