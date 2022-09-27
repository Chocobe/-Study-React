import React from "react";
import { 
  CounterWithState,
  CounterWithSlice,
  CounterWithThunk,
  CounterWithSaga,
} from "@/components";

import { Provider } from "react-redux";
import store from "@/redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1 className="App-title">Redux Middleware Practice (redux-saga)</h1>

        <div className="App-wrapper">
          <CounterWithState />
          <CounterWithSlice />
          <CounterWithThunk />
          <CounterWithSaga />
        </div>
      </div>
    </Provider>
  );
}

export default App;