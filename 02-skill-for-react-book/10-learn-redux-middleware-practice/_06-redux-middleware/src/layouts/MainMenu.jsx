import React from "react";
import { NavLink } from "react-router-dom";

import "./MainMenu.scss";

const categories = [
  {
    to: "business",
    name: "비즈니스",
  },
  {
    to: "entertainment",
    name: "엔터테이먼트",
  },
  {
    to: "health",
    name: "건강",
  },
  {
    to: "science",
    name: "과학",
  },
  {
    to: "sports",
    name: "스포츠",
  },
  {
    to: "technology",
    name: "기술",
  },
];

const MainMenu = () => {
  return (
    <nav className="MainMenu">
      {categories.map((c, idx) => (
        <NavLink
          className="item"
          key={idx}
          to={c.to}
        >
          {c.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default MainMenu;