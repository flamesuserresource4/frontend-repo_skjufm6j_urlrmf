function FestivalCard({ id, title, description, colorFrom, colorTo, accent, illustration }) {
  return (
    <div id={id} className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/20">
      <div className={`absolute inset-0 bg-gradient-to-br ${colorFrom} ${colorTo} opacity-80`}></div>
      <div className="relative p-6 sm:p-8">
        <div className="h-48 sm:h-56 w-full rounded-xl overflow-hidden ring-1 ring-black/20 bg-black/20">
          {illustration}
        </div>
        <div className="mt-6">
          <h4 className="text-white text-2xl font-extrabold tracking-wide">{title}</h4>
          <p className="mt-2 text-white/80 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="mt-4">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ring-1 ring-white/20 ${accent}`}>Tradición Andina</span>
        </div>
      </div>
    </div>
  );
}

export default function Festivals() {
  return (
    <section id="festividades" className="relative">
      <div className="bg-[#0C1B3B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-black tracking-[0.35em] text-white">FESTIVIDADES</h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <FestivalCard
              id="diablada"
              title="Diablada Pillareña"
              description="Fuerza, fuego y ritmo ancestral en las calles de Píllaro. Un baile de identidad y resistencia."
              colorFrom="from-red-900/60"
              colorTo="to-black/60"
              accent="bg-red-500/20 text-red-200"
              illustration={(
                <svg viewBox="0 0 600 280" className="w-full h-full">
                  <defs>
                    <radialGradient id="fire" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#ffedd5"/>
                      <stop offset="50%" stopColor="#fb923c"/>
                      <stop offset="100%" stopColor="#7f1d1d"/>
                    </radialGradient>
                  </defs>
                  <rect width="600" height="280" fill="url(#fire)"/>
                  {/* Diablo mask silhouette */}
                  <g transform="translate(300,150)" fill="#0b0b0b" stroke="#ef4444" strokeWidth="4">
                    <path d="M -120 40 C -110 0, -70 -60, 0 -80 C 70 -60, 110 0, 120 40 C 80 80, -80 80, -120 40 Z"/>
                    <circle cx="-35" cy="-10" r="12" fill="#ef4444"/>
                    <circle cx="35" cy="-10" r="12" fill="#ef4444"/>
                    <path d="M -70 -60 C -50 -100, -20 -120, -10 -70"/>
                    <path d="M 70 -60 C 50 -100, 20 -120, 10 -70"/>
                  </g>
                </svg>
              )}
            />

            <FestivalCard
              id="mamanegra"
              title="Mama Negra"
              description="Devoción y júbilo en Latacunga: una procesión de colores, símbolos y personajes entrañables."
              colorFrom="from-indigo-900/60"
              colorTo="to-purple-900/60"
              accent="bg-yellow-400/20 text-yellow-200"
              illustration={(
                <svg viewBox="0 0 600 280" className="w-full h-full">
                  <defs>
                    <linearGradient id="dusk" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#fde68a"/>
                      <stop offset="100%" stopColor="#7c3aed"/>
                    </linearGradient>
                  </defs>
                  <rect width="600" height="280" fill="url(#dusk)"/>
                  {/* Andean silhouette + character */}
                  <g fill="#0b0b0b" stroke="#fbbf24" strokeWidth="3">
                    <path d="M0 220 Q 120 180 220 200 T 440 200 T 600 180 L 600 280 L 0 280 Z" />
                    <g transform="translate(420,140)">
                      <circle r="36" fill="#0b0b0b"/>
                      <path d="M -28 -30 L -10 -10 L 0 -34 L 10 -10 L 28 -30" fill="#fbbf24"/>
                      <rect x="30" y="-4" width="12" height="34" rx="3" fill="#10b981" stroke="#065f46" strokeWidth="2"/>
                      <path d="M -40 20 Q 0 -10 40 20 L 30 90 L -30 90 Z" fill="#0b0b0b"/>
                    </g>
                  </g>
                </svg>
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
