import "./App.css";
import ListGroup from "./components/ListGroup.tsx";
function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <>
      <ListGroup items={items} heading="List of Items" />
    </>
  );
}

export default App;
