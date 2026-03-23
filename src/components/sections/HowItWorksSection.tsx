import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Rozmowa",
      description: "Omawiamy Twoje preferencje, budżet i oczekiwania. Poznajemy Cię, by stworzyć idealny plan."
    },
    {
      number: 2,
      title: "Dobór pakietu",
      description: "Wybieramy odpowiedni poziom usług i przedstawiamy spersonalizowaną ofertę."
    },
    {
      number: 3,
      title: "Plan i organizacja",
      description: "Tworzymy szczegółowy harmonogram i zajmujemy się wszystkimi rezerwacjami."
    },
    {
      number: 4,
      title: "Spokojny pobyt",
      description: "Cieszysz się wyjazdem, a my zapewniamy wsparcie w razie potrzeby."
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <Container>
        <SectionTitle
          title="Jak to działa?"
          subtitle="Prosty proces od pomysłu do wymarzonego pobytu."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card key={step.number} className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="mb-3">{step.title}</h3>
              <p>{step.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;