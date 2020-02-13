import React from "react";
import PropTypes from "prop-types";
import "./todo.css";

function TodoItem({ todo, index }) {
  return (
    <li className="li">
      <span>
        <input type="checkbox" style={{ marginRight: "1rem" }} />
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
  index: PropTypes.number.isRequired
};

export default TodoItem;
