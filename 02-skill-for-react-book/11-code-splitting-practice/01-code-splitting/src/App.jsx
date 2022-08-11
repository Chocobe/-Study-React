import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "@router/MainRouter";
import MainStore from "@store/MainStore";

import "./App.scss";

const App = () => {
  return (
    <MainStore>
      <div className="App">
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </div>
    </MainStore>
  );
};

export default App;