import React from "react";
import ReactLogo from "../images/react-logo.png";
import "../style.css";

function Navbar() {
  return (
    <>
      <nav className="nav-bar">
        <div className="main-logo">
          <img src={ReactLogo} width="40px" alt="React.js Logo" />
          <h2>ReactFacts</h2>
        </div>
        <h3 className="course-name">React Course - Project 1</h3>
      </nav>
    </>
  );
}

export default Navbar;
