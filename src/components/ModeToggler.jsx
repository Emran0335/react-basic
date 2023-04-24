/* eslint-disable no-const-assign */
import React from "react";

const ModeToggler = () => {
  let darkModeOn = false; // if the darkModeOn is const, then it cannot be modified. let is perfect now
  console.log(darkModeOn);
  const darkMode = <h1>darkmode is on</h1>;
  const lightMode = <h1>lightMode is on</h1>;
  const handler = () => {
    darkModeOn = !darkModeOn; // if the darkModeOn is const, then it cannot be modified. let is perfect now
    if (darkModeOn === true) {
      console.log("Dark mode in on");
    } else {
      console.log("Light mode in on");
    }
  };
  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handler}>click me</button>
    </div>
  );
};
// here developer console is changing the mode from dark to light. but the ui is not change i.e. {darkModeOn ? darkMode : lightMode} does not work.
export default ModeToggler;
