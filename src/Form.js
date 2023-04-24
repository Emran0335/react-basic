import React, { useState } from "react";
import "./app.css";

const Form = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    console.log("Okay for now");
  };

  return (
    <div className="controll_form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;

/*
Value -> A special property to determine input content.
If we want to make controlled from, we need to use local state and value prop into the component. Initially we assign the local state to the value property. But how do we get updates from any new text character entered in the input. For this, we need second prop that is onChange callback to complete the design of our controlled component. The onChange callback receives an event parameter which is an event object representing the action that just took place simillar to events on DOM elements. We need to access the target property from the event and grab the value from that object is a string. Finally, to have control over the form values. Whenever the form is submitted, we can use the Onsubmit prop in the form HTML element. The onSubmit callback also receives a DOM like event as a parameter. There we can access our form values to perform any desired logic that must take place before submission, for example validating our input values.
    <form onSubmi={handleSubmit}>
        ...
    </form>
    handleSubmit(event) {
        validate(value);
        event.preventDefault();
    }

In the above example, I type Emran in the input and click the submit button. By doing so, the default action of the form kicks in which is a get request to the root and the page refresh. In react, this current implementation is considered an uncontrolled form having all the states living in the DOM. Let's work through the necessary steps to transform the form into a controlled form version.

If there is no name provided, button remains disabled. For the best accessibility practices, let's connect the label with the input. I set an ID for my input called name and I will connect the label using htmlFor="name". So, the label htmlFor gets the ID name. Now if we click the label its co-responding is that input is focused.  
*/
