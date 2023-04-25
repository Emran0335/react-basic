import React from "react";
// use of useRef hook
const Ref = () => {
  const formInputRef = React.useRef(null);
  const focusInput = () => {
    formInputRef.current.focus();
  };
  return (
    <>
      <h1>Using useRef to access underlying DOM</h1>
      <input type="text" ref={formInputRef} />
      <button onClick={focusInput}>Focus input</button>
    </>
  );
};
export default Ref;
/*
// use of useRef hook to access to the browser DOM.
My focusInput handler only accesses the formInputRef object and then it accesses the focus method on the current property which exists on the formInputRef object. But is this object and where does it come from? This object is the return value of invoking the useRef hook. So, in this update to my function, I am invoking the react user function. And I am saving a ref object that is the value returned from that function invocation to a variable named formInputRef. I am then setting the jsx expression of the fromInputRef as the value of the ref attribute on the input element. React hook will create the input element's DOM node and render it on the screen. This DOM node is assigned as the value of the current property of the ref objects. This makes it possible to access the input DOM node and all its properties and values using the syntax formInputRef.current since I want to access the focus function on the input elements DOM node. I am using the syntax formInputRef.current.focus(). This allows me to move the focus to the input field so that it is ready to be typed into without the user having to click, tap or tab into it. This is now triggered on a button click. To confirm that, this works I will save all my changes go to my app being served in the browser. Click outside of the input box and click the focus input button. Great! Everything is working as expected.
// The purposes of useRef hook
1. How to use the useRef hook to hook into the DOM
2. How to work with the properties of a specific DOM node
*/
