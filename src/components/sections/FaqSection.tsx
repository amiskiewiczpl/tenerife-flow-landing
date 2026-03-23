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
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="card border border-gray-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-primary">{faq.question}</h3>
                  <span className="text-accent text-xl">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
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