import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemDefault: false,
};

const theme = extendTheme({ config });

export default theme;
