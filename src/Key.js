import React, { useState } from "react";

const Todo = (props) => {
  return (
    <tr>
      <td>
        <label>{props.id}</label>
      </td>
      <td>
        <input />
      </td>
      <td>
        <label>{props.createAt}</label>
      </td>
    </tr>
  );
};
const Key = () => {
  const [todos, setTodos] = useState([
    {
      id: "todo1",
      createAt: "18:00",
    },
    {
      id: "todo2",
      createAt: "20:30",
    },
  ]);
  const reverseOrder = () => {
    // Reverse() method(built-in) is a mutative operation, so we need to create a new array first.
    setTodos([...todos].reverse());
  };
  // First example with keys, show browser console to see the waring.
  return (
    <div>
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          {todos.map((todo, index) => (
            <Todo key={index} id={todo.id} createAt={todo.createAt} />
            // If key={index} is used, the input does not change
            // But If key={todo.id} is used, the input also changes.
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Key;

/*
1. What is the diffing algorithm?
When computing a change, react applies its diffing algorithm to calculate the minimum number of changes that are necessary to perform an update in your tree of components. This algorithm works perfectly most of the time as mentioned earlier. But there are some cases where react can't make important assumptions to find the most optimal path for an update which means the developer will need to step in.


Let's explore one such example
// list of elements
    <ul>
        <li>Beer</li>
        <li>Wine</li>
    </ul>
In this example, when a new item is add to the end of the list, the diffing algorithm works well.
   <ul>
        <li>Beer</li>
        <li>Wine</li>
        <li>Cider</li>
    </ul>
Since react will match the two beer trees as mentioned above, it also inserts the Cider tree. However, when inserting a new element at the beginning of the list, the diffing algorithm offers worse performance because react will mutate every child instead of realizing. It can keep the beer and the wine sub trees intact. This inefficiency can be a problem. To solve this issue, react supports the Key attribute. So what are keys? Keys are identifiers that help react to determine which items have changed are added or removed. They also instruct how to treat a specific element when an update occurs and whether its internal State should be preserved or not. To illustrate, adding a key the last example can make the tree conversion efficient that's beacuse react now knows that the element with the key cider is the new one and the element with the keys beer and wine have just moved.
    <ul>
        <li key="beer">Beer</li>
        <li key="wine">Wine</li>
    
    </ul>
       <ul>
        <li key="beer">Beer</li>
        <li key="wine">Wine</li>
        <li key="cider">Cider</li>
    </ul>

The general rule of keys is to use a stable identifier that is unique among its siblings. This allows react to reuse as many elements from the list as possible avoiding unnecessary re-creations especially when their content is exactly the same and the only thing that has changed is their position in the list.

We should use the ids as keys provided by the database or to create ids in the list. But if it is not possible, then we should use the index of the list provided by the map mehtod. But it may cause something wired. As indexes are not recommended for keys. If the order of the items may change, for example, in cases where our list has sorting capabilities or users can either add or removes items. When used incorrectly, keys can negatively impact performance and may cause unexpected glitches in our UI when updating our lists. That's why is very important to make a conscious dicision about our keys implemention.

Here in the above example, first I will type A for the input of todo1 and B for the todo2. Then I will click on the Reverse button to reverse the order of the items. Everything changes but the text input is not changed or does not move. Why this happens is that if we look at the Todo component, the id is changed but the index is same because I am using the index. React is instructed to keep the interanl state of that node. That's why the input state from the Todo is preserved. But how to fix that is to use the key as unique identifiers. In this case id is the proper solution e.g. key={todo.id}.  
*/
