// // TodoItem.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleItem } from "@/redux/actions";

const TodoItem = ({ todo }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleToggleTodo = async () => {
    if (!loading) {
      setLoading(true);

      // Simulate API call with a timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      dispatch(toggleItem(todo.id));
      setLoading(false);
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={handleToggleTodo}
        disabled={loading}
      />
      {todo.text}
    </li>
  );
};

export default TodoItem;
