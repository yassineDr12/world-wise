import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#004300",
    },
    secondary: {
      main: "#9CFE08",
    },
    error: {
      main: "#F8831A",
    },
    background: {
      default: "#D3EED5",
    },
  },
});

export default theme;
