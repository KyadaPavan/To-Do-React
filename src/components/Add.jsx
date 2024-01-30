import { useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

function Add({ onclickAdd }) {
  const todoelement = useRef();
  const duedateelement = useRef();

  let onhandelclick = () => {
    const todoname =
      todoelement.current.value.charAt(0).toUpperCase() +
      todoelement.current.value.slice(1);
    const tododate = duedateelement.current.value;
    onclickAdd(todoname, tododate);
    duedateelement.current.value = "";
    todoelement.current.value = "";
  };

  return (
    <div className="container">
      <div className="row center margin">
        <div className="col-3">
          <input
            type="text"
            placeholder="Enter TODO here"
            className="todo-input"
            ref={todoelement}
          />
        </div>
        <div className="col-2">
          <input type="date" className="todo-date" ref={duedateelement} />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success button"
            onClick={onhandelclick}
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
