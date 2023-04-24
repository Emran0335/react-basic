import React from "react";

const Nav = (props) => {
  console.log(props); // props is an object containing array inside it.

  return (
    <>
      <nav className="main-nav">
        {props.toggle.map((eachObj) => (
          <ul key={eachObj.id}>
            <li>{eachObj.name}</li>
          </ul>
        ))}
      </nav>
    </>
  );
};

export default Nav;
