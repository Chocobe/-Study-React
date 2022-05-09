import React from "react";

import "./MyHeader.css";

const MyHeader = ({ 
  leftChild, rightChild, children, className,
}) => {
  return (
    <header className={[
      "MyHeader",
      className,
    ].join(" ")}>
      <div className="MyHeader-leftSide">
        {leftChild}
      </div>

      <div className="MyHeader-text">
        {children}
      </div>

      <div className="MyHeader-rightSide">
        {rightChild}
      </div>
    </header>
  );
};

MyHeader.defaultProps = {
  children: "MyHeader Default Text",
};

export default React.memo(MyHeader);