import React from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <Container>
        <SectionTitle
          title="Gotowy na niezapomniany pobyt?"
          subtitle="Skontaktuj się z nami i rozpocznij planowanie swojej wymarzonej Teneryfy."
        />
        <div className="text-center">
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Umów bezpłatną konsultację i dowiedz się, jak możemy pomóc w zorganizowaniu Twojego idealnego wyjazdu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="mailto:kontakt@twojadomena.pl"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Napisz do nas
            </Button>
            <Button
              href="https://wa.me/48123123123"
              variant="secondary"
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;