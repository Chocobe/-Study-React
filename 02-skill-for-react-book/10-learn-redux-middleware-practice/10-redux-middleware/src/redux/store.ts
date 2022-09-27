import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import countSlice from "./slices/countSlice";
import countThunkSlice from "./slices/countThunkSlice";
import countSagaSlice from "./slices/countSagaSlice";

import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const temp1 = (state={ aa: "11" }) => state;
const temp2 = (state={ aa: "22" }) => state;

const rootReducer = combineReducers({
  temp1,
  temp2,
  countSlice,
  countThunkSlice,
  countSagaSlice,
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