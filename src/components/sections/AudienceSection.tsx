import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { audiences } from '../../data/audiences';

const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="py-20">
      <Container>
        <SectionTitle
          title="Dla kogo tworzymy pobyty?"
          subtitle="Nasze usługi są dopasowane do różnych potrzeb i stylów życia."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <Card key={index} className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{audience.title}</h3>
              <p className="text-gray-600 mb-4">{audience.description}</p>
              <p className="text-blue-600 font-medium">{audience.benefit}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AudienceSection;