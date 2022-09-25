import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        color: "#fff",
      },
      variants: {
        solid: {
          bg: "#000",
          boxShadow: "1px 1px 6px #777",
        },
      },
    },
  },
});

export default theme;