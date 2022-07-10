import React from "react";
import { combineReducers, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import loggerMiddleware from "../lib/loggerMiddleware";
import counter from "./counter";
import sample from "./sample";

const rootReducer = combineReducers({
  counter,
  sample,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk),
    applyMiddleware(loggerMiddleware)
  )
);

const Store = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Store;