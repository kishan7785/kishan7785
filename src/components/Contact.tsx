import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaNpm } from "react-icons/fa6";
import { profile } from "../data/portfolio";
import Glass from "./Glass";

export default function Contact() {
  return (
    <section id="contact" className="section-shell pb-28">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title text-center"
      >
        Get in Touch
      </motion.h2>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8">
        <Glass className="w-full p-8 text-center">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Business Email
          </h3>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 inline-block text-2xl font-medium text-white transition-colors hover:text-blue-300"
          >
            {profile.email}
          </a>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Socials
          </h3>
          <div className="mt-4 flex items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-xl text-neutral-300 transition-colors hover:bg-white hover:text-black"
            >
              <FaEnvelope />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-xl text-neutral-300 transition-colors hover:bg-white hover:text-black"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.npm}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="npm"
              className="rounded-full border border-white/10 bg-white/5 p-3 text-xl text-neutral-300 transition-colors hover:bg-white hover:text-black"
            >
              <FaNpm />
            </a>
          </div>
        </Glass>
      </div>
    </section>
  );
}
