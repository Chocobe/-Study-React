import React, {
  useContext,
  useCallback,
} from "react";
import { ColorDispatchContext } from "../context/ColorContext";
import ColorBox from "./ColorBox";

import "./ColorPicker.scss";

const colors = [
  "red", "orange", "yellow", "green",
  "blue", "indigo", "violet",
];

const ColorPicker = () => {
  const dispatch = useContext(ColorDispatchContext);

  const onChangeMainColor = useCallback(color => {
    dispatch({
      type: "MAIN_COLOR",
      color,
    });
  }, [dispatch]);

  const onChangeSubColor = useCallback(color => {
    dispatch({
      type: "SUB_COLOR",
      color,
    });
  }, [dispatch]);
  
  return (
    <div className="ColorPicker">
      {colors.map(color => (
        // <div
        //   className="colorBox"
        //   key={color}
        //   style={{ "--bg-color": color }}
        //   onClick={onClickMainColor}
        //   onContextMenu={onClickSubColor}
        // />
        <ColorBox 
          key={color}
          color={color} 
          onChangeMainColor={onChangeMainColor}
          onChangeSubColor={onChangeSubColor}
        />
      ))}
    </div>
  );
};
export default React.memo(ColorPicker);