import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
