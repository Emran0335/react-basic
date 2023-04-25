import React, { useState } from "react";
function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });
    console.log(formData)
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // It will update like this..
    // 1. [e.target.name] means -> goal
    // 2. [e.target.name] means -> by
    // 1. [e.target.value] -> what input is given.
  };
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({goal: "", by: ""})
  }
  return (
    <>
      <h1>My little Lemon Goals.</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal" // name is [e.target.name]
          placeholder="Goal"
          value={formData.goal} // value is [e.target.value]
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by" // name is [e.target.anme]
          placeholder="By..."
          value={formData.by} // value is [e.target.value]
          onChange={changeHandler}
        />
        <button>Submit Gaol</button>
      </form>
    </>
  );
}
function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}
const Goals = () => {
  const [allGoals, updateAllGoals] = useState([]);
    console.log("data will given by GoalForm", allGoals)
  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }
  return (
    <div>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
};
export default Goals;
/*
Let's explore how to build a goals app with the described requirements in react using the useState hook in a component and updating the state. The completed app is now displayed on screen when this code is compiled. I get a heading that reads my little lemon goals and then I have a simple form with two inputs goal and buy. The first input field is there to let the owner type out their goal and the second input field is there to let them type out the time frame within which they want to achieve a given goal. The code itself consists of three separate components. Goalform which captures a new goal using a form. List of goals which Loops over all the previously added goals and displays them as an unordered list of list items. And the Goals component which puts those two components together and allows me to render them as well as. Past the functions that they'll be working with through their props. Let's explore these the first component namely the Goalform component accepts the props objects in the body of the Goalform function. I start by declaring a state variable of formdata which is de-structured from a call to the useState hook. I initialize this formdata variable as an object with two properties goal and by. Both assign the values of empty strings. Next, I declare two functions changeHandler, and submitHandler. First is the changeHandler function which accepts an e-parameter. This e-parameter is a readily available event object. In other words, I don't have to pass this object from my changeHandler. It's provided to me by a mechanism outside of react.Even in plain JavaScript, whenever an event is fired, this creates an event object with many different pieces of data related to the event. I can then use this event object by simply assigning it a custom name such as e, EVT, or even event. I'm using the letter e here to keep my code concise in the body of the changeHandler function. I update the state of my formdata variable by invoking the previously destructured State setting variable of setformdata which was destructured from a call to the usestate hook. The set formdata function accepts a shallow clone of the previous value of the formdata variable. That's the formdata variable with the spread operator. Before it, here, remember that you should not work with the formdata variable directly which is why I'm making a copy this is because of how react optimizes its virtual Dom keeping State immutable makes it possible to compare a previous version of the virtual Dom with the updated version more efficiently and cost effectively. Next I update this new copy of the formdata object by adding this code. It reads the [e.target.name] using the brackets notation. Then sets the value of this property to whatever is inside that [e.target.value] property of the instance of the event object which was built when that specific event was fired. The reason why this works with the brackets notation is that it allows me to set the value of the [e.target.name] dynamically. In other words, it allows me to set it as goal if the user typed into the input with the name attribute. Set to goal or to set it as buy if the user typed into the input with the name attribute set to buy Second I declare a submitHandler function which also accepts the event attribute. The goalform component receives the prop named onAdd and I'm giving the function addgoal to it as the props value. But it's not just any function, it's actually a function that's declared right here on line 43 inside the Goals component itself. This addgoal function accepts a goal entry and updates the value of addgoals State variable. that's kept inside the app function it does this by adding this goal entry to the list of previous goals saved and tracked inside the all goal State variable of the Goals component. The update of any state variable must go through the previously destructured State updating function in the case of the Goals component the state updating function is the update all goals function that's why I'm invoking the state updating function.
*/
