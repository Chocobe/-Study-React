import React from "react";
import ColorContext from "./context/ColorContext";
import ColorPicker from "./components/ColorPicker";
import ColorViewer from "./components/ColorViewer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <div className="App-wrapper">
        <h1 className="title">
          Color Box for Context API
        </h1>

        <ColorContext>
          <ColorPicker />
          <ColorViewer />
        </ColorContext>
      </div>
    </div>
  );
};

export  default App;