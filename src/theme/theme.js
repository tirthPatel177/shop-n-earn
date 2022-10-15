import { createTheme } from "@mui/material";

import colors from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: colors.text1,
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
