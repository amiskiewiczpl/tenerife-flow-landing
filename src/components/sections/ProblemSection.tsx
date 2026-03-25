import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

const ProblemSection: React.FC = () => {
  return (
    <section className="section section-alt pt-10 pb-14">
      <Container>
        <SectionTitle
          title="Dlaczego samodzielne planowanie to problem?"
          subtitle="Większość osób traci tygodnie na organizację wyjazdu, popełniając kosztowne błędy."
          centered={false}
        />
        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <article className="problem-card p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white/80 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Kluczowe wyzwania</h3>
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed max-w-md">
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Planowanie pochłania czas i angażuje energię.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Wybór hoteli i atrakcji bywa ryzykowny.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Trudno unikać przepłacania za niesprawdzone opcje.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Logistyka oraz transport wymagają wielu godzin koordynacji.</span>
              </li>
            </ul>
          </article>

          <article className="problem-card p-4 sm:p-5 rounded-2xl border border-slate-200 bg-white/80 shadow-sm">
            <h3 className="text-lg font-semibold mb-4 text-cyan-800">Jak to rozwiązujemy</h3>
            <ul className="space-y-3 text-sm text-slate-700 leading-relaxed max-w-md">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Przejmujemy wszystkie elementy planowania.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Używamy lokalnej wiedzy, by uniknąć pułapek.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Minimalizujemy koszty dzięki ramkom konfiguracji.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">✓</span>
                <span>Gwarantujemy spokój przez cały pobyt.</span>
              </li>
            </ul>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSection;