import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
        {/* Left Text */}
        <div className="md:w-1/2 space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover Smart <span className="text-purple-400">AI Tools</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Boost productivity with modern AI powered solutions.  
            From automation to creativity, everything in one place.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/aitools"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-semibold rounded-lg shadow hover:scale-105 transform transition"
            >
              Explore Tools
            </Link>
            <Link
              to="/aitools"
              className="px-6 py-3 border border-white/40 rounded-lg hover:bg-white hover:text-black transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="AI Concept"
            className="rounded-2xl shadow-2xl relative z-10"
          />
          {/* Floating Glass Card */}
          <div className="absolute -bottom-8 -left-6 bg-white/10 backdrop-blur-lg border border-purple-400/30 rounded-xl p-4 shadow-lg">
            <p className="text-sm text-gray-200">⚡ Fast & Secure</p>
          </div>
        </div>
      </section>

      {/* Torn Effect Divider */}
      <div className="relative">
        <svg
          className="w-full h-20 text-black"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <polygon fill="white" points="0,100 100,0 100,100" />
        </svg>
      </div>

      {/* Features Section */}
      <section className="bg-white text-black py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="p-6 border rounded-2xl shadow-lg hover:scale-105 hover:shadow-purple-300/50 transform transition duration-300 bg-gradient-to-b from-white to-gray-50">
            <img
              src="https://img.icons8.com/ios/100/artificial-intelligence.png"
              alt="AI Automation"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">AI Automation</h3>
            <p className="text-gray-600 mt-2">
              Automate boring tasks with powerful AI tools.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 border rounded-2xl shadow-lg hover:scale-105 hover:shadow-cyan-300/50 transform transition duration-300 bg-gradient-to-b from-white to-gray-50 md:mt-10">
            <img
              src="https://img.icons8.com/ios/100/brain.png"
              alt="AI Creativity"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Creative Boost</h3>
            <p className="text-gray-600 mt-2">
              Generate fresh ideas, designs, and content instantly.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 border rounded-2xl shadow-lg hover:scale-105 hover:shadow-purple-300/50 transform transition duration-300 bg-gradient-to-b from-white to-gray-50 md:mt-20">
            <img
              src="https://img.icons8.com/ios/100/bot.png"
              alt="AI Chatbot"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Smart Chatbots</h3>
            <p className="text-gray-600 mt-2">
              Engage users with intelligent and adaptive bots.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
