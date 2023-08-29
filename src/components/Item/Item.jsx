export function Item({ item }) {
  return (
    <>
      <li>
        <span style= { item.packed? {textDecorationLine: "line-through"} : {}}>
          {item.quantity} {item.description}
        </span>
        <button>❌ </button>
      </li>
    </>
  );
}
