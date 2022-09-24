import Counter from "@/components/Counter/Counter";
import CounterWithSlice from "@/components/CounterWithSlice/CounterWithSlice";
import CounterWithThunk from "@/components/CounterWithThunk/CounterWithThunk";

import appStyle from "./App.module.css";

function App() {
  return (
    <div className={appStyle.App}>
      <h1 className={appStyle.title}>
        Redux Toolkit Practice
      </h1>

      <Counter />
      <CounterWithSlice />
      <CounterWithThunk />
    </div>
  );
};

export default App;