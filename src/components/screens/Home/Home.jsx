import React, { useState } from "react";
import CreateTodoInput from "./create-todo-input/CreateTodoInput";
import TodoItem from "./item/TodoItem";
import "./home.css";

const data = [
  {
    id: "ponn23",
    title: "Закончить проект",
    isCompleted: false,
  },
  {
    id: "gjjkjl2",
    title: "Посмотреть видео",
    isCompleted: false,
  },
  {
    id: "ho2qwefcev3",
    title: "Составить список",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const newTodo = [...todos];
    const current = newTodo.find((item) => item.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(newTodo);
  };

  const removeTodo = (id) =>
    setTodos([...todos].filter((item) => item.id !== id));

  return (
    <div className="todo__wrapper">
      <h1 className="todo__title">Список задач</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodoInput setTodos={setTodos} />
    </div>
  );
};

export default Home;
