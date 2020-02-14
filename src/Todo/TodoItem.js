import React from "react";
import PropTypes from "prop-types";
import "./todo.css";
import Context from "../context";

function TodoItem({ todo, index, onChange }) {
  let { removeTodo } = React.useContext(Context);

  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="li">
      <span className={classes.join("")}>
        <input
          type="checkbox"
          checked={todo.completed}
          style={{ marginRight: "1rem" }}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>

      <button className="rm" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
