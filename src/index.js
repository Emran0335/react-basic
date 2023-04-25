import React from "react";
import ReactDOM from "react-dom/client";
// import UseRef from './UseRef';
// import JSX from "./JSX";
// import Key from "./Key";
// import Form from "./Form";
// import Feedback from "./Feedback";
// import Context from "./Context";
// import Destructure from "./Destructure";
// import Goals from "./Goals";
// import Effect from "./Effect";
// import HookRules from "./HookRules";
// import Fetch from "./Fetch";
// import UseReducerHook from "./UseReducerHook";
// import Composition from "./Composition";
// import MemoizParent from "./MemoizParent";
// import HOC from "./HOC";
import { UseProvider } from "./context/UserContext";
import "./index.css";
import RenderProps from "./RenderProps";
// import ReactAPI from "./ReactAPI";
// import Ref from "./Ref";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <UseProvider>
    <React.StrictMode>
      {/* <UseRef /> */}
      {/* <JSX /> */}
      {/* <Key /> */}
      {/* <Form/> */}
      {/* <Feedback/> */}
      {/* <Context /> */}
      {/* <Destructure/> */}
      {/* <Goals/> */}
      {/* <Effect year={2003} /> */}
      {/* <HookRules/> */}
      {/* <Fetch/> */}
      {/* <UseReducerHook/> */}
      {/* <Ref/> */}
      {/* <Composition/> */}
      {/* <ReactAPI/> */}
      {/* <MemoizParent/> */}
      {/* <HOC/> */}
      <RenderProps/>
    </React.StrictMode>
  </UseProvider>
);


