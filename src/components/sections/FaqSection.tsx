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
    <section className="section">
      <Container>
        <SectionTitle
          title="Najczęściej zadawane pytania"
          subtitle="Odpowiedzi na pytania, które słyszymy najczęściej."
        />
        <div className="max-w-4xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-5 px-6 focus:outline-none focus:bg-slate-50 rounded-xl transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-800 pr-4 leading-tight">{faq.question}</h3>
                  <span className="text-cyan-600 text-xl flex-shrink-0 font-bold">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-600 leading-relaxed text-sm">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;