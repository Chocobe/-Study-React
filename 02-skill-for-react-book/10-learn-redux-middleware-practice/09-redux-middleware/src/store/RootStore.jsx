import { 
  combineReducers,
  applyMiddleware,
  createStore
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import news from "./news";
import loading from "./loading";

const rootReducer = combineReducers({
  news,
  loading,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
);

const RootStore = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default RootStore;