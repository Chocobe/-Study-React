import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "@/router/MainRouter";
import Store from "@store/Store";

import "./App.scss";

const App = () => {
  return (
    <Store>
      <BrowserRouter>
        <div className="App">
          <MainRouter />
        </div>
      </BrowserRouter>
    </Store>
  );
};

export default App;