import { createStore } from "redux";

const reducer = (state, action) => {
  const newState = {
    ...state,
  };

  if (state === undefined) return { number: 1 };

  if (action.type === "PLUS") newState.number++;
  
  return newState;
};

const store = createStore(
  reducer
);

export default store;