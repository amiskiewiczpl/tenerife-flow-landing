import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { packages } from '../../data/packages';

const PackagesSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="section">
      <Container>
        <SectionTitle
          title="Nasze pakiety usług"
          subtitle="Wybierz spersonalizowaną ofertę, która daje Ci luksusowy start bez pracy organizacyjnej."
        />
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {packages.map((pkg, index) => {
            const isRecommended = pkg.name === 'Full concierge premium';
            return (
              <article
                key={index}
                className={`package-card relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isRecommended
                    ? 'border-2 border-amber-400 shadow-[0_20px_40px_rgba(215,98,0,0.15)] md:transform md:scale-105 md:-my-2'
                    : 'border border-slate-150 shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_12px_32px_rgba(15,23,42,0.12)]'
                }`}
                style={{
                  background: isRecommended
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(251,246,237,0.95) 100%)'
                    : '#ffffff'
                }}
              >
                {isRecommended && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400" />
                )}

                {isRecommended && (
                  <div className="px-4 sm:px-5 pt-3 sm:pt-4 pb-1">
                    <div className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-bold tracking-widest uppercase border border-amber-200 shadow-sm">
                      ★ Polecane
                    </div>
                  </div>
                )}

                <div className={`px-4 sm:px-5 ${isRecommended ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-4'} pb-3 sm:pb-4`}>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{pkg.name}</h3>
                  <p className="text-xs uppercase tracking-widest font-semibold text-slate-500 mb-2">{pkg.forWhom}</p>
                  <p className="text-xs text-slate-700 leading-relaxed mb-3">{pkg.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className={`mt-1 inline-flex h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                          isRecommended ? 'bg-amber-400' : 'bg-cyan-500'
                        }`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => scrollToSection('contact')}
                    size="lg"
                    variant={isRecommended ? 'primary' : 'secondary'}
                    className="w-full rounded-lg font-semibold text-xs sm:text-sm"
                  >
                    {pkg.cta}
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PackagesSection;