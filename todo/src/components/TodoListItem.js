import React from "react";

const TodoLlistItem = ({ todo, handleDelete }) => {
  return (
    <li>
      {todo.title}
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoLlistItem;