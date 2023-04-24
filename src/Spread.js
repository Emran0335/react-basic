import React from "react";

const Spread = () => {
  return <div>Spread</div>;
};

export default Spread;

/*
// Spread Operator
// Data types

In pure JavaScript, the spread operator can be applied to different data types in JavaScript such as arrays, objects and strings. Since react props are just objects, copying and merging can be easily done using spread operator.
// Copy an object
const order = {
    id: 1,
    username: "Emran Hossain",
    item: "Pizza Margherita",
    price: "$30.00"
}
const orderCopy = {...order}
// copy and merging
const orderAmend = {
    ...order,
    item: "Pizza Prosciutto",
}

// More details
function OrderList() {
    return (
        <Order id="1" username="Emran Hossain" item="Pizza Margherita" price="$30.00"/>
    );
}
// Simple way to pass props
function OrderList() {
    const order = {
        id: 1,
        username: "Emran Hossain",
        item: "Pizza Margherita",
        price: "$30.00",
    };
    return <Order {...order} />
} 
*/
