import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="special button" onClick={()=>props.handleSpecialClick(props.text)}>
      {props.text}
    </button>
  );
};
export default SpecialButton;