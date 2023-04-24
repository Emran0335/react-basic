import React, { useState } from "react";
import "./app.css";
const Feedback = () => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const handleSubmit=(e)=> {
    e.preventDefault();
    if(Number(score) < 5 && comment.length <=10) {
      alert("Please provide a comment explaining why the experience was poor.")
      return;
    }
    console.log("Form is Submitted!")
    setComment("");
    setScore("10")
  }
  return (
    <div className="feedback">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Feedback Form</h2>
          <div className="feedback_field">
            <label>Score: {score}⭐️</label>
            <input
              type="range"
              min="0"
              max="10"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
          </div>
          <div className="feedback_field">
            <label>Comment: {comment}</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="feedback_button">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Feedback;

/*
We like to send the customers a feedback form. So, let's go ahead and implement a feedback form with react. Note that this form allows the users to provide a score from 0 to 10 and additional comment to tell the chef how delicious the food they enjoyed a few days ago was. So the first step is to implement a control for the score. Here I have used range input for this use case. Range attribute offers two props - one is min and the other is max. I have turned the input a controll component. For this reason, I need state called score that I will initialize to 10 because I know chef's recipe is usually unbeatable. Enabling the user to reduce the score down from 10 when they interact with the slider if they want to. Now in the range input, I have to use the value prop to hook the state up and use onChange to receive the changes and update the state accordingly. Since I also want the numerical score to be displayed with the slider. I am to add that information to this label along with a star. So the user interface or UI is clean and concise.

I want to declare comment area. So I need another state that is called comment. Now I need to hook up the state to the value prop and update the changes via onChange.

Now handleSubmit will check the form validation and after that setComment and setScore should be as usual. This is called good practice.
*/
