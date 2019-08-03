import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = (props) => {

  const [numberState, setNumberState] = useState(numbers);

  return (
    <div className="numberButtons">
      {numberState.map((item, index) => {
        return <NumberButton key={index} text={item} handleNumberClick={props.handleNumberClick}/>;
      })}
    </div>
  );
};

export default Numbers;
