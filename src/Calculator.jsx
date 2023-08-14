import React, { useState } from "react";
import "./Calc.css";

function Calculator() {
  // State variables to manage values, operators, and results
  const [start, setstart] = useState(0);
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [enteringVal1,setenteringVal1] = useState(true);
  const [enteringVal2,setenteringVal2] = useState(false);
  const [operator, setOperator] = useState("");
  const [isVal2Active, setIsVal2Active] = useState(false);
  const [result, setResult] = useState(0);
  const [resultTotal, setresultTotal] = useState("");

  // Function to reset all values to initial state
  function reset() {
    setVal1("");
    setVal2("");
    setenteringVal1(true);
    setenteringVal2(false);
    setOperator("");
    setIsVal2Active(false);
    setResult(0);
    setresultTotal("");
  }

  // Function to handle checking and formatting dots 
  function checkDots(input) {
    if (typeof input === "number") {
      input = input.toString();
    }
    const dotCount = input.split(".").length - 1;
    if (dotCount > 1) {
      const firstDotIndex = input.indexOf(".");
      const newString = input.slice(0, firstDotIndex + 1) + input.slice(firstDotIndex + 1).replace(/\./g, "");
      return parseFloat(newString);
    } else {
      return input;
    }
  }

  // Function to update the input values based on button clicks
  function updateValue(num) {
    const updatedValue = checkDots(num);
    if (!isVal2Active) {
      setVal1(val1.concat(updatedValue));
      console.log(val1)
    } else {
      setVal2(val2.concat(updatedValue));
      console.log(val2)

    }

  }

  // Function to toggle between val1 and val2
  function toggleActiveValue() {
    setIsVal2Active(!isVal2Active);
    setenteringVal1(!enteringVal1);
    setenteringVal2(!enteringVal2);
  }

  // Function to handle setting the operator
  function setOperatorHandle(op) {
    toggleActiveValue();
    setOperator(operator.concat(op));
  }

  // Function to handle deleting the numbers
  function setDeleteHandle() {
    if (enteringVal1) {
      setVal1(val1.slice(0, -1));
    } else if (enteringVal2) {
      setVal2(val2.slice(0, -1));
    }
  }

  // Function to set ResultDisplay
  function resultDisplay() {
    if(val1=='' || "")
    {return (`${start}`);}
    else
    {return (`${val1} ${operator} ${val2}`);}
  }


  // Function to calculate and set the result based on the operator
  function computeResultHandler() {
    let temp = 0;
    switch (operator) {
      case "%":
        temp = parseFloat(val1) % parseFloat(val2);
        break;
      case "/":
        temp = parseFloat(val1) / parseFloat(val2);
        break;
      case "X":
        temp = parseFloat(val1) * parseFloat(val2);
        break;
      case "-":
        temp = parseFloat(val1) - parseFloat(val2);
        break;
      case "+":
        temp = parseFloat(val1) + parseFloat(val2);
        break;
      default:
        break;
    }
    setResult(temp);
    setVal1(temp.toString());
    setVal2("");
    setResult(0);
    setOperator("");
    toggleActiveValue();
  }
  

  // JSX rendering

  return (
    <div>
      <div className="mainbox">
        <div className="container">

          <div className="resultbox">
            <span>{resultDisplay()}</span>
          </div>

          <div className="keys">
            <div className="keyrow">
              <button onClick={reset}>AC</button>
              <button onClick={() => setOperatorHandle("%")}>%</button>
              <button onClick={() => setDeleteHandle()}>DEL</button>
              <button onClick={() => setOperatorHandle("/")}>/</button>
            </div>

            <div className="keyrow">
              <button onClick={() => updateValue("7")}>7</button>
              <button onClick={() => updateValue("8")}>8</button>
              <button onClick={() => updateValue("9")}>9</button>
              <button onClick={() => setOperatorHandle("X")}>X</button>
            </div>

            <div className="keyrow">
              <button onClick={() => updateValue("4")}>4</button>
              <button onClick={() => updateValue("5")}>5</button>
              <button onClick={() => updateValue("6")}>6</button>
              <button onClick={() => setOperatorHandle("-")}>-</button>
            </div>

            <div className="keyrow">
              <button onClick={() => updateValue("1")}>1</button>
              <button onClick={() => updateValue("2")}>2</button>
              <button onClick={() => updateValue("3")}>3</button>
              <button onClick={() => setOperatorHandle("+")}>+</button>
            </div>

            <div className="keyrow">
              <button onClick={() => updateValue("00")}>00</button>
              <button onClick={() => updateValue("0")}>0</button>
              <button onClick={() => updateValue(".")}>.</button>
              <button onClick={() => computeResultHandler()}>=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
