import { useState } from "react";
import "./App.css";
import { AddItemForm } from "./components/AddItemForm";
import { ItemList } from "./components/ItemList";

export const App = () => {
  const [items, setItems] = useState([
    {
      title: "First item!",
      content: "First item content",
    },
    {
      title: "Second item!",
      content: "Second item content",
    },
  ]);

  return (
    <div className="app">
      <AddItemForm items={items} setItems={setItems} />
      <ItemList items={items} />
    </div>
  );
};
export default App;
