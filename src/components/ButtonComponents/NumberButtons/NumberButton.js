import React from "react";

const NumberButton = (props) => {
  return (
    <button className={props.text=="0" ? "number button zero" : "number button"} onClick={()=>{console.log("Number BUTTON!", props.text)}}>
      {props.text}
    </button>
  );
};
export default NumberButton;