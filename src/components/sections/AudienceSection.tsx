import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { audiences } from '../../data/audiences';

const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="section section-alt">
      <Container>
        <SectionTitle
          title="Dla kogo tworzymy pobyty?"
          subtitle="Zabieramy sprawy organizacji w ręce concierge, żebyś mógł skupić się na jakości doświadczeń."
        />
        <div className="grid gap-6 lg:grid-cols-2 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <article
              key={index}
              className="audience-card p-6 md:p-8 rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="h-3 w-3 rounded-full bg-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">{audience.title}</h3>
              </div>
              <p className="text-base text-slate-700 leading-relaxed mb-6">{audience.description}</p>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-sky-50 text-sky-800 border border-sky-200 text-sm font-semibold">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-600 text-white text-sm">✓</span>
                {audience.benefit}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AudienceSection;