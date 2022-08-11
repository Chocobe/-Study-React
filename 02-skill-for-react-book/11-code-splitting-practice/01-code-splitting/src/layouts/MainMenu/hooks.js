import { useState, useEffect } from "react";

/**
 * @param { import("react").RefObject<HTMLElement> } $mainMenu 
 * @param { (width: number) => void } setGlobalWidth 
 */
export const useMainMenu = ({
  $mainMenu,
  setGlobalWidth,
  setLoaded
}) => {
  useEffect(() => {
    const { width } = $mainMenu.current.getBoundingClientRect();
    setGlobalWidth(width);
    setLoaded(!!width);
  }, [$mainMenu, setGlobalWidth, setLoaded]);
};