import Header from './components/Header';
import Hero from './components/Hero';
import Events from './components/Events';
import Festivals from './components/Festivals';

function DecorativeDivider() {
  return (
    <div className="relative">
      <div className="h-16 bg-gradient-to-b from-[#0C1B3B] to-transparent"></div>
      <div className="h-2 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0C1B3B]">
      <Header />
      <main>
        <Hero />
        <DecorativeDivider />
        <Events />
        <Festivals />
      </main>
      <footer className="border-t border-white/10 bg-[#0C1B3B]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Raymikuna · Tradición viva del Ecuador</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <a href="#inicio" className="hover:text-white">Inicio</a>
            <a href="#eventos" className="hover:text-white">Eventos</a>
            <a href="#festividades" className="hover:text-white">Festividades</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
