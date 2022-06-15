import React from "react";
import { ColorProvider } from "./context/color";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <hr />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;