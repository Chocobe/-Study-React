import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceCount from "./slices/sliceCount";
import thunkCount from "./slices/thunkCount";

const rootReducer = combineReducers({
  temp: (state = { a: 1, b: 2 }, action) => state,
  sliceCount: sliceCount.reducer,
  thunkCount: thunkCount.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;