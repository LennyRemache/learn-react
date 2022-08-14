function NavBar() {
  return (
    // this is JSX code
    <nav>
      <h1>Lenny's Restaurant</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

ReactDOM.render(
  <div>
    <NavBar />
  </div>,
  document.getElementById("root")
);

const list = (
  <ul>
    <li>test1</li>
    <li>test2</li>
  </ul>
);

console.log(list);
