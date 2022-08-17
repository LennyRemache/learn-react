import "./Contact.css";

// pass in props by making props a parameter which is a Object of the props passed in
// from each instance of the Contact Component

// destructuring props object by using the object key names
export default function Contact({ info }) {
  return (
    <div className="contact-card">
      <img src={info.img} />
      <h3>
        {info.name}
        {info.rank === 2 && <p>BEST!!</p>}
      </h3>
      <div className="info-group">
        <img src="./images/phone-icon.png" />
        <p>{info.phone}</p>
      </div>
      <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{info.email}</p>
      </div>
    </div>
  );
}
