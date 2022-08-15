import React from "react";
import { NavLink } from "react-router-dom";
import { MenuInfo } from "./menuInfoList";

import "./MainMenuItem.scss";

export type MainMenuItemProps = MenuInfo;

const MainMenuItem = ({
  name, path,
}: MainMenuItemProps) => {
  return (
    <NavLink
      to={path} 
      className={({ isActive }) => [
        "MainMenuItem",
        isActive ? "isSelected" : "",
      ].join(" ").trim()}
    >
      {name}
    </NavLink>
  );
};

export default React.memo(MainMenuItem);