import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/GlobalStyle'
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
