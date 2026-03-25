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
    <section className="section section-alt pt-10 pb-14">
      <Container>
        <SectionTitle
          title="Najczęściej zadawane pytania"
          subtitle="Odpowiedzi na pytania, które najczęściej słyszymy od naszych klientów."
        />
        <div className="space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-item bg-white/90 border border-slate-200/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div
                  onClick={() => toggleFaq(index)}
                  className="flex items-center justify-between px-6 py-5 cursor-pointer select-none"
                >
                  <h3 className="text-lg font-semibold text-slate-800 leading-tight pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-colors duration-200 hover:bg-slate-200">
                    <span className="text-slate-600 text-xl font-medium">
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">
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