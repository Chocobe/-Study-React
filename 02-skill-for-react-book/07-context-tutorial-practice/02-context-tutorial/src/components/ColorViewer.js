import React, {
  useContext,
} from "react";
import { ColorStateContext } from "../context/ColorContext";

import "./ColorViewer.scss";

const ColorViewer = () => {
  const { mainColor, subColor } = useContext(ColorStateContext);
  
  return (
    <div className="ColorViewer">
      <div 
        className="mainColor"
        style={{ "--bg-color": mainColor }}
      >
        Main
      </div>

      <div 
        className="subColor"
        style={{ "--bg-color": subColor }}
      >
        Sub
      </div>
    </div>
  );
};

export default ColorViewer;