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
    <section id="hero" className="hero-bg section min-h-screen flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="text-left">
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-6">
              Concierge & travel planning
            </div>
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Twoja Teneryfa bez chaosu, stresu i godzin planowania
            </h1>
            <p className="text-xl mb-8 text-muted leading-relaxed">
              Projektujemy pobyty na Teneryfie skrojone pod Ciebie — od planu wyjazdu, przez koordynację, aż po pełny concierge premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={() => scrollToSection('contact')} size="lg">Umów konsultację</Button>
              <Button onClick={() => scrollToSection('packages')} variant="secondary" size="lg">Zobacz pakiety</Button>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="bg-white/80 text-primary px-3 py-1 rounded-full text-sm border">Dla par</span>
              <span className="bg-white/80 text-primary px-3 py-1 rounded-full text-sm border">Dla rodzin</span>
              <span className="bg-white/80 text-primary px-3 py-1 rounded-full text-sm border">Relokacja czasowa</span>
              <span className="bg-white/80 text-primary px-3 py-1 rounded-full text-sm border">Concierge premium</span>
            </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-primary font-medium">Indywidualne podejście do każdego klienta</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-primary font-medium">Lokalna wiedza i unikanie błędów</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-primary font-medium">Oszczędność czasu i spokój ducha</span>
              </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Teneryfa - góry i ocean"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg mt-8">
                <img
                  src="https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Teneryfa - klify i wybrzeże"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg -mt-4">
                <img
                  src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Teneryfa - apartament z widokiem"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Teneryfa - zachód słońca"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;