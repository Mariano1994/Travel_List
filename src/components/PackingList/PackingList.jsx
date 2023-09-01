import { Item } from "../Item/Item";

export function PackingList({ items, onDeleteItems }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => {
            return (
              <Item item={item} key={item.id} onDeleteItems={onDeleteItems} />
            );
          })}
        </ul>
      </div>
    </>
  );
}
