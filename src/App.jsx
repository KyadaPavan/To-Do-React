import AppName from "./components/AppName";
import Add from "./components/Add";
import Items from "./components/Items";
import "./App.css";
import Welcomemessage from "./components/Welcomemessage";
import { useState } from "react";
import { TodoItemsContext } from "./store/todostore";

function App() {
  const [todoitems, settodoitems] = useState([]);

  const onclickAdd = (itemname, itemduedate) => {
    const newitem = [...todoitems, { name: itemname, duedate: itemduedate }];
    settodoitems(newitem);
  };

  const onclickDelete = (itemname) => {
    let filtereditems = todoitems.filter((x) => x.name !== itemname);
    settodoitems(filtereditems);
  };

  return (
    <TodoItemsContext.Provider value={todoitems}>
      <div className="todo-container">
        <AppName />
        <Add onclickAdd={onclickAdd} />
        <Welcomemessage />
        <Items onclickDelete={onclickDelete} />
      </div>
    </TodoItemsContext.Provider>
  );
}

export default App;
