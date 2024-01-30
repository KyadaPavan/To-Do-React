import { MdDelete } from "react-icons/md";
function Item({ todo_item, todo_date, onclickDelete }) {
  return (
    <div className={`   container`}>
      <div className={`row center margin `}>
        <div className="col-3 todo-item-title">{todo_item}</div>
        <div className="col-2 todo-item-date">{todo_date}</div>
        <div className="col-1 todo-tiem-delete">
          <button
            type="button"
            className="btn btn-danger button"
            onClick={() => onclickDelete(todo_item)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
