// surveys.data.ts
// Pour ajouter un survey : ajouter un objet dans le tableau SURVEYS.
// Les trois langues (fr, en, es) sont à renseigner pour chaque entrée.
// Ordre : du plus récent au plus ancien.

export interface Survey {
  year: number;
  name: {
    fr: string;
    en: string;
    es: string;
  };
  description: {
    fr: string;
    en: string;
    es: string;
  };
}

export const SURVEYS: Survey[] = [
  {
    year: 2026,
    name: { fr: 'Dans la Forêt', en: 'Into the forest', es: 'En el bosque' },
    description: { fr: 'Forêts européennes', en: 'European forests', es: 'Bosques europeos' },
  },
  {
    year: 2025,
    name: { fr: 'Plantiful', en: 'Plantiful', es: 'Plantiful' },
    description: { fr: 'Plantes urbaines', en: 'Urban plants', es: 'Plantas urbanas' },
  },
  {
    year: 2023,
    name: { fr: "Rues de São Paulo's", en: "São Paulo's streets", es: "São Paulo's calles" },
    description: { fr: 'Streetview de Sao Paulo', en: 'São Paulo Street View', es: 'Street View de São Paulo' },
  },
  {
    year: 2023,
    name: { fr: 'Valeur esthétique des coraux', en: 'Beautiful Corals', es: 'Beautiful Corals' },
    description: { fr: 'Récifs coralliens', en: 'Coral reefs', es: 'Arrecifes de coral' },
  },
  {
    year: 2020,
    name: { fr: 'Lost in wilderness', en: 'Lost in wilderness', es: 'Lost in wilderness' },
    description: { fr: 'Biophobia', en: 'Biophobia', es: 'Biofobia' },
  },
  {
    year: 2020,
    name: { fr: "Orchid' et vous", en: "Orchid' et vous", es: "Orchid' et vous" },
    description: { fr: 'Orchidées', en: 'Orchids', es: 'Orquídeas' },
  },
  {
    year: 2019,
    name: { fr: 'Mission Nounours', en: 'Mission Nounours', es: 'Mission Nounours' },
    description: { fr: 'Teddy bears', en: 'Teddy bears', es: 'Ositos de peluche' },
  },
  {
    year: 2019,
    name: { fr: 'Jolies Bestioles', en: 'Jolies Bestioles', es: 'Jolies Bestioles' },
    description: { fr: 'Arthropodes', en: 'Arthropods', es: 'Artrópodos' },
  },
  {
    year: 2018,
    name: { fr: 'FishEyes', en: 'FishEyes', es: 'FishEyes' },
    description: { fr: 'Poissons de récifs tropicaux', en: 'Tropical reef fish', es: 'Peces de arrecife tropicales' },
  },
  // Ajouter les nouveaux surveys ici :
  // {
  //   year: 2027,
  //   name: { fr: '...', en: '...', es: '...' },
  //   description: { fr: '...', en: '...', es: '...' },
  // },
];
