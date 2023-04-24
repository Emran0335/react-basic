import React from "react";

const topDesserts = [
  {
    id: 1,
    title: "Tiramisu",
    description: "The best tiramisu in town",
    imgage: "https://picsum.photos/200/300/?random",
    price: "$5.00",
  },
  {
    id: 2,
    title: "Lemon Ice Cream",
    description: "Mind blowing taste",
    imgage: "https://picsum.photos/200/300/?random",
    price: "$4.50",
  },
  {
    id: 3,
    title: "Chocolate mousse",
    description: "Unexplored falvour",
    imgage: "https://picsum.photos/200/300/?random",
    price: "$6.00",
  },
];
const JSX = () => {
  const listItems = topDesserts.map((dessert) => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    return <li>{itemText}</li>;
  });
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};

export default JSX;

/*
Here, I am going to use the javascript map method. Traditionally, in JavaScript you would return an data type when you were working with lists in jsx. You can also return a react component as the transformation applied to each element. You should recall that all HTML tags are components by default in react. So, you can leverage all the semantic tags you already know from HTML. For list items, your best choice is the list item or li semantic tag. I am going to return an empty list items for now because the goal is to display the title of the dessert and its price. I am going to create a new variable for the text named itemText and I will use dash to separate title and price as well the dot notation to access the needed properties from the dessert object which are title and price. Lastly, you need to embed listItems into the HTML list wrapper component unordered list or ul.

// JSX
const buttonTitle = "Submit";
return (
  <button className="button button-blue">
    <span>
      {buttonTitle}
    </span>
  </button>
)
// Element
{
  type: "button",
  props: {
    className: "button button-blue",
    children: {
      type: "span",
      children: "Submit"
    }
  }
}

// Each node instead of being jsx, is a plain JavaScript object describing a component instance or DOM node and its desired properties. This plain object is what react defines as element. An element is just a way to represent the final HTML output as a plain object. It consists primarily of two attributes - type and props. Type defines the type of node such as button and props encompasses all the properties the component receives in a single object. Observe how the element nested as in the button example via the children property. When react creates the entire element tree starting from the root. The root element specifies all the child elements as the children props. And each child element does the same thing until it reaches the end of the tree.

What is important about this new structure is that both child and parent elements are just descriptions and not actual instances. In other word, they don't refer to anything on the screen when you create them. They are just objects after all. But these objects are easy to traverse and of course, are simpler than the actual DOM elements.

// Element Type as a function
The type of an element can also be a function corresponding to a react component. Imagine you have created a component to encapsulate the traditional HTML button named submitButton.
// component 
const SubmitButton=(props)=> (
  return (
    <button className={props.blue}>{props.children}</button>
  )
)
// component as a emlement tree 
{
  type: button,
  props: {
    className: "blue",
    children: "Yes"
  }
}
In this case, the type property of the element will point to the name of the component. This is the fundamental idea of react. Both user-defined components and DOM nodes can be nested and mixed with each other in the element tree. For example,
// component 
const Logout=()=> (
  <div>
    <p>Are you sure?</p>
    <SubmitButton color="blue">Yes</SubmitButton>
  </div>
)
// element tree
{
  type: "div",
  props: {
    children: [
      {
        type: "p",
        props: {
          children: "Are you sure!",
        },
      },
      {
        type: SubmitButton,
        props: {
          color: "blue",
          children: "Yes",
        },
      },
    ],
  },
}
When react finds function type like SubmitButton, it will know to ask that component what element it renders to with the given props. So react will ask the SubmitButton again what it renders to and it will transform that into an element. For example,
{
  type: SubmitButton,
  props: {
    color: "blue",
    children: "Yes",
  }
}
// this type function will be element tree like below
{
  type: "button",
  props: {
    className: "blue",
    children: "Yes"
  }
}

When react finishes the process of identifying all user-defined components from the tree of elements, it will convert them into DOM elements. The result is what is generally known as the vitual DOM. A JavaScript alternatve representation of the real DOM. 

Now what are the steps involved when there is a new change in your UI? First react will take all your jsx and produce a new UI representaion as a tree of elements. Secondly, it will compare it with a previous representation that is kept in memory. Thirdly, it will calculate the difference in a tree. Recall that since each node in the tree is a JavaScript object. This diffing operation is very fast. And finally, based on the difference, it will apply the minimum number of changes to the underlying DOM nodes in order to process the update. This is called react declarative programming model.

*/
