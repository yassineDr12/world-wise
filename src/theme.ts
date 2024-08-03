import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
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
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#D3EED5",
          },
          secondary: {
            main: "#D3EED5",
          },
          error: {
            main: "#F8831A",
          },
          background: {
            default: "#848B90",
          },
        }),
  },
});
