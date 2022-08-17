import "./Contact.css";

// pass in props by making props a parameter which is a Object of the props passed in
// from each instance of the Contact Component

// destructuring props object by using the object key names
export default function Contact({ img, name, phone, email, rank }) {
  function handleClick() {
    console.log("I was clicked!");
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
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
