import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

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
    <section id="how-it-works" className="section section-alt pt-10 pb-14">
      <Container>
        <SectionTitle
          title="Jak to działa?"
          subtitle="Proces składa się tylko z czterech kroków — szybko, klarownie i stylowo."
        />
        <div className="process-grid max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="process-step">
              <div className="step-marker">{step.number}</div>
              <div className="step-content">
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;