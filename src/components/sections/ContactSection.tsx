import React from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-bg section py-16 md:py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
              Gotowy na luksusowy pobyt?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Skontaktuj się z nami, aby zaplanować swój idealny wyjazd bez stresu i organizacyjnych problemów.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button
              href="mailto:kontakt@twojadomena.pl"
              size="lg"
              className="bg-white text-slate-900 font-bold hover:bg-slate-50 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
            >
              Napisz email
            </Button>
            <Button
              href="https://wa.me/48123123123"
              size="lg"
              className="bg-green-500 text-white font-bold hover:bg-green-600 shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg"
            >
              WhatsApp
            </Button>
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-4 text-sm bg-white/20 px-8 py-6 rounded-2xl border border-white/30 backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-emerald-300 text-2xl">✓</span>
                <p className="font-bold text-white text-lg">Konsultacja bezpłatna</p>
              </div>
              <p className="text-white/85 text-base">Odpowiadamy w ciągu 24 godzin • Wsparcie w języku polskim</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;