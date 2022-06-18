import React, {
  useReducer,
} from "react";

import colorReducer from "./colorReducer";

export const ColorStateContext = React.createContext({
  mainColor: "#ddd",
  subColor: "#ddd",
});

export const ColorDispatchContext = React.createContext(
  /**
   * @param {{
   *  type: "MAIN_COLOR" | "SUB_COLOR",
   *  color?: string;
   * }} params 
   */
  params => {},
);

const ColorContext = ({ children }) => {
  const [colors, dispatch] = useReducer(colorReducer, undefined, () => ({
    mainColor: "#000",
    subColor: "#000",
  }));

  return (
    <ColorStateContext.Provider value={colors}>
      <ColorDispatchContext.Provider value={dispatch}>
        {children}
      </ColorDispatchContext.Provider>
    </ColorStateContext.Provider>
  );
};

export default React.memo(ColorContext);