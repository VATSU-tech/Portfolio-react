import Badge from "../ui/Badge";
import TiltCard from "../ui/TiltCard";
import { projects } from "../../data/projects";

const ProjectsSection = () => (
  <section id="projects" className="section-pad">
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">
          Projets sélectionnés
        </p>
        <h2 className="text-3xl sm:text-4xl font-display">
          Une vitrine pour vos idées les plus ambitieuses
        </h2>
      </div>
      {/* <button className="btn btn-outline border-stroke text-ink hover:border-glow">
        Voir tous les cas
      </button> */}
    </div>

    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <TiltCard
          key={project.title}
          className="project-card glass rounded-3xl p-6 space-y-4 hover-ring reveal-on-scroll"
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-display">{project.title}</h3>
              <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">
                {project.type}
              </p>
            </div>
            <a
              className="btn hover:cursor-pointer btn-sm btn-ghost text-ink-muted hover:text-ink"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Visiter
            </a>
          </div>
          <p className="text-ink-muted">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} label={tech} />
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-glow/30 px-3 py-1 text-xs text-glow"
              >
                {metric}
              </span>
            ))}
          </div>
        </TiltCard>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
