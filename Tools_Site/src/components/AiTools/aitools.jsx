import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import toolsData from "../../JSON/tools.json";

const AITools = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const set = new Set(toolsData.map((t) => t.category).filter(Boolean));
    return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return toolsData.filter((t) => {
      const inCat = activeCategory === "All" || t.category === activeCategory;
      const inQuery = !q || `${t.name} ${t.category}`.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [query, activeCategory]);

  return (
    <div className="relative mt-5 min-h-screen bg-black text-white z-0 overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-purple-600/20 blur-4xl animate-pulse-slow z-0" />
      <div className="pointer-events-none absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-4xl animate-pulse-slow z-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 z-10">
        {/* Header */}
        <div className="mb-10 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Explore <span className="text-purple-400">AI Tools</span>
            </h1>
            <p className="mt-2 max-w-2xl text-gray-300">
              Curated collection of AI apps across writing, images, audio/video, code, and more.
            </p>
          </div>

          {/* Search */}
          <div className="w-full md:w-80">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools or categories..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder-gray-400 outline-none backdrop-blur-md transition focus:ring-2 focus:ring-purple-400/60"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-transform duration-200 transform ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] scale-105"
                  : "bg-white/5 text-gray-300 hover:scale-105 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <AnimatePresence>
          {filtered.length === 0 ? (
            <p className="text-gray-400">No tools found. Try a different search.</p>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 overflow-hidden"
            >
              {filtered.map((tool, idx) => (
                <motion.a
                  layout
                  key={`${tool.name}-${idx}`}
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg backdrop-blur-sm hover:shadow-purple-500/20 transition-all"
                >
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30">
                      {tool.logo ? (
                        <img
                          src={tool.logo}
                          alt={tool.name}
                          className="h-8 w-8 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-8 w-8 rounded bg-white/10" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold text-white">
                        {tool.name}
                      </h3>
                      <p className="mt-1 text-xs text-gray-300">
                        {tool.category || "Uncategorized"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm text-gray-300">
                    <span className="truncate opacity-80">{new URL(tool.link).hostname}</span>
                    <span className="inline-flex items-center gap-1 opacity-80 group-hover:text-purple-300">
                      Visit <FiExternalLink />
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AITools;
