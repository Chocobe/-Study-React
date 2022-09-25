import {
  Box,
  Flex,
} from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "@/redux/store";

import Counter from "@/components/Counter";
import CounterWithSlice from "@/components/CounterWithSlice";
import CounterWithThunk from "@/components/CounterWithThunk";

function App() {
  return (
    <Provider store={store}>
      <Box width="100%" height="100vh" bg="#242426">
        <Flex 
          height="100%"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap="80px">
          <Counter />
          <CounterWithSlice />
          <CounterWithThunk />
        </Flex>
      </Box>
    </Provider>
  );
};

export default App;