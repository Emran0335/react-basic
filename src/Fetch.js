import React, { useState } from "react";
const Fetch = () => {
  const [user, setUser] = useState([]);
  console.log(user);
  const fetchData = () => {
    fetch("https://randomuser.me/api/?result=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };
  React.useEffect(() => {
    fetchData();
  }, []);
  return Object.keys(user).length > 0 ? (
    <div>
      <h1>Data returned</h1>
      <h2>First Name: {user.results[0].name.first}</h2>
      <h2>Last name: {user.results[0].name.last}</h2>
    </div>
  ) : (
    <h1>Data pending ...</h1>
  );
};
export default Fetch;
/*
 The fetch function is a very important tools. Fetch function is used to make a server request to retrieve some Json data from it(server). Fetch API is a set of functionalities that we have at our disposal to use in JavaScript to make such a server request. It is a bit like a clerk at the post office Say you are brining a package to the post office. And you are the first in the queue. The clerk, on the other side of the service desk is JavaScript. Since it(JavaScript) can only do one thing at a time. I goes through the process of getting your details, measuring the weight of the package, pasting stamps onto the package, charging it for the service and going to the back office and carrying the package there. Then Taking time to find the correct place before it gets shipped.
 // JavaScript process
 --->1(Get Details)--->2(Weight package)--->3(Paste stamps)--->4(Charge customer)--->5(Place package)
 The problem with this approach is that the next step cannot start before the previous one is finished. This is known as sigle-threaded execution. Since JavaScript is not at all equipped to multitask, a way to go around this issue is as follows-
 1. Gets Customers details
 2. Sends for processing - clerk pastes stamp on package, clerk measure weight of package, clerk charges you for service, clerk carries package to office
 3. Gets customers details(another)
 4. Receives result of the completed tasks(step 2-prvious)
 5. Sends next customers details for processing(step 3)
 This kind of activity is known as Asynchronous JavaScript. In this metaphor, you can think of the browser as the post office, JavaScript as one clerk in the post office and all these other clerks can be referred to as browser APIs or web APIs. 
 The fetch function is what's known as a facade function meaning it's a function that look like a part of JavaScript. But actually, it is just a way for me to call a browser API from JavaScript. In other words, it is a way for me to access a piece of browser functionality that is outside of JavaScript. You can think of it as the JavaScript of post office clerk calling the records department of post office to get some data about a customer when the other clerk gets back with the information and hands it over to the post office clerk. Then they will get a Json representation and finally we will log the data to the console.
 console.log("Another customer approaching");
 fetch("https://randomuser.me/api/?results=1")
  .then(response => response.json())
  .then(data => console.log(data));
 console.log("Our valued customer, please give me a moment while I get some information back from the Records Dept.");
 In this sequence of conole logs from the code will be as follows-
 1. Initial console log that outputs another customer approaching.
 2. Second console log that outputs out value customer, please wait a moment while I get some information back from the Records Dept.
 3. The final console lot that outputs the data.
*/
