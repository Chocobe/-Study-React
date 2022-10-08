import React, {
  useState,
  useRef,
  useCallback,
} from "react";
import type { AppProps } from 'next/app'
import Head from "next/head";
import GlobalStyle from "../styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import {
  HeaderLayout,
  MenuLayout,
} from "@/layouts";
import styled from "styled-components";
import store from "@/redux/store";
import { Provider } from "react-redux";

const MyAppRoot = styled.div<{
  isLoaded: boolean;
}>`
  margin: 0 auto;

  width: auto;
  height: 100vh;

  display: flex;
  flex-direction: column;

  opacity: ${({ isLoaded }) => isLoaded ? '1' : '0' };
  transition: opacity 1s;

  & > *:last-child {
    height: 100%;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoadedMenuLayout, setIsLoadedMenuLayout] = useState(false);
  const $myApp = useRef<HTMLDivElement>(null);

  const initWidth = useCallback((width: number) => {
    $myApp.current!.style.width = `${width}px`;
    setIsLoadedMenuLayout(true);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <title>News List</title>
        </Head>

        <GlobalStyle />
        
        <MyAppRoot ref={$myApp} isLoaded={isLoadedMenuLayout}>
          <HeaderLayout />
          <MenuLayout onMounted={initWidth} />
          <Component {...pageProps} />
        </MyAppRoot>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
