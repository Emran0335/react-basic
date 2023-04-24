import React from "react";

// const Btn = () => {
//   const handleClick = () => {
//     console.log("clicked me.");
//   };
//   return (
//     <div>
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// };

// export default Btn;

const Btn = () => {
  const handleClick = () => {
    console.log("mouse hover on me.");
  };
  return (
    <div>
      <button onMouseOver={handleClick}>Click me</button>
    </div>
  );
};
/*
 // In HTML Event Handling
 <button id="js-btn" onclick="clickHandler()">
    Click Me!
 </button>

 // JavaScript Event Handling
 const jsBtn = document.getElementById("js-btn")
 jsBtn.addEventListener("click", function() {
    console.log("Clicked")
 })
*/
export default Btn;
