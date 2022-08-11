import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useMainLayout } from "./hooks";
import MainMenu from "@layouts/MainMenu/MainMenu";

import "./MainLayout.scss";

const MainLayout = ({
  header, menuItems,
}) => {
  const {
    globalWidth, setGlobalWidth,
    loaded, setLoaded,
  } = useMainLayout();
  
  return (
    <div 
      className={[
        "MainLayout",
        loaded ? "MainLayout__loaded" : "",
      ].join(" ").trim()}
      style={{ width: globalWidth }}
    >
      <header className="header">
        <Link to="/">{header}</Link>
      </header>

      <nav className="menu">
        <MainMenu 
          menuItems={menuItems} 
          setGlobalWidth={setGlobalWidth}
          setLoaded={setLoaded}
        />
      </nav>

      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;