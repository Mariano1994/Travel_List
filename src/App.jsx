import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { PackingList } from "./components/PackingList/PackingList";

export function App() {
  const [items, setItems] = useState([]);

  function handlerAddNewItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              packed: !item.packed,
            }
          : item
      )
    );
  }

  return (
    <>
      <div className="app">
        <Header />
        <Form onAddNewItem={handlerAddNewItem} />
        <PackingList
          items={items}
          onDeleteItems={handleDeleteItem}
          onPackItem={handleToggleItem}
        />
        <Footer items={items} />
      </div>
    </>
  );
}
