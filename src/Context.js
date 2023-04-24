import React from "react";
import "./app.css";
import { useUser } from "./context/UserContext";

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p className="context_user">
      Hello <span className="username">{user.name}</span>
    </p>
  );
};

const Header = () => {
  return (
    <header className="context_header">
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  );
};

const Page = () => {
  const {user} = useUser();
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis placeat
        enim provident quia, tenetur doloremque, vel unde, ut quos dolorem
        vitae! Dignissimos illo, fugiat quas adipisci vitae non corporis cumque?
      </p>
      <p>Written by: {user.name} </p>
    </div>
  );
};

const Context = () => {
  return (
    <div className="context_container">
      <Header />
      <Page />
    </div>
  );
};

export default Context;

/*
Props are the shorthand for properties which are the components configuration.They are nothing but JavaScript objects. They are received from parents in the tree and are immutable as far as the component receiving them is concerned. A component cannot change its props but it is responsible for putting together the props of its child components. In addition to prop, react components have another built-in object named State. This object is a way to allow react to determine when it should re-render a component. React is set up so that any change to the values served in the state object will trigger a re-render of a given component. 

States life cycle starts with a default value when a component mounts and then modifications of that value happen over time. Mostly they are generated from user events. So state is a serializable representation of one point in time or in other words a snapshot. A component manages its own state internally. So we could also sat that state is private.

Conponents can be stateful or stateless. Stateless components have only props. On ther other hand statefull components have both props and states. They do client-server communication, data processing and responding to user events.

But the stateless components do only visualization and fromatting logic.

To avoid props drilling problem e.g. passing data through all component tree levels(even components that do not need it), context api is used as global state is used and it is very useful.
*/
