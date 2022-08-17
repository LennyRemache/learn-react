import Contact from "./components/Contact";
import "./App.css";
import catData from "./catData.js";

function App() {
  // reduce prop clutter by passing in the whole data object as one prop
  // or by spreading object
  const contacts = catData.map((cat) => {
    return <Contact {...cat} />;
  });

  // custom components can have props/attribute of any name

  // React has the ability to render each array elements without need to loop through the array
  return <div className="contacts">{contacts}</div>;
}

export default App;
