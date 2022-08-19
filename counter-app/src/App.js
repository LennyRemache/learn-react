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

  return (
    <div className="App">
      <button onClick={isHere}>Is here?</button>
      <p>{personObj.isHere ? "Yes" : "No"}</p>
      <button onClick={addThing}>Add Thing</button>
      {renderThingsArr}
    </div>
  );
}

export default App;
