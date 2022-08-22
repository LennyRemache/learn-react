import React, { useEffect } from "react";

export default function Calls() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);
  // handling side effects which means allows React to interact with outside systems itself can not deal with
  // effect hook runs after every render

  React.useEffect(() => {
    async function getPeople() {
      const res = await fetch(`https://swapi.dev/api/people/${count}`);
      const data = await res.json();
      setStarWarsData(data);
    }
    getPeople();
  }, [count]);
  // dependencies array contains values that if they change, will cause the effect hook's callback function to run

  function changeCount() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>The count is {count}</p>
      <button onClick={changeCount}>Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
