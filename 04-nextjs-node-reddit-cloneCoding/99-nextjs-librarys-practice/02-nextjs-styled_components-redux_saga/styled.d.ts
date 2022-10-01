import "styled-components";
import { ThemeColorName } from "./types";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      danger: string;
    }
  }
}