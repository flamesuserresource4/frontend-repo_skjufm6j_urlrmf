export default function Events() {
  return (
    <section id="eventos" className="relative">
      {/* Background: warm tavern vibes using gradients and textures via subtle shadows */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Card with illustration-like silhouette */}
          <div className="rounded-xl overflow-hidden shadow-2xl ring-1 ring-black/20 bg-amber-100/5">
            <div className="relative aspect-[4/3] bg-amber-950 flex items-center justify-center">
              <svg viewBox="0 0 600 450" className="w-full h-full">
                <defs>
                  <linearGradient id="cardGlow" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0%" stopColor="#ffefc2"/>
                    <stop offset="100%" stopColor="#f59e0b"/>
                  </linearGradient>
                </defs>
                <rect width="600" height="450" fill="#2b1606" />
                {/* Table wood planks */}
                <g opacity="0.2">
                  <rect y="340" width="600" height="110" fill="#7a4a1e" />
                  <rect y="330" width="600" height="10" fill="#8b5a2b" />
                  <rect y="360" width="600" height="10" fill="#8b5a2b" />
                  <rect y="390" width="600" height="10" fill="#8b5a2b" />
                </g>
                {/* Mama Negra stylized silhouette */}
                <g transform="translate(300,230)">
                  <circle r="90" fill="#111" stroke="url(#cardGlow)" strokeWidth="4"/>
                  <path d="M -50 40 Q 0 10 50 40 L 40 120 L -40 120 Z" fill="#111" stroke="#f59e0b" strokeWidth="3"/>
                  {/* Crown */}
                  <path d="M -30 -60 L -10 -30 L 0 -60 L 10 -30 L 30 -60" fill="#f59e0b"/>
                  {/* Bottle */}
                  <rect x="55" y="20" width="16" height="40" rx="4" fill="#10b981"/>
                  <rect x="59" y="8" width="8" height="14" rx="2" fill="#065f46"/>
                </g>
                {/* Glow */}
                <ellipse cx="300" cy="410" rx="160" ry="20" fill="#000" opacity="0.4"/>
              </svg>
            </div>
          </div>

          {/* Details */}
          <div className="text-white">
            <div className="backdrop-blur-sm bg-black/20 rounded-xl p-6 ring-1 ring-white/10">
              <p className="uppercase tracking-widest text-amber-300 text-xs">Más reciente</p>
              <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold">Mama Negra</h3>
              <p className="mt-3 text-white/80">La emblemática celebración de Latacunga con fuerza, color y tradición viva.</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm ring-1 ring-white/10">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 2A1.5 1.5 0 0 0 5 3.5V5H4a2 2 0 0 0-2 2v11a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V7a2 2 0 0 0-2-2h-1V3.5A1.5 1.5 0 0 0 17.5 2h-11ZM7 5V4h10v1H7Zm-3 4h16v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z"/></svg>
                  11/11/2025
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
