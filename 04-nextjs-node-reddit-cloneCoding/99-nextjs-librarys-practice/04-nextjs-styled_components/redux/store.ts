import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

import countSlice from "./slices/countSlice";
import newsSlice from "./slices/newsSlice";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  count: countSlice,
  news: newsSlice,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(logger)
      .concat(sagaMiddleware);
  },
});

sagaMiddleware.run(rootSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;