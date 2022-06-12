import React from "react";

import "./MainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="MainLayout">
      <header className="header">
        <h1 className="header-title">
          Todo List
        </h1>
      </header>

      <main className="main">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;