import React from "react";
import MyToggle from "./components/MyToggle";
import MyCounter from "./components/MyCounter";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">Redux</h1>

      <main className="main">
        <div className="main-item">
          <MyToggle />
        </div>

        <div className="main-item">
          <MyCounter />
        </div>
      </main>
    </div>
  );
};

export default App;