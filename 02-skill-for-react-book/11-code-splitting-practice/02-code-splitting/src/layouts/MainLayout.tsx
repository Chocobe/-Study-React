import React, {
  useState,
  useMemo,
} from "react";
import {
  Link, Outlet,
} from "react-router-dom";
import MainMenu from "./MainMenu";
import { menuInfoList } from "./menuInfoList";

import "./MainLayout.scss";

type MainLayoutProps = {
  header: string,
};

const MainLayout = ({
  header,
}: MainLayoutProps) => {
  const [globalWidth, setGlobalWidth] = useState("auto");
  
  const style = useMemo(() => ({
    "--width": globalWidth,
  }) as React.CSSProperties, [globalWidth]);

  const isMountedMainMenu = useMemo(() => {
    return globalWidth !== "auto";
  }, [globalWidth]);

  return (
    <div 
      className={[
        "MainLayout",
        isMountedMainMenu && "loaded",
      ].join(" ").trim()}
      style={style}
    >
      <header className="header">
        <Link to="/">{header}</Link>
      </header>

      <nav className="menu">
        <MainMenu 
          menuItems={menuInfoList} 
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