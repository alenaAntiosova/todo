import React from "react";
import { BsCheck } from "react-icons/bs";
import "./check.css";

const Check = ({ isCompleted }) => {
  return (
    <div className="checkbox">
      {isCompleted && <BsCheck className="array" />}
    </div>
  );
};

export default Check;
