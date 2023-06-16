import "./App.css";
import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("")
  const [currentRemoved, setcurrentRemoved] = useState("")
  const ops = ["/", "*", "+", "-", "."]

  const updateCalc = value =>{
    if (
      ops.includes(value) && calc ==='' || 
      ops.includes(value) && ops.includes(calc.slice(-1))
    ){
      return;
    }

    setCalc(calc+value)

    if (!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

  const calculate = () =>{
    setCalc(eval(calc).toString())
  }

  const deleteEach = () =>{
    if (calc === ''){
      return
    }

    setCalc(calc.slice(0, -1))

  }

 
  const createTheDigits = () => {
    const digits = []
    for (let i=1; i < 10; i++){
      digits.push(
        <button 
        onClick={() => updateCalc(i.toString())} 
        key={i}>
          {i}
          </button>
      )
    }
    return digits
  }

  return (
    <div className="app-content">
      <div className="container">
        <div className="display">
           {result ? <span>({result})</span>: ''} {calc || "0" }
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={deleteEach}>DEL</button>
        </div>

        <div className="digits">
          {createTheDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
