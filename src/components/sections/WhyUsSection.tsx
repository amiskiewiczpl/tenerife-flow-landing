import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { advantages } from '../../data/advantages';

const WhyUsSection: React.FC = () => {
  return (
    <section className="section section-alt">
      <Container>
        <SectionTitle
          title="Dlaczego Tenerife Flow?"
          subtitle="Co wyróżnia nasze podejście do planowania pobytów."
        />
        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-4 hover:shadow-lg transition-shadow duration-200"
            >
              <h3 className="text-lg font-semibold mb-2 text-slate-800">{advantage.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;