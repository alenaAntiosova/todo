import React, { useState } from "react";
import "./createTodoInput.css";

const CreateTodoInput = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div className="input__wrapper">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
        className="todo__input"
        placeholder="Add a task"
      />
    </div>
  );
};

export default CreateTodoInput;
