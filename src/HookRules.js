import React, { useState } from "react";

const HookRules = () => {
  const [petName, setPetName] = useState("Fluffy");

  function nameLooper() {
    if (petName === "Fluffy") {
      setPetName("Rexy");
    } else if (petName === "Rexy") {
      setPetName("Gizmo");
    } else if (petName === "Gizmo") {
      setPetName("Fluffy");
    }
  }
  /*
  // invalid hook call
  function nameLooper() {
    if (petName === "Fluffy") {
      useState("Rexy");
    } else if (petName === "Rexy") {
      useState("Gizmo");
    } else if (petName === "Gizmo") {
      useState("Fluffy");
    }
  }
  */
  return (
    <div>
      <h1>I am thinking to name my per {petName}</h1>
      <button onClick={nameLooper}>Pick a new name</button>
    </div>
  );
};

export default HookRules;

/*
// Invalid as useState hook is called inside JavaScript function and condition.
function nameLooper() {
    if (petName === "Fluffy") {
    useState("Rexy");
    } else if (petName === "Rexy") {
    useState("Gizmo");
    } else if (petName === "Gizmo") {
    useState("Fluffy");
    }
}
// Rules of using hooks
1. We should not call hooks from regular JavaScript functions. Rahter that, we should only call hooks inside a react component function, built-in hook and custom hook. 
2. We must call hook before a return statement outside the loops, conditions or nested functions. If you use a hook in a condition, you are breaking rules. For example, 
// invalid use of hooks as useEffect hook is called inside the conditions.
if(data !== "") {
    useEffect(()=> {
        setData("test data")
    })
}
3. There can be multiple hook calls as long as they are always in the same order. What that means is that you cannot place hook calls inside conditions because that might result in an invocation of hook being skipped when compared with a previous render. In this example, a button that can be clicked to pick up a new name for a pet. The useState hook has been used incorrectly.
function nameLooper() {
    if (petName === "Fluffy") {
      useState("Rexy");
    } else if (petName === "Rexy") {
      useState("Gizmo");
    } else if (petName === "Gizmo") {
      useState("Fluffy");
    }
}
Rather than using the state setting function setPetName inside the name looper function, the use of useState hook has been used here instead. If you compile the code and run the app, you will find not the expected output returned and you will receive an invalid hook call error.

4. The fourth rule is that it might disrupt the sequence of invocation from one render to the next. Such a violation would result an errors. If you want to call an effect conditionally, you can still do so. But make sure to place the condition inside the hook. Here
// the valid use of hook
useEffect(()=> {
    if(data !=="") {
        setData("test data")
    }
})
So, now you are not breaking the rules and the code is valid.

The recap of four rules are -
1. Only call hooks from a React Component function
2. Only call hooks at the top level
3. Allow to call multiple state or effect hooks in the React comonents.
4. Make multiple hook calls in the same sequence.
*/
