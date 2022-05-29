import React from "react";

import "./MyButton.css";

const MyButton = ({
  type, onClick, children, className
}) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  
  return (
    <button
      className={[
        "MyButton",
        `MyButton_${btnType}`,
        className,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

MyButton.defaultProps = {
  type: "default",
  children: "MyButton Component",
};

export default React.memo(MyButton);