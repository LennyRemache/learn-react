import Contact from "./components/Contact";
import "./App.css";
import catData from "./catData.js";

function App() {
  const contacts = catData.map(({ img, name, phone, email, rank }) => {
    return (
      <Contact img={img} name={name} phone={phone} email={email} rank={rank} />
    );
  });

  // custom components can have props/attribute of any name

  // React has the ability to render each array elements without need to loop through the array
  return <div className="contacts">{contacts}</div>;
}

export default App;
