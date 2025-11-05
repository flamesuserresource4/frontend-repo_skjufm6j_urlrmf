export default function Hero() {
  return (
    <section id="inicio" className="relative pt-16">
      {/* Sky gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C1B3B] via-[#0C1B3B] to-[#0C1B3B]/80"></div>

      {/* Andean mountain illustration using layered SVGs */}
      <div className="relative">
        <svg viewBox="0 0 1440 700" className="w-full h-[70vh] sm:h-[80vh] block">
          <defs>
            <linearGradient id="sky" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0c1b3b"/>
              <stop offset="60%" stopColor="#132b5e"/>
              <stop offset="100%" stopColor="#16336f"/>
            </linearGradient>
            <linearGradient id="snow" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#ffffff"/>
              <stop offset="100%" stopColor="#e6eefb"/>
            </linearGradient>
            <linearGradient id="mountain" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2a3f73"/>
              <stop offset="100%" stopColor="#0c1b3b"/>
            </linearGradient>
            <linearGradient id="forest" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#0d2b3b"/>
              <stop offset="100%" stopColor="#0a1e2b"/>
            </linearGradient>
          </defs>
          <rect width="1440" height="700" fill="url(#sky)" />

          {/* Far mountains */}
          <path d="M0 500 L250 380 L520 470 L700 410 L900 480 L1150 380 L1440 500 L1440 700 L0 700 Z" fill="#0e244d" opacity="0.6"/>

          {/* Main snowy peak */}
          <path d="M200 520 L560 260 L740 380 L920 320 L1240 520 L1240 700 L200 700 Z" fill="url(#mountain)"/>
          <path d="M560 260 L620 300 L680 340 L740 380 L700 400 L640 360 L600 340 L560 360 L520 340 L560 260 Z" fill="url(#snow)"/>

          {/* Waterfalls */}
          <path d="M700 400 C710 470, 690 520, 700 580 L700 700 L720 700 L720 580 C730 520, 710 470, 720 410" fill="#bfe7ff" opacity="0.8"/>
          <path d="M860 380 C870 450, 850 520, 860 560 L860 700 L880 700 L880 560 C890 520, 870 450, 880 390" fill="#a6ddff" opacity="0.8"/>

          {/* Foreground forest */}
          <path d="M0 580 Q 200 540 420 580 T 840 590 T 1440 560 L1440 700 L0 700 Z" fill="url(#forest)"/>
        </svg>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-white text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.35em] leading-[1.15] drop-shadow-xl">
              RAYMIKUNA
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-white/80 text-sm sm:text-base">
              Un portal visual y cultural que celebra las tradiciones del Ecuador: grandeza andina, misticismo y fiesta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
