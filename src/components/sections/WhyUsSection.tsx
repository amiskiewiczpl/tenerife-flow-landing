import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { advantages } from '../../data/advantages';

const WhyUsSection: React.FC = () => {
  return (
    <section className="section pt-10 pb-14">
      <Container>
        <SectionTitle
          title="Dlaczego Tenerife Flow?"
          subtitle="Zobacz, co wnosimy do Twojej podróży — z luksusem i prostotą."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => (
            <article
              key={index}
              className="whyus-card rounded-xl border border-slate-200 bg-white/90 p-4 sm:p-5"
            >
              <h3 className="text-base font-bold text-slate-800 mb-1">{advantage.title}</h3>
              <p className="text-sm text-slate-600 leading-snug">{advantage.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;