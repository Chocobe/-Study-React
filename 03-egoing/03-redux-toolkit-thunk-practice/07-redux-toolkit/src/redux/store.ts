import { 
  combineReducers, 
  configureStore,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import countSlice from "./countSlice";
import countThunkSlice from "./countThunkSlice";

const temp1 = (state = { aa: "11" }) => {
  return state;
};

const rootReducer = combineReducers({
  temp1,
  countSlice: countSlice.reducer,
  countThunkSlice: countThunkSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(logger);
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;