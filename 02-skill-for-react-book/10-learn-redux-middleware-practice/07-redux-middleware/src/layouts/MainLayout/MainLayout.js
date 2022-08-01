import React, {
  useState,
} from "react";
import { Link, Outlet } from "react-router-dom";
import MainMenu from "@layouts/MainMenu/MainMenu";

import "./MainLayout.scss";

const MainLayout = ({
  header, menuData,
}) => {
  const [globalWidth, setGlobalWidth] = useState('auto');
  
  return (
    <div 
      className="MainLayout"
      style={{
        width: `${globalWidth}px`,
      }}
    >
      <header className="header">
        <Link to="/">{header}</Link>
      </header>

      <nav className="menu">
        <MainMenu
          menuData={menuData}
          setGlobalWidth={setGlobalWidth}
        />
      </nav>

      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;