import { useContext } from "react";
import Item from "./Item";
import { TodoItemsContext } from "../store/todostore";

function Items({ onclickDelete }) {
  const todoitems = useContext(TodoItemsContext);
  return (
    <div className={`  items-container`}>
      {todoitems.map((items) => (
        <Item
          key={items.name}
          todo_item={items.name}
          todo_date={items.duedate}
          onclickDelete={onclickDelete}
        />
      ))}
    </div>
  );
}

export default Items;
