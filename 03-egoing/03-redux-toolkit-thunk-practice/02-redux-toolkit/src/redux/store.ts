import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import counterThunk from "./slices/counterThunk";

const rootState = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
  [counterThunk.name]: counterThunk.reducer,
});

const store = configureStore({
  reducer: rootState,
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;