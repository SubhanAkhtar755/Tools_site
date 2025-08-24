import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import About from "../components/About/about";
import AItools from "../components/AItools/aitools";

const Approuter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/aitools" element={<AItools />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Approuter;
