import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Twoja Teneryfa bez chaosu, stresu i godzin planowania
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Projektujemy pobyty na Teneryfie skrojone pod Ciebie — od planu wyjazdu, przez koordynację, aż po pełny concierge premium.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button onClick={() => scrollToSection('contact')} size="lg">Umów konsultację</Button>
          <Button onClick={() => scrollToSection('packages')} variant="secondary" size="lg">Zobacz pakiety</Button>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Dla par</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Dla rodzin</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Relokacja czasowa</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Concierge premium</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;