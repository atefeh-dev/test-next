// actions.js
import * as ActionTypes from "./actionTypes";

export const setItems = (items) => ({
  type: ActionTypes.SET_ITEMS,
  payload: items,
});

export const addItem = (item) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (itemId) => ({
  type: ActionTypes.REMOVE_ITEM,
  payload: itemId,
});

export const toggleItem = (itemId) => ({
  type: ActionTypes.TOGGLE_ITEM,
  payload: itemId,
});

export const setFilter = (filter) => ({
  type: ActionTypes.SET_FILTER,
  payload: filter,
});

export const loadInitialData = () => {
  return async (dispatch) => {
    try {
      // Simulating an API call or loading from a file
      const response = await fetch("/path/to/initialData.json");
      const initialData = await response.json();

      // Dispatch the initial data to the store
      dispatch(setItems(initialData));
    } catch (error) {
      console.error("Error loading initial data:", error);
    }
  };
};
