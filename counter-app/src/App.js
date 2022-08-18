import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const [thingsArr, setThingsArr] = React.useState(["Thing 1"]);

  function addThing() {
    setThingsArr((prevThingsArr) => {
      return [...prevThingsArr, `Things ${prevThingsArr.length + 1}`];
    });
  }

  const renderThingsArr = thingsArr.map((thing) => {
    return <p>{thing}</p>;
  });

  return (
    <div className="App">
      <button onClick={addThing}>Add Thing</button>
      {renderThingsArr}
    </div>
  );
}

export default App;
