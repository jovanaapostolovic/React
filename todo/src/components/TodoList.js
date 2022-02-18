import React from "react";
import TodoLlistItem from "./TodoListItem";

const TodoList = ({ todos, handleDelete }) => {
  return (
    <ul>
      {todos.length
        ? todos.map((todo) => (
            <TodoLlistItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
            />
          ))
        : "You are finished with your todo list. Congratz!"}
    </ul>
  );
};

export default TodoList;