import { motion } from "framer-motion";
import { techStack } from "../data/portfolio";
import Glass from "./Glass";

export default function TechStack() {
  return (
    <section id="skills" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Tech Stack
      </motion.h2>

      <div className="grid gap-5 md:grid-cols-2">
        {techStack.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Glass className="p-6">
              <h3 className="mb-5 text-lg font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.icons.map((icon) => (
                  <a
                    key={icon.alt}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-white/10 bg-white/5 p-3 transition-transform hover:scale-105 hover:bg-white/10"
                    aria-label={icon.alt}
                  >
                    <img src={icon.src} alt={icon.alt} className="h-10 w-10 object-contain" />
                  </a>
                ))}
              </div>
            </Glass>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
