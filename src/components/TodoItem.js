// components/TodoItem.js
import { removeItem, toggleItem } from "@/redux/actions";
import React from "react";
import { useDispatch } from "react-redux";
const TodoItem = ({ todo }) => {
  if (!todo || !todo.id) {
    return null;
  }

  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeItem(todo.id));
  };

  const handleToggleTodo = () => {
    dispatch(toggleItem(todo.id));
  };

  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={handleToggleTodo} />
      {todo.text} <button onClick={handleRemoveTodo}>Remove</button>
    </li>
  );
};

export default TodoItem;
