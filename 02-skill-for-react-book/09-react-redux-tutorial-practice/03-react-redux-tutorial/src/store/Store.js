import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import todoList from "./todoListStore";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  todoList,
});

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const Store = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default Store;