function MainContent() {
  const list = (
    <ul>
      <li>test1</li>
      <li>test2</li>
    </ul>
  );
  return list;
}

ReactDOM.render(
  <div>
    <MainContent />
  </div>,
  document.getElementById("root")
);
