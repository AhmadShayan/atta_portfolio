import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaUniversity, FaExternalLinkAlt } from "react-icons/fa";
import { HiAcademicCap, HiBadgeCheck } from "react-icons/hi";
import portfolio from "../portfolio.json";

const Section = ({ id, className = "", children }) => (
  <section id={id} className={`scroll-mt-24 py-20 ${className}`}>
    {children}
  </section>
);
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

// Issuer brand colors for cert cards
const issuerStyle = (issuer = "") => {
  const i = issuer.toLowerCase();
  if (i.includes("microsoft")) return { accent: "border-l-blue-500",  badge: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200/60 dark:border-blue-800/40" };
  if (i.includes("ibm"))       return { accent: "border-l-blue-700",  badge: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/60 dark:border-blue-800/40" };
  if (i.includes("coursera"))  return { accent: "border-l-sky-500",   badge: "bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border-sky-200/60 dark:border-sky-800/40" };
  if (i.includes("freecode") || i.includes("freecamp")) return { accent: "border-l-green-500", badge: "bg-green-50 dark:bg-green-950/40 text-green-700 dark:text-green-300 border-green-200/60 dark:border-green-800/40" };
  if (i.includes("packt"))     return { accent: "border-l-orange-500", badge: "bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 border-orange-200/60 dark:border-orange-800/40" };
  if (i.includes("vocational")) return { accent: "border-l-purple-500", badge: "bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200/60 dark:border-purple-800/40" };
  return { accent: "border-l-zinc-400", badge: "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-300/60 dark:border-zinc-700/40" };
};

const Education = () => {
  const [tab, setTab] = useState("education"); // "education" | "certificates"

  return (
    <Section id="education" className="bg-white dark:bg-zinc-900/60">
      <Container>
        {/* ── Header ── */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold"
          >
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-sky-500 bg-clip-text text-transparent">
              {tab === "education" ? "Education" : "Certifications"}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-3 text-sm text-zinc-500 dark:text-zinc-400"
          >
            {tab === "education" ? "Academic background & degrees" : "Professional certifications & courses"}
          </motion.p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
        </div>

        {/* ── Toggle tabs ── */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-black/[0.06] dark:border-white/[0.06]">
            {[
              { key: "education",    label: "Education",       icon: <FaGraduationCap size={13} /> },
              { key: "certificates", label: "Certifications",  icon: <FaCertificate   size={13} /> },
            ].map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-250 ${
                  tab === key
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/25"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
                }`}
              >
                {icon} {label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Content panels ── */}
        <AnimatePresence mode="wait">
          {tab === "education" ? (
            /* ── Education timeline ── */
            <motion.div
              key="education"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Vertical line */}
              <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-indigo-400 opacity-25" />

              <div className="flex flex-col gap-6 pl-12 sm:pl-16">
                {portfolio.education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[2.6rem] sm:-left-[2.9rem] top-4 w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-md shadow-purple-500/30 flex items-center justify-center">
                      <HiAcademicCap className="text-white" size={10} />
                    </div>

                    {/* Card */}
                    <div className="card-top-accent gradient-border rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-lg hover:shadow-purple-500/8 transition-all duration-300">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{edu.degree}</h3>
                          <p className="mt-0.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                            <FaUniversity size={11} className="text-purple-400 shrink-0" />
                            {edu.institution}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-full">
                            {edu.period}
                          </span>
                          {edu.Number && (
                            <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                              {edu.Number}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* ── Certifications grid ── */
            <motion.div
              key="certificates"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {portfolio.certifications.map((cert, i) => {
                const style = issuerStyle(cert.issuer);
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className={`group rounded-2xl border border-black/[0.08] dark:border-white/[0.08] bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 border-l-4 ${style.accent} relative overflow-hidden`}
                  >
                    {/* Background decoration */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-purple-400/5 dark:bg-purple-600/5 blur-xl pointer-events-none" />

                    {/* Issuer badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`inline-flex items-center gap-1 text-[11px] font-bold border px-2 py-0.5 rounded-full ${style.badge}`}>
                        <HiBadgeCheck size={11} />
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium shrink-0">
                        {cert.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm font-bold text-zinc-800 dark:text-zinc-200 leading-snug mb-1 line-clamp-2">
                      {cert.title}
                    </h3>

                    {/* Description */}
                    {cert.description && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                        {cert.description}
                      </p>
                    )}

                    {/* Certificate icon */}
                    <FaCertificate className="absolute bottom-4 right-4 text-zinc-100 dark:text-zinc-800 text-3xl pointer-events-none" />
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
};

export default Education;
