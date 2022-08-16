import "./Footer.css";
import Twitter from "../images/TwitterIcon.png";
import Facebook from "../images/Facebook Icon.png";
import Instagram from "../images/Instagram Icon.png";
import GitHub from "../images/GitHub Icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={Twitter} alt="" />
      <img src={Facebook} alt="" />
      <img src={Instagram} alt="" />
      <img src={GitHub} alt="" />
    </footer>
  );
}
