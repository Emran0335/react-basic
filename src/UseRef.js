import React, { useRef, useState } from "react";
import "./app.css";

const UseRef = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
    inputRef.current.value = 0;
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
    inputRef.current.value = 0;
  };
  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
    inputRef.current.value = 0;
  };
  const division = (e) => {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
    inputRef.current.value = 0;
  };
  const reset =(e)=> {
    e.preventDefault();
    setResult((preValue)=> preValue * 0)
    inputRef.current.value = 0;
  }
  return (
    <div className="app">
      <div>
        <h1>Simple Working Calculater</h1>
      </div>
      <form className="form">
        <p ref={resultRef}>{result}</p>
        <input type="number" ref={inputRef} pattern="[0-9]" placeholder="Type a number" />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Sub</button>
        <button onClick={times}>Mul</button>
        <button onClick={division}>Div</button>
        <button onClick={reset}>Reset</button>
      </form>
    </div>
  );
};

export default UseRef;

/*

*/
