import React from "react";
import CounterContainer from "@containers/CounterContainer";
import NewsListContainer from "@containers/NewsListContainer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <CounterContainer />
      <hr className="my-20" />
      <NewsListContainer />
    </div>
  );
};

export default App;