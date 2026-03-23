import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const AboutSection: React.FC = () => {
  return (
    <section className="section section-alt">
      <Container>
        <SectionTitle title="O nas" />
        <Card className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-4">
            Jesteśmy butikową usługą specjalizującą się w planowaniu pobytów na Teneryfie.
          </p>
          <p className="mb-4">
            Nasze podejście opiera się na indywidualnym dopasowaniu — każdy wyjazd projektujemy od podstaw,
            biorąc pod uwagę preferencje, budżet i styl życia klienta.
          </p>
          <p>
            Nie oferujemy masowych pakietów turystycznych. Skupiamy się na tym, by Twój pobyt na Teneryfie
            był dokładnie taki, jakiego potrzebujesz — bez zbędnego chaosu i stresu.
          </p>
        </Card>
      </Container>
    </section>
  );
};

export default AboutSection;