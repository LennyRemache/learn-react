import React from "react";

export default function Form() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  function handleChange(event) {
    console.log(event.target.value);
    setFirstName(event.target.value);
    setLastName(event.target.value);
  }
  return (
    <form>
      <input type="text" placeholder="First Name" onChange={handleChange} />
      <input type="text" placeholder="Last Name" onChange={handleChange} />
    </form>
  );
}
