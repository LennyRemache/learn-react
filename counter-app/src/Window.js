import React from "react";
import { useState, useEffect } from "react";

export default function Window() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = () => {
      console.log("setting up...");
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", watchWidth);

    // cleanup function to prevent memory leaks
    // when component is about to be removed from the DOM
    // the return function in useEffect's callback/effect function is ran
    return function () {
      console.log("cleaning...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1>Window Width {windowWidth}</h1>;
}
