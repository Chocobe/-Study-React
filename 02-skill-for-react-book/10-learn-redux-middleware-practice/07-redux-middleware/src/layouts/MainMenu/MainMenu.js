import React, {
  useRef,
  useEffect,
} from "react";
import { Link } from "react-router-dom";

import "./MainMenu.scss";

const MainMenu = ({ 
  menuData=[], 
  setGlobalWidth
}) => {
  const $mainMenu = useRef(null);

  useEffect(() => {
    const { width } = $mainMenu.current.getBoundingClientRect();
    setGlobalWidth(width);
  }, [setGlobalWidth]);
  
  return (
    <ul className="MainMenu" ref={$mainMenu}>
      {menuData.map(({ name, to }) => (
        <li className="MainMenu-item" key={name}>
          <Link to={to}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MainMenu;