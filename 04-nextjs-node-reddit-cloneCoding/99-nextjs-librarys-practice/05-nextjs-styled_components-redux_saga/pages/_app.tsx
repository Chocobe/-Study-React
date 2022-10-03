import type { AppProps } from 'next/app'
import GlobalStyle from "../styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import LayoutHeader from '@components/layouts/LayoutHeader';
import LayoutMenu from '@components/layouts/LayoutMenu';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled from "styled-components";
import { Provider } from "react-redux";
import store from "@redux/store";

const MyAppRoot = styled.div<{
  width: string;
  opacity: number;
}>`
  margin: 0 auto;
  height: 100vh;
  width: ${({ width }) => width};
  opacity: ${({ opacity }) => opacity};
  transition: all 0.5s ease;

  display: flex;
  flex-direction: column;
`;

const LayoutBody = styled.div`
  height: 100%;
  flex: 1;
  overflow: auto;
  background-color: ${({ theme }) => theme.colors.gray03};
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [width, setWidth] = useState("auto");
  const [isMountedMenu, setIsMountedMenu] = useState(false);
  
  const opacity = useMemo(() => {
    return isMountedMenu ? 1 : 0;
  }, [isMountedMenu]);
  
  const onChangeMenuWidth = useCallback((newWidth: string) => {
    setWidth(newWidth);
  }, []);

  useEffect(() => {
    if (width !== "auto") {
      setIsMountedMenu(true);
    }
  }, [width]);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <MyAppRoot width={width} opacity={opacity}>
          <LayoutHeader />
          <LayoutMenu onChangeWidth={onChangeMenuWidth} />
          <LayoutBody>
            <Component {...pageProps} />
          </LayoutBody>
        </MyAppRoot>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
