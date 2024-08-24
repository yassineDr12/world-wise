import { useMemo, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./pages/Pricing";
import Tracker from "./pages/Tracker";
import NotFound from "./pages/NotFound";

import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline, PaletteMode, useMediaQuery } from "@mui/material";
import { ColorModeContext } from "./contexts/ThemeContext";
import { getDesignTokens } from "./theme";
import { VisitedItemsProvider } from "./contexts/VisitedItemsContext";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const location = useLocation();
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? "dark" : "light");
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <VisitedItemsProvider>
          <CssBaseline />
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Homepage />} />
              <Route path="about" element={<About />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="tracker" element={<Tracker />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </VisitedItemsProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
