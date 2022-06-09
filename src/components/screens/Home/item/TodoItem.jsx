import React from "react";
import { BsTrash } from "react-icons/bs";
import "./todoItem.css";

import Check from "./Checkbox/Check";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="toDoItem">
      <button
        className="toDoItem__button button"
        onClick={() => changeTodo(todo.id)}
      >
        <Check isCompleted={todo.isCompleted} />
        <p className="toDoItem__text">{todo.title}</p>
      </button>
      <button className="button" onClick={() => removeTodo(todo.id)}>
        <BsTrash className="toDoItem__trash" />
      </button>
    </div>
  );
};

export default TodoItem;
