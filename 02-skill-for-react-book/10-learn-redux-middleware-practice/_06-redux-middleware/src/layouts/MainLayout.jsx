import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import MainMenu from "./MainMenu";

import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <div className="MainLayout">
      <header className="header">
        <NavLink
          className="header-title"
          to="/"
        >
          News List
        </NavLink>
      </header>

      <MainMenu />

      <Outlet />
    </div>
  );
};

export default MainLayout;