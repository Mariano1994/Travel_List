import { useState } from "react";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { PackingList } from "./components/PackingList/PackingList";



export function App() {
  const [items, setItems] = useState([]);

  function handlerAddNewItem(item) {
    setItems(items => [...items, item] )
  }

  return (
    <>
      <div className="app">
        <Header />
        <Form onAddNewItem={handlerAddNewItem}/>
        <PackingList item={items} />
        <Footer/>
      </div>
    </>
  );
}
