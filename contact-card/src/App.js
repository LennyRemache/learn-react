import Contact from "./components/Contact";
import "./App.css";

import felix from "./images/felix.jpeg";
import fluffykins from "./images/fluffykins.jpeg";
import pumpkin from "./images/pumpkin.jpeg";
import whiskerson from "./images/whiskerson.jpeg";

function App() {
  // custom components can have props/attribute of any name
  return (
    <div className="contacts">
      <Contact
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={fluffykins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
      <Contact
        img={whiskerson}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email=">mr.whiskaz@catnap.meow"
      />
    </div>
  );
}

export default App;
