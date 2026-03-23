import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className={`flex flex-col h-full ${pkg.name === 'Full concierge premium' ? 'border-2 border-accent relative' : ''}`}>
              {pkg.name === 'Full concierge premium' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                  Rekomendowany
                </div>
              )}
              <h3 className="mb-2">{pkg.name}</h3>
              <p className="text-accent text-sm mb-3 font-medium">{pkg.forWhom}</p>
              <p className="mb-4 flex-grow">{pkg.description}</p>
              <ul className="mb-6 space-y-2 flex-grow">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-accent mr-2 mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button onClick={() => scrollToSection('contact')} className="mt-auto">
                {pkg.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PackagesSection;