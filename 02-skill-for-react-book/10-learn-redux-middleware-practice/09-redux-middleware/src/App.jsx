import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "@router/MainRouter";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;