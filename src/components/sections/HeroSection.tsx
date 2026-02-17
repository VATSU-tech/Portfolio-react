import Stat from "../ui/Stat";
import { heroProfile, heroStats, navLinks } from "../../data/content";

const HeroSection = () => (
  <header className="relative overflow-hidden">
    <div className="absolute inset-0 hero-grid opacity-70" />
    <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-glow/20 blur-3xl" />
    <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent-2/20 blur-3xl" />
    <nav className="section-pad relative z-10 flex flex-wrap items-center justify-between gap-4">
      <div className="font-display text-xl tracking-wide">Vatsu Studio</div>
      <div className="flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.2em] text-ink-muted">
        {navLinks.map((link) => (
          <a key={link.href} className="hover:text-cyan-400" href={link.href}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>

    <section className="section-pad relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8">
        <div className="rounded-[28px] border border-stroke/40 bg-night/70 p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="profile-3d">
              <div className="profile-3d__frame">
                <img
                  src={heroProfile.photo}
                  alt={heroProfile.name}
                  className="profile-3d__img"
                />
              </div>
            </div>
            <div className="min-w-[180px] space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-ink-muted">
                {heroProfile.role}
              </p>
              <p className="text-2xl font-display">{heroProfile.name}</p>
              <p className="text-sm text-ink-muted">{heroProfile.location}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {heroProfile.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-stroke/40 bg-night/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {heroProfile.details.map((detail) => (
              <div
                key={detail.label}
                className="rounded-2xl border border-stroke/30 bg-night/50 px-3 py-2"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                  {detail.label}
                </p>
                <p className="text-sm text-ink">{detail.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <a className="btn-neo" href={`mailto:${heroProfile.email}`}>
              {heroProfile.email}
            </a>
            <a className="btn border-stroke hover:bg-none hover:text-cyan-400 text-ink hover:border-glow" href={`tel:${heroProfile.phone}`}>
              {heroProfile.phone}
            </a>
            <a className="btn border-stroke hover:bg-none hover:text-cyan-400 text-ink hover:border-glow" href={heroProfile.cvHref}>
              Voir CV
            </a>
          </div>
          <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-ink-muted">
            {heroProfile.availability}
          </p>
        </div>
        <div className="inline-flex items-center gap-3 rounded-full border border-stroke/40 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink-muted">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          Web • IoT • Expériences interactives
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight">
          Je conçois des expériences digitales
          <span className="text-shimmer animate-shimmer"> immersives</span>, du
          pixel au capteur.
        </h1>
        <p className="text-lg text-ink-muted max-w-xl">
          Je suis un développeur Web & IoT, je fais de vos idées, des expériences numériques uniques. <b>donnons vie a vos idee les plus folles</b>
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="btn-neo" href="#projects">
            Voir les projets
          </a>
          <a
            className="btn border-stroke hover:bg-none hover:text-cyan-400 text-ink hover:border-glow"
            href="#contact"
          >
            Discutons ensemble
          </a>
        </div>
        <div className="flex flex-wrap gap-4">
          {heroStats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
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
      </div>
    </section>
  </header>
);

export default HeroSection;
