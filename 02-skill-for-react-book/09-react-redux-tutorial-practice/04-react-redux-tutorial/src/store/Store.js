import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import todoListReducer from "./todoListReducer";

const rootReducer = combineReducers({
  todoList: todoListReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const Store = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Store;