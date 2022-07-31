import React, {
  useState,
  useEffect,
} from "react";
import { Outlet, NavLink } from "react-router-dom";
import MenuList from "@components/MenuList/MenuList";

import "./MainLayout.scss";

const MainLayout = () => {
  const [globalWidth, setGlobalWidth] = useState("auto");
  
  return (
    <div 
      className="MainLayout"
      style={{
        width: globalWidth,
      }}
    >
      <div className="headerWrapper">
        <header className="header">
          <NavLink to="/">
            News List
          </NavLink>
        </header>

        <nav className="menu">
          <MenuList setGlobalWidth={setGlobalWidth} />
        </nav>
      </div>

      <section className="contents">
        <Outlet />
      </section>
    </div>
  );
};

export default MainLayout;