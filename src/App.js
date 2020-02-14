import React from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";
import Context from "./context";

function App() {
  let [todos, setTodos] = React.useState([
    { id: 1, completed: false, title: "To buy bread" },
    { id: 2, completed: true, title: "To buy milk" },
    { id: 3, completed: false, title: "To buy butter" }
  ]);

  function handleToggle(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo List</h1>
        <TodoList todos={todos} onToggle={handleToggle} />
      </div>
    </Context.Provider>
  );
}

export default App;
