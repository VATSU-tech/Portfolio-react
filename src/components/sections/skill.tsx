export default function Skill(){
    return <section id="contact" className="section-pad">
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
            </div>
          </div>
        </div>
      </section>
}