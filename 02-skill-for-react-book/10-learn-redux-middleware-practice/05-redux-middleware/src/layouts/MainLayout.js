import React, {
  useState,
  useCallback,
} from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainMenu from "./MainMenu";

import "./MainLayout.scss";

const MainLayout = () => {
  const [globalWidth, setGlobalWidth] = useState("auto");
  const onMounted = useCallback(globalWidth => {
    setGlobalWidth(globalWidth);
  }, []);

  return (
    <div 
      className="MainLayout" 
      style={{ width: globalWidth }}
    >
      <div className="MainLayout-sticky">
        <MainHeader />
        <MainMenu onMounted={onMounted} />
      </div>

      <main className="MainLayout-main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;