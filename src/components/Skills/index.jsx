import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript, SiNextdotjs, SiFramer, SiMui,
  SiTailwindcss, SiRedux, SiTypescript, SiNodedotjs,
  SiExpress, SiMongodb, SiVercel, SiVite,
} from "react-icons/si";
import {
  FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGithub, FaGitAlt,
} from "react-icons/fa";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`scroll-mt-20 py-20 ${className}`}>
    {children}
  </section>
);
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

// Each skill gets its own colored bento card
const skills = [
  {
    icon: <SiJavascript />, name: "JavaScript",
    color: "text-yellow-500",
    bg: "bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-950/30 dark:to-amber-950/20",
    border: "border-yellow-200/70 dark:border-yellow-900/40",
    glow: "hover:shadow-yellow-500/20",
  },
  {
    icon: <SiTypescript />, name: "TypeScript",
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-950/30 dark:to-sky-950/20",
    border: "border-blue-200/70 dark:border-blue-900/40",
    glow: "hover:shadow-blue-500/20",
  },
  {
    icon: <FaHtml5 />, name: "HTML5",
    color: "text-orange-500",
    bg: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/30 dark:to-red-950/20",
    border: "border-orange-200/70 dark:border-orange-900/40",
    glow: "hover:shadow-orange-500/20",
  },
  {
    icon: <FaCss3Alt />, name: "CSS3",
    color: "text-blue-600",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20",
    border: "border-blue-300/70 dark:border-blue-900/40",
    glow: "hover:shadow-blue-600/20",
  },
  {
    icon: <FaReact />, name: "React.js",
    color: "text-sky-500",
    bg: "bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-950/30 dark:to-cyan-950/20",
    border: "border-sky-200/70 dark:border-sky-900/40",
    glow: "hover:shadow-sky-500/20",
  },
  {
    icon: <SiNextdotjs />, name: "Next.js",
    color: "text-zinc-800 dark:text-zinc-200",
    bg: "bg-gradient-to-br from-zinc-100 to-slate-100 dark:from-zinc-800/50 dark:to-slate-800/30",
    border: "border-zinc-200/70 dark:border-zinc-700/40",
    glow: "hover:shadow-zinc-500/20",
  },
  {
    icon: <SiRedux />, name: "Redux",
    color: "text-purple-500",
    bg: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/20",
    border: "border-purple-200/70 dark:border-purple-900/40",
    glow: "hover:shadow-purple-500/20",
  },
  {
    icon: <SiNodedotjs />, name: "Node.js",
    color: "text-green-600",
    bg: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20",
    border: "border-green-200/70 dark:border-green-900/40",
    glow: "hover:shadow-green-500/20",
  },
  {
    icon: <SiExpress />, name: "Express",
    color: "text-zinc-600 dark:text-zinc-300",
    bg: "bg-gradient-to-br from-zinc-50 to-gray-100 dark:from-zinc-900/60 dark:to-gray-900/40",
    border: "border-zinc-200/70 dark:border-zinc-800/40",
    glow: "hover:shadow-zinc-400/20",
  },
  {
    icon: <SiTailwindcss />, name: "Tailwind",
    color: "text-cyan-500",
    bg: "bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/20",
    border: "border-cyan-200/70 dark:border-cyan-900/40",
    glow: "hover:shadow-cyan-500/20",
  },
  {
    icon: <SiMui />, name: "Material UI",
    color: "text-blue-500",
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/20",
    border: "border-blue-200/70 dark:border-blue-900/40",
    glow: "hover:shadow-blue-500/20",
  },
  {
    icon: <FaBootstrap />, name: "Bootstrap",
    color: "text-purple-600",
    bg: "bg-gradient-to-br from-purple-50 to-fuchsia-50 dark:from-purple-950/30 dark:to-fuchsia-950/20",
    border: "border-purple-200/70 dark:border-purple-900/40",
    glow: "hover:shadow-purple-600/20",
  },
  {
    icon: <SiFramer />, name: "Framer Motion",
    color: "text-pink-500",
    bg: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20",
    border: "border-pink-200/70 dark:border-pink-900/40",
    glow: "hover:shadow-pink-500/20",
  },
  {
    icon: <FaGithub />, name: "GitHub",
    color: "text-zinc-800 dark:text-white",
    bg: "bg-gradient-to-br from-zinc-100 to-slate-100 dark:from-zinc-800/50 dark:to-slate-800/30",
    border: "border-zinc-200/70 dark:border-zinc-700/40",
    glow: "hover:shadow-zinc-500/20",
  },
  {
    icon: <FaGitAlt />, name: "Git",
    color: "text-orange-600",
    bg: "bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/20",
    border: "border-orange-200/70 dark:border-orange-900/40",
    glow: "hover:shadow-orange-600/20",
  },
  {
    icon: <SiMongodb />, name: "MongoDB",
    color: "text-green-600",
    bg: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/20",
    border: "border-green-200/70 dark:border-green-900/40",
    glow: "hover:shadow-green-600/20",
  },
  {
    icon: <SiVercel />, name: "Vercel",
    color: "text-zinc-800 dark:text-white",
    bg: "bg-gradient-to-br from-zinc-100 to-slate-100 dark:from-zinc-800/50 dark:to-slate-800/30",
    border: "border-zinc-200/70 dark:border-zinc-700/40",
    glow: "hover:shadow-zinc-500/20",
  },
  {
    icon: <SiVite />, name: "Vite",
    color: "text-purple-500",
    bg: "bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/20",
    border: "border-purple-200/70 dark:border-purple-900/40",
    glow: "hover:shadow-purple-500/20",
  },
];

const Skills = () => (
  <Section id="skills" className="bg-zinc-50/80 dark:bg-zinc-950/60">
    <Container>
      {/* ── Header ── */}
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold"
        >
          My{" "}
          <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-zinc-500 dark:text-zinc-400 max-w-sm mx-auto text-sm"
        >
          {skills.length} technologies I rely on to build great products
        </motion.p>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      {/* ── Bento grid — one card per skill ── */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8, y: 14 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            whileHover={{ y: -6, scale: 1.07 }}
            className={`group flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl ${skill.bg} border ${skill.border} hover:shadow-lg ${skill.glow} transition-all duration-300 cursor-default aspect-square`}
          >
            <span className={`text-3xl sm:text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300 leading-none`}>
              {skill.icon}
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold text-zinc-700 dark:text-zinc-300 text-center leading-tight">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center text-sm text-zinc-400 dark:text-zinc-500 italic"
      >
        Always exploring new tools · staying current with the ecosystem 🚀
      </motion.p>
    </Container>
  </Section>
);

export default Skills;
