import React, { useEffect, Suspense } from "react";
import "./App.css";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import Loader from "./Loader/Loader";

const AddTodo = React.lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(import("./Todo/AddTodo")), 3000);
    })
);

function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 2000);
      });
  }, []);

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

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: new Date(),
          completed: false
        }
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo List</h1>

        <Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </Suspense>

        {loading && <Loader />}
        {todos.length ? (
          <TodoList todos={todos} onToggle={handleToggle} />
        ) : loading ? null : (
          <p>No todos! </p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
