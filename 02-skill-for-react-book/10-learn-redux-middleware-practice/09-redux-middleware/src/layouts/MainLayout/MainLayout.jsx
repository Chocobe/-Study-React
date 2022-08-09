import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { 
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import cn from "classnames";

import "./MainLayout.scss";

const MainLayout = ({
  header, menuItems=[],
}) => {
  const [globalWidth, setGlobalWidth] = useState("auto");
  const loaded = useMemo(() => globalWidth !== "auto");

  /** @type { import("react").Ref<HTMLElement> } */
  const $menu = useRef(null);

  useEffect(() => {
    const { width } = $menu.current.getBoundingClientRect();
    setGlobalWidth(`${width}px`);
  }, []);
  
  return (
    <div 
      className={cn("MainLayout", { loaded })}
      style={{ 
        "--width": globalWidth,
      }}
    >
      <header className="header">
        <Link to="/">
          {header}
        </Link>
      </header>

      <nav className="menu" ref={$menu}>
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