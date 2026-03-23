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
    <section id="packages" className="section section-alt">
      <Container>
        <SectionTitle
          title="Nasze pakiety usług"
          subtitle="Wybierz poziom wsparcia dopasowany do Twoich potrzeb."
        />
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {packages.map((pkg, index) => {
            const isRecommended = pkg.name === 'Full concierge premium';
            return (
              <div
                key={index}
                className={`card p-6 flex flex-col transition-all duration-300 hover:shadow-xl ${
                  isRecommended
                    ? 'border-2 border-cyan-400 bg-gradient-to-br from-cyan-50 via-white to-white shadow-lg relative'
                    : 'border border-slate-200 bg-white'
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full text-sm font-semibold uppercase text-cyan-700 bg-cyan-100 border border-cyan-200 shadow-sm">
                      Rekomendowany
                    </span>
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">{pkg.name}</h3>
                  <p className="text-sm font-medium text-cyan-700">{pkg.forWhom}</p>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{pkg.description}</p>
                <ul className="mb-6 space-y-2 flex-grow">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => scrollToSection('contact')}
                  size="sm"
                  variant={isRecommended ? 'primary' : 'secondary'}
                  className="w-full rounded-lg font-semibold"
                >
                  {pkg.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default PackagesSection;