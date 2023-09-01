
export function Footer({items}){

  
  const numItems = items.length;
  const numPackedItems = items.filter(item => item.packed === true).length

  return(
    <>
      <footer className="stats">
        <em> 💼 You have {numItems} items on your list, and you already packed {numPackedItems}, ({Math.round(numPackedItems / numItems *100)}%)</em>
      </footer>
    </>
  )
}