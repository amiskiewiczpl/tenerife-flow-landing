import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { audiences } from '../../data/audiences';

const AudienceSection: React.FC = () => {
  const icons = ['💑', '👨‍👩‍👧‍👦', '🏠', '👑'];

  return (
    <section id="audience" className="section">
      <Container>
        <SectionTitle
          title="Dla kogo tworzymy pobyty?"
          subtitle="Nasze usługi są dopasowane do różnych potrzeb i stylów życia."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {audiences.map((audience, index) => (
            <div key={index} className="card p-4 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">{icons[index]}</div>
              <h3 className="mb-2 text-lg font-semibold">{audience.title}</h3>
              <p className="mb-3 text-muted text-sm leading-relaxed">{audience.description}</p>
              <p className="text-accent font-medium text-sm">{audience.benefit}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AudienceSection;