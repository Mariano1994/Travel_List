export function Item({ item, onDeleteItems }) {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecorationLine: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌ </button>
      </li>
    </>
  );
}
