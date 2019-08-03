import React, { useState } from "react";
import "./App.css";
// import {numbers, operators} from './data';
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";

// import Data
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";

function App() {
  const [display, setDisplay] = useState("0");
  const [newDisplay, setNewDisplay] = useState(false);
  const [firstNumber, setFirstNumber] = useState(null);
  const [holdOperator, setHoldOperator] = useState(null);
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  function handleNumberClick(numberString) {
    let newNumber;

    if(newDisplay==true){
      if (display === "0" && numberString != ".") { 
        newNumber = numberString;
        setNewDisplay(false);
      } else if (display === "0" && numberString === ".") { //If display is only 0, make a new decimal "0."
        newNumber = display + numberString;
        setNewDisplay(false);
      } else {
        newNumber = numberString; //Start new display string
        setNewDisplay(false);
      }
    }else if (display.length === 11) { //Max display length is 11. This leaves room for a negative at the front
      return;
    } else if (display.includes(".") && numberString === ".") { //If display already includes decimal, don't add another
      return;
    } else if (display === "0" && numberString != ".") { 
      newNumber = numberString;
    } else if (display === "0" && numberString === ".") { //If display is only 0, make a new decimal "0."
      newNumber = display + numberString;
    } else {
      newNumber = display + numberString; //Add to the display string
    }
    
    setDisplay(newNumber); //Push to display
  }

  function handleOperatorClick(operator) {


    if((operator==="+" || operator==="-" || operator==="/" || operator==="*" ) && firstNumber === null){
      setFirstNumber(display);
      setHoldOperator(operator);
      setNewDisplay(true);
    }

    if((operator==="+" || operator==="-" || operator==="/" || operator==="*" ) && firstNumber != null && newDisplay==true){
      // setFirstNumber(display);
      setHoldOperator(operator);
      // setNewDisplay(true);
    }

    if((operator==="+" || operator==="-" || operator==="/" || operator==="*" || operator==="=" ) && firstNumber != null && newDisplay==false){
      // setFirstNumber(display);
      let first = parseInt(firstNumber);
      let second = parseInt(display);
      switch(holdOperator) {
        case "+":
          let sum = first+second;
          // console.log(sum.length);
          if (sum.toString().length>11){

            // Number.parseFloat(sum).toExponential
            setDisplay(sum.toExponential(6));
          } else{
            setDisplay(sum);
          }
          
          
          setNewDisplay(true);
          // if(operator != "="){
            setFirstNumber(sum);
            setHoldOperator(operator);
          // }
          
          break;
        case "-":
            let difference = first-second;

            if(difference.toString().length>11){
              setDisplay(difference.toExponential(6));
            } else{
              setDisplay(difference);
            }
            
            setFirstNumber(difference);
            setNewDisplay(true);
            setHoldOperator(operator);
          // code block
          break;
          case "/":
              let quotient = first/second;
              if(quotient.toString().length>11){
                setDisplay(quotient.toExponential(6));
              } else{
                setDisplay(quotient);
              }
              setFirstNumber(quotient);
              setNewDisplay(true);
              setHoldOperator(operator);
          // code block
          break;
          case "*":
              let product = first*second;
              if(product.toString().length>11){
                setDisplay(product.toExponential(6));
              } else{
                setDisplay(product);
              }
              setFirstNumber(product);
              setNewDisplay(true);
              setHoldOperator(operator);
          // code block
          break;
          case "=":
          // code block
          break;
        default:
          // code block
      }
      if(operator=="="){
        // setHoldOperator(null);

      }
      

    }

    // console.log(display);
    
  }

  return (
    <div className="container">
      <div className="App">
        <Logo />
        <Display display={display} />

        <div className="allButtons">
          <div className="leftSide">
            <Specials />
            <Numbers handleNumberClick={handleNumberClick} />
          </div>

          <Operators handleOperatorClick={handleOperatorClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
