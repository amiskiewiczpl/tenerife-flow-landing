import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { advantages } from '../../data/advantages';

const WhyUsSection: React.FC = () => {
  return (
    <section className="section\">
      <Container>
        <SectionTitle
          title="Dlaczego Tenerife Flow?"
          subtitle="Zobacz, co wnosimy do Twojej podróży — z luksusem i prostotą."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <article
              key={index}
              className="whyus-card rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3">{advantage.title}</h3>
              <p className="text-base text-slate-700 leading-relaxed">{advantage.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;