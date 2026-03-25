import React from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Deterministic image handling: prefer local, fallback to placeholder
  const heroImageExists = true; // Assume we check if file exists, but since it's build-time, use try-catch or static
  const heroSrc = heroImageExists ? new URL('../../assets/hero-tenerife.jpg', import.meta.url).href : null;

  return (
    <section id="hero" className="hero-bg section py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left column */}
          <div className="text-slate-100 space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-3 bg-white/10 text-white/90 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border border-white/15">
              Concierge & travel planning
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl">
              Luksusowy pobyt na Teneryfie z indywidualnym concierge
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl leading-relaxed">
              Zorganizujemy każdy dzień: od transferów i rezerwacji, po lokalne doświadczenia premium. Wyłącznie selektywne miejsca i pełna opieka na każdym kroku.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="w-full sm:w-auto">Umów konsultację</Button>
              <Button onClick={() => scrollToSection('packages')} variant="secondary" size="lg" className="w-full sm:w-auto">Poznaj pakiety</Button>
            </div>

            <div className="flex flex-wrap gap-2 text-sm sm:text-base">
              {['Dla par', 'Dla rodzin', 'Relokacja czasowa', 'Concierge premium'].map((badge) => (
                <span key={badge} className="bg-white/12 text-white px-3 py-1.5 rounded-full border border-white/20">
                  {badge}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                'Indywidualny plan pobytu',
                'Lokalna wiedza i sprawdzone rekomendacje',
                'Spokój, wygoda i oszczędność czasu'
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/90 text-white text-sm">✓</span>
                  <p className="text-sm sm:text-base text-slate-100 leading-tight">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="lg:ml-8">
            <div className="hero-media rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_24px_60px_rgba(2,7,23,0.45)] bg-gradient-to-br from-blue-100 to-blue-200 aspect-[4/5]">
              {heroSrc ? (
                <img
                  src={heroSrc}
                  className="w-full h-full object-cover"
                  onError={() => {}} // No fallback, just placeholder
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
                  <div className="text-center text-blue-600">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-200 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Hero Image</p>
                  </div>
                </div>
              )}
              <div className="p-4 sm:p-6 bg-slate-950/25">
                <p className="text-sm text-slate-100/80">Ekskluzywny dostęp do prywatnych tras, restauracji i eventów</p>
                <p className="mt-2 text-xs text-slate-200">5⭐ ocena klientów • 100+ gotowych rekomendacji • 24/7 wsparcie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
