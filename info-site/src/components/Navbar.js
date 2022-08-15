import React from "react";
import ReactLogo from "../images/react-logo.png";
import "../style.css";

function Navbar() {
  return (
    <nav className="nav-bar">
      <img src={ReactLogo} width="30px" alt="React.js Logo" />
      <h3 className="page-name">ReactFacts</h3>
      <h4 className="course-name">React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
