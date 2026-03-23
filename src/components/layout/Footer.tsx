import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer py-12 bg-gray-900 text-white">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Tenerife Flow Logo" className="brand-logo" />
              <span className="text-lg font-semibold">Tenerife Flow</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Butikowa usługa planowania pobytów na Teneryfie. Tworzymy spersonalizowane wyjazdy bez chaosu i stresu.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Nawigacja</h4>
            <nav className="space-y-2">
              <button onClick={() => scrollToSection('hero')} className="block text-gray-400 hover:text-white text-sm transition-colors">Start</button>
              <button onClick={() => scrollToSection('audience')} className="block text-gray-400 hover:text-white text-sm transition-colors">Dla kogo</button>
              <button onClick={() => scrollToSection('packages')} className="block text-gray-400 hover:text-white text-sm transition-colors">Pakiety</button>
              <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white text-sm transition-colors">Kontakt</button>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-white">Kontakt</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">kontakt@twojadomena.pl</p>
              <p className="text-gray-400">WhatsApp: +48 123 123 123</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2024 Tenerife Flow. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;