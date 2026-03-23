import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tenerife Flow</h3>
            <p className="text-muted">
              Butikowa usługa planowania pobytów na Teneryfie. Tworzymy spersonalizowane wyjazdy bez chaosu i stresu.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Nawigacja</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('hero')} className="text-muted hover:text-white">Start</button></li>
              <li><button onClick={() => scrollToSection('audience')} className="text-muted hover:text-white">Dla kogo</button></li>
              <li><button onClick={() => scrollToSection('packages')} className="text-muted hover:text-white">Pakiety</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-muted hover:text-white">Kontakt</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <p className="text-muted">kontakt@twojadomena.pl</p>
            <p className="text-muted">WhatsApp: +48 123 123 123</p>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-muted">&copy; 2024 Tenerife Flow. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;