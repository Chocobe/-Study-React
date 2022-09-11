import { combineReducers, configureStore } from "@reduxjs/toolkit";
import countSlice from "./slices/countSlice";
import countThunk from "./slices/countThunk";

const rootReducer = combineReducers({
  countSlice: countSlice.reducer,
  countThunk: countThunk.reducer,
  temp1: (state = { a: 1, b: 2 }, action) => state,
  temp2: (state = { z: 111, x: 222 }, action) => state,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;