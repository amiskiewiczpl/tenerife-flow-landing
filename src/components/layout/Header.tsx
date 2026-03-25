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
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt=""
            className="brand-logo"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.style.visibility = 'hidden';
            }}
          />
          <span className="text-xl font-bold">Tenerife Flow</span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection('audience')} className="text-muted hover:text-primary transition-colors">Dla kogo</button>
          <button onClick={() => scrollToSection('packages')} className="text-muted hover:text-primary transition-colors">Pakiety</button>
          <Button onClick={() => scrollToSection('contact')} size="sm">Umów konsultację</Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 md:hidden z-50">
            <div className="container py-4 space-y-2">
              <button onClick={() => scrollToSection('audience')} className="block w-full text-left py-2 text-muted hover:text-primary">Dla kogo</button>
              <button onClick={() => scrollToSection('packages')} className="block w-full text-left py-2 text-muted hover:text-primary">Pakiety</button>
              <Button onClick={() => scrollToSection('contact')} size="sm" className="w-full mt-4">Umów konsultację</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;