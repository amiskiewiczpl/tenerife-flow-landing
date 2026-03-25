import React, { useState } from 'react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroImageUrl = new URL('../../assets/hero-tenerife.jpg', import.meta.url).href;

  const HeroPlaceholder = () => (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 via-sky-100 to-blue-150 relative overflow-hidden flex items-center justify-center">
      {/* Decorative gradient blobs */}
      <div className="absolute top-1/4 -left-10 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-10 w-40 h-40 bg-sky-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/5 to-transparent" />
    </div>
  );

  return (
    <section id="hero" className="hero-bg section py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left column - Content */}
          <div className="text-white flex flex-col justify-start">
            {/* Label */}
            <div className="mb-4 md:mb-5">
              <span className="inline-flex items-center gap-2 bg-white/12 text-white px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase border border-white/25 backdrop-blur-sm">
                ✨ Concierge & travel planning
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-black leading-[1.15] mb-4 md:mb-5 text-white">
              Luksusowy pobyt<br className="hidden md:block" /> na Teneryfie
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-white/85 leading-relaxed mb-6 md:mb-7 max-w-lg">
              Z indywidualnym concierge zorganizujemy każdy dzień: od transferów i rezerwacji, po lokalne doświadczenia premium. Wyłącznie selektywne miejsca i pełna opieka.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-7 md:mb-8">
              <Button 
                onClick={() => scrollToSection('contact')} 
                size="lg" 
                className="w-full sm:w-auto"
              >
                Umów konsultację
              </Button>
              <Button 
                onClick={() => scrollToSection('packages')} 
                variant="secondary" 
                size="lg" 
                className="w-full sm:w-auto"
              >
                Poznaj pakiety
              </Button>
            </div>

            {/* Chips/Badges */}
            <div className="flex flex-wrap gap-2.5 mb-7 md:mb-8">
              {['Dla par', 'Dla rodzin', 'Relokacja czasowa'].map((badge) => (
                <span 
                  key={badge} 
                  className="bg-white/10 text-white/95 px-3 py-1.5 rounded-full border border-white/20 text-xs font-medium whitespace-nowrap hover:bg-white/15 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Value Points */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
              {[
                { icon: '✓', title: 'Plan dopasowany', text: 'Do Twoich potrzeb i stylu' },
                { icon: '✓', title: 'Eksperci lokalni', text: 'Znają każdy kątek Wyspy' },
                { icon: '✓', title: 'Pełna opieka', text: 'Spokój 24/7' }
              ].map((vp, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300 text-sm font-bold border border-emerald-400/40">
                      {vp.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-semibold text-white mb-0.5">{vp.title}</p>
                    <p className="text-xs md:text-sm text-white/75 leading-snug">{vp.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Hero Image */}
          <div className="mt-8 lg:mt-0 lg:block">
            <div className="hero-media-frame rounded-3xl overflow-hidden border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)] bg-gradient-to-br from-blue-100 to-blue-200 aspect-[3/4] lg:aspect-[9/11] relative group">
              {!imageError ? (
                <img
                  src={heroImageUrl}
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={() => setImageError(true)}
                />
              ) : (
                <HeroPlaceholder />
              )}
              {/* Premium overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-slate-950/50 to-transparent backdrop-blur-sm">
                <p className="text-xs md:text-sm text-white/90 font-medium">✨ Ekskluzywny dostęp do prywatnych lokacji</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
