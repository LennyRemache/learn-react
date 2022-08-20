import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  console.log(formData);

  function handleChange(event) {
    // event.target is a DOM element where handleChange is used
    setFormData((prevForm) => {
      return {
        ...prevForm,
        // computed properties -> [<variable with name stored in it>], otherwise without the brackets itll be a syntax error
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
      />
    </form>
  );
}
