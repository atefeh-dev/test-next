// reducers.js
const initialState = {
  message: "Hello World",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
