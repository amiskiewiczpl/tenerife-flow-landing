import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { advantages } from '../../data/advantages';

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle
          title="Dlaczego Tenerife Flow?"
          subtitle="Co wyróżnia nasze podejście do planowania pobytów."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index}>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{advantage.title}</h3>
              <p className="text-gray-600">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;