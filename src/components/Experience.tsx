import { motion } from "framer-motion";
import { education, experience } from "../data/portfolio";
import Glass from "./Glass";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Professional Experience
      </motion.h2>

      <div className="space-y-5">
        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Glass className="p-6 lg:p-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-sm text-neutral-400">{item.period}</p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-blue-300"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-neutral-300">{item.role}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-6 text-neutral-400">
                {item.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Glass>
          </motion.div>
        ))}
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-6 mt-16 text-3xl font-semibold tracking-tight"
      >
        Education
      </motion.h3>

      <div className="grid gap-5 lg:grid-cols-2">
        {education.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Glass className="h-full p-6">
              <p className="text-sm text-neutral-400">{item.period}</p>
              <h4 className="mt-2 text-lg font-semibold text-white">{item.school}</h4>
              <p className="mt-1 text-sm text-neutral-300">{item.degree}</p>
              <p className="mt-4 text-sm leading-6 text-neutral-400">{item.description}</p>
            </Glass>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
