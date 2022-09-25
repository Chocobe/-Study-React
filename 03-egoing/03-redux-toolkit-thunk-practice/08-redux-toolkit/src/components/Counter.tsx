import React, {
  useState,
  useMemo,
  MouseEventHandler,
} from "react";
import {
  Box,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";

function Counter() {
  const [count, setCount] = useState(0);

  const buttonInfos = useMemo(() => {
    return [
      {
        label: "Decrease",
        onClick: (
          () => setCount(count => --count)
        ) as MouseEventHandler,
      },
      {
        label: "Increase",
        onClick: (
          () => setCount(count => ++count)
        ) as MouseEventHandler,
      },
    ];
  }, []);
  
  return (
    <Box width="fit-content">
      <Heading as="h2" color="#999">
        Counter Value: {count}
      </Heading>

      <Flex justifyContent="center" gap="20px" mt="20px">
        {buttonInfos.map(({ label, onClick }) => (
          <Button onClick={onClick} key={label}>
            {label}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default Counter;