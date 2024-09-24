import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <div className="itemsList">
      {items.map((e, index) => {
        return (
          <Item title={e.title} content={e.content} key={"item_" + index} />
        );
      })}
    </div>
  );
};
