import "./Info.css";
import Lenny from "../images/headshot.png";
import Mail from "../images/Mail.png";
import LinkedIn from "../images/Vector.png";

export default function Info() {
  return (
    <header>
      <img className="info-img" src={Lenny} alt="Lenny Remache" />
      <section className="info-content">
        <h1 className="info-name">Lenny Remache</h1>
        <h3 className="info-job-title">Frontend Developer</h3>
        <h4>github.com/LennyRemache</h4>
      </section>
      <section className="info-links">
        <button className="mail">
          <img src={Mail} alt="mail icon" />
          Email
        </button>
        <button className="linkedin">
          <img src={LinkedIn} alt="linkedin icon" />
          LinkedIn
        </button>
      </section>
    </header>
  );
}
