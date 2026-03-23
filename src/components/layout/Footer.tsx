import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Tenerife Flow</h3>
            <p className="text-gray-600">
              Butikowa usługa planowania pobytów na Teneryfie. Tworzymy spersonalizowane wyjazdy bez chaosu i stresu.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Nawigacja</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-gray-900">Start</button></li>
              <li><button onClick={() => scrollToSection('audience')} className="text-gray-600 hover:text-gray-900">Dla kogo</button></li>
              <li><button onClick={() => scrollToSection('packages')} className="text-gray-600 hover:text-gray-900">Pakiety</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900">Kontakt</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Kontakt</h4>
            <p className="text-gray-600">kontakt@twojadomena.pl</p>
            <p className="text-gray-600">WhatsApp: +48 123 123 123</p>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">&copy; 2024 Tenerife Flow. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;