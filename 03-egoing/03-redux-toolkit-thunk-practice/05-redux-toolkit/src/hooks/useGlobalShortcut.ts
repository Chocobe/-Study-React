import {
  useEffect,
} from "react";

const useGlobalShortcut = (
  shortcut: string,
  callback: (event: KeyboardEvent) => void
) => {
  const handleKeyup = (e: KeyboardEvent) => {
    if (e.key === shortcut) {
      callback(e);
    }
  }
  
  const initShortcut = () => {
    window.addEventListener("keyup", handleKeyup);
  };

  useEffect(() => {
    initShortcut();

    return () => {
      window.removeEventListener("keyup", handleKeyup);
    }
  }, []);
};

export default useGlobalShortcut;