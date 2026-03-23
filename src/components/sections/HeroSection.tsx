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
    <section id="hero" className="hero-bg section">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="text-left">
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-6">
              Concierge & travel planning
            </div>
            <h1 className="mb-6">
              Twoja Teneryfa bez chaosu, stresu i godzin planowania
            </h1>
            <p className="text-xl mb-8">
              Projektujemy pobyty na Teneryfie skrojone pod Ciebie — od planu wyjazdu, przez koordynację, aż po pełny concierge premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={() => scrollToSection('contact')} size="lg">Umów konsultację</Button>
              <Button onClick={() => scrollToSection('packages')} variant="secondary" size="lg">Zobacz pakiety</Button>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/80 text-primary px-3 py-1 rounded-full text-sm border">Dla par</span>
              <span className="bg-white/80 text-primary px-3 py-1 rounded-full text-sm border">Dla rodzin</span>
              <span className="bg-white/80 text-primary px-3 py-1 rounded-full text-sm border">Relokacja czasowa</span>
              <span className="bg-white/80 text-primary px-3 py-1 rounded-full text-sm border">Concierge premium</span>
            </div>
          </div>

          {/* Right column */}
          <div className="text-center lg:text-right">
            <div className="card p-8 max-w-md mx-auto lg:ml-auto">
              <h3 className="text-lg font-semibold mb-6 text-primary">Dlaczego Tenerife Flow?</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Indywidualne podejście</h4>
                    <p className="text-sm text-muted">Każdy pobyt projektujemy od podstaw</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Lokalna wiedza</h4>
                    <p className="text-sm text-muted">Unikamy błędów i odkrywamy najlepsze miejsca</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary">Oszczędność czasu</h4>
                    <p className="text-sm text-muted">Skupiasz się na tym, co ważne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;