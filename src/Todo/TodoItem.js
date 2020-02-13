import React from "react";
import PropTypes from "prop-types";
import "./todo.css";

function TodoItem({ todo, index, onChange }) {
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }

  return (
    <li className="li">
      <span className={classes.join("")}>
        <input
          type="checkbox"
          style={{ marginRight: "1rem" }}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>

      <button className="rm">&times;</button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoItem;
