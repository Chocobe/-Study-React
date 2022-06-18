import React from "react";

import "./MainLayout.scss";

const MainLayout = ({ title, children }) => {
  return (
    <div className="MainLayout">
      <div className="MainLayout-wrapper">
        <header className="header">
          <h1 className="header-title">
            {title}
          </h1>
        </header>

        <main className="main">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;