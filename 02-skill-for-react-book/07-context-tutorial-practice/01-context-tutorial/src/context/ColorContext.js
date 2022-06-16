import React, {
  useState,
} from "react";

const ColorContext = React.createContext({
  color: "#ff1493",
  subColor: "#03a9f4",
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("#ff1493");
  const [subColor, setSubColor] = useState("#03a9f4");

  const state = { color, subColor };
  const actions = { setColor, setSubColor };

  return (
    <ColorContext.Provider value={{ state, actions }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorContext;
export { ColorProvider };