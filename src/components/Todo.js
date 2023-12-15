// components/Todo.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import { loadInitialData } from "@/redux/actions";

const Todo = () => {
  const dispatch = useDispatch();
  const initialData = useSelector((state) => state.items);
  console.log("i=", initialData);

  useEffect(() => {
    // Load initial data from the store
    dispatch(loadInitialData());
  }, [dispatch]);

  return (
    <div>
      <h2>Todo App</h2>
      <AddTodo />
      <TodoList initialData={initialData} />
      <TodoFilter />
    </div>
  );
};

export default Todo;
