import { useState } from "react";

export function Form({ onAddNewItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Funtion to ADD New Items
  function handleSubmit(event) {
    event.preventDefault();

    const newItemData = {
      quantity,
      description,
      packed: false,
      id: Date.now(),
    };

    onAddNewItem(newItemData);

    setDescription("");
    setQuantity(1);
  }

  function setNewItemHandler(event) {
    setDescription(event.target.value);
  }

  function setNewQuantityHandler(event) {
    setQuantity(Number(event.target.value));
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3> What do you need for your 😍 trip?</h3>

        <select value={quantity} onChange={setNewQuantityHandler}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={setNewItemHandler}
          required
        />
        <button> Add</button>
      </form>
    </>
  );
}
