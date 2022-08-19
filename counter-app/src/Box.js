import "./Box.css";
import React from "react";

export default function Box(props) {
  // give each Box component its own state in order to control its on property value when toggling colors
  // derived state from incoming props which doesnt update parent state values
  const [on, setOn] = React.useState(props.on);

  const styles = {
    backgroundColor: on ? "red" : "transparent",
  };

  function toggle() {
    setOn((prevOn) => !prevOn);
  }
  return <div className="box" style={styles} onClick={toggle}></div>;
}
