import React, { useState } from "react";
import MemoizChild from "./MemozChild";
console.log(MemoizChild);

const MemoizParent = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="memoize">
        <h1>You clicked {count} times</h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Click Me
        </button>
        <MemoizChild header="I am Child" />
      </div>
    </div>
  );
};

export default MemoizParent;

