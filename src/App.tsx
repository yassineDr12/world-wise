import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./pages/Pricing";
import Tracker from "./pages/Tracker";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  return (
    <>
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
    </>
  );
}

export default App;
