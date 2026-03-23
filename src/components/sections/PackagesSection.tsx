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
    <section id="packages" className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Nasze pakiety usług"
          subtitle="Wybierz poziom wsparcia dopasowany do Twoich potrzeb."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{pkg.name}</h3>
              <p className="text-blue-600 text-sm mb-3">{pkg.forWhom}</p>
              <p className="text-gray-600 mb-4 flex-grow">{pkg.description}</p>
              <ul className="text-gray-600 mb-6 space-y-1">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
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