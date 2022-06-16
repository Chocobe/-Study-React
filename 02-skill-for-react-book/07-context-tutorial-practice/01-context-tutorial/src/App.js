import React from "react";
import { ColorProvider } from "./context/ColorContext";
import ColorPicker from "./components/ColorPicker";
import ColorBox from "./components/ColorBox";

const App = () => {
  return (
    <ColorProvider>
      <h1>Hello Color Selector</h1>
      <ColorPicker />
      <ColorBox />
    </ColorProvider>
  );
};

export default App;