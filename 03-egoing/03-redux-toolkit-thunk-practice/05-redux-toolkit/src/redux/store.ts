import { 
  combineReducers, 
  configureStore,
} from "@reduxjs/toolkit";
import {
  sliceCount,
  thunkCount,
} from "./slices";

const rootReducer = combineReducers({
  sliceCount: sliceCount.reducer,
  thunkCount: thunkCount.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;