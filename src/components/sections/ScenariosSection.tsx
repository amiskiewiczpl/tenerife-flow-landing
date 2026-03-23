import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { scenarios } from '../../data/scenarios';

const ScenariosSection: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Przykładowe scenariusze pobytu"
          subtitle="Zobacz, jak mogą wyglądać spersonalizowane wyjazdy."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <Card key={index}>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{scenario.title}</h3>
              <p className="text-gray-600">{scenario.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScenariosSection;