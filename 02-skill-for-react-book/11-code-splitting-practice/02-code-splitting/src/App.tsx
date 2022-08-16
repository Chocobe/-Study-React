import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";
import MainStore from "@/modules/MainStore";

import "./App.scss";

const App = () => {
  return (
    <MainStore>
      <BrowserRouter>
        <div className="App">
          <MainRouter />
        </div>
      </BrowserRouter>
    </MainStore>
  );
};

export default App;