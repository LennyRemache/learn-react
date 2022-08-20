import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    isFriendly: true,
  });

  console.log(formData);

  function handleChange(event) {
    // event.target is a DOM element where handleChange is used
    const { name, value, type, checked } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        // computed properties -> [<variable with name stored in it>], otherwise without the brackets itll be a syntax error
        //[event.target.name]: event.target.value,
        [name]: type === "checkbox" ? checked : value,
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
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName} // allows for state of value to be controlled by react rather than HTML's input tag
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />

      {/* <textarea value={}/> -> textarea is self closing in react */}

      <input
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
        name="isFriendly"
      />
      <label htmlFor="isFriendly">Are you friendly?</label>
    </form>
  );
}
