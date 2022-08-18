import React, { useState } from "react";
import "./Contact.css";

// pass in props by making props a parameter which is a Object of the props passed in
// from each instance of the Contact Component

// destructuring props object by using the object key names
export default function Contact({ img, name, phone, email, rank }) {
  const [count, setCount] = useState(0);

  function add() {
    // count++ modifies state directly so use count + 1 instead
    // also pass a call back function instead, for good practices
    // setter function takes in new value of state setCount(count + 1) or callback function that returns what the new value state is
    setCount((prevCount) => prevCount + 1);
  }

  function subtract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div className="contact-card">
      <img src={img} />
      <h3>
        {name}
        {rank === 2 && <p>BEST!!</p>}
      </h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{email}</p>
      </div>
      <p>{count}</p>
      <button onClick={add}>Add</button>
      <button onClick={subtract}>Subtract</button>
    </div>
  );
}
