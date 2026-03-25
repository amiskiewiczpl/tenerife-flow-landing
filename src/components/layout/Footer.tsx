import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer bg-slate-950 text-slate-100">
      {/* Main content */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Column 1: Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}logo.png`}
                alt="Tenerife Flow"
                className="brand-logo h-8"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              <h3 className="text-lg font-bold text-white">Tenerife Flow</h3>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Luksusowa obsługa podróży na Teneryfie. Planowanie, concierge, relokacje — wszystko w jednym miejscu.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-6">Nawigacja</h4>
            <nav className="space-y-3">
              <a
                onClick={() => scrollToSection('audience')}
                className="block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Dla kogo
              </a>
              <a
                onClick={() => scrollToSection('packages')}
                className="block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Pakiety usług
              </a>
              <a
                onClick={() => scrollToSection('how-it-works')}
                className="block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Proces
              </a>
              <a
                onClick={() => scrollToSection('faq')}
                className="block text-sm text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div>
                <a
                  href="mailto:kontakt@twojadomena.pl"
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  kontakt@twojadomena.pl
                </a>
              </div>
              <div>
                <a
                  href="https://wa.me/48123123123"
                  className="block text-sm text-slate-400 hover:text-white transition-colors"
                >
                  +48 123 123 123
                </a>
                <p className="text-xs text-slate-500 mt-1">24h odpowiedź</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="container py-6">
          <p className="text-xs text-slate-500 text-center">
            &copy; 2024 Tenerife Flow. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;