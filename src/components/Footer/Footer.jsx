
export function Footer({items}){
  return(
    <>
      <footer className="stats">
        <em> 💼 You have {items.length} items on your list, and you already packed X (X%) </em>
      </footer>
    </>
  )
}