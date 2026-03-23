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
        <div className="max-w-3xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-100 last:border-b-0">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left py-4 px-2 focus:outline-none focus:bg-gray-50 rounded transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-medium text-primary pr-4">{faq.question}</h3>
                  <span className="text-accent text-lg flex-shrink-0">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="pb-4 px-2">
                  <p className="text-muted leading-relaxed text-sm">{faq.answer}</p>
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