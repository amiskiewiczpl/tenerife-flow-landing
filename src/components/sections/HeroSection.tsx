import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hero image with fallback - replace with local file: src/assets/hero-tenerife.jpg
  const heroImage = `${import.meta.env.BASE_URL}assets/hero-tenerife.jpg` || 'https://images.unsplash.com/photo-1639535473180-1bdbd819090f?auto=format&fit=crop&w=1200&q=80';

  return (
    <section id="hero" className="hero-bg section min-h-screen flex items-center">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div className="text-left space-y-8">
            <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              Concierge & travel planning
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Twoja Teneryfa bez chaosu, stresu i godzin planowania
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed">
              Projektujemy pobyty na Teneryfie skrojone pod Ciebie — od planu wyjazdu, przez koordynację, aż po pełny concierge premium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollToSection('contact')} size="lg">Umów konsultację</Button>
              <Button onClick={() => scrollToSection('packages')} variant="secondary" size="lg">Zobacz pakiety</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-slate-200">Dla par</span>
              <span className="bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-slate-200">Dla rodzin</span>
              <span className="bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-slate-200">Relokacja czasowa</span>
              <span className="bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-slate-200">Concierge premium</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 bg-white/95 rounded-xl p-4 border border-slate-200 shadow-sm">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-blue-900 text-white text-sm font-bold">✓</span>
                <p className="text-sm font-medium text-slate-700 leading-tight">Indywidualny plan pobytu</p>
              </div>
              <div className="flex items-start gap-3 bg-white/95 rounded-xl p-4 border border-slate-200 shadow-sm">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-blue-900 text-white text-sm font-bold">✓</span>
                <p className="text-sm font-medium text-slate-700 leading-tight">Lokalna wiedza i rekomendacje</p>
              </div>
              <div className="flex items-start gap-3 bg-white/95 rounded-xl p-4 border border-slate-200 shadow-sm">
                <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-blue-900 text-white text-sm font-bold">✓</span>
                <p className="text-sm font-medium text-slate-700 leading-tight">Spokój, wygoda i oszczędność czasu</p>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/30">
              <img
                src={heroImage}
                alt=""
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1639535473180-1bdbd819090f?auto=format&fit=crop&w=1200&q=80';
                }}
              />
            </div>
            <div className="absolute -bottom-4 right-4 bg-white/90 border border-white/80 px-4 py-3 rounded-full text-sm font-medium shadow-lg backdrop-blur-sm">
              5⭐ ocena Gościa: 4.9/5 • elitarne doświadczenia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;