import React, {
  ReactNode,
} from "react";
import styled from "styled-components";
import { ThemeColorName } from "../types";

const Button = styled.button<{ themeName: ThemeColorName }>`
  padding: 16px 24px;

  color: #fff;
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ themeName, theme }) => theme.colors[themeName]};
  
  border-radius: 8px;
`;

export type MyButtonProps = {
  theme?: ThemeColorName;
  children: ReactNode;
  onClick?: () => any;
}

function MyButton(props: MyButtonProps) {
  const {
    theme: themeName = "primary",
    onClick = () => {},
    children,
  } = props;

  return (
    <Button 
      themeName={themeName}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default React.memo(MyButton);