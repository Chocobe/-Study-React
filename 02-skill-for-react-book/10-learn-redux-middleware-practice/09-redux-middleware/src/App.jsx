import React from "react";
import RootStore from "@store/RootStore";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "@router/MainRouter";

import "./App.scss";

const App = () => {
  return (
    <RootStore>
      <BrowserRouter>
        <div className="App">
          <MainRouter />
        </div>
      </BrowserRouter>
    </RootStore>
  );
};

export default App;