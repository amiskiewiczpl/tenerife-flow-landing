import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { scenarios } from '../../data/scenarios';

const ScenariosSection: React.FC = () => {
  const scenarioImages = [
    'https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // góry dla aktywnej pary
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80', // plaża dla rodziny
    'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'  // apartament dla relokacji
  ];

  return (
    <section className="section">
      <Container>
        <SectionTitle
          title="Przykładowe scenariusze pobytu"
          subtitle="Zobacz, jak mogą wyglądać spersonalizowane wyjazdy."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {scenarios.map((scenario, index) => (
            <div key={index} className="card p-4 hover:shadow-lg transition-shadow overflow-hidden">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img
                  src={scenarioImages[index]}
                  alt={scenario.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-primary">{scenario.title}</h3>
              <p className="text-muted leading-relaxed text-sm">{scenario.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScenariosSection;