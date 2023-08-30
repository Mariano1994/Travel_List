import { Item } from "../Item/Item";


export function PackingList({item}) {

  return (
    <>
      <div className="list">
        <ul>
          {item.map((item) => {
            return <Item item={item} key={item.id} />;
          })}
        </ul>
      </div>
    </>
  );
}
