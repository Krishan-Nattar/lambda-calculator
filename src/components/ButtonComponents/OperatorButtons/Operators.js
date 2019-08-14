import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';



const Operators = (props) => {
  const [operatorState, setOperatorState] = useState(operators);
  return (
    <div className="operatorButtons">
    {operatorState.map((item,index)=>{

      return <OperatorButton key={index} text={item} handleOperatorClick={props.handleOperatorClick}/>;
    })}
    
    </div>
  );
};



export default Operators;