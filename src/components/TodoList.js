// TodoList.js
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const items = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);

  // Implement your filtering logic based on the 'filter' value
  const filteredItems = items.filter((item) => {
    if (filter === "IN_PROGRESS") {
      return !item.done;
    } else if (filter === "DONE") {
      return item.done;
    } else {
      return true; // Show all items for 'ALL' filter
    }
  });

  return (
    <ul>
      {filteredItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
