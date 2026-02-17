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
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink-muted">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="skill h-2 rounded-xl overflow-hidden">
                    <div
                      className="h-full rounded-xl bg-gradient-to-r from-glow/50 via-accent/50 to-accent-3/50"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
}
