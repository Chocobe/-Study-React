import { useState } from "react";

export const useMainLayout = () => {
  const [globalWidth, setGlobalWidth] = useState("auto");
  const [loaded, setLoaded] = useState(false);

  return {
    globalWidth, setGlobalWidth,
    loaded, setLoaded,
  };
};