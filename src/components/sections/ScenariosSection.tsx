import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const ScenariosSection: React.FC = () => {
  const scenarioCards = [
    {
      title: 'Aktywna para na 6 dni',
      description: 'Ocean, punkt widokowy i zachód słońca w szytym na miarę planie. Aktywności + chill w najlepszym stylu Teneryfy.',
      imageSrc: new URL('../../assets/scenario-couple.jpg', import.meta.url).href,
      imageExists: false // Since file doesn't exist, show placeholder
    },
    {
      title: 'Rodzina z dzieckiem na 10 dni',
      description: 'Spokojna plaża, rodzinny basen i wygodny apartament z planem, który daje czas dla dzieci i rodziców.',
      imageSrc: new URL('../../assets/scenario-family.jpg', import.meta.url).href,
      imageExists: false
    },
    {
      title: 'Miesięczna relokacja',
      description: 'Apartament z balkonem, praca z widokiem i wygodna codzienność. Relokacja, która pozwala skupić się na życiu.',
      imageSrc: new URL('../../assets/scenario-relocation.jpg', import.meta.url).href,
      imageExists: false
    }
  ];

  return (
    <section className="section">
      <Container>
        <SectionTitle
          title="Przykładowe scenariusze pobytu"
          subtitle="Zobacz, jak mogą wyglądać spersonalizowane wyjazdy."
        />
        <div className="grid md:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {scenarioCards.map((scenario, index) => (
            <div
              key={index}
              className="card p-4 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white border border-slate-200 rounded-2xl"
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-inner bg-gradient-to-br from-green-100 to-green-200">
                {scenario.imageExists ? (
                  <img
                    src={scenario.imageSrc}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center text-green-600">
                      <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-200 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs font-medium">Scenario Image</p>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
              </div>
              <div className="pt-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-2 leading-tight">{scenario.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{scenario.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScenariosSection;