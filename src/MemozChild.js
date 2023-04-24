import React from "react";

const MemoizChild = (props) => {

  console.log("I am Child");
  return (
    <div className="childMemoize">
      <h3>{props.header}</h3>
      <p>I am in the position of react memoization.</p>
    </div>
  );
};

export default React.memo(MemoizChild);
/*
We are going to discuss about a special topic called react memo. How can we stop re-entering the child component when the parent component re-renders? You know at some point of time you might be doing something really expensive. In a child component, you don't want that to re-render every time unnecessarily. You can do that using react memoization. So, it will never be rendered again though the parent component is rendering every time when the state is changing.
*/
