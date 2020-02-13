import React from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";

function App() {
  return (
    <div className="wrapper">
      <h1>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
