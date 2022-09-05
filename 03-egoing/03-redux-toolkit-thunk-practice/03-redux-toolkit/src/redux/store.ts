import { 
  combineReducers, 
  configureStore,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import counterSlice from "./slices/counterSlice";
import counterThunkSlice from "./slices/counterThunkSlice";

const rootReducer = combineReducers({
  counterSlice: counterSlice.reducer,
  counterThunkSlice: counterThunkSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(logger),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;