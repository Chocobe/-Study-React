import { useEffect } from "react";

/**
 * @param {{
 *  setGlobalWidth: (width: string) => void;
 *  $mainMenu: import("react").RefObject<HTMLElement>;
 * }} param0 
 */
export const useOnMountedMainMenu = ({
  setGlobalWidth, $mainMenu
}) => {
  useEffect(() => {
    setGlobalWidth("auto");

    setTimeout(() => {
      const { width } = $mainMenu.current.getBoundingClientRect();
      setGlobalWidth(`${width}px`);
    });
  }, [setGlobalWidth, $mainMenu]);
};
