import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import { faqs } from '../../data/faq';

const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section section-alt">
      <Container>
        <SectionTitle
          title="Najczęściej zadawane pytania"
          subtitle="Szybkie odpowiedzi na pytania, które często słyszymy od naszych klientów."
        />
        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-item border border-slate-200 bg-white rounded-xl overflow-hidden transition-all duration-200 mb-4 ${
                  isOpen
                    ? 'shadow-lg border-slate-300'
                    : 'shadow-sm hover:shadow-md hover:border-slate-250'
                }`}
              >
                <div
                  onClick={() => toggleFaq(index)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFaq(index);
                    }
                  }}
                  className="w-full flex items-center justify-between gap-4 px-6 py-6 cursor-pointer hover:bg-slate-50/50 transition-colors duration-150"
                >
                  <h3 className="text-lg font-bold text-slate-900 leading-tight flex-1 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center transition-all duration-200 hover:border-slate-400">
                    <span className={`text-slate-600 text-xl font-bold transition-all duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}>
                      +
                    </span>
                  </div>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className={`px-6 pt-4 border-t border-slate-100 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <p className="text-slate-700 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;