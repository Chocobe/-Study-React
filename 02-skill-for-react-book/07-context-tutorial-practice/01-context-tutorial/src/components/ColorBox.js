import React, {
  useContext,
} from "react";

import ColorContext from "../context/ColorContext";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    }}>
      <div style={{
        width: 64,
        height: 64,
        backgroundColor: state.color,
      }} />

      <div style={{
        width: 32,
        height: 32,
        backgroundColor: state.subColor,
      }} />
    </div>
  );
};

export default React.memo(ColorBox);