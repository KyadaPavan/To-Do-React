import { useContext } from "react";
import styles from "./Welcomemessage.module.css";
import { TodoItemsContext } from "../store/todostore";

function Welcomemessage() {
  const todoitems = useContext(TodoItemsContext);
  return (
    todoitems.length === 0 && <h3 className={styles.message}>Enjoy Your Day</h3>
  );
}

export default Welcomemessage;
