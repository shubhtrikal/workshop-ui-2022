import React from "react";
import Appbar from "../components/appbar";
import Steppers from "../components/Register/stepper";
import Registerform from "../components/Register/registerform";
const register = () => {
  return (
    <>
      <Appbar />
      <h1>Register</h1>
      <Steppers />
    </>
  );
};
export default register;
