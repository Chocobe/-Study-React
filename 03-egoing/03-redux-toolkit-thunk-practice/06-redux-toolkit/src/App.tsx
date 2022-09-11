import { Provider } from "react-redux";
import store from "./redux/store";

import Counter from "./components/Counter";
import CounterWithSlice from "./components/CounterWithSlice";
import CounterWithThunk from "./components/CounterWithThunk";

import "./App.scss";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <CounterWithSlice />
        <CounterWithThunk />
      </div>
    </Provider>
  );
};

export default App;