import { createStore, combineReducers } from "redux";
import todoList from "./todoListStore";
import todoForm from "./todoFormStore";
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  combineReducers({
    todoList,
    todoForm,
  }),
  composeWithDevTools()
);