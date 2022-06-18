import React, {
  useCallback,
} from "react";

import "./ColorBox.scss";

const ColorBox = ({
  color, onChangeMainColor, onChangeSubColor,
}) => {
  const onClick = useCallback(() => {
    onChangeMainColor(color);
  }, [color, onChangeMainColor]);

  const onContextMemu = useCallback(e => {
    e.preventDefault();
    onChangeSubColor(color);
  }, [color, onChangeSubColor]);
  
  return (
    <div
      className="ColorBox"
      style={{ "--bg-color": color }}
      onClick={onClick}
      onContextMenu={onContextMemu}
    />
  );
};

export default React.memo(ColorBox);