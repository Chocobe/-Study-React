import React, {
  useRef,
  useEffect,
} from "react";
import { NavLink } from "react-router-dom";

import "./MainMenu.scss";

const menus = [
  {
    to: "/business",
    text: "Business",
  },
  {
    to: "/entertainment",
    text: "EnterTainment",
  },
  {
    to: "/health",
    text: "Health",
  },
  {
    to: "/science",
    text: "Science",
  },
  {
    to: "/sports",
    text: "Sports",
  },
  {
    to: "/technology",
    text: "Technology",
  },
];

const MainMenu = ({
  onMounted,
}) => {
  const $mainMenu = useRef(null);

  useEffect(() => {
    const rect = $mainMenu.current.getBoundingClientRect();
    onMounted(rect.width);
  }, [onMounted]);
  
  return (
    <nav className="MainMenu" ref={$mainMenu}>
      {menus.map(menu => (
        <NavLink
          key={menu.text}
          to={menu.to}
          className="MainMenu-item"
        >
          {menu.text}
        </NavLink>
      ))}
      {/* <NavLink to="/business" className="MainMenu-item">
        Business
      </NavLink>
      
      <NavLink to="/entertainment" className="MainMenu-item">
        EnterTainment
      </NavLink> */}
    </nav>
  );
};

export default MainMenu;