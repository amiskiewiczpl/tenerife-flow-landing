import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { audiences } from '../../data/audiences';

const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="section">
      <Container>
        <SectionTitle
          title="Dla kogo tworzymy pobyty?"
          subtitle="Usługi premium z jasną i lekką formułą, dopasowane do Ciebie."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="card p-4 text-left hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center h-8 w-8 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-600 font-semibold mb-2">✓</div>
              <h3 className="text-lg md:text-xl font-semibold mb-1 text-slate-800">{audience.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">{audience.description}</p>
              <p className="inline-block text-sm font-semibold text-slate-700 bg-cyan-50 border border-cyan-100 rounded-lg px-3 py-1">
                {audience.benefit}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AudienceSection;