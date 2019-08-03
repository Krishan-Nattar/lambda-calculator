import React, {useState} from "react";
import NumberButton from './NumberButton';
import {numbers} from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [button, setButton] = useState(numbers);
  return (
    <div>
     {button.map((item,index)=>{
      // console.log(item,index);
      return <NumberButton key={index} text={item}/>;
    })}
    </div>
  );
};

export default Numbers;