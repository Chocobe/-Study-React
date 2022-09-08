import Counter from "./components/Counter";
import SliceCounter from "./components/SliceCounter";
import ThunkCounter from "./components/ThunkCounter";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.scss";

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