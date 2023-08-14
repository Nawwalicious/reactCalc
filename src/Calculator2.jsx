import React, { useState } from "react";
import './Body.css'

function Calculator2() {
  const [Val1, setVal1] = useState('');
  const [Val2, setVal2] = useState('');
  const [Operand, setOperand] = useState(null);
  const [SwitchVal, setSwitchVal] = useState(false);
  const [Res, setRes] = useState(0);


  function checkDots(input)
  {
    if (typeof input === 'number') {
        input = input.toString();
    }
    let dotCount = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === '.') {
            dotCount++;
        }
    }
    if (dotCount > 1) {
        let firstDotIndex = input.indexOf('.');
        let newString = input.slice(0, firstDotIndex + 1) + input.slice(firstDotIndex).replace(/\./g, '');
        return parseFloat(newString);
    } else {
        return input;
    }
  }


  function updateVals(num) {
    if (SwitchVal === false) {
      setVal1(Val1.concat(checkDots(num)));
    } else {
      setVal2(Val2.concat(checkDots(num)));
    }
  }
  
    function updateRes() {

      setSwitchVal(!SwitchVal);
      let temp = 0;
      if (Operand === '+') {
        console.log("addd!!!!!!!!!!!!!")
        temp = parseFloat(Val1) + parseFloat(Val2);
      } else if (Operand === '-') {
        temp = parseFloat(Val1) - parseFloat(Val2);
      } else if (Operand === '*') {
        temp = parseFloat(Val1) * parseFloat(Val2);
      } else if (Operand === '/') {
        temp = parseFloat(Val1) / parseFloat(Val2);
      }
      setRes(temp);
      setVal1(temp.toString());
      setVal2('');
      setOperand(null);
    }

  function updateOpr(Opr) {
    setOperand(Opr);
    setSwitchVal(!SwitchVal)
    
  }

  function reset() {
    setVal1('');
    setVal2('');
    setRes(0);
    setOperand(null);
    setSwitchVal(false);
  }

  return (
    <div>
      <div className="master d-flex flex-wrap flex flex-column">

        <div className="resultbox">
          <h2>::: {Val1}{Operand}{Val2}={Res}</h2>
        </div>

          <div className="keyscontainer">
            <div className="row1">
            <div className="key1"><button onClick={() => updateVals('1')}>1</button></div>
            <div className="key2"><button onClick={() => updateVals('2')}>2</button></div>
            <div className="key3"><button onClick={() => updateVals('3')}>3</button></div>
            <div className="key4"><button onClick={() => updateVals('4')}>4</button></div>
            </div>

            <div className="row2">
            <div className="key5"><button onClick={() => updateVals('5')}>5</button></div>
            <div className="key6"><button onClick={() => updateVals('6')}>6</button></div>
            <div className="key7"><button onClick={() => updateVals('7')}>7</button></div>
            <div className="key8"><button onClick={() => updateVals('8')}>8</button></div>
            </div>

            <div className="row3">
            <div className="key9"><button onClick={() => updateVals('9')}>9</button></div>
            <div className="key0"><button onClick={() => updateVals('0')}>0</button></div>
            <div className="keydot"><button onClick={() => updateVals('.')}>.</button></div>
            <div className="keyadd"><button onClick={() => updateOpr('+')}>+</button></div>
            </div>

            <div className="row4">
            <div className="keysub"><button onClick={() => updateOpr('-')}>-</button></div>
            <div className="keymul"><button onClick={() => updateOpr('*')}>*</button></div>
            <div className="keydiv"><button onClick={() => updateOpr('/')}>/</button></div>
            <div className="keyeql"><button onClick={() => updateRes()}>=</button></div>
            </div>
          
            <div className="AC"><button onClick={() => reset()}>AC</button></div>
          
          </div>
      </div>
    </div>
  );
}

export default Calculator2;
