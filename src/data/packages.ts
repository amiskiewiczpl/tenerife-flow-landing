export interface Package {
  name: string;
  forWhom: string;
  description: string;
  features: string[];
  cta: 'Zapytaj o pakiet' | 'Umów konsultację';
}

export const packages: Package[] = [
  {
    name: "Plan wyjazdu",
    forWhom: "Dla wszystkich",
    description: "Szczegółowy plan pobytu dopasowany do Twoich potrzeb.",
    features: [
      "Analiza preferencji i budżetu",
      "Rekomendacje lokalizacji i atrakcji",
      "Harmonogram dnia po dniu",
      "Lista sprawdzonych miejsc"
    ],
    cta: "Zapytaj o pakiet"
  },
  {
    name: "Plan + koordynacja",
    forWhom: "Dla par i rodzin",
    description: "Plan plus pomoc w rezerwacjach i organizacji.",
    features: [
      "Wszystko z planu wyjazdu",
      "Rezerwacja noclegów i transportu",
      "Koordynacja atrakcji",
      "Wsparcie podczas pobytu"
    ],
    cta: "Zapytaj o pakiet"
  },
  {
    name: "Full concierge premium",
    forWhom: "Dla klientów premium",
    description: "Kompletna obsługa concierge na najwyższym poziomie.",
    features: [
      "Wszystko z koordynacji",
      "Osobisty asystent na miejscu",
      "Ekskluzywne doświadczenia",
      "24/7 wsparcie"
    ],
    cta: "Umów konsultację"
  },
  {
    name: "Relokacja czasowa",
    forWhom: "Dla dłuższych pobytów",
    description: "Pomoc w miesięcznych lub dłuższych wyjazdach.",
    features: [
      "Znajdowanie mieszkania na dłuższy termin",
      "Organizacja codziennych spraw",
      "Integracja z lokalną społecznością",
      "Wsparcie logistyczne"
    ],
    cta: "Zapytaj o pakiet"
  },
  {
    name: "Pobyt dla pary z dziećmi",
    forWhom: "Dla rodzin",
    description: "Specjalistyczna opieka nad wyjazdem rodzinnym.",
    features: [
      "Bezpieczne atrakcje dla dzieci",
      "Rodzinne noclegi i transport",
      "Opieka nad najmłodszymi",
      "Spokojny czas dla rodziców"
    ],
    cta: "Zapytaj o pakiet"
  }
];