import TiltCard from "../ui/TiltCard";
import { iotHighlights } from "../../data/projects";
import { iotTags } from "../../data/content";

const IotSection = () => (
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
          {iotTags.map((tag) => (
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
);

export default IotSection;
