import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

const rootReducer = combineReducers({
  [counterSlice.name]: counterSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;

// export type RootState = ReturnType<typeof store.getState>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;