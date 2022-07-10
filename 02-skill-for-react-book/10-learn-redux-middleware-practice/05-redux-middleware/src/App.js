import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "@/router/Router";

import Store from "@/store/Store";

import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Store>
        <div className="App">
          <MainRouter />
        </div>
      </Store>
    </BrowserRouter>
  );
};

export default App;