import React from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "To buy bread" },
    { id: 2, completed: false, title: "To buy milk" },
    { id: 3, completed: false, title: "To buy butter" }
  ];

  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
