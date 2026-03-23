import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-bg section">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Gotowy na niezapomniany pobyt na Teneryfie?
          </h2>
          <p className="text-xl mb-12 leading-relaxed">
            Nie czekaj — umów bezpłatną konsultację i rozpocznij planowanie swojego wymarzonego wyjazdu już dziś.
            Twój idealny pobyt jest tylko jeden krok od Ciebie.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="mailto:kontakt@twojadomena.pl"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 shadow-lg"
            >
              📧 Napisz do nas
            </Button>
            <Button
              href="https://wa.me/48123123123"
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700 shadow-lg"
            >
              💬 WhatsApp
            </Button>
          </div>
          <p className="text-white/80 mt-8 text-sm">
            Odpowiedź w ciągu 24 godzin • Konsultacja bezpłatna • Wszystko po polsku
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;