import { Item } from "../Item/Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: true },
]

export function PackingList() {
  return (
    <>
      <div className="list">
        <ul>
          {initialItems.map((item) => {
            return <Item item={item} key={item.description} />;
          })}
        </ul>
      </div>
    </>
  );
}
