import "./Box.css";
import React from "react";

export default function Box(props) {
  const styles = {
    backgroundColor: props.on ? "red" : "transparent",
  };

  return (
    <div
      className="box"
      style={styles}
      onClick={() => props.handleClick(props.id)}
    ></div>
  );
}
