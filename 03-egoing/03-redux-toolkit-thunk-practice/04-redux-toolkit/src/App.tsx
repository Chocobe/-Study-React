import { Provider } from "react-redux";
import store from "@/redux/store";

import Counter from "@/components/Counter";
import CountWithSlice from "@/components/CountWithSlice";
import CountWithThunk from "@/components/CountWithThunk";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <hr />
        <CountWithSlice />
        <hr />
        <CountWithThunk />
      </div>
    </Provider>
  );
};

export default App;