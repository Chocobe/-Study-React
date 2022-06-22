import React from "react";
import ChocobeToggle from "./components/ChocobeToggle";
import ChocobeCounter from "./components/ChocobeCounter";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <h1 className="title">
        Vanilla Redux 연습 05
      </h1>

      <main className="main">
        <section className="main-section">
          <ChocobeToggle />
        </section>

        <section className="main-section">
          <ChocobeCounter />
        </section>
      </main>
    </div>
  );
};

export default App;