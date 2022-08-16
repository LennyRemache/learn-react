import "./Contact.css";

// pass in props by making props a parameter which is a Object of the props passed in
// from each instance of the Contact Component
export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
