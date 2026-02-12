import { useEffect, useRef } from "react";
import type { ReactNode, MouseEvent } from "react";
import { experiences, iotHighlights, projects } from "./data/projects";

const useRevealOnScroll = () => {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal-on-scroll")
    );
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const TiltCard = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const tiltX = ((y / rect.height) * 2 - 1) * -8;
    const tiltY = ((x / rect.width) * 2 - 1) * 8;
    node.style.setProperty("--tilt-x", `${tiltX}deg`);
    node.style.setProperty("--tilt-y", `${tiltY}deg`);
  };

  const reset = () => {
    const node = ref.current;
    if (!node) return;
    node.style.setProperty("--tilt-x", `0deg`);
    node.style.setProperty("--tilt-y", `0deg`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`tilt-card ${className}`}
    >
      {children}
    </div>
  );
};

const Badge = ({ label }: { label: string }) => (
  <span className="badge badge-outline text-ink-muted border-stroke/60">
    {label}
  </span>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="glass rounded-2xl px-5 py-4 hover-ring">
    <div className="text-2xl font-display text-ink">{value}</div>
    <div className="text-xs uppercase tracking-[0.3em] text-ink-muted">
      {label}
    </div>
  </div>
);

export default function App() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen text-ink">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-70" />
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-glow/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-2/20 blur-3xl" />
        <nav className="section-pad relative z-10 flex flex-wrap items-center justify-between gap-4">
          <div className="font-display text-xl tracking-wide">Vatsu Studio</div>
          <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.2em] text-ink-muted">
            <a className="hover:text-ink" href="#projects">
              Projets
            </a>
            <a className="hover:text-ink" href="#iot">
              IoT
            </a>
            <a className="hover:text-ink" href="#experience">
              Parcours
            </a>
            <a className="hover:text-ink" href="#contact">
              Contact
            </a>
          </div>
        </nav>

        <section className="section-pad relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-stroke/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink-muted">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Web • IoT • Expériences interactives
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight">
              Je conçois des expériences digitales
              <span className="text-shimmer animate-shimmer"> immersives</span>
              , du pixel au capteur.
            </h1>
            <p className="text-lg text-ink-muted max-w-xl">
              Développeur Web & IoT, j&apos;assemble design, performance et interaction
              pour transformer les idées en produits mémorables.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="btn-neo" href="#projects">
                Voir les projets
              </a>
              <a
                className="btn btn-outline border-stroke text-ink hover:border-glow"
                href="#contact"
              >
                Discutons ensemble
              </a>
            </div>
            <div className="flex flex-wrap gap-4">
              <Stat value="35+" label="Sites livrés" />
              <Stat value="12" label="Devices IoT" />
              <Stat value="98" label="Score perf" />
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px]">
            <div className="absolute inset-0 rounded-[32px] border border-stroke/40 glass" />
            <div className="absolute inset-8 rounded-[28px] border border-stroke/30 bg-night/60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-72 w-72 sm:h-80 sm:w-80">
                <div className="absolute inset-0 orb rounded-full animate-pulse-orb" />
                <div className="absolute -top-6 left-10 h-16 w-16 rounded-2xl border border-stroke/50 bg-night/70 shadow-glow animate-float" />
                <div className="absolute bottom-6 right-10 h-14 w-14 rounded-2xl border border-stroke/50 bg-night/70 shadow-glow animate-float" />
                <div className="absolute right-16 top-12 h-24 w-24 rounded-full border border-stroke/50 bg-night/80 shadow-depth animate-tilt" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-3">
              {[
                "Interaction 3D",
                "Interfaces Web",
                "Solutions IoT",
                "Animations sur-mesure",
              ].map((item) => (
                <Badge key={item} label={item} />
              ))}
            </div>
          </div>
        </section>
      </header>

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
          <button className="btn btn-outline border-stroke text-ink hover:border-glow">
            Voir tous les cas
          </button>
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
                  className="btn btn-sm btn-ghost text-ink-muted hover:text-ink"
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

      <section id="iot" className="section-pad">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">
              IoT + Web Temps Réel
            </p>
            <h2 className="text-3xl sm:text-4xl font-display">
              Des systèmes connectés, visibles et pilotables en direct.
            </h2>
            <p className="text-ink-muted">
              J&apos;assemble hardware, data et UX pour des dashboards capables de
              transformer des signaux en décisions.
            </p>
            <div className="space-y-4">
              {iotHighlights.map((item) => (
                <div
                  key={item.title}
                  className="glass rounded-2xl p-4 reveal-on-scroll"
                >
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className="text-ink-muted text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <TiltCard className="glass rounded-3xl p-8 space-y-6 reveal-on-scroll">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl">Lab IoT Live</h3>
              <span className="badge badge-outline text-glow border-glow/50">
                MQTT
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Capteurs IA",
                "Edge computing",
                "Digital twins",
                "Predictive alerts",
              ].map((tag) => (
                <div
                  key={tag}
                  className="rounded-2xl border border-stroke/50 p-4 text-sm text-ink-muted"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-glow/40 bg-night/60 p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.3em] text-ink-muted">
                  Flux live
                </span>
                <span className="text-xs text-glow">+12% cette heure</span>
              </div>
              <div className="mt-3 h-24 rounded-xl bg-gradient-to-r from-glow/30 via-accent/30 to-accent-3/30" />
            </div>
          </TiltCard>
        </div>
      </section>

      <section id="experience" className="section-pad">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">
              Parcours & Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-display">
              Des années d&apos;itérations pour créer des produits mémorables.
            </h2>
          </div>
          <div className="flex gap-3">
            {[
              "UI Motion",
              "IoT Ops",
              "Architecture",
              "Branding",
            ].map((skill) => (
              <Badge key={skill} label={skill} />
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <TiltCard className="glass rounded-3xl p-6 space-y-5 reveal-on-scroll">
            <h3 className="font-display text-2xl">Stack préférée</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                "React + Vite",
                "TypeScript",
                "Tailwind + Sass",
                "Node + Express",
                "MQTT + WebSockets",
                "CI/CD Automations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-stroke/50 p-3 text-ink-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </TiltCard>
          <div className="glass rounded-3xl p-6 reveal-on-scroll timeline-line">
            <div className="space-y-6 pl-8">
              {experiences.map((exp) => (
                <div key={exp.title} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-glow" />
                    <h4 className="font-display text-lg">{exp.title}</h4>
                  </div>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">
                    {exp.period}
                  </p>
                  <p className="text-sm text-ink-muted">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-pad">
        <div className="glass rounded-[32px] p-10 lg:p-14 reveal-on-scroll">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">
                Contact direct
              </p>
              <h2 className="text-3xl sm:text-4xl font-display">
                Construisons votre prochaine expérience digitale.
              </h2>
              <p className="text-ink-muted">
                Disponible pour missions web premium, dashboards IoT et projets
                expérimentaux.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-neo">Réserver un appel</button>
                <button className="btn btn-outline border-stroke text-ink hover:border-glow">
                  Télécharger le CV
                </button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { label: "Email", value: "hello@vatsu.dev" },
                { label: "Téléphone", value: "+33 6 00 00 00 00" },
                { label: "Localisation", value: "Paris / Remote" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass rounded-2xl p-4 flex items-center justify-between"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-ink-muted">
                    {item.label}
                  </span>
                  <span className="text-sm">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="section-pad pt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-ink-muted">
        <span>© 2026 Vatsu Studio. Tous droits réservés.</span>
        <div className="flex gap-4">
          <a className="hover:text-ink" href="#">
            LinkedIn
          </a>
          <a className="hover:text-ink" href="#">
            GitHub
          </a>
          <a className="hover:text-ink" href="#">
            Behance
          </a>
        </div>
      </footer>
    </div>
  );
}
