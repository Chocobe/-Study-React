import { combineReducers } from "redux";
import { createStore } from "redux";
import todoList from "./todoList";

import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({
  todoList,
});

export default createStore(
  reducer,
  composeWithDevTools()
);