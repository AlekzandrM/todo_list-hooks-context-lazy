import React from "react";
import PropTypes from "prop-types";

function useInputHook(defaultValue = "") {
  const [value, setValue] = React.useState("");
  return {
    bind: {
      value: value,
      onChange: (e) => setValue(e.target.value)
    },
    clear: () => setValue(""),
    value: () => value
  };
}

function AddTodo({ onCreate }) {
  const input = useInputHook("");

  function handleSubmit(e) {
    e.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={handleSubmit}>
      <input type="text" {...input.bind} />
      <button type="submit">Add toto</button>
    </form>
  );
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired
};

export default AddTodo;
