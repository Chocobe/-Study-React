import React from "react";
import MainStore from "@/store/MainStore";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/MainRouter";

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