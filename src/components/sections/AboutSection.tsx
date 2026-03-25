import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const AboutSection: React.FC = () => {
  return (
    <section className="section pt-10 pb-12">
      <Container>
        <SectionTitle title="O nas" />
        <Card className="about-card max-w-3xl mx-auto text-center p-6">
          <p className="text-base font-semibold text-slate-800 mb-3">
            Jesteśmy butikową agencją concierge dla wymagających podróżnych.
          </p>
          <p className="text-sm text-slate-600 mb-3">
            Tworzymy pobyty od A do Z: indywidualny plan, rezerwacje i wsparcie na miejscu.
          </p>
          <ul className="text-sm text-slate-700 space-y-2">
            <li>Personalizacja bez kompromisów</li>
            <li>Elitarne doświadczenia, sprawdzeni partnerzy</li>
            <li>Całkowity spokój w trakcie wyjazdu</li>
          </ul>
        </Card>
      </Container>
    </section>
  );
};

export default AboutSection;