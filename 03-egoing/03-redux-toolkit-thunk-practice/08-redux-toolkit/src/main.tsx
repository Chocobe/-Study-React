import ReactDOM from 'react-dom/client'
import { 
  ChakraProvider,
} from "@chakra-ui/react";
import App from './App'
import theme from "./chakraTheme";

import "./index.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
