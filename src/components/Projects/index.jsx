import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {
  SiJavascript,
  SiNextdotjs,
  SiFramer,
  SiMui,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import portfolio from "../portfolio.json";
import AdminDB from '../../../public/AdminDB.png'
import youtubeClone from '../../../public/youtubeClone.png'
import SocialMedia from '../../../public/SocialMEdia.png'
import AAvisaConsultancy from '../../../public/AAvisaConsultancy.png'
import fitClubIMG from '../../../public/fitClubIMG.png'
import portfolioIMG from '../../../public/portfolioIMG.png'
const imageMap = {

  AdminDB,

  youtubeClone,

  SocialMedia,

  AAvisaConsultancy,

  fitClubIMG,

  portfolioIMG,
}
const Card = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-zinc-900 shadow-sm ${className}`}
  >
    {children}
  </div>
);

const Button = ({ href, children, onClick, variant = "solid" }) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition active:scale-[.98]";
  const styles = {
    solid: "bg-black text-white dark:bg-white dark:text-black hover:opacity-90",
    outline:
      "border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5",
  };
  const C = href ? "a" : "button";
  return (
    <C href={href} onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </C>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = portfolio.projects.slice(0, 4);
  const remainingProjects = portfolio.projects.slice(4);

  return (
    <>
      <div className="md:col-span-2 text-center">
        <h2 className="text-4xl font-extrabold">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 relative">
        {visibleProjects.map((p, index) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="group relative"
          >
            <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-zinc-800 dark:hover:to-zinc-900">
              <div className="w-full h-40 overflow-hidden relative">
                <img
                  // src={p.image}
                  src={imageMap[p.image]}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition group-hover:scale-105"
                  // className="w-full h-full object-cover opacity-0 transition-all duration-700 ease-out"
                />

                {/* WhatsApp-style overlay */}
                {index === 3 && remainingProjects.length > 0 && (
                  <div
                    onClick={() => setShowAll(true)}
                    className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-3xl font-semibold cursor-pointer"
                  >
                    +{remainingProjects.length}
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-100 text-purple-600 dark:bg-zinc-700 dark:text-purple-400">
                    {p.icon}
                  </div>
                  <h3
                    className="text-2xl font-bold transition duration-300 
                               group-hover:bg-gradient-to-r group-hover:from-purple-500 
                               group-hover:to-pink-500 group-hover:text-transparent 
                               group-hover:bg-clip-text"
                  >
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-300">{p.tagline}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-black/10 dark:border-white/10 px-2 py-0.5 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {p.links.live && (
                    <Button href={p.links.live} variant="outline">
                      Live Demo
                    </Button>
                  )}
                  {p.links.repo && (
                    <Button href={p.links.repo} variant="outline">
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.article>
        ))}
      </div>

      {/* ---------- MODAL SECTION ---------- */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 w-full max-w-6xl overflow-y-auto max-h-[80vh] shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">All Projects</h3>
                <button
                  onClick={() => setShowAll(false)}
                  className="text-xl font-bold text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                >
                  ✕
                </button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {remainingProjects.map((p) => (
                  <motion.div
                    key={p.title}
                    className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden hover:shadow-lg transition"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img
                      src={imageMap[p.image]}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-36 object-cover"
                      // className="w-full h-full object-cover opacity-0 transition-all duration-700 ease-out"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-semibold mb-2">{p.title}</h4>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                        {p.tagline}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {p.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-black/10 dark:border-white/10 px-2 py-0.5 text-xs"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2">
                        {p.links.live && (
                          <Button href={p.links.live} variant="outline">
                            Live Demo
                          </Button>
                        )}
                        {p.links.repo && (
                          <Button href={p.links.repo} variant="outline">
                            GitHub
                          </Button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Projects;


