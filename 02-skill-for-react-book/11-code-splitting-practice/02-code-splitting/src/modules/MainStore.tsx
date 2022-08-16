import React from "react";
import { 
  combineReducers,
  createStore,
  applyMiddleware,
  AnyAction,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk, {
  ThunkDispatch,
} from "redux-thunk";
import { Provider } from "react-redux";

import newsModule from "./news";

import { Reducer } from "redux";
const tempReducer: Reducer = (state={ test: "테스트 중 입니다."}) => {
  return state;
};

export const rootReducer = combineReducers({
  news: newsModule,
  temp: tempReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
);

const MainStore = ({ 
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default MainStore;

export type RootState = ReturnType<typeof rootReducer>;
export type ThunkAnyDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
