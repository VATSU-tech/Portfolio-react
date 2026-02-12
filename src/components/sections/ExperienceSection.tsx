import Badge from "../ui/Badge";
import TiltCard from "../ui/TiltCard";
import { experiences } from "../../data/projects";
import { experienceSkills, stackItems } from "../../data/content";

const ExperienceSection = () => (
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
        {experienceSkills.map((skill) => (
          <Badge key={skill} label={skill} />
        ))}
      </div>
    </div>
    <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <TiltCard className="glass rounded-3xl p-6 space-y-5 reveal-on-scroll">
        <h3 className="font-display text-2xl">Stack préférée</h3>
        <div className="grid grid-cols-2 gap-4 text-sm">
          {stackItems.map((item) => (
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
);

export default ExperienceSection;
