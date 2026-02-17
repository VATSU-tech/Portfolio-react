import { skills } from "../../data/content";

export default function Skill(){
    return <section id="skill" className="section-pad">
        <div className="glass rounded-[32px] p-10 lg:p-14 reveal-on-scroll">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-ink-muted">
                skill
              </p>
            </div>
            {skills.map((skill) => (
            <div className={`${skill.name}`}>
                <p className="uppercase text-ink-muted">{skill.name}</p>
                <div className={`mt-3 w-[${skill.value}%] h-2 rounded-xl bg-gradient-to-r from-glow/50 via-accent/50 to-accent-3/50`} />
            </div>
            ))}
          </div>
        </div>
      </section>
}