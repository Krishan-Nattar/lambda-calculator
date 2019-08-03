import React from "react";

const Display = (props) => {
  return <div className="display">
  <div className="displayContent">
  {props.display}
  </div>
  
  </div>;
};

export default Display;