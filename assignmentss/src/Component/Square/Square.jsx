import React from "react";
import "./Square.css";

const Square = (props) => {
  return (
    <div className="square_container" onClick={props.onClick}>
      <h4>{props.value}</h4>
    </div>
  );
};

export default Square;
