import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Count from "./Count";

function App() {
  // whenever state changes React will rerender the component where the state exists and
  // any child components that recieve the state as props and rely on it to work correctly
  const [thingsArr, setThingsArr] = React.useState(["Thing 1"]);

  function addThing() {
    setThingsArr((prevThingsArr) => {
      return [...prevThingsArr, `Things ${prevThingsArr.length + 1}`];
    });
  }

  const renderThingsArr = thingsArr.map((thing) => {
    return <p>{thing}</p>;
  });

  const [personObj, setPersonObj] = React.useState({
    first_name: "Lenny",
    last_name: "Remache",
    isHere: false,
  });

  function isHere() {
    setPersonObj((prevPersonObj) => ({
      ...prevPersonObj,
      isHere: !prevPersonObj.isHere,
    }));
  }

  const [count, setCount] = React.useState(0);

  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="App">
      <button onClick={add}>Add</button>
      <Count number={count} />
      <button onClick={isHere}>Is here?</button>
      <p>{personObj.isHere ? "Yes" : "No"}</p>
      <button onClick={addThing}>Add Thing</button>
      {renderThingsArr}
    </div>
  );
}

export default App;
