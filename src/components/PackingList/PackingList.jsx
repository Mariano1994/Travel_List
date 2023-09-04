import { useState } from "react";
import { Item } from "../Item/Item";


export function PackingList({ items, onDeleteItems, onPackItem, onResetItemsList}) {
  const [sortBy, setSortBy] = useState("input");

  let shortedItems;

  if (sortBy === "input") shortedItems = items;
  if (sortBy === "description")
    shortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    shortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  function handelSelectSortOption(event) {
    setSortBy(event.target.value);
  }

  return (
    <>
      <div className="list">
        <ul>
          {shortedItems.map((item) => {
            return (
              <Item
                item={item}
                key={item.id}
                onDeleteItems={onDeleteItems}
                onPackItem={onPackItem}
              />
            );
          })}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={handelSelectSortOption}>
            <option value="input"> Sort by input order</option>
            <option value="description"> Sort by description</option>
            <option value="packed"> Sort by packed status</option>
          </select>
          <button onClick={onResetItemsList}>Clear list</button>
        </div>
      </div>
    </>
  );
}
