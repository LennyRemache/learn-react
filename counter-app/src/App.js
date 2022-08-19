import logo from "./logo.svg";
import "./App.css";
import React from "react";

import Count from "./Count";
import boxes from "./boxes";
import Box from "./Box";

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

  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    setSquares((prevSquares) => {
      // let newSquares = [...prevSquares];
      // let currSquare = newSquares[id - 1];
      // newSquares[id - 1] = {
      //   ...currSquare,
      //   on: !currSquare.on,
      // };
      // return newSquares;
      return prevSquares.map((square) => {
        return square.id === id ? { ...square, on: !square.on } : square;
      });
    });
  }

  const squareElements = squares.map((square) => {
    return (
      <Box key={square.id} id={square.id} on={square.on} handleClick={toggle} />
    );
  });

  return (
    <div className="App">
      <button onClick={add}>Add</button>
      <Count number={count} />
      <button onClick={isHere}>Is here?</button>
      <p>{personObj.isHere ? "Yes" : "No"}</p>
      <button onClick={addThing}>Add Thing</button>
      {renderThingsArr}

      {squareElements}
    </div>
  );
}

export default App;
