import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { faqs } from '../../data/faq';

const FaqSection: React.FC = () => {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Najczęściej zadawane pytania"
          subtitle="Odpowiedzi na pytania, które słyszymy najczęściej."
        />
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FaqSection;