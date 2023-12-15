// AddTodo.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/redux/actions";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addItem({ id: Date.now(), text: newTodo, done: false }));
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
