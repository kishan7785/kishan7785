import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import Glass from "./Glass";

export default function About() {
  return (
    <section id="about" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          {profile.about.map((paragraph) => (
            <p key={paragraph} className="max-w-xl leading-7 text-neutral-300">
              {paragraph}
            </p>
          ))}
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {profile.services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
            >
              <Glass className="h-full p-5">
                <h3 className="mb-3 text-base font-semibold text-white">{service.title}</h3>
                <p className="text-sm leading-6 text-neutral-400">{service.description}</p>
              </Glass>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fun facts: Happy Clients, Working Hours, Contributions, Coffee Consumed
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {profile.stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
          >
            <Glass className="p-6 text-center">
              <div className="text-3xl font-semibold text-white">{stat.value}</div>
              <div className="mt-2 text-sm text-neutral-400">{stat.label}</div>
            </Glass>
          </motion.div>
        ))}
      </div>
      */}
    </section>
  );
}
