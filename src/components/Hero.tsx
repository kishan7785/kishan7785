import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload, FaEnvelope } from "react-icons/fa6";
import { profile } from "../data/portfolio";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((index) => (index + 1) % profile.roles.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28" aria-label="Introduction">
      <div className="section-shell flex min-h-[calc(100vh-7rem)] flex-col items-center gap-12 lg:flex-row lg:items-center">
        <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          <motion.h1
            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-r from-blue-300 to-slate-400 bg-clip-text text-5xl font-light tracking-tight text-transparent lg:text-7xl"
          >
            {profile.greeting}
          </motion.h1>

          <motion.div
            initial={{ filter: "blur(8px)", opacity: 0, y: 12 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-2xl tracking-tight text-neutral-200 lg:text-4xl"
            aria-live="polite"
          >
            <span className="gradient-text">{profile.roles[roleIndex]}</span>
          </motion.div>

          <motion.p
            initial={{ filter: "blur(6px)", opacity: 0, y: 16 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="my-6 max-w-xl text-base font-light leading-7 tracking-tight text-neutral-300"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-300 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              <FaDownload aria-hidden="true" />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border-2 border-neutral-300 px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              <FaEnvelope aria-hidden="true" />
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
          animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="w-full overflow-hidden lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center">
            <img
              src={profile.photo}
              alt="Kishan Dharajiya memoji portrait"
              className="h-80 min-h-80 w-auto object-contain lg:h-96 lg:min-w-96"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
