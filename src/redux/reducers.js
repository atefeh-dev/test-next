// reducer.js
import { createReducer } from "@reduxjs/toolkit";
import * as ActionTypes from "./ActionTypes";

const initialState = {
  items: [],
  filter: "ALL",
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ActionTypes.SET_ITEMS, (state, action) => {
      state.items = action.payload;
    })
    .addCase(ActionTypes.ADD_ITEM, (state, action) => {
      state.items.push(action.payload);
    })
    .addCase(ActionTypes.REMOVE_ITEM, (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    })
    .addCase(ActionTypes.TOGGLE_ITEM, (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload ? { ...item, done: !item.done } : item
      );
    })
    .addCase(ActionTypes.SET_FILTER, (state, action) => {
      state.filter = action.payload;
    });
});

export default rootReducer;
