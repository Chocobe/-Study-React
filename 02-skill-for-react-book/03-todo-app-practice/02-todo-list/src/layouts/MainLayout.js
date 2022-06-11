import React from "react";

import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <div className="title">
        Todo List
      </div>

      <main className="main">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;