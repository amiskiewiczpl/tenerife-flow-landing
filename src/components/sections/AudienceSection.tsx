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
        <div className="grid gap-5 lg:grid-cols-2 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <article
              key={index}
              className="audience-card p-5 lg:p-6 rounded-2xl border border-white/20 bg-white/8 shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-300" />
                <h3 className="text-lg lg:text-xl font-semibold tracking-tight text-slate-900">{audience.title}</h3>
              </div>
              <p className="text-sm lg:text-base text-slate-700 leading-relaxed mb-4">{audience.description}</p>
              <div className="inline-flex items-center gap-2 mt-auto rounded-full px-3 py-1.5 bg-sky-50 text-sky-800 border border-sky-100 text-sm font-semibold">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-600 text-white">✓</span>
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