import React from "react";
import { NavLink } from "react-router-dom";

import "./MenuListItem.scss";

const MenuListItem = ({
  to, name,
}) => {
  return (
    <NavLink 
      className="MenuListItem"
      to={to}
    >
      {name}
    </NavLink>
  );
};

export default MenuListItem;