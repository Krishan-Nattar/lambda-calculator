import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  const [button, setButton] = useState(specials);
  // STEP 2 - add the imported data to state
// console.log(props);
  return (
    <div className="specialButtons">
    {button.map((item,index)=>{
      // console.log(item,index);
      return <SpecialButton key={index} text={item} handleSpecialClick={props.handleSpecialClick}/>;
    })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};


export default Specials;