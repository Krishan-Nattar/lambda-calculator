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
  const [holdEquals, setHoldEquals] = useState(false);
  const [equalNumber, setEqualNumber] = useState(null);
  const [holdSpecialC, setHoldSpecialC] = useState(false);
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props


  function handleKeyDown(event){
    //This will be for future use to be able to type commands on the keyboard and make the calculator function

    // console.log(event.key);
    // console.log(event.key);
    // if(event.key=="1" || event.key=="2" || event.key=="3" || event.key=="4" || event.key=="5" || event.key=="6" || event.key=="7" || event.key=="8" || event.key=="9" || event.key=="0" || event.key=="."){
    //   // console.log('number');
    //   handleNumberClick(event.key);
    // }
    // if(event.key=="Escape" || event.key=="Backspace" || event.key=="%"){
    //   // console.log('number');
    //   let eventKey = event.key=="Escape" ? "C" : event.key=="Backspace" ? "C" : "%";
    //   handleSpecialClick(eventKey);
    // }

    // if(event.key=="+" || event.key=="-" || event.key=="/" || event.key=="*" || event.key=="Enter"){
    //   // console.log('number');
      
    //   handleOperatorClick(event.key);
    // }


  }

  function handleSpecialClick(specialString) {
    //If C is pressed once, reset display
    if (specialString == "C" && holdSpecialC == false) {
      setDisplay("0");
      setHoldSpecialC(true);
    }

    //If C is pressed twice, reset EVERYTHING
    if (specialString == "C" && holdSpecialC == true) {
      setDisplay("0");
      setHoldSpecialC(false);
      setNewDisplay(false);
      setFirstNumber(null);
      setHoldOperator(null);
      setHoldEquals(false);
      setEqualNumber(null);
    }

    //Add or remove negative sign
    if (specialString == "+/-") {
      setHoldSpecialC(false);
      let newDisplayString = display.toString();
      if (newDisplayString[0] != "-") {
        newDisplayString = "-" + newDisplayString;
      } else {
        newDisplayString = newDisplayString.slice(1);
      }
      setDisplay(newDisplayString);
    }

    // Divide current display by 100
    if (specialString == "%") {
      let newNumber = parseFloat(display);
      newNumber = newNumber / 100;

      if (newNumber.toString().length > 11) {
        setDisplay(newNumber.toExponential(6));
      } else {
        setDisplay(newNumber);
      }
    }
  }

  function handleNumberClick(numberString) {
    setHoldSpecialC(false);
    let newNumber;

    if (newDisplay == true) {
      if (display === "0" && numberString != ".") {
        newNumber = numberString;
        setNewDisplay(false);
      } else if (display === "0" && numberString === ".") {
        //If display is only 0, make a new decimal "0."
        newNumber = display + numberString;
        setNewDisplay(false);
      } else {
        newNumber = numberString; //Start new display string
        setNewDisplay(false);
      }
    } else if (display.length === 11) {
      //Max display length is 11. This leaves room for a negative at the front
      return;
    } else if (display.toString().includes(".") && numberString === ".") {
      //If display already includes decimal, don't add another
      return;
    } else if (display === "0" && numberString != ".") {
      newNumber = numberString;
    } else if (display === "0" && numberString === ".") {
      //If display is only 0, make a new decimal "0."
      newNumber = display + numberString;
    } else {
      newNumber = display + numberString; //Add to the display string
    }

    setDisplay(newNumber); //Push to display
  }

  function handleOperatorClick(operator) {
    if (
      (operator === "+" ||
        operator === "-" ||
        operator === "/" ||
        operator === "*") &&
      firstNumber === null
    ) {
      setFirstNumber(display);
      setHoldOperator(operator);
      setNewDisplay(true);
    }

    if (
      (operator === "+" ||
        operator === "-" ||
        operator === "/" ||
        operator === "*") &&
      firstNumber != null &&
      newDisplay == true
    ) {
      setHoldOperator(operator);
    }

    //This function allows pressing the equals sign multiple times
    //To repeat the previous operation
    if (operator == "=" && newDisplay == true && holdEquals == true) {
      let displayConvert;
      let equalNumberConvert;

      if (display.toString().includes(".")) {
        displayConvert = parseFloat(display);
      } else {
        displayConvert = parseInt(display);
      }
      if (equalNumber.toString().includes(".")) {
        equalNumberConvert = parseFloat(equalNumber);
      } else {
        equalNumberConvert = parseInt(equalNumber);
      }

      switch (holdOperator) {
        case "+":
          let sum = displayConvert + equalNumberConvert;

          if (sum.toString().length > 11) {
            console.log(typeof sum);

            setDisplay(sum.toExponential(6));
          } else {
            setDisplay(sum);
          }

          setFirstNumber(null);

          break;
        case "-":
          let difference = displayConvert - equalNumberConvert;
          if (difference.toString().length > 11) {
            setDisplay(difference.toExponential(6));
          } else {
            setDisplay(difference);
          }
          setFirstNumber(null);

          break;

        case "*":
          let product = displayConvert * equalNumberConvert;
          if (product.toString().length > 11) {
            setDisplay(product.toExponential(6));
          } else {
            setDisplay(product);
          }
          setFirstNumber(null);

          break;

        case "/":
          let quotient = displayConvert / equalNumberConvert;
          if (quotient.toString().length > 11) {
            setDisplay(quotient.toExponential(6));
          } else {
            setDisplay(quotient);
          }

          setFirstNumber(null);

          break;
      }
    }

    if (
      (operator === "+" ||
        operator === "-" ||
        operator === "/" ||
        operator === "*" ||
        operator === "=") &&
      firstNumber != null &&
      newDisplay == false
    ) {
      let first;
      let second;

      if (firstNumber.toString().includes(".")) {
        first = parseFloat(firstNumber);
      } else {
        first = parseInt(firstNumber);
      }
      if (display.toString().includes(".")) {
        second = parseFloat(display);
      } else {
        second = parseInt(display);
      }

      switch (holdOperator) {
        case "+":
          let sum = first + second;

          if (sum.toString().length > 11) {
            setDisplay(sum.toExponential(6));
          } else {
            setDisplay(sum);
          }

          setNewDisplay(true);
          setFirstNumber(sum);

          if (operator != "=") {
            setHoldOperator(operator);
            setHoldEquals(false);
            setEqualNumber(null);
          } else {
            setHoldEquals(true);
            setEqualNumber(second);
          }

          break;
        case "-":
          let difference = first - second;

          if (difference.toString().length > 11) {
            setDisplay(difference.toExponential(6));
          } else {
            setDisplay(difference);
          }

          setFirstNumber(difference);
          setNewDisplay(true);

          if (operator != "=") {
            setHoldOperator(operator);
            setHoldEquals(false);
            setEqualNumber(null);
          } else {
            setHoldEquals(true);
            setEqualNumber(second);
          }

          break;
        case "/":
          let quotient = first / second;
          if (quotient.toString().length > 11) {
            setDisplay(quotient.toExponential(6));
          } else {
            setDisplay(quotient);
          }
          setFirstNumber(quotient);
          setNewDisplay(true);
          if (operator != "=") {
            setHoldOperator(operator);
            setHoldEquals(false);
            setEqualNumber(null);
          } else {
            setHoldEquals(true);
            setEqualNumber(second);
          }
          break;
        case "*":
          let product = first * second;
          if (product.toString().length > 11) {
            setDisplay(product.toExponential(6));
          } else {
            setDisplay(product);
          }
          setFirstNumber(product);
          setNewDisplay(true);
          if (operator != "=") {
            setHoldOperator(operator);
            setHoldEquals(false);
            setEqualNumber(null);
          } else {
            setHoldEquals(true);
            setEqualNumber(second);
          }
          break;
        default:
      }
      if (operator == "=") {
        setHoldEquals(true);
      }
    }
  }

  return (
    <div className="container" onKeyDown={handleKeyDown}>
      <div className="App">
        <Logo />
        <Display display={display} />

        <div className="allButtons">
          <div className="leftSide">
            <Specials handleSpecialClick={handleSpecialClick} />
            <Numbers handleNumberClick={handleNumberClick} />
          </div>

          <Operators handleOperatorClick={handleOperatorClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
