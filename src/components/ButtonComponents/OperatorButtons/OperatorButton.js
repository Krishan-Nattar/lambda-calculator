import React from "react";

const OperatorButton = (props) => {
  // console.log(props);
  return (
    <button  className ="operator button" onClick={()=>{console.log("Operator BUTTON!", props.text.char)}}>
      {props.text.char}
    </button>
  );
};
export default OperatorButton;