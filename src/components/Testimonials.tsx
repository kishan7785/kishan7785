import { motion } from "framer-motion";
import { testimonials } from "../data/portfolio";
import Glass from "./Glass";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Testimonials
      </motion.h2>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <Glass className="flex h-full flex-col p-6">
              <img
                src={item.image}
                alt={item.name}
                className="mb-4 h-16 w-16 rounded-full border border-white/10 object-cover"
              />
              <p className="flex-1 text-sm leading-7 text-neutral-300">"{item.quote}"</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-neutral-400">{item.company}</p>
              </div>
            </Glass>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
