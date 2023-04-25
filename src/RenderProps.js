import React, { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      setData(["cake", "ice cream", "pie", "brownie"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, [url]);
  return render(data);
};

// DessertsCount is a presentational component
const DessertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/desserts"
      render={(data) => <p>{data.length} desserts</p>}
    />
  );
};
// DrinksCount is another presentational component
const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon/drinks"
      render={(data) => <h3>{data.length} drinks</h3>}
    />
  );
};
const RenderProps = () => {
  return (
    <div>
      <header>Little Lemon Restaurant 🍕</header>
      <DessertsCount />
      <DrinksCount />
    </div>
  );
};

export default RenderProps;

/*
// Render Props
Take functions that return React elements and call them inside their render logic.
// Example
<MealProvider render={data=>(
  <p>Ingredients: {data.ingredients}</p>
)} />

Second Technique of Cross-cutting concers is Render Props
This is a special prop we add to our components with a particular attribute of being a function that returns a react element. We discovered that as opposed to higher order components, the new props are injected dynamically as the parameters of the function and worked through a practical example where the render props technique was used to abstract the functionality of the fetching data from a server.
*/
