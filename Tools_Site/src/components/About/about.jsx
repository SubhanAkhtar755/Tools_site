import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-20 overflow-hidden">
      {/* Background Effects - same as Home */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-5xl text-center"
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          About <span className="text-purple-400">AI Tools</span>
        </h1>

        {/* Intro */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Welcome to <span className="font-semibold text-white">AI Tools</span> — 
          your one-stop platform for discovering, exploring, and learning about
          the latest Artificial Intelligence solutions that boost creativity,
          automate workflows, and enhance productivity.
        </p>

        {/* Mission / Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-purple-400/30 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              🚀 Our Mission
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              To make AI accessible and practical for everyone by offering
              modern, powerful, and easy-to-use tools that solve real-world
              challenges.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg border border-cyan-400/30 p-6 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-white mb-3">
              🌎 Our Vision
            </h2>
            <p className="text-gray-300 text-base leading-relaxed">
              We envision a smarter future where AI empowers individuals and
              businesses to innovate, grow, and achieve limitless potential.
            </p>
          </motion.div>
        </div>

        {/* Closing */}
        <p className="mt-12 text-gray-400 text-base italic">
          "Shaping the future with intelligence, one tool at a time."
        </p>
      </motion.div>
    </div>
  );
};

export default About;
