import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';

const Specials = (props) => {
  const [button, setButton] = useState(specials);
  return (
    <div className="specialButtons">
    {button.map((item,index)=>{
      return <SpecialButton key={index} text={item} handleSpecialClick={props.handleSpecialClick}/>;
    })}

    </div>
  );
};


export default Specials;