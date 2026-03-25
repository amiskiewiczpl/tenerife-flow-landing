import React, { useState } from 'react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container flex justify-between items-center py-6">
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt=""
            className="brand-logo"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
          <span className="text-xl font-bold text-slate-900">Tenerife Flow</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all duration-200 shadow-sm"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('audience')} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Dla kogo</button>
          <button onClick={() => scrollToSection('packages')} className="text-slate-600 hover:text-slate-900 transition-colors font-medium">Pakiety</button>
          <Button onClick={() => scrollToSection('contact')} size="sm">Umów konsultację</Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-lg md:hidden z-50">
            <div className="container py-6 space-y-4">
              <button onClick={() => scrollToSection('audience')} className="block w-full text-left py-3 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium">Dla kogo</button>
              <button onClick={() => scrollToSection('packages')} className="block w-full text-left py-3 px-4 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors font-medium">Pakiety</button>
              <div className="pt-2">
                <Button onClick={() => scrollToSection('contact')} size="sm" className="w-full">Umów konsultację</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;