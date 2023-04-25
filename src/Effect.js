import React, { useState } from "react";
const Effect = (props) => {
  // console.log(props);   {year: 2003} this is an side Effect As the console.log belongs to Browser API, not the part of react virtual DOM.
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };
  // the side effect of using the updating to the browser title.
  React.useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using the useEffect hook";
  },[toggle]);
  // dependancy [toggle] determines the title to be rendered or not. If it is not used the first time rendered title will never be changed.
  /*
  By default, without array dependency, it changes the browser tap after the button click each time.  React.useEffect(() => {
    document.title = toggle
      ? "Welcome to Little Lemon"
      : "Using the useEffect hook";
  }); 
  For example using empty array..
  React.useEffect(()=> {
    document.title = toggle ? "Welcome to Little Lemon" : "Using the useEffect hook"
  },[])
  */
  return (
    <div>
      <h1>Using the useEffect hook.</h1>
      <button onClick={clickHandler}>Toggle Message</button>
      {toggle && <h2>Welcome to Little Lemon!</h2>}
    </div>
  );
};
export default Effect;
/*
imputer function: example
function ShoppingCart(props) {
  const total = props.count * props.price;
  //console.log(total)-------------> call to Browser API(it is side effect)
  return (
    <h1>Total: {total}</h1>
  );
}
// need to use useEffect hook in this ShoppingCart component
import {useEffect} from 'react'; 
 function ShoppingCart(props) {
  const total = props.count * props.price;
  useEffect(function() {
    console.log(total);
  },[])
  // useEffect(()=>console.log(total), []);
  return (
    <h1>Total: {total}</h1>
  );
}
export default function App() {
  return (
    <ShoppingCart count={5} price={10}/>
  );
}
Sometimes to consider the name of the useEffect Hook is closely related to the concept of an effect or more precisely a side effect. You will learn what side effects within a react component are including what pure and impure functions are and their relation to side effects as well as how useEffect is used to perform side effects within functional components. So, what is a side effect? A side effect is something that makes a function impure. Did you know that functions can be classified as pure and impure? Simply put pure functions. Don't have side effects. Impure functions do let's unpack the concept of pure and impure functions in relation to side effects. And more a pure function should receive specific input that is a specific parameter will always return the exact same output. No matter how many times it gets invoked. To illustrate, let's explore a function that uses the year={2003}. Little lemon was established in this example the established year. The component accepts a props object(year={2003}) that is a props parameter. It also returns the value that is a heading that outputs the words established year followed by a colon space and the value of the Year prop as long as the value of the Year prop is 2003 regardless of how many times the established year function is invoked or it is rendered from the app component the output will remain unchanged. This is an example of a pure function the established year function has no side effects. By contrast, an impure function will perform a side effect that means it will do things such as invoke console.log invoke fetch or invoke browsers geolocation functionality. In this context a side effect can be thought of as something external to or outside of a function. Consider the example of a shopping cart function built for the little lemon app. It is an impure function because of the line that reads console.log. Totally, the console.log call makes the function impure. As, it's a call to a browser application programming interface or API. The shopping cart function now depends on something outside of itself and even outside of the react app to work properly. So, how should you deal with the issue of impure functions in react. Well it's all about containing the impure actions inside their own special areas. To do this in react, you need to use the useEffect hook. Let's update the shopping cart component with the useeffect hook to properly deal with the side effect caused by the console.log. First, you need to import the useEffect Hook from react the useEffect hook works by accepting two parameters. The first is a callback function. The second parameter is an array. This array can be kept empty which is perfectly valid while the syntax is valid. It's common to use an arrow function as the first the argument of the invocation of the useEffect hook. Note that the useEffect has been simplified to a single line of code. It usually spans several lines of code that's because it typically needs to do something more meaningful than just console logging the value of a component's variable. You learned about pure and impure functions and their relation to side effects exploring with side effects within a react component are and briefly how useEffect is used to perform them. You can look forward to applying this knowledge by using the useEffect hook. To perform side effects to demonstrate how to use the useEffect hook within a component. Let's continue working on the little lemon app say the owner of the restaurant wants to add a specific way for the user to interact with the app on a button click. The owner wants a welcome message displayed and on another button click the owner wants the message hidden Additionally. The owner wants this change to be reflected on the browser tab where the app is served updating a browser tab is an example of a side effect. I will demonstrate how to do this by using the useEffect hook. To perform side effects in react as well as how to control when the useEffect function is run using the dependencies array. I am going to use an app. I built previously using Create react app to demonstrate how to use the useEffect hook. To describe what's happening. Let's start with a return statement. I have a wrapping div and inside of it an H1, a button and a JSX expression that uses the logical and operator to conditionally render an H2. The button has an onClick event handling attribute. And it triggers The Click Handler function which I've declared as a function expression. I've destructured the toggle variable from a call to the useState hook to track the state of the toggle variable and make the conditional rendering in the return statement possible. Now, let's inspect my app in the browser as it's currently being served everything is working well when I click the button the sentence Welcome to little lemon appears under it. If it wasn't shown previously and vice-versa. Although the app is working well. My app currently has no way of updating the text in the browser tab like the restaurant owner wants it. To do this is an example of a side effect which is why the correct way to add this functionality is to use the useeffect hook. So above the return statement, I'll add a call to the useEffect function as follows react.useEffect. I need to pass a function to the useEffect call. So, I'll add an arrow function without parameters and in the body of the arrow function I'll add this ternary here which checks if the value of the toggle variable is true or false. If it's true, it should return the string that reads the welcome to little lemon. Otherwise, it should return the string that reads using the useEffect hook. Whatever gets returned is the value, I am assigning to the title property of the document object. This property thus dynamically updates the text showing on the tab of the browser where this react component is served. Every click on the button update the title of the document object property title in the browser tab. Imagin the owner of the little lemon wants to update the title on the document to be set on the initial component render. After that he doesn't want it updated. This is where the dependency array comes in. The dependency array determines when the useEffect hook will be invoked. For now, I will update my code with an empty dependancy array meaning that I am not tracking the state of any state variables. In ohter words, regardless of what is happening in my app, I do not want the useEffect hook to be invoked. This means that it will be invoked only once and afther that no matter what happens in my app, the useEffect hook will no longer be run. Now that I have updated my app. Let's save the changes and examine how this affects the behaviour of my app in the browser. The useEffect hook runs only once outputs the words using the useEffect hook and after that regardless of how many times I click on the toggle message button, there are no further updates to the tap title of the browser. The dependancy array is there to watch for changes to a specific variable and based on that execute the function  that is passed in as the first argument of the useEffect function call. This means that if I want to run the useEffect hook whenever there is an update to the value stored in the toggle variable. I need to add the toggle variable in the array dependancy. This time the useEffect hook will run every time the toggle variable value is changed becase the click handler updates the value of the toggle variable each time after the click of the button by invoking the setToggle function. This in turn triggers the useEffect invocation since the dependancies array is set to watch for changes to the toggle variable's value.
*/
