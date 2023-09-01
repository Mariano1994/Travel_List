export function Item({ item, onDeleteItems, onPackItem }) {

  return (
    <>
      <li>
        <input type="checkbox" value={item.packed} onChange={()=>{onPackItem(item.id)}}/>
        <span style={item.packed ? { textDecorationLine: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌ </button>
      </li>
    </>
  );
}
