import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiX, HiArrowRight } from "react-icons/hi";
import portfolio from "../portfolio.json";
import AdminDB from "../../../public/AdminDB.png";
import youtubeClone from "../../../public/youtubeClone.png";
import SocialMedia from "../../../public/SocialMEdia.png";
import AAvisaConsultancy from "../../../public/AAvisaConsultancy.png";
import fitClubIMG from "../../../public/fitClubIMG.png";
import portfolioIMG from "../../../public/portfolioIMG.png";

const imageMap = { AdminDB, youtubeClone, SocialMedia, AAvisaConsultancy, fitClubIMG, portfolioIMG };

// ── Filters ────────────────────────────────────
const FILTERS = ["All", "React", "Next.js", "HTML/CSS", "Full Stack"];

function matchesFilter(project, filter) {
  if (filter === "All")         return true;
  if (filter === "React")       return project.tech.some(t => t.toLowerCase().includes("react"));
  if (filter === "Next.js")     return project.tech.some(t => t.toLowerCase().includes("next"));
  if (filter === "HTML/CSS")    return project.tech.some(t => ["html","css","javascript"].includes(t.toLowerCase()));
  if (filter === "Full Stack")  return project.tech.some(t => ["node","express","mongodb"].includes(t.toLowerCase()));
  return true;
}

// ── Per-tech tag colors ────────────────────────
const tagColor = (t) => {
  const l = t.toLowerCase();
  if (l.includes("react"))              return "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/40";
  if (l.includes("next"))               return "bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-300/60 dark:border-zinc-700/40";
  if (l.includes("tailwind"))           return "bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border-cyan-200/60 dark:border-cyan-800/40";
  if (l.includes("typescript"))         return "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/40";
  if (l.includes("redux"))              return "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/40";
  if (l.includes("node"))               return "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border-green-200/60 dark:border-green-800/40";
  if (l.includes("mongo"))              return "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200/60 dark:border-emerald-800/40";
  if (l.includes("mui")||l.includes("material")) return "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/40";
  return "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/40";
};

// ── Project Card ───────────────────────────────
const ProjectCard = ({ p, index, onClick, featured = false }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.07 }}
    whileHover={{ y: -5 }}
    className={`group relative cursor-pointer ${featured ? "sm:col-span-2" : ""}`}
    onClick={onClick}
  >
    <div className="card-top-accent gradient-border h-full rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-zinc-900 shadow-sm overflow-hidden transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/10">
      {/* Image */}
      <div className={`relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 ${featured ? "h-56 sm:h-64" : "h-44"}`}>
        <img
          src={imageMap[p.image]}
          alt={p.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-semibold flex items-center gap-1.5">
            Explore project <HiArrowRight size={14} />
          </span>
        </div>
        {featured && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-lg">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300">
          {p.title}
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
          {p.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span key={t} className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${tagColor(t)}`}>
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          {p.links.live && (
            <a href={p.links.live} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="btn-glow inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm hover:shadow-purple-400/30 hover:scale-[1.03] transition-all">
              <FaExternalLinkAlt size={10} /> Live Demo
            </a>
          )}
          {p.links.repo && (
            <a href={p.links.repo} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-lg border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <FaGithub size={11} /> GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  </motion.article>
);

// ── Main ───────────────────────────────────────
const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = portfolio.projects.filter((p) => matchesFilter(p, filter));

  return (
    <>
      {/* Header */}
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold"
        >
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
            Projects
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm text-zinc-500 dark:text-zinc-400"
        >
          {portfolio.projects.length} projects built — click any card to explore
        </motion.p>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      {/* ── Filter tabs ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.25 }}
        className="flex flex-wrap justify-center gap-2 mb-8"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              filter === f
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/25 scale-105"
                : "border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-purple-300 dark:hover:border-purple-700 hover:text-purple-600 dark:hover:text-purple-400"
            }`}
          >
            {f}
          </button>
        ))}
      </motion.div>

      {/* ── Cards grid ── */}
      <motion.div layout className="grid gap-5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, index) => (
            <ProjectCard
              key={p.title}
              p={p}
              index={index}
              featured={index === 0 && filter === "All"}
              onClick={() => setSelected(p)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16 text-zinc-400 dark:text-zinc-500 text-sm"
        >
          No projects match this filter.
        </motion.p>
      )}

      {/* ── Detail Modal ── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white dark:bg-zinc-900 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-52 overflow-hidden">
                <img src={imageMap[selected.image]} alt={selected.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  <HiX size={14} />
                </button>
                <h3 className="absolute bottom-4 left-5 text-xl font-bold text-white">{selected.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">{selected.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {selected.tech.map((t) => (
                    <span key={t} className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${tagColor(t)}`}>
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-5">
                  {selected.links.live && (
                    <a href={selected.links.live} target="_blank" rel="noopener noreferrer"
                      className="btn-glow inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-sm hover:scale-[1.02] transition-transform">
                      <FaExternalLinkAlt size={11} /> Live Demo
                    </a>
                  )}
                  {selected.links.repo && (
                    <a href={selected.links.repo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <FaGithub size={13} /> View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;
