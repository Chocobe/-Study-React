import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#03a9f4",
    secondary: "#777",
  },
};

export default theme;
export type ThemeColorName = keyof typeof theme.colors;