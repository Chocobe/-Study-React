import React, {
  MouseEventHandler,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "@/hooks";

import {
  decrease,
  increase,
} from "@/redux/slices/countSlice";

import {
  Box,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";

function CounterWithSlice() {
  const countSliceValue = useAppSelector(({ countSlice }) => countSlice.countSliceValue);
  const appDispatch = useAppDispatch();

  const buttonInfos = [
    {
      label: "Decrease",
      onClick: (
        () => appDispatch(decrease(3))
      ) as MouseEventHandler,
    },
    {
      label: "Increase",
      onClick: (
        () => appDispatch(increase(3))
      ) as MouseEventHandler,
    },
  ];
  
  return (
    <Box width="fit-content">
      <Heading as="h2" color="#999">
        Counter With Slice Value: {countSliceValue}
      </Heading>

      <Flex justifyContent="center" mt="20px" gap="20px">
        {buttonInfos.map(({ label, onClick }) => (
          <Button onClick={onClick} key={label}>
            {label}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default CounterWithSlice;