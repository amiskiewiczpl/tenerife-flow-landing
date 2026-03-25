import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer py-12 bg-slate-950 text-slate-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Kolumna 1: Logo + opis */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt=""
                className="brand-logo"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.visibility = 'hidden';
                }}
              />
              <h3 className="text-xl font-bold text-white">Tenerife Flow</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Butikowa obsługa podróży na Teneryfie — planowanie, concierge, relokacje.
            </p>
          </div>

          {/* Kolumna 2: Nawigacja */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Nawigacja</h4>
            <div className="space-y-3 text-sm">
              <button
                onClick={() => scrollToSection('audience')}
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Dla kogo
              </button>
              <button
                onClick={() => scrollToSection('packages')}
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Pakiety
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                Jak to działa
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block text-slate-300 hover:text-white transition-colors text-left"
              >
                FAQ
              </button>
            </div>
          </div>

          {/* Kolumna 3: Kontakt */}
          <div className="space-y-4">
            <h4 className="text-white text-lg font-semibold">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:kontakt@twojadomena.pl"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                kontakt@twojadomena.pl
              </a>
              <a
                href="https://wa.me/48123123123"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                WhatsApp: +48 123 123 123
              </a>
              <p className="text-slate-400 text-sm">Odpowiadamy w 24h</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-10 pt-6 text-center">
          <p className="text-slate-500 text-xs">&copy; 2024 Tenerife Flow. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;