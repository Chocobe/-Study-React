import React, {
  useMemo,
} from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import cn from "classnames";

import "./MainLayout.scss";

const MainLayout = ({
  header, menuItems=[],
}) => {
  const routerParams = useParams();

  const category = useMemo(() => routerParams.category);
  
  return (
    <div className="MainLayout">
      <header className="header">
        {header}
      </header>

      <nav className="menu">
        {menuItems.map(({ path, name }) => (
          <NavLink 
            key={name} 
            to={path} 
            className={cn(
              "menu-item", 
              { active: name === path }
            )}
          >
            {name}
          </NavLink>
        ))}
      </nav>

      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;