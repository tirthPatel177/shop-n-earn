import { createTheme } from "@mui/material";

import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.text1,
    },
  },
});

export default theme;
