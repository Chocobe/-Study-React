import React, {
  useState,
  useMemo,
} from "react";
import { Link, Outlet } from "react-router-dom";
import MainMenu from "./MainMenu";

import "./MainLayout.scss";

const MainLayout = ({
  header, menuItems,
}) => {
  const [width, setWidth] = useState("auto");
  const style = useMemo(() => ({ 
    width,
    opacity: width === "auto" ? 0 : 1
  }), [width]);

  return (
    <div className="MainLayout" style={style}>
      <header className="header">
        <Link to="/">{header}</Link>
      </header>

      <nav className="menu">
        <MainMenu 
          menuItems={menuItems} 
          setGlobalWidth={setWidth}
        />
      </nav>

      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;