import React from "react";
import CounterContainer from "./containers/CounterContainer";
import SampleContainer from "./containers/SampleContainer";

const App = () => {
  return (
    <div className="App">
      <CounterContainer />
      <SampleContainer />
    </div>
  );
};

export default App;