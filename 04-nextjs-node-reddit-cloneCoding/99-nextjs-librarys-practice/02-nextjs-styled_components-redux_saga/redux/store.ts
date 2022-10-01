import { 
  combineReducers, 
  configureStore
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const temp1 = (state = { aa: "11 "}) => state;

const rootReducer = combineReducers({
  temp1,
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

// TODO: rootSaga 넘겨주기
// sagaMiddleware.run()

export default store;