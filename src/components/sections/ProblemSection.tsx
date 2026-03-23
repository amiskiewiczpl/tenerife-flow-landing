import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const ProblemSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Dlaczego samodzielne planowanie to problem?"
          subtitle="Większość osób traci tygodnie na organizację wyjazdu, popełniając kosztowne błędy."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Problemy</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                Samodzielne planowanie zabiera czas i energię
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                Łatwo wybrać złą lokalizację lub hotel
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                Przepłacanie za niewłaściwe opcje
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">✗</span>
                Logistyka i transport to koszmar
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">Nasze rozwiązanie</h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Porządkujemy i personalizujemy Twój wyjazd
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Wykorzystujemy lokalną wiedzę i doświadczenie
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Oszczędzamy Twój czas i pieniądze
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Zapewniamy spokój i komfort przez cały pobyt
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;