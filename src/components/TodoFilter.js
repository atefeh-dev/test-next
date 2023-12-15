// TodoFilter.js
import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "@/redux/actions";

const TodoFilter = () => {
  const dispatch = useDispatch();

  const handleFilterClick = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <button onClick={() => handleFilterClick("ALL")}>All</button>
      <button onClick={() => handleFilterClick("IN_PROGRESS")}>
        In Progress
      </button>
      <button onClick={() => handleFilterClick("DONE")}>Done</button>
    </div>
  );
};

export default TodoFilter;
