import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { scenarios } from '../../data/scenarios';

const ScenariosSection: React.FC = () => {
  const scenarioStyles = [
    {
      bg: 'bg-gradient-to-br from-blue-50 to-cyan-50',
      icon: '🏔️',
      accent: 'border-cyan-200'
    },
    {
      bg: 'bg-gradient-to-br from-orange-50 to-yellow-50',
      icon: '🏖️',
      accent: 'border-orange-200'
    },
    {
      bg: 'bg-gradient-to-br from-green-50 to-emerald-50',
      icon: '🏠',
      accent: 'border-green-200'
    }
  ];

  return (
    <section className="section">
      <Container>
        <SectionTitle
          title="Przykładowe scenariusze pobytu"
          subtitle="Zobacz, jak mogą wyglądać spersonalizowane wyjazdy."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div key={index} className={`card p-8 ${scenarioStyles[index].bg} ${scenarioStyles[index].accent} border-2 hover:shadow-lg transition-shadow`}>
              <div className="text-4xl mb-4">{scenarioStyles[index].icon}</div>
              <h3 className="mb-4 text-lg font-semibold text-primary">{scenario.title}</h3>
              <p className="text-muted leading-relaxed">{scenario.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScenariosSection;