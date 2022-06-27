import React from "react";

import "./MainLayout.scss";

const MainLayout = ({
  children,
}) => {
  return (
    <div className="MainLayout">
      <header>
        <h1 className="title">
          일정 관리
        </h1>
      </header>

      {children}
    </div>
  );
};

export default MainLayout;