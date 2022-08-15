import React, {
  useRef,
  useEffect,
} from "react";
import MainMenuItem from "./MainMenuItem";
import { MenuInfo } from "./menuInfoList";

import "./MainMenu.scss";

export type MainMenuProps = {
  menuItems: MenuInfo[];
  setGlobalWidth: (width: string) => void;
};

const MainMenu = ({
  menuItems,
  setGlobalWidth,
}: MainMenuProps) => {
  const $mainMenu = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const { width } = $mainMenu.current!.getBoundingClientRect();
    setGlobalWidth(`${width}px`);
  }, [setGlobalWidth]);
  
  return (
    <div className="MainMenu" ref={$mainMenu}>
      {menuItems.map(({ name, path }) => (
        <MainMenuItem 
          key={name}
          name={name}
          path={path}
        />
      ))}
    </div>
  );
};

export default React.memo(MainMenu);