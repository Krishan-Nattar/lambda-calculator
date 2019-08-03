import React from "react";

const OperatorButton = (props) => {
  // console.log(props);
  return (
    <button  className ="operator button" onClick={()=>{props.handleOperatorClick(props.text.value)}}>
      {props.text.char}
    </button>
  );
};
export default OperatorButton;