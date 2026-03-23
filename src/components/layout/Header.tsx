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
        <div className="text-2xl font-bold">Tenerife Flow</div>
        <nav className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('hero')} className="text-muted hover:text-primary">Start</button>
          <button onClick={() => scrollToSection('audience')} className="text-muted hover:text-primary">Dla kogo</button>
          <button onClick={() => scrollToSection('packages')} className="text-muted hover:text-primary">Pakiety</button>
          <button onClick={() => scrollToSection('how-it-works')} className="text-muted hover:text-primary">Jak to działa</button>
          <button onClick={() => scrollToSection('contact')} className="text-muted hover:text-primary">Kontakt</button>
        </nav>
        <Button onClick={() => scrollToSection('contact')} size="sm">Umów konsultację</Button>
      </div>
    </header>
  );
};

export default Header;