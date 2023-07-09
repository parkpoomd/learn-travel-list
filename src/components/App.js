import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((prevItems) => [...prevItems, item]);
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function toggleItem(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form addItem={addItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        toggleItem={toggleItem}
        clearItems={clearItems}
      />
      <Stats items={items} />
    </div>
  );
}
