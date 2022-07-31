import React from "react";
import { BrowserRouter } from "react-router-dom";
import Store from "@/modules";
import MainRouter from "@/routers/MainRouter";

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