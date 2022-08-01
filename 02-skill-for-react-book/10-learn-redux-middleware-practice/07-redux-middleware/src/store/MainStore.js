import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import news from "./news";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  news,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
);

const MainStore = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default MainStore;