import React, {
  useRef,
} from "react";
import { Link } from "react-router-dom";

import { useOnMountedMainMenu } from "./hooks";

import "./MainMenu.scss";

const MainMenu = ({
  menuItems, setGlobalWidth,
}) => {
  const $mainMenu = useRef(null);
  
  useOnMountedMainMenu({
    setGlobalWidth, $mainMenu,
  })
  
  return (
    <ul className="MainMenu" ref={$mainMenu}>
      {menuItems.map(({ name, path }) => (
        <li className="MainMenu-item" key={name}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;