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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {packages.map((pkg, index) => (
            <div key={index} className={`card p-4 flex flex-col h-full hover:shadow-lg transition-shadow ${pkg.name === 'Full concierge premium' ? 'border-2 border-cyan-500 relative' : 'border border-gray-200'}`}>
              {pkg.name === 'Full concierge premium' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Rekomendowany
                </div>
              )}
              <h3 className="mb-1 text-lg font-semibold">{pkg.name}</h3>
              <p className="text-accent text-sm mb-3 font-medium">{pkg.forWhom}</p>
              <p className="mb-4 flex-grow text-sm leading-relaxed">{pkg.description}</p>
              <ul className="mb-6 space-y-1 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-cyan-500 mr-2 mt-0.5 text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button onClick={() => scrollToSection('contact')} size="sm" className="mt-auto w-full">
                {pkg.cta}
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PackagesSection;