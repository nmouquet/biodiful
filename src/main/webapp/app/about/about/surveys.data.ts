// surveys.data.ts
// ─────────────────────────────────────────────────────────────────────────────
// COMMENT AJOUTER OU COMPLÉTER UN SURVEY :
//
//  1. slug          → identifiant URL, sans espaces ni accents (ex: 'fisheyes')
//  2. year          → année de lancement
//  3. name          → nom court (affiché dans le tableau de la page About)
//  4. description   → description courte (1 phrase, affichée dans le tableau)
//  5. image         → nom du fichier image (à placer dans
//                     src/main/webapp/content/images/surveys/)
//                     Format carré recommandé : 600×600 px minimum
//                     Laisser '' si pas encore d'image
//  6. longDescription → tableau de paragraphes (une string = un paragraphe)
//                       Laisser [] si pas encore rédigée
//  7. partners      → tableau de codes (string[]) — doivent correspondre
//                     exactement aux champs 'code' dans partners.data.ts
//                     ex: ['MARBEC', 'CEBC', 'CEFE']
//                     Laisser [] si pas encore renseigné
//  8. publications  → tableau de slugs (string[]) — doivent correspondre
//                     exactement aux champs 'slug' dans publications.data.ts
//                     ex: ['mclean-2025', 'tribot-2019']
//                     Laisser [] si pas encore renseigné
// ─────────────────────────────────────────────────────────────────────────────

export interface Survey {
  slug: string;
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
  image: string;
  longDescription: {
    fr: string[];
    en: string[];
    es: string[];
  };
  partners: string[]; // codes de partners.data.ts
  publications: string[]; // slugs de publications.data.ts
}

export const SURVEYS: Survey[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────────
  {
    slug: 'dans-la-foret',
    year: 2026,
    name: { fr: 'Dans la Forêt', en: 'Into the forest', es: 'En el bosque' },
    description: {
      fr: 'Forêts européennes',
      en: 'European forests',
      es: 'Bosques europeos',
    },
    image: 'survey-image.jpg', // ex: 'dans-la-foret.jpg'
    longDescription: {
      fr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      es: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    partners: ['MARBEC', 'CEFE', 'WSL'], // codes exacts du champ 'code' dans partners.data.ts
    publications: ['tribot-scirep-2016', 'langlois-2021'], // slugs exacts du champ 'slug' dans publications.data.ts
  },

  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    slug: 'plantiful',
    year: 2025,
    name: { fr: 'Plantiful', en: 'Plantiful', es: 'Plantiful' },
    description: {
      fr: 'Plantes urbaines',
      en: 'Urban plants',
      es: 'Plantas urbanas',
    },
    image: 'survey-image.jpg',
    longDescription: {
      fr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      es: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    partners: [],
    publications: [],
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    slug: 'sao-paulo-streets',
    year: 2023,
    name: {
      fr: "Rues de São Paulo's",
      en: "São Paulo's streets",
      es: "São Paulo's calles",
    },
    description: {
      fr: 'Streetview de Sao Paulo',
      en: 'São Paulo Street View',
      es: 'Street View de São Paulo',
    },
    image: 'survey-image.jpg',
    longDescription: {
      fr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      es: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    partners: [],
    publications: [],
  },
  {
    slug: 'beautiful-corals',
    year: 2023,
    name: {
      fr: 'Valeur esthétique des coraux',
      en: 'Beautiful Corals',
      es: 'Beautiful Corals',
    },
    description: {
      fr: 'Récifs coralliens',
      en: 'Coral reefs',
      es: 'Arrecifes de coral',
    },
    image: 'survey-image.jpg',
    longDescription: {
      fr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      es: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    partners: [],
    publications: [],
  },

  // ── 2020 ──────────────────────────────────────────────────────────────────
  {
    slug: 'lost-in-wilderness',
    year: 2020,
    name: {
      fr: 'Lost in wilderness',
      en: 'Lost in wilderness',
      es: 'Lost in wilderness',
    },
    description: {
      fr: 'Biophobia',
      en: 'Biophobia',
      es: 'Biofobia',
    },
    image: 'survey-image.jpg',
    longDescription: {
      fr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      es: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    partners: [],
    publications: [],
  },
  {
    slug: 'orchid-et-vous',
    year: 2020,
    name: {
      fr: "Orchid' et vous",
      en: "Orchid' et vous",
      es: "Orchid' et vous",
    },
    description: {
      fr: 'Orchidées',
      en: 'Orchids',
      es: 'Orquídeas',
    },
    image: 'survey-image.jpg',
    longDescription: {
      fr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      es: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    partners: [],
    publications: [],
  },

  // ── 2019 ──────────────────────────────────────────────────────────────────
  {
    slug: 'mission-nounours',
    year: 2019,
    name: {
      fr: 'Mission Nounours',
      en: 'Mission Nounours',
      es: 'Mission Nounours',
    },
    description: {
      fr: 'Teddy bears',
      en: 'Teddy bears',
      es: 'Ositos de peluche',
    },
    image: 'survey-image.jpg',
    longDescription: {
      fr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      es: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    partners: [],
    publications: [],
  },
  {
    slug: 'jolies-bestioles',
    year: 2019,
    name: {
      fr: 'Jolies Bestioles',
      en: 'Jolies Bestioles',
      es: 'Jolies Bestioles',
    },
    description: {
      fr: 'Arthropodes',
      en: 'Arthropods',
      es: 'Artrópodos',
    },
    image: 'survey-image.jpg',
    longDescription: {
      fr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
      es: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      ],
    },
    partners: [],
    publications: [],
  },

  // ── 2018 ──────────────────────────────────────────────────────────────────
  {
    slug: 'fisheyes',
    year: 2018,
    name: { fr: 'FishEyes', en: 'FishEyes', es: 'FishEyes' },
    description: {
      fr: 'Poissons de récifs tropicaux',
      en: 'Tropical reef fish',
      es: 'Peces de arrecife tropicales',
    },
    image: 'survey-image.jpg',
    longDescription: {
      fr: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ],
      en: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ],
      es: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      ],
    },
    partners: ['MARBEC', 'AERMC', 'UM', 'UMAYOTTE', 'UNCW'],
    publications: ['mclean-2025', 'mouquet-sciadv-2024', 'langlois-2022', 'tribot-scirep-2018'],
  },

  // ── TEMPLATE pour un nouveau survey ───────────────────────────────────────
  // {
  //   slug: 'mon-survey',
  //   year: 2027,
  //   name: { fr: '...', en: '...', es: '...' },
  //   description: { fr: '...', en: '...', es: '...' },
  //   image: 'mon-survey.jpg',
  //   longDescription: {
  //     fr: ['Paragraphe 1.', 'Paragraphe 2.'],
  //     en: ['Paragraph 1.', 'Paragraph 2.'],
  //     es: ['Párrafo 1.', 'Párrafo 2.'],
  //   },
  //   partners: ['MARBEC', 'CEFE'],       // codes de partners.data.ts
  //   publications: ['mclean-2025'],       // slugs de publications.data.ts
  // },
];
