import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = ["Home", "AI Tools", "About"];

const Navbar3D = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const navigate = useNavigate();

  const handleLinkClick = (link) => {
    setMenuOpen(false);
    setActiveLink(link);
    if (link === "Home") navigate("/");
    if (link === "AI Tools") navigate("/aitools");
    if (link === "About") navigate("/about");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Bar (Desktop bg) */}
      <div className="hidden md:flex justify-between items-center px-6 py-4 !bg-black/90 backdrop-blur-lg shadow-lg">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => handleLinkClick("Home")}
        >
          AI<span className="!text-purple-400">Tools</span>
        </motion.h1>

        {/* Desktop Menu */}
        <nav className="flex items-center space-x-8">
          {links.map((link, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`relative text-sm font-semibold tracking-wide transition duration-300 pb-1 ${
                activeLink === link
                  ? "text-white border-b-2 border-white"
                  : "text-gray-300 hover:text-white"
              }`}
              onClick={() => handleLinkClick(link)}
            >
              {link}
            </motion.button>
          ))}
        </nav>
      </div>

      {/* Logo + Toggle (Always on Top for mobile too) */}
      <div className="fixed bg-black px-6 py-4 -top-1 -left-1 -right-1 flex justify-between items-center z-[9999] md:hidden">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className="text-white text-xl font-bold cursor-pointer"
          onClick={() => handleLinkClick("Home")}
        >
          AI<span className="text-purple-400">Tools</span>
        </motion.h1>

        {/* Mobile Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-screen w-full z-40 
                       bg-gradient-to-br from-black/90 via-black/70 to-white/10 
                       backdrop-blur-xl flex flex-col justify-center items-center space-y-8"
          >
            {links.map((link, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleLinkClick(link)}
                className={`text-2xl font-bold transition-all duration-300 ${
                  activeLink === link
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar3D;
