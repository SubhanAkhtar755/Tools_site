import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-black/95 text-gray-300 py-12  overflow-hidden">
      {/* Gradient Accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-cyan-500/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-[5px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-around items-center text-center gap-10 border-b border-gray-700/60 pb-10">
          {/* Brand */}
          <div className="flex flex-col items-center max-w-xs">
            <h2 className="text-3xl font-extrabold text-white tracking-wide">
              AI<span className="text-purple-400">Tools</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Discover AI-powered tools to supercharge your productivity and
              simplify your workflow.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-5">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-purple-500/80 transition"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-sky-500/80 transition"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-blue-600/80 transition"
              >
                <FaLinkedinIn size={16} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-gray-600/80 transition"
              >
                <FaGithub size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-white font-semibold text-lg mb-2">
              Quick Links
            </h3>
            <Link to="/" className="hover:text-purple-400 transition">
              Home
            </Link>
            <Link to="/aitools" className="hover:text-purple-400 transition">
              AI Tools
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition">
              About
            </Link>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h3 className="text-white font-semibold text-lg mb-2">Contact</h3>
            <p className="text-sm">📧 support@aitools.com</p>
            <p className="text-sm mt-1">📞 +92 300 1234567</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">AI Tools</span>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
