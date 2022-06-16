import React, {
  useContext,
} from "react";

import ColorContext from "../context/ColorContext";

const colors = [
  "red", "orange", "yellow", "green",
  "blue", "indigo", "violet",
];

const ColorPicker = () => {
  const { actions } = useContext(ColorContext);

  return (
    <div 
      className="ColorPicker"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: 4,
      }}
    >
      {colors.map(color => (
        <div
          key={color}
          style={{
            width: 24,
            height: 24,
            backgroundColor: color,
          }}
          onClick={() => actions.setColor(color)}
          onContextMenu={e => {
            e.preventDefault();
            actions.setSubColor(color);
          }}
        />
      ))}
    </div>
  );
};

export default React.memo(ColorPicker);