import Head from "next/head";
import Link from "next/link";
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import { Provider } from "react-redux";
import store from "../redux/store";
import GlobalStyle from "styles/globalStyle";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Nav = styled.nav`
  padding: 20px 40px;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

const NavItem = styled.div`
  padding: 8px 16px;
  color: #fff;
  font-weight: 900;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.blue01};
`

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <title>Hello NextJS</title>
        </Head>

        <GlobalStyle />
        
        <AppWrapper>
          <Nav>
            <NavItem>
              <Link href="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link href="/CounterPage">Counter Page</Link>
            </NavItem>
            <NavItem>
              <Link href="/News">News Page</Link>
            </NavItem>
          </Nav>

          <Component {...pageProps} style={{ height: "100%" }} />
        </AppWrapper>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
