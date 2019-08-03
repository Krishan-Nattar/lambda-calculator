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
  const [firstNumber, setFirstNumber] = useState();
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  function handleNumberClick(numberString) {
    if (display.length === 11) {
      //do nothing
    } else if (display.includes(".") && numberString === ".") {
      //do nothing
    } else if (display === "0" && numberString != ".") {
      let newNumber = numberString;
      setDisplay(newNumber);
    } else if(display==="0" && numberString ==="."){
      let newNumber = display + numberString;
      setDisplay(newNumber);
    }else {
      let newNumber = display + numberString;
      setDisplay(newNumber);
    }
  }

  function handleOperatorClick(operator){
    // console.log(operator);
    setFirstNumber(display);
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

          <Operators handleOperatorClick={handleOperatorClick}/>
        </div>
      </div>
    </div>
  );
}

export default App;
