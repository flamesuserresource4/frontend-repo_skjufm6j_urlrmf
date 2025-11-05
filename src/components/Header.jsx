import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0C1B3B]/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-300 ring-2 ring-white/20 flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <span className="text-white text-xl sm:text-2xl font-black tracking-widest">RAYMIKUNA</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-white/90">
            <a href="#inicio" className="hover:text-white transition">Inicio</a>
            <a href="#eventos" className="hover:text-white transition">Eventos</a>
            <a href="#festividades" className="hover:text-white transition">Festividades</a>
            <div className="relative">
              <button
                onClick={() => setOpen((v) => !v)}
                className="hover:text-white transition flex items-center gap-1"
              >
                Personajes
                <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
              </button>
              {open && (
                <div className="absolute right-0 mt-2 w-48 rounded-md bg-[#0C1B3B]/90 shadow-lg ring-1 ring-black/10 backdrop-blur">
                  <div className="py-2 text-sm text-white/90">
                    <a href="#diablada" className="block px-4 py-2 hover:bg-white/5">Diablos de Píllaro</a>
                    <a href="#mamanegra" className="block px-4 py-2 hover:bg-white/5">Mama Negra</a>
                    <a href="#personajes" className="block px-4 py-2 hover:bg-white/5">Más personajes</a>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <button
            aria-label="Abrir menú"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-white/90 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="space-y-2 text-white/90">
              <a href="#inicio" className="block px-2 py-2 rounded hover:bg-white/5">Inicio</a>
              <a href="#eventos" className="block px-2 py-2 rounded hover:bg-white/5">Eventos</a>
              <a href="#festividades" className="block px-2 py-2 rounded hover:bg-white/5">Festividades</a>
              <div className="pt-2 border-t border-white/10">
                <div className="px-2 text-white/60 text-xs uppercase">Personajes</div>
                <a href="#diablada" className="block px-2 py-2 rounded hover:bg-white/5">Diablos de Píllaro</a>
                <a href="#mamanegra" className="block px-2 py-2 rounded hover:bg-white/5">Mama Negra</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
