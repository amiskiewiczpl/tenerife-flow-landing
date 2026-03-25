import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-bg section py-16">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Gotowy na niezapomniany pobyt na Teneryfie?
          </h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-slate-100 max-w-2xl mx-auto">
            Umów bezpłatną konsultację i zacznij planować swój wymarzony wyjazd już dziś.
            Premium organizacja bez chaosu i ryzyka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              href="mailto:kontakt@twojadomena.pl"
              size="lg"
              className="bg-white text-slate-900 hover:bg-slate-100 shadow-lg flex-1"
            >
              📧 Napisz do nas
            </Button>
            <Button
              href="https://wa.me/48123123123"
              size="lg"
              className="bg-cyan-500 text-white hover:bg-cyan-400 shadow-lg flex-1"
            >
              💬 WhatsApp
            </Button>
          </div>
          <div className="mt-8 text-center">
            <p className="text-slate-200 text-sm mb-1">Odpowiedź w ciągu 24 godzin • Konsultacja bezpłatna</p>
            <p className="text-slate-300 text-xs">Wszystko po polsku • Spersonalizowana pomoc premium</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;