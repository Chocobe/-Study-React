import React, {
  MouseEventHandler,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "@/hooks";

import {
  decreaseAsync,
  increaseAsync,
} from "@/redux/slices/countThunkSlice";

import {
  Box,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";

function CounterWithThunk() {
  const countThunkSliceValue = 
    useAppSelector(({ countThunkSlice }) => countThunkSlice.countWithThunkValue);
  const appDispatch = useAppDispatch();

  const buttonInfos = [
    {
      label: "Decrease",
      onClick: (
        () => appDispatch(decreaseAsync(100))
      ) as MouseEventHandler,
    },
    {
      label: "Increase",
      onClick: (
        () => appDispatch(increaseAsync(100))
      ) as MouseEventHandler,
    },
  ];

  return (
    <Box width="fit-content">
      <Heading as="h2" color="#999">
        Counter With Thunk Slice Value: {countThunkSliceValue}
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

export default CounterWithThunk;