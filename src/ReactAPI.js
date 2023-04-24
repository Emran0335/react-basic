import React from "react";
const Row = ({ children, spacing }) => {
  const childStyle = {
    marginLeft: `${spacing}px`,
  };

  return (
    <div className="row">
      {React.Children.map(children, (child, index) => {
        console.log(child.props)
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            ...(index > 0 ? childStyle : {}),
          },
        });
      })}
    </div>
  );
};
const ReactAPI = () => {
  return (
    <div>
      <Row spacing={32}>
        <p>Pizza Margarita</p>
        <p>2</p>
        <p>30$</p>
        <p>18:30</p>
        <p>Emran</p>
      </Row>
    </div>
  );
};

export default ReactAPI;

/*
// Two API's of react
1. React.cloneElement()
2. React.Children.map()

// React.cloneElement
This is a top level API and it is used to manipulate and transform elements. Top level API refers to the way you would import those functions from the react package. You can either import react as a global object in the top of your file and access them as methods on that object or alternativly as a named import.

//React global object
import React from "react";
React.cloneElement(...)
or
//Named import
import {cloneElement} from "react"
cloneElement(...)

We recall that elements are just plain JavaScript objects that react used internally to describe what you want to appear on the screen. React.cloneElement(element, [props]) effectively clones and returns a new copy of a provided element. The first argument is the react element you would like to clone and the second argument is the props that will be added and merged with the original props passed into the component. Remember that props in react are immutable objects. So you must create a copy of the element first and perform the transformation in the copy. That's exactly what react.cloneElement allows you to achieve. This API is useful to allow a parent to perform the following operations
1. Modify children properties
2. Add to children properties 
3. Extend functionality of children components.
For example
// Dynamically add props
const buttonElement= {
    type: SubmitButton, // function component
    props: {
        color: "green",
        children: "Submit!",
    }
}
const output = React.cloneElement(buttonElement, {disabled: false})

// output
// it will be converted into JavaScript Object like below
{
    type: SubmitButton, // function component
    props: {
        color: "green",
        children: "Submit",
        disabled: false,
    }
}
*/

/*
// React.Children.map()
Another top level API is React.children and it is important API for children manipulation. It provides utilities for dealing with the props.children data structure. The most important method is the map function. React.Children.map(children, callback) is very similar to the map function from arrays and invokes a function in every child contained within its children prop performing a transformation and returning a new element.
*/
