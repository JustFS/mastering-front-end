import React, { useContext } from "react";
import { UserNumber } from "./AppContext";

const OtherComponent = () => {
  const userNumber = useContext(UserNumber);

  console.log(userNumber);

  return <div>{userNumber}</div>;
};

export default OtherComponent;
