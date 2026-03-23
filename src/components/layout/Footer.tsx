import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer py-16 bg-slate-900 text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Tenerife Flow Logo" className="brand-logo" />
              <span className="text-xl font-bold">Tenerife Flow</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Butikowa usługa planowania pobytów na Teneryfie. Tworzymy spersonalizowane wyjazdy bez chaosu i stresu.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg">Nawigacja</h4>
            <nav className="space-y-3">
              <button onClick={() => scrollToSection('hero')} className="block text-slate-400 hover:text-white text-sm transition-colors text-left">Start</button>
              <button onClick={() => scrollToSection('audience')} className="block text-slate-400 hover:text-white text-sm transition-colors text-left">Dla kogo</button>
              <button onClick={() => scrollToSection('packages')} className="block text-slate-400 hover:text-white text-sm transition-colors text-left">Pakiety</button>
              <button onClick={() => scrollToSection('contact')} className="block text-slate-400 hover:text-white text-sm transition-colors text-left">Kontakt</button>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-semibold text-white text-lg">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <p className="text-slate-400">kontakt@twojadomena.pl</p>
              <p className="text-slate-400">WhatsApp: +48 123 123 123</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">&copy; 2024 Tenerife Flow. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;