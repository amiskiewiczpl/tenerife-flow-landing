import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { scenarios } from '../../data/scenarios';

const ScenariosSection: React.FC = () => {
  // Placeholder images - replace with local files in /public/images/ for production
  const scenarioImages = [
    // Aktywna para: ocean, punkt widokowy, zachód słońca
    'https://images.unsplash.com/photo-1639535473180-1bdbd819090f?auto=format&fit=crop&w=600&q=80', // Tenerife ocean cliffs
    // Rodzina: spokojna plaża, basen rodzinny
    'https://images.unsplash.com/photo-1517282032296-e11a76514987?auto=format&fit=crop&w=600&q=80', // Playa de las Teresitas
    // Relokacja: apartament, balkon, laptop
    'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=600&q=80'  // Luxury sea-view suite
  ];

  return (
    <section className="section">
      <Container>
        <SectionTitle
          title="Przykładowe scenariusze pobytu"
          subtitle="Zobacz, jak mogą wyglądać spersonalizowane wyjazdy."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="card p-6 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white border border-slate-200 rounded-2xl"
            >
              <div className="aspect-[4/3] mb-5 rounded-xl overflow-hidden shadow-lg">
                <img
                  src={scenarioImages[index]}
                  alt={scenario.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">{scenario.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{scenario.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScenariosSection;