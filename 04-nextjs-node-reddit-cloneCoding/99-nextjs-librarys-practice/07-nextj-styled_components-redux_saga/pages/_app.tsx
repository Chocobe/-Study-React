import {
  useState,
  useCallback,
} from "react";
import { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import styled from "styled-components";

import { Provider } from "react-redux";
import store from "@/redux/store";

import {
  LayoutHeader,
  LayoutMenu,
} from "@/layouts";

const MyAppRoot = styled.div<{ 
  width: string;
  isLoaded: boolean;
}>`
  margin: 0 auto;

  width: ${({ width }) => width};
  height: 100vh;
  opacity: ${({ isLoaded }) => isLoaded ? 1 : 0};

  display: flex;
  flex-direction: column;

  transition: all 1s ease;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [rootStyle, setRootStyle] = useState({
    width: "auto",
    isLoaded: false,
  });
  
  const initGlobalWidth = useCallback((width: string) => {
    setRootStyle({
      width,
      isLoaded: true,
    });
  }, []);
  
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />

        <MyAppRoot {...rootStyle}>
          <LayoutHeader />
          <LayoutMenu onMounted={initGlobalWidth} />
          <Component {...pageProps} />
        </MyAppRoot>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;