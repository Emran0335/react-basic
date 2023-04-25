import { useState } from "react";
const Destructure = () => {
  // const restaurantName = useState("Lemon");
  // console.log(restaurantName);
  const [restaurantName, setRestaurantName] = useState("Lemon");
  function updateRestaurantName() {
    setRestaurantName("Little Lemon");
  }
  return (
    <div>
      <h1>{restaurantName}</h1>
      <button onClick={updateRestaurantName}>Update Restaurant Name</button>
    </div>
  );
};
export default Destructure;
/*
// useState hook 
We will learn the return value of useState hook. Array destructuring is a way to get individual items from an array of items and save those individual items as separate components.
let veggies = [parsley, onion, carrot];
we want to get each items in separate variable. 
const [v1,v2,v3] = veggies;
console.log(v1);   // parsley
console.log(v2);   // onion
console.log(v3);   // carrot

Hovever, when we have to destructure a property of an object using that exact property's name as the name of the destructured variable. For this reason react uses the array destructure from the useState hooks. 

useState hook returns a two member array. The first one is the destructured variable of the useState array that contains data type and the second one is an unanimous function that is responsible to update the state variable. So, the convention is that we have to use set prefix of the destructured useState function. The only way to update the state variable is by invoking tyhe setRestaurantName function.  
*/
