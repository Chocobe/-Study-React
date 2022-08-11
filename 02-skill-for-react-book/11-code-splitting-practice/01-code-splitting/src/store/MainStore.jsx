import React from "react";
import { 
  combineReducers,
  createStore,
  applyMiddleware
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import news from "./news";

const tempReducer = (state={ aa: "Hello World" }) => {
  return state;
};

const rootReducer = combineReducers({
  news,
  tempReducer,
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