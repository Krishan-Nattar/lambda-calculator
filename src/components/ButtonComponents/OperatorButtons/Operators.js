import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [button, setButton] = useState(operators);
  return (
    <div className="operatorButtons">
    {button.map((item,index)=>{
      // console.log(item,index);
      return <OperatorButton key={index} text={item}/>;
    })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};



export default Operators;