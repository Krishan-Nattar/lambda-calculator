import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="button" onClick={()=>{console.log("SPECIAL BUTTON!", props.text)}}>
      {props.text}
    </button>
  );
};
export default SpecialButton;