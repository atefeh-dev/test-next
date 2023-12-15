// // TodoList.js
import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { useDispatch } from "react-redux";
import { removeItem } from "@/redux/actions";

const TodoList = () => {
  const items = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filteredItems = items.filter((item) => {
    if (filter === "IN_PROGRESS") {
      return !item.done;
    } else if (filter === "DONE") {
      return item.done;
    } else {
      return true;
    }
  });

  const handleRemoveTodo = async (itemId) => {
    // Simulate API call with a timeout
    await new Promise((resolve) => setTimeout(resolve, 2000));

    dispatch(removeItem(itemId));
  };

  return (
    <ul>
      {filteredItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onRemove={handleRemoveTodo} />
      ))}
    </ul>
  );
};

export default TodoList;
