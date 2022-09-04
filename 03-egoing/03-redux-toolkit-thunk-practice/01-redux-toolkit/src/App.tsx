import React from "react";
import store from "./redux";
import { Provider } from "react-redux";

import Counter from "./components/Counter";
import SliceCounter from "./components/SliceCounter";
import ThunkCounter from "./components/ThunkCounter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <hr />
        <SliceCounter />
        <hr />
        <ThunkCounter />
      </div>
    </Provider>
  );
};

export default App;