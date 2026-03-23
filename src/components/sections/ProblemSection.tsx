import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const ProblemSection: React.FC = () => {
  return (
    <section className="section section-alt">
      <Container>
        <SectionTitle
          title="Dlaczego samodzielne planowanie to problem?"
          subtitle="Większość osób traci tygodnie na organizację wyjazdu, popełniając kosztowne błędy."
          centered={false}
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Problemy</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-lg">✗</span>
                <span>Samodzielne planowanie zabiera czas i energię</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-lg">✗</span>
                <span>Łatwo wybrać złą lokalizację lub hotel</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-lg">✗</span>
                <span>Przepłacanie za niewłaściwe opcje</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-3 text-lg">✗</span>
                <span>Logistyka i transport to koszmar</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary mb-6">Nasze rozwiązanie</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span>Porządkujemy i personalizujemy Twój wyjazd</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span>Wykorzystujemy lokalną wiedzę i doświadczenie</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span>Oszczędzamy Twój czas i pieniądze</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-3 text-lg">✓</span>
                <span>Zapewniamy spokój i komfort przez cały pobyt</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;