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
    <header className="header">
      <div className="container flex justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Tenerife Flow Logo" className="brand-logo" />
          <span className="text-xl font-bold">Tenerife Flow</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <button onClick={() => scrollToSection('hero')} className="text-muted hover:text-primary transition-colors">Start</button>
          <button onClick={() => scrollToSection('audience')} className="text-muted hover:text-primary transition-colors">Dla kogo</button>
          <button onClick={() => scrollToSection('packages')} className="text-muted hover:text-primary transition-colors">Pakiety</button>
          <button onClick={() => scrollToSection('contact')} className="text-muted hover:text-primary transition-colors">Kontakt</button>
        </nav>
        <Button onClick={() => scrollToSection('contact')} size="sm" className="hidden md:inline-flex">Umów konsultację</Button>
      </div>
    </header>
  );
};

export default Header;