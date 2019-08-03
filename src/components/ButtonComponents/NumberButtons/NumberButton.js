import React from "react";

const NumberButton = (props) => {
  // console.log(props);
  return (
    <button className={props.text=="0" ? "number button zero" : "number button"} onClick={()=>{props.handleNumberClick(props.text)}}>
      {props.text}
    </button>
  );
};
export default NumberButton;