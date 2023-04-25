import React, { useEffect, useState } from "react";

// HOC
const withMousePosition = (WrappedComponent) => {
  return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });
    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener("mousemove", handleMousePositionChange);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);
    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div>
      <p>Mouse position</p>
      <div>
        <span>x: {mousePosition.x} </span>
        <span>y: {mousePosition.y} </span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition, h1tag }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div>
      <h1>{h1tag}</h1>
      <p>
        ({mousePosition.x}, {mousePosition.y})
      </p>
    </div>
  );
};

// We have given the returned value of withMousePosition function to PanelMouseTracker and PointMouseTracker. So PanelMouseTracker and PointMouseTracker will become functional components and if they have any props, those props will easily enter into the WrappedComponent. As withMousePosition higher order function returns a react component(WrappedComponent), WrappedComponent's props will be the props of PanelMouseTracker's and PointMouseTracker's props.

const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function HOC() {
  return (
    <div>
      <header>Little Lemon Restaurant 🍕</header>
      <PanelMouseTracker />
      <PointMouseTracker h1tag="Look below" />
    </div>
  );
}

export default HOC;


/*
// There are two techniques of Cross-cutting concerns
1. Higher Order Function
2. Render Props

// Higher Order Function
Higher Order Function enables a powerful abstraction for creating cross-cutting concersn. We learned how data fetching could be abstracted using Higher Order Function. Higher Order Function is just a function that takes a component and returns a new one. We are presented with a required code structure to create a higher order component and examine an application of a higher order component that handled the position of the mouse pointer on the screen. 
*/
