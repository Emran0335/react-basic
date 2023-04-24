import React, { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "sell_a_meal") return { money: state.money + 10 };
  if (action.type === "buy_ingredients") return { money: state.money - 10 };
  if (action.type === "celebrity_visit") return { money: state.money + 5000 };
  return state;
};
const UseReducerHook = () => {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  // const reducerFunc = React.useReducer(reducer, initialState);
  // console.log(reducerFunc)
  // console.log(typeof dispatch) // function

  return (
    <div>
      <div>
        <h1>Wallet: {state.money}</h1>
        <div>
          <button onClick={() => dispatch({ type: "buy_ingredients" })}>
            Shopping for veggies!
          </button>
          <button onClick={() => dispatch({ type: "sell_a_meal" })}>
            Serve a meal to the customer
          </button>
          <button onClick={() => dispatch({ type: "celebrity_visit" })}>
            Celebrity Visit
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducerHook;

/*
The action type determines the specific action of the reducer. Actions can have any form. By convention, it's common to pass objects with a type property identifying the action. It should include the minimal necessary information that the reducer needs to compute the next state.

Instead of using setState, like the useState hook, you use the dispatch method of the useReducer hook. This accepts an obect literal with a single property called type. Set to a matching action.type whose behavior is defined inside the reducer function(dispatch({type: sell_a_meal})). 
*/
