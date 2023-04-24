import React from "react";

// generic component
const Button = ({ children, backgroundColor }) => {
  return <button style={{ backgroundColor }}>{children}</button>;
};
// generic component
const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay" />
      <div className="Alert">{children}</div>
    </>
  );
};
const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>;
};
const Composition = () => {
  return (
    <div className="App">
      <div>
        <header>Little Lemon Restaurant 🍕</header>
        <Alert>
          <h4>Delete Account</h4>
          <p>
            Are you sure you want to proceed? You will miss all your delicious
            recipes!
          </p>
          <DeleteButton />
        </Alert>
      </div>
    </div>
  );
};

export default Composition;

/*
// Component Composition with children props

When designing react components, one of the most important properties developers tend to overlook is the children props. The children prop which is a special property all components have is the foundation for the react powerful composition model. 

There two main features that enable component composition
1. containment
2. specialization

// containment
Containment refers to the fact that some components don't know their children ahead of time. This is especially common for components like a sidebar of UI or dialogue where they delimit a specific area in your UI to contain other elements. You can think of them also as generic boxes. In case you don't know a dialogue is a type of model window where the rest of the UI is disabled until the model is addressed and interacted with. For these component boxes, the recommended approach is to use the children prop to pass the children elements directly as their content. For example

function Dialog(props) {
    return(
        <div className="modal">
            {props.children}
        </div>
    )
}
function ConfirmationDialog() {
    return(
        <Dialog>
            <h1 className="Dialog-title">Thanks!</h1>
            <p className="Dialog-message">
                We'll process your order in less than 24 hours
            </p>
        </Dialog>
    );
}
Here you have a Dialog component which acts as the Box taking care of styling the container to make it look like a model window. By using the children prop, it has become a generic component to which we can provide any valid jsx as children. To illustrate that the confirmation dialog component has been defined which uses the Dialog component and renders as children a title(h1) and a description(p).

// Specialization
Specialization defines components as being special cases of other components. In this example, the ConfirmationBialog is a special case of dialogue.
*/
