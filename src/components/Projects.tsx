import { motion } from "framer-motion";
import { FaApple, FaArrowUpRightFromSquare, FaGooglePlay } from "react-icons/fa6";
import { projectCategories, projects, type Project, type StoreLink } from "../data/portfolio";
import Glass from "./Glass";

function primaryLink(project: Project) {
  return project.link ?? project.storeLinks?.[0]?.url ?? "#";
}

function ProjectImage({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    );
  }

  return (
    <div className="flex h-48 w-full items-center justify-center bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20">
      <span className="text-5xl font-bold text-white/30">{project.title.charAt(0)}</span>
    </div>
  );
}

function StoreButtons({ storeLinks }: { storeLinks: StoreLink[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {storeLinks.map((store) => {
        const label = store.label
          ? `${store.label} · ${store.platform === "android" ? "Android" : "iOS"}`
          : store.platform === "android"
            ? "Android"
            : "iOS";

        return (
          <a
            key={`${store.url}-${store.label ?? store.platform}`}
            href={store.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
          >
            {store.platform === "android" ? (
              <FaGooglePlay className="text-[10px]" aria-hidden="true" />
            ) : (
              <FaApple className="text-[10px]" aria-hidden="true" />
            )}
            {label}
          </a>
        );
      })}
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const href = primaryLink(project);
  const isExternal = href.startsWith("http");

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group block"
    >
      <Glass className="flex h-full flex-col overflow-hidden transition-transform duration-300 group-hover:-translate-y-1">
        <div className="overflow-hidden">
          <ProjectImage project={project} />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <FaArrowUpRightFromSquare className="mt-1 shrink-0 text-neutral-500 transition-colors group-hover:text-white" />
          </div>
          <p className="mt-3 flex-1 text-sm leading-6 text-neutral-400">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.storeLinks && <StoreButtons storeLinks={project.storeLinks} />}
        </div>
      </Glass>
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Projects
      </motion.h2>

      <div className="space-y-16">
        {projectCategories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category);
          if (categoryProjects.length === 0) return null;

          return (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="mb-6 text-xl font-semibold tracking-tight text-neutral-200"
              >
                {category}
              </motion.h3>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {categoryProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
