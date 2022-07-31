import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import news from "./news";

const rootReducer = combineReducers({
  news,
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