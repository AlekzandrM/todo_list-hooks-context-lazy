import React from "react";

function AddTodo({ onCreate }) {
  const [value, setValue] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue("");
    }
  }

  return (
    <form style={{ marginBottom: "1rem" }} onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add toto</button>
    </form>
  );
}

export default AddTodo;
