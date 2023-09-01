export function Footer({ items }) {

  
  if (!items.length)
    return (
      <p className="stats">
        <em> Start adding some items into your packing list 🚀 </em>
      </p>
    );

  const numItems = items.length;
  const numPackedItems = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPackedItems / numItems) * 100);

  return (
    <>
      <footer className="stats">
        {percentage === 100 ? (
          <em>You got everything! Ready to go ✈️</em>
        ) : (
          <em>
            💼 You have {numItems} items in the list, and you already packed{" "}
            {numPackedItems}, {percentage}%{" "}
          </em>
        )}
      </footer>
    </>
  );
}
