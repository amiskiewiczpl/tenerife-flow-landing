import React from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">Tenerife Flow</div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-gray-900">Start</button>
            <button onClick={() => scrollToSection('audience')} className="text-gray-600 hover:text-gray-900">Dla kogo</button>
            <button onClick={() => scrollToSection('packages')} className="text-gray-600 hover:text-gray-900">Pakiety</button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-gray-600 hover:text-gray-900">Jak to działa</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-gray-900">Kontakt</button>
          </nav>
          <Button onClick={() => scrollToSection('contact')} size="sm">Umów konsultację</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;