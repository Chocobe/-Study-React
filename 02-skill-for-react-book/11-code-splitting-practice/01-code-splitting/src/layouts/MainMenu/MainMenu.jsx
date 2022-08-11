import React, {
  useRef,
} from "react";
import { NavLink } from "react-router-dom";
import { useMainMenu } from "./hooks";

import "./MainMenu.scss";

const MainMenu = ({
  menuItems,
  setGlobalWidth,
  setLoaded,
}) => {
  const $mainMenu = useRef(null);

  useMainMenu({ $mainMenu, setGlobalWidth, setLoaded });

  return (
    <div className="MainMenu" ref={$mainMenu}>
      {menuItems.map(({ name, path }) => (
        <div className="MainMenu-item" key={name}>
          <NavLink to={path}>{name}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default MainMenu;