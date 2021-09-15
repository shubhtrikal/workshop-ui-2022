import React from "react";
import { Details } from "./_app";
interface PageProps {
  userDetails: Details;
}
const Sucess: React.FC<PageProps> = ({ userDetails }) => {
  return (
    <>
      <h1>{userDetails.name}</h1>
      <h1>{userDetails.email}</h1>
      <h1>{userDetails.phone}</h1>
      <h1>{userDetails.college}</h1>
      <h1>{userDetails.amount}</h1>
    </>
  );
};
export default Sucess;
