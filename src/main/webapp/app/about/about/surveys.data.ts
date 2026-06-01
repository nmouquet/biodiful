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
//  6. imageCredit   → crédit photo affiché sous l'image (ex: '© Jean Dupont / CNRS')
//                     Laisser '' si pas de crédit
//  7. longDescription → tableau de paragraphes (une string = un paragraphe)
//                       Laisser [] si pas encore rédigée
//  8. partners      → tableau de codes (string[]) — doivent correspondre
//                     exactement aux champs 'code' dans partners.data.ts
//                     ex: ['MARBEC', 'CEBC', 'CEFE']
//                     Laisser [] si pas encore renseigné
//  9. publications  → tableau de slugs (string[]) — doivent correspondre
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
  imageCredit: string;
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
  /*
  {
    slug: 'dans-la-foret',
    year: 2026,
    name: { fr: 'Dans la Forêt', en: 'Into the forest', es: 'En el bosque' },
    description: {
      fr: 'Forêts européennes',
      en: 'European forests',
      es: 'Bosques europeos',
    },
    image: 'survey-image.jpg',
    imageCredit: '',
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
  },*/

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
    image: 'plantiful.jpg',
    imageCredit: '',
    longDescription: {
      fr: [
        "La campagne Plantiful avait pour objectif d'évaluer la valeur esthétique des plantes à fleurs des espaces verts urbains et d'explorer les liens entre beauté perçue, traits morphologiques et métriques écologiques. Dans un contexte de perte de contact avec la nature en milieu urbain, comprendre ce que les gens trouvent beau dans les plantes qui les entourent au quotidien constitue un enjeu important pour la conservation et l'aménagement des villes.",
        "Nous avons mis en ligne sur la plateforme Biodiful un questionnaire présentant des comparaisons par paires de 1 279 photographies de fleurs, feuilles et silhouettes de 489 taxons de plantes urbaines issus d'un inventaire conduit dans les villes de Genève, Zurich et Lugano en Suisse. Les 5 311 participants ont choisi la photographie la plus belle dans chaque paire, et les scores esthétiques étaient calculés via l'algorithme Elo. Des traits visuels ont ensuite été extraits des images et mis en relation avec des caractéristiques fonctionnelles et phylogénétiques des espèces.",
        "Les premières analyses, conduites dans le cadre du master de Gaia Micco à l'Université de Potsdam, suggèrent que les préférences esthétiques pour les plantes urbaines sont liées à des caractéristiques visuelles mesurables, et que la beauté perçue n'est pas nécessairement alignée avec les priorités de conservation. Ces résultats constituent une base prometteuse qui fera prochainement l'objet d'une valorisation scientifique.",
      ],
      en: [
        'The Plantiful campaign aimed to assess the aesthetic value of flowering plants in urban green spaces and to explore the links between perceived beauty, morphological traits and ecological metrics. In a context of declining contact with nature in urban environments, understanding what people find beautiful in the plants that surround them daily is an important issue for conservation and urban planning.',
        'We launched an online questionnaire on the Biodiful platform presenting pairwise comparisons of 1,279 photographs of flowers, leaves and silhouettes of 489 urban plant taxa from a survey conducted in the Swiss cities of Geneva, Zurich and Lugano. The 5,311 participants chose the most beautiful photograph in each pair, with aesthetic scores calculated using the Elo algorithm. Visual traits were then extracted from the images and related to the functional and phylogenetic characteristics of the species.',
        "The first analyses, conducted as part of the master's thesis of Gaia Micco at the University of Potsdam, suggest that aesthetic preferences for urban plants are linked to measurable visual characteristics, and that perceived beauty is not necessarily aligned with conservation priorities. These results provide a promising foundation that will soon be the subject of scientific publication.",
      ],
      es: [
        'La campaña Plantiful tenía como objetivo evaluar el valor estético de las plantas con flores en los espacios verdes urbanos y explorar los vínculos entre la belleza percibida, los rasgos morfológicos y las métricas ecológicas. En un contexto de pérdida de contacto con la naturaleza en entornos urbanos, comprender qué encuentran bella las personas en las plantas que les rodean a diario es una cuestión importante para la conservación y la planificación urbana.',
        'Pusimos en línea en la plataforma Biodiful un cuestionario con comparaciones por pares de 1 279 fotografías de flores, hojas y siluetas de 489 taxones de plantas urbanas procedentes de un inventario realizado en las ciudades suizas de Ginebra, Zúrich y Lugano. Los 5 311 participantes eligieron la fotografía más bella en cada par, y las puntuaciones estéticas se calcularon mediante el algoritmo Elo. Posteriormente se extrajeron rasgos visuales de las imágenes y se relacionaron con las características funcionales y filogenéticas de las especies.',
        'Los primeros análisis, realizados en el marco del trabajo de máster de Gaia Micco en la Universidad de Potsdam, sugieren que las preferencias estéticas por las plantas urbanas están vinculadas a características visuales medibles, y que la belleza percibida no está necesariamente alineada con las prioridades de conservación. Estos resultados constituyen una base prometedora que pronto será objeto de una valorización científica.',
      ],
    },
    partners: ['CNRS', 'UPOTSDAM'],
    publications: [],
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    slug: 'sao-paulo-streets',
    year: 2023,
    name: {
      fr: 'Rues de São Paulo',
      en: "São Paulo's streets",
      es: "São Paulo's calles",
    },
    description: {
      fr: 'Streetview de Sao Paulo',
      en: 'São Paulo Street View',
      es: 'Street View de São Paulo',
    },
    image: 'sao-paulo-streets.jpg',
    imageCredit: '',
    longDescription: {
      fr: [
        "La campagne Rue de São Paulo avait pour objectif de quantifier la valeur esthétique des rues de São Paulo, la plus grande mégapole de l'hémisphère sud, en la traitant comme une contribution de la nature au bien-être humain. Si le rôle des espaces verts dans la qualité de vie urbaine est bien reconnu, la beauté perçue des rues reste un service culturel peu mesuré à grande échelle. Cette campagne visait à combler ce manque en reliant la perception humaine des paysages de rue aux caractéristiques écologiques et architecturales du territoire.",
        "Nous avons mis en ligne sur la plateforme Biodiful un questionnaire photographique dans lequel les participants comparaient par paires 420 images Google Street View représentant la diversité socio-morphologique de São Paulo. Les 3 221 participants choisissaient la rue la plus belle à chaque duel, et les scores esthétiques étaient calculés via l'algorithme Elo. Des métriques paysagères ont été extraites à partir de données satellitaires pour chaque image, combinant des variables mesurées depuis le sol et depuis le ciel. Un réseau de neurones convolutif entraîné sur les scores de l'enquête a ensuite été utilisé pour prédire la valeur esthétique de plus de 350 000 images de rues, produisant la première carte de la beauté paysagère à l'échelle d'une mégapole entière.",
        "Les premières analyses, conduites dans le cadre de la thèse de William Douglas Cirino co-encadrée à l'Université de São Paulo et au MARBEC, suggèrent que la beauté perçue des rues n'est pas simplement liée à la quantité de verdure, mais dépend de l'organisation spatiale et de la structure tridimensionnelle des éléments naturels et bâtis. La carte esthétique ainsi produite révèle des disparités spatiales importantes, soulevant des questions d'équité environnementale. Ces résultats sont en cours de valorisation et feront l'objet d'une publication scientifique soumise à Scientific Reports (Cirino et al., en révision).",
      ],
      en: [
        "The São Paulo Streets campaign aimed to quantify the aesthetic value of streets in São Paulo, the largest megacity in the Southern Hemisphere, treating it as a nature's contribution to human well-being. While the role of green spaces in urban quality of life is well recognised, the perceived beauty of streets remains a cultural service that is rarely measured at large scales. This campaign sought to bridge this gap by linking human perception of streetscapes to the ecological and architectural characteristics of the urban fabric.",
        'We launched an online photographic questionnaire on the Biodiful platform in which participants compared pairs of 420 Google Street View images representing the socio-morphological diversity of São Paulo. The 3,221 participants chose the most beautiful street in each pair, with aesthetic scores calculated using the Elo algorithm. Landscape metrics were extracted from satellite data for each image, combining variables measured both at street level and from above. A convolutional neural network trained on the survey scores was then used to predict the aesthetic value of over 350,000 street images, producing the first map of scenic beauty at the scale of an entire megacity.',
        'The first analyses, conducted as part of the PhD thesis of William Douglas Cirino co-supervised at the University of São Paulo and MARBEC, suggest that the perceived beauty of streets is not simply linked to the quantity of greenery, but depends on the spatial organisation and three-dimensional structure of natural and built elements. The resulting aesthetic map reveals significant spatial disparities, raising questions of environmental equity. These results are currently being prepared for publication and will be submitted to Scientific Reports (Cirino et al., in revision).',
      ],
      es: [
        'La campaña Calle de São Paulo tenía como objetivo cuantificar el valor estético de las calles de São Paulo, la mayor megaciudad del hemisferio sur, tratándolo como una contribución de la naturaleza al bienestar humano. Si bien el papel de los espacios verdes en la calidad de vida urbana está bien reconocido, la belleza percibida de las calles sigue siendo un servicio cultural raramente medido a gran escala. Esta campaña buscaba cubrir este vacío relacionando la percepción humana de los paisajes urbanos con las características ecológicas y arquitectónicas del territorio.',
        'Pusimos en línea en la plataforma Biodiful un cuestionario fotográfico en el que los participantes comparaban por pares 420 imágenes de Google Street View que representaban la diversidad socio-morfológica de São Paulo. Los 3 221 participantes elegían la calle más bella en cada duelo, y las puntuaciones estéticas se calculaban mediante el algoritmo Elo. Se extrajeron métricas paisajísticas a partir de datos satelitales para cada imagen, combinando variables medidas desde el suelo y desde el aire. Una red neuronal convolucional entrenada con las puntuaciones de la encuesta se utilizó posteriormente para predecir el valor estético de más de 350 000 imágenes de calles, produciendo el primer mapa de belleza paisajística a escala de una megaciudad entera.',
        'Los primeros análisis, realizados en el marco de la tesis doctoral de William Douglas Cirino codirigida en la Universidad de São Paulo y el MARBEC, sugieren que la belleza percibida de las calles no está simplemente vinculada a la cantidad de vegetación, sino que depende de la organización espacial y la estructura tridimensional de los elementos naturales y construidos. El mapa estético resultante revela importantes disparidades espaciales, planteando cuestiones de equidad ambiental. Estos resultados están siendo valorizados y serán objeto de una publicación científica sometida a Scientific Reports (Cirino et al., en revisión).',
      ],
    },
    partners: ['CNRS', 'USP'],
    publications: ['cirino-rev'],
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
    image: 'beautiful-corals.jpg',
    imageCredit: '',
    longDescription: {
      fr: [
        'La campagne Valeur esthétique des coraux avait pour objectif de quantifier la valeur esthétique des récifs coralliens restaurés et de déterminer si cette restauration permettait de retrouver un attrait visuel comparable à celui des récifs en bonne santé. Les récifs coralliens génèrent environ 36 milliards de dollars de revenus touristiques par an, en grande partie grâce à leur valeur esthétique. Or, si la restauration est évaluée presque exclusivement à travers le taux de recouvrement en coraux, son effet sur les services culturels comme la beauté perçue restait inconnu.',
        "Nous avons conduit l'étude sur l'archipel de Spermonde en Indonésie, dans l'un des plus grands programmes de restauration corallienne au monde, le projet Mars Coral Reef Restoration. Nous avons photographié 18 sites répartis en trois états : récifs sains, récifs dégradés par la pêche à l'explosif, et récifs restaurés depuis 3 à 4 ans à l'aide de structures métalliques hexagonales. Nous avons soumis 300 photographies de quadrats benthiques (50 x 50 cm) à un questionnaire en ligne sur la plateforme Biodiful, disponible en anglais et en français de mai à septembre 2023. Les 3 348 participants issus de 107 pays ont comparé des paires de photographies et choisi la plus belle, les scores étant calculés via l'algorithme Elo. Un réseau de neurones convolutif (ResNet, R²=0,95) a ensuite été utilisé pour prédire la valeur esthétique de l'ensemble des 883 photographies.",
        "Nos résultats montrent que les récifs restaurés présentent une valeur esthétique statistiquement équivalente à celle des récifs sains, toutes deux significativement supérieures à celle des récifs dégradés. Les préférences esthétiques ne varient pas selon l'âge, le genre, la nationalité ou le niveau de connaissance des coraux, suggérant l'existence d'une composante esthétique universelle. Les principaux déterminants visuels sont la diversité des couleurs, le taux de recouvrement en coraux vivants et la diversité des morphologies coralliennes. Ces résultats démontrent que la restauration corallienne à grande échelle peut restituer l'attrait visuel des récifs, avec des implications importantes pour le tourisme et les contributions culturelles de ces écosystèmes aux populations côtières (Alisa et al. 2025, Scientific Reports).",
      ],
      en: [
        'The Beautiful Corals campaign aimed to quantify the aesthetic value of restored coral reefs and to determine whether restoration could recover visual appeal comparable to that of healthy reefs. Coral reefs generate around US$36 billion in tourism revenue per year, largely due to their aesthetic value. Yet while restoration success is almost exclusively evaluated through coral cover, its effect on cultural services such as perceived beauty remained unknown.',
        "We conducted the study in the Spermonde Archipelago in Indonesia, at one of the world's largest coral restoration programmes, the Mars Coral Reef Restoration Project. We photographed 18 sites across three conditions: healthy reefs, reefs degraded by blast fishing, and reefs restored for 3 to 4 years using hexagonal metal frames. We submitted 300 photographs of benthic quadrats (50 x 50 cm) to an online questionnaire on the Biodiful platform, available in English and French from May to September 2023. The 3,348 participants from 107 countries compared pairs of photographs and chose the most beautiful, with scores calculated using the Elo algorithm. A convolutional neural network (ResNet, R²=0.95) was then used to predict the aesthetic value of all 883 photographs.",
        'Our results show that restored reefs have a statistically equivalent aesthetic value to healthy reefs, with both significantly higher than degraded reefs. Aesthetic preferences did not vary with age, gender, nationality or level of coral knowledge, suggesting the existence of a universal aesthetic component. The main visual drivers were colour diversity, live coral cover and diversity of coral morphologies. These results demonstrate that large-scale coral restoration can recover the visual appeal of reefs, with important implications for tourism and the cultural contributions of these ecosystems to coastal communities (Alisa et al. 2025, Scientific Reports).',
      ],
      es: [
        'La campaña Beautiful Corals tenía como objetivo cuantificar el valor estético de los arrecifes de coral restaurados y determinar si la restauración permitía recuperar un atractivo visual comparable al de los arrecifes en buen estado. Los arrecifes de coral generan aproximadamente 36 000 millones de dólares en ingresos turísticos al año, en gran medida gracias a su valor estético. Sin embargo, si bien la restauración se evalúa casi exclusivamente a través de la cobertura de coral, su efecto sobre los servicios culturales como la belleza percibida permanecía desconocido.',
        'Llevamos a cabo el estudio en el archipiélago de Spermonde, en Indonesia, en uno de los programas de restauración de arrecifes de coral más grandes del mundo, el proyecto Mars Coral Reef Restoration. Fotografiamos 18 sitios distribuidos en tres estados: arrecifes sanos, arrecifes degradados por la pesca con explosivos y arrecifes restaurados durante 3 a 4 años mediante estructuras metálicas hexagonales. Sometimos 300 fotografías de cuadrantes bentónicos (50 x 50 cm) a un cuestionario en línea en la plataforma Biodiful, disponible en inglés y francés de mayo a septiembre de 2023. Los 3 348 participantes de 107 países compararon pares de fotografías y eligieron la más bella, con puntuaciones calculadas mediante el algoritmo Elo. Posteriormente se utilizó una red neuronal convolucional (ResNet, R²=0,95) para predecir el valor estético del conjunto de las 883 fotografías.',
        'Nuestros resultados muestran que los arrecifes restaurados presentan un valor estético estadísticamente equivalente al de los arrecifes sanos, siendo ambos significativamente superiores al de los arrecifes degradados. Las preferencias estéticas no variaron según la edad, el género, la nacionalidad ni el nivel de conocimiento sobre los corales, lo que sugiere la existencia de un componente estético universal. Los principales determinantes visuales son la diversidad de colores, la cobertura de coral vivo y la diversidad de morfologías coralinas. Estos resultados demuestran que la restauración coralina a gran escala puede restituir el atractivo visual de los arrecifes, con implicaciones importantes para el turismo y las contribuciones culturales de estos ecosistemas a las poblaciones costeras (Alisa et al. 2025, Scientific Reports).',
      ],
    },
    partners: ['CNRS', 'UM', 'INDOC', 'IPB', 'LEC'],
    publications: ['alisa-2025'],
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
    image: 'lost-in-wilderness.jpg',
    imageCredit: 'Ganjarmustika1904',
    longDescription: {
      fr: [
        "La campagne Lost in Wilderness avait pour objectif de comprendre quels animaux nous font le plus peur, et pourquoi. Si la peur est une réponse adaptative façonnée par l'évolution, elle peut devenir irrationnelle chez des individus de moins en moins en contact avec la nature, conduisant au développement de phobies. Lost in Wilderness visait à classer un large éventail d'espèces sur une échelle de peur et à évaluer l'influence respective des facteurs écologiques et socio-culturels sur nos réactions.",
        "Nous avons développé une enquête en ligne immersive dans laquelle les participants s'imaginaient perdus seuls dans la nature et devaient progresser vers un poste de secours en cliquant sur l'animal qui leur faisait le plus peur. La campagne s'est déroulée d'avril 2020 à septembre 2021, en quatre langues. Nous avons retenu 17 353 participants issus de tous les continents, pour un total de 433 825 duels entre 221 photographies représentant 184 espèces. Les scores de peur ont été calculés via l'algorithme Elo, et des modèles bayésiens ont permis d'analyser l'influence de l'âge, de la région de résidence et des phobies déclarées.",
        "Nos résultats montrent que le crocodile marin est l'animal le plus effrayant et le lapin européen le moins craint. Si les animaux dangereux suscitent des réponses rapides et fréquentes, le danger seul n'explique pas la peur : les arachnides, quasi inoffensifs, obtiennent les scores les plus élevés (87% de probabilité d'être sélectionnés), devançant des groupes réellement dangereux comme les félins ou les ours. Parmi 8 espèces proposées en fin d'enquête, la vipère du Gabon et l'araignée-loup sont choisies à parts égales (27% chacune). Ce décalage entre risque réel et peur ressentie varie selon l'âge et la région, et s'explique probablement par la transmission sociale des peurs et la déconnexion croissante avec la nature (Zeller et al. 2025, People and Nature).",
      ],
      en: [
        'The Lost in Wilderness campaign aimed to understand which animals people fear most, and why. While fear is an adaptive response shaped by evolution, it can become irrational in individuals increasingly disconnected from nature, leading to the development of phobias. Lost in Wilderness sought to rank a wide range of species on a fear scale and to assess the respective influence of ecological and socio-cultural factors on our reactions.',
        'We developed an immersive online survey in which participants imagined being lost alone in the wilderness and had to make their way to a rescue station by clicking on the animal that scared them most. The campaign ran from April 2020 to September 2021, available in four languages. We retained 17,353 participants from all continents, generating a total of 433,825 matches between 221 photographs representing 184 species. Fear scores were calculated using the Elo algorithm, and Bayesian models were used to analyse the influence of age, geographic region and self-reported phobias.',
        'Our results show that the saltwater crocodile is the most frightening animal and the European rabbit the least feared. While dangerous animals elicit rapid and frequent fear responses, danger alone does not explain fear: arachnids, which are nearly harmless, achieved the highest scores (87% probability of being selected), outranking genuinely dangerous groups such as felids or bears. Among 8 species presented at the end of the survey, the Gaboon viper and the wolf spider were chosen in equal proportions (27% each). This mismatch between actual danger and perceived fear varies with age and geographic region, and is likely explained by the social transmission of fears and increasing disconnection from nature (Zeller et al. 2025, People and Nature).',
      ],
      es: [
        'La campaña Lost in Wilderness tenía como objetivo comprender qué animales nos asustan más, y por qué. Si bien el miedo es una respuesta adaptativa moldeada por la evolución, puede volverse irracional en individuos cada vez más desconectados de la naturaleza, dando lugar al desarrollo de fobias. Lost in Wilderness buscaba clasificar un amplio abanico de especies en una escala de miedo y evaluar la influencia respectiva de los factores ecológicos y socioculturales en nuestras reacciones.',
        'Desarrollamos una encuesta en línea inmersiva en la que los participantes se imaginaban perdidos solos en la naturaleza y debían avanzar hacia un puesto de rescate haciendo clic en el animal que más les asustaba. La campaña se llevó a cabo de abril de 2020 a septiembre de 2021, disponible en cuatro idiomas. Retuvimos 17 353 participantes de todos los continentes, con un total de 433 825 duelos entre 221 fotografías que representaban 184 especies. Las puntuaciones de miedo se calcularon mediante el algoritmo Elo, y se utilizaron modelos bayesianos para analizar la influencia de la edad, la región de residencia y las fobias declaradas.',
        'Nuestros resultados muestran que el cocodrilo marino es el animal más temido y el conejo europeo el menos temido. Si bien los animales peligrosos suscitan respuestas rápidas y frecuentes, el peligro por sí solo no explica el miedo: los arácnidos, prácticamente inofensivos, obtuvieron las puntuaciones más altas (87% de probabilidad de ser seleccionados), superando a grupos realmente peligrosos como los félidos o los osos. Entre 8 especies presentadas al final de la encuesta, la víbora del Gabón y la araña lobo fueron elegidas en igual proporción (27% cada una). Esta discrepancia entre el riesgo real y el miedo percibido varía según la edad y la región, y probablemente se explica por la transmisión social de los miedos y la creciente desconexión con la naturaleza (Zeller et al. 2025, People and Nature).',
      ],
    },
    partners: ['CNRS', 'CEBC', 'MNHN'],
    publications: ['zeller-2025'],
  },
  {
    slug: 'orchid-et-vous',
    year: 2020,
    name: {
      fr: "Orchid' et vous",
      en: 'Orchids & You',
      es: 'Orquídeas y Tú',
    },
    description: {
      fr: 'Orchidées',
      en: 'Orchids',
      es: 'Orquídeas',
    },
    image: 'orchid-et-vous.jpg',
    imageCredit: 'Didier Descouens',
    longDescription: {
      fr: [
        "La campagne Orchid'et vous avait pour objectif d'évaluer la valeur esthétique des orchidées de France métropolitaine et de comprendre quels facteurs expliquent leur degré d'appréciation. La famille des Orchidacées est un modèle remarquable : diversité extraordinaire de formes, de couleurs et de stratégies de pollinisation, vulnérabilité face aux pertes d'habitat, et popularité particulière auprès du public, comme en témoigne l'existence de la Société Française d'Orchidophilie. Pourtant, leur valeur esthétique n'avait jamais été mesurée scientifiquement.",
        "Nous avons mis en ligne sur la plateforme Biodiful un questionnaire photographique présentant des duels par paires entre photographies d'inflorescences et de fleurs isolées de 163 espèces d'orchidées de France métropolitaine. Les participants choisissaient la plus belle à chaque duel, et les scores esthétiques étaient calculés via l'algorithme Elo. Un questionnaire social accompagnait l'enquête afin de caractériser les profils des participants. La campagne a réuni près de 4 000 participants issus de réseaux d'orchidophiles, de naturalistes et d'établissements scolaires à l'échelle nationale.",
        "Les premières analyses, conduites dans le cadre du master de Déborah Birre co-encadré au CEFE et au MARBEC, suggèrent que la beauté perçue des orchidées repose sur des critères visuels et écologiques mesurables, et que les préférences esthétiques du public ne reflètent pas nécessairement la distribution géographique ni la valeur écologique des espèces. Ces résultats sont en cours de valorisation et feront prochainement l'objet d'une publication scientifique (Birre et al., en préparation).",
      ],
      en: [
        'The Orchids & You campaign aimed to assess the aesthetic value of orchids in metropolitan France and to understand which factors explain the degree to which they are appreciated. The Orchidaceae family is a remarkable model: extraordinary diversity of shapes, colours and pollination strategies, vulnerability to habitat loss, and particular popularity with the public, as evidenced by the existence of the French Society of Orchidophilia. Yet their aesthetic value had never been scientifically measured.',
        'We launched an online photo questionnaire on the Biodiful platform presenting pairwise duels between photographs of inflorescences and isolated flowers of 163 orchid species from metropolitan France. Participants chose the most beautiful at each duel, and aesthetic scores were calculated using the Elo algorithm. A social questionnaire accompanied the survey to characterise participant profiles. The campaign brought together nearly 4,000 participants from orchidophile and naturalist networks and schools across France.',
        "The first analyses, conducted as part of Déborah Birre's master's thesis co-supervised at CEFE and MARBEC, suggest that the perceived beauty of orchids is based on measurable visual and ecological criteria, and that public aesthetic preferences do not necessarily reflect the geographical distribution or ecological value of species. These results are currently being prepared for publication as a scientific article (Birre et al., in preparation).",
      ],
      es: [
        'La campaña Orquídeas y Tú tenía como objetivo evaluar el valor estético de las orquídeas de la Francia metropolitana y comprender qué factores explican su grado de apreciación. La familia Orchidaceae es un modelo notable: extraordinaria diversidad de formas, colores y estrategias de polinización, vulnerabilidad ante la pérdida de hábitat, y una popularidad particular entre el público, como lo demuestra la existencia de la Sociedad Francesa de Orquidofilia. Sin embargo, su valor estético nunca había sido medido científicamente.',
        'Pusimos en línea en la plataforma Biodiful un cuestionario fotográfico con duelos por pares entre fotografías de inflorescencias y flores aisladas de 163 especies de orquídeas de la Francia metropolitana. Los participantes elegían la más bella en cada duelo, y las puntuaciones estéticas se calculaban mediante el algoritmo Elo. Un cuestionario social acompañaba la encuesta para caracterizar los perfiles de los participantes. La campaña reunió a cerca de 4.000 participantes procedentes de redes de orquidófilos, naturalistas y centros educativos de todo el país.',
        'Los primeros análisis, realizados en el marco del máster de Déborah Birre codirigido en el CEFE y el MARBEC, sugieren que la belleza percibida de las orquídeas se basa en criterios visuales y ecológicos medibles, y que las preferencias estéticas del público no reflejan necesariamente la distribución geográfica ni el valor ecológico de las especies. Estos resultados están siendo preparados para su publicación como artículo científico (Birre et al., en preparación).',
      ],
    },
    partners: ['CNRS', 'CEFE'],
    publications: ['birre-inprep'],
  },

  // ── 2019 ──────────────────────────────────────────────────────────────────
  {
    slug: 'mission-nounours',
    year: 2019,
    name: {
      fr: 'Mission Nounours',
      en: 'Teddy Bear Mission',
      es: 'Operación Osito de Peluche',
    },
    description: {
      fr: 'Teddy bears',
      en: 'Teddy bears',
      es: 'Ositos de peluche',
    },
    image: 'mission-nounours.jpg',
    imageCredit: '',
    longDescription: {
      fr: [
        "La campagne Mission Peluche avait pour objectif de comprendre ce qui rend un nounours réconfortant et d'explorer les propriétés sensorielles et émotionnelles qui sous-tendent notre attachement à ces objets transitionnels. Si le pouvoir apaisant des nounours est souvent invoqué en psychologie, ses déterminants restaient peu documentés. Cette question dépasse le simple cadre du jouet : dans une période de crise de biodiversité, les nounours pourraient être l'un des premiers objets à travers lesquels l'enfant noue un lien émotionnel avec le monde animal. Comprendre ce qui les rend attachants, et dans quelle mesure ils reflètent les animaux réels, prend donc un sens écologique et éducatif.",
        "Nous avons d'abord conduit en septembre 2019 une étude participative lors de la Nuit Européenne des Chercheurs dans 13 villes françaises, avec près de 400 participants qui ont apporté leur propre nounours ou utilisé des nounours prêtés. Chaque participant mesurait les caractéristiques physiques de l'ours et participait à des duels pour choisir quel nounours il préférerait serrer dans ses bras s'il avait peur (Tribot et al. 2023, Journal of Positive Psychology). Nous avons ensuite mis en ligne entre juin et novembre 2020 un questionnaire photographique sur la plateforme Biodiful, impliquant 11 188 participants âgés de 3 à 92 ans. Les participants comparaient par paires 436 photographies de nounours selon trois dimensions : lequel est le plus beau, le plus réconfortant, ou celui qu'ils auraient le plus envie de protéger, les scores étant calculés via l'algorithme Elo (Blanc et al. 2025, Journal of Positive Psychology).",
        "Nos résultats montrent que le lien émotionnel avec son propre nounours prime sur toute caractéristique physique. Pour les nounours inconnus, la douceur perçue du pelage est le facteur visuel le plus déterminant, suggérant que les propriétés tactiles s'évaluent aussi par la vue. Les dimensions beauté, réconfort et motivation à protéger sont très fortement corrélées (r > 0,94) et convergent vers une variable latente unique : la mignonnerie. Les enfants préfèrent des nounours aux couleurs vives, tandis que les adultes favorisent les tons classiques bruns ou beiges. Enfin, en comparant les traits morphologiques des 436 nounours à ceux des 11 espèces d'ours existantes, nous avons montré que les nounours forment un groupe clairement distinct des vrais ours, le panda étant le plus proche mais encore très éloigné. Ce décalage soulève une question importante : si notre premier lien émotionnel avec la nature passe par un animal fictif, le pont vers la biodiversité réelle risque de ne jamais se construire (Mouquet et al. 2025, BioScience).",
      ],
      en: [
        'The Teddy Bear Mission campaign aimed to understand what makes a teddy bear comforting and to explore the sensory and emotional properties underlying our attachment to these transitional objects. Although the soothing power of teddy bears is widely invoked in psychology, its determinants remained poorly documented. This question goes beyond toys: in a period of accelerating biodiversity crisis, teddy bears may be one of the first objects through which children form an emotional bond with the animal world. Understanding what makes them endearing, and the extent to which they reflect real animals, therefore carries ecological and educational significance.',
        "We first conducted a participatory study in September 2019 during the European Researchers' Night, simultaneously in 13 French cities, involving nearly 400 participants who brought their own teddy bear or used loaned ones. Each participant measured the bear's physical characteristics and took part in pairwise matches to choose which bear they would rather cuddle if scared (Tribot et al. 2023, Journal of Positive Psychology). We then launched an online photo questionnaire on the Biodiful platform between June and November 2020, involving 11,188 participants aged 3 to 92. They compared pairs of 436 teddy bear photographs across three dimensions: which is the most beautiful, the most comforting, or the one they would most want to protect, with scores calculated using the Elo algorithm (Blanc et al. 2025, Journal of Positive Psychology).",
        "Our results show that the emotional bond with one's own teddy bear outweighs any physical characteristic. For unfamiliar bears, perceived fur softness is the most important visual predictor of comfort, suggesting that tactile properties are also assessed through sight. Beauty, comfort and protection motivation were very strongly correlated (r > 0.94) and converge into a single latent variable: cuteness. Children preferred brightly coloured bears, while adults favoured classic brown or beige tones. Finally, by comparing the morphological traits of the 436 teddy bears with those of the 11 existing bear species, we showed that teddy bears form a cluster clearly distinct from real bears, with the giant panda being the closest but still substantially different. This gap raises an important conservation question: if our first emotional bond with nature is mediated by a fictional animal, the bridge to real biodiversity may never be built (Mouquet et al. 2025, BioScience).",
      ],
      es: [
        'La campaña Operación Osito de Peluche tenía como objetivo comprender qué hace que un oso de peluche sea reconfortante y explorar las propiedades sensoriales y emocionales que subyacen a nuestro apego a estos objetos transicionales. Aunque el poder tranquilizador de los peluches es ampliamente invocado en psicología, sus determinantes permanecían poco documentados. Esta pregunta va más allá del juguete: en un período de crisis de biodiversidad acelerada, los peluches podrían ser uno de los primeros objetos a través de los cuales los niños forman un vínculo emocional con el mundo animal. Comprender qué los hace entrañables y en qué medida reflejan a los animales reales adquiere un significado ecológico y educativo.',
        'Primero realizamos un estudio participativo en septiembre de 2019 durante la Noche Europea de los Investigadores, en 13 ciudades francesas simultáneamente, con cerca de 400 participantes que trajeron su propio peluche o utilizaron uno prestado. Cada participante medía las características físicas del oso y participaba en duelos por parejas para elegir qué oso preferiría abrazar si tuviera miedo (Tribot et al. 2023, Journal of Positive Psychology). Luego lanzamos un cuestionario fotográfico en línea en la plataforma Biodiful entre junio y noviembre de 2020, con 11.188 participantes de entre 3 y 92 años. Comparaban por pares 436 fotografías de peluches según tres dimensiones: cuál es el más bonito, el más reconfortante, o el que más querrían proteger, con puntuaciones calculadas mediante el algoritmo Elo (Blanc et al. 2025, Journal of Positive Psychology).',
        'Nuestros resultados muestran que el vínculo emocional con el propio peluche supera cualquier característica física. Para los peluches desconocidos, la suavidad percibida del pelaje es el predictor visual más importante del consuelo, lo que sugiere que las propiedades táctiles también se evalúan mediante la vista. Belleza, consuelo y motivación para proteger resultaron muy fuertemente correlacionados (r > 0,94) y convergen en una única variable latente: la ternura. Los niños prefirieron peluches de colores vivos, mientras que los adultos favorecieron los tonos clásicos marrones o beige. Finalmente, al comparar los rasgos morfológicos de los 436 peluches con los de las 11 especies de osos existentes, demostramos que los peluches forman un grupo claramente distinto de los osos reales, siendo el panda gigante el más cercano pero aún muy diferente. Esta brecha plantea una pregunta importante para la conservación: si nuestro primer vínculo emocional con la naturaleza se establece a través de un animal ficticio, el puente hacia la biodiversidad real puede que nunca llegue a construirse (Mouquet et al. 2025, BioScience).',
      ],
    },
    partners: ['CNRS', 'UM', 'TELEMME', 'UPV'],
    publications: ['mouquet-bioscience-2025', 'blanc-2025', 'tribot-2023'],
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
    image: 'jolies-bestioles.jpg',
    imageCredit: '',
    longDescription: {
      fr: [
        "La campagne Jolies Bestioles avait pour objectif de mesurer la valeur esthétique que le public attribue à la nature ordinaire : arthropodes, éléments de jardin et paysages du quotidien. L\'idée centrale était de voir si nos préférences esthétiques pouvaient expliquer les choix d\'aménagement des jardins, et dans quelle mesure ces choix sont favorables ou défavorables à la biodiversité. Cette campagne, conduite uniquement en français, a néanmoins touché un très large public (Nourdin et al. 2019, Le Courrier de la Nature).",
        "Nous avons mis en ligne au printemps 2019 un questionnaire photographique anonyme composé de trois séries d\'images : 27 arthropodes pouvant être rencontrés en France, 23 éléments de jardin et 23 paysages. Les participants devaient choisir par comparaisons par paires la photo qu\'ils trouvaient la plus belle, générant plus de 69 500 duels. Plus de 5 000 personnes ont complété l\'enquête, et les scores esthétiques, calculés via l\'algorithme Elo, se sont révélés très stables quelle que soit la catégorie sociale des répondants.",
        "Nos résultats montrent que le classement esthétique tend à suivre la valeur écologique des éléments. Parmi les arthropodes, les espèces colorées comme le paon du jour, la coccinelle ou la rosalie des alpes arrivent en tête, mais toutes les araignées ne sont pas reléguées en bas du classement. Pour les éléments de jardin, les prairies fleuries, les mares et les chemins sinueux sont les plus appréciés, tandis que les haies de thuyas taillées et le buis obtiennent les scores les plus bas, résultat surprenant qui suggère que l\'esthétisme seul n\'explique pas entièrement les choix d\'aménagement réels des jardins.",
      ],
      en: [
        'The Jolies Bestioles survey aimed to measure the aesthetic value that the public assigns to everyday nature: arthropods, garden elements and common landscapes. The central question was whether our aesthetic preferences could explain garden management choices, and to what extent these choices are beneficial or detrimental to biodiversity. Although conducted entirely in French, the survey reached a very wide audience (Nourdin et al. 2019, Le Courrier de la Nature).',
        "In spring 2019, we published an anonymous photographic questionnaire consisting of three series of images: 27 arthropods that can be found in France, 23 garden elements and 23 landscapes. Participants chose by pairwise comparisons the photo they found the most beautiful, generating more than 69,500 duels. More than 5,000 people completed the survey, and the aesthetic scores, calculated using the Elo algorithm, proved very stable regardless of the respondents\' social background.",
        "Our results show that the aesthetic ranking tends to follow the ecological value of the elements. Among arthropods, colorful species such as the peacock butterfly, the ladybird and the rosalia beetle ranked highest, but not all spiders were relegated to the bottom. For garden elements, flowery meadows, ponds and winding paths were the most appreciated, while trimmed thuja hedges and box shrubs obtained the lowest scores, a surprising result suggesting that aesthetics alone does not fully explain people\'s actual garden management choices.",
      ],
      es: [
        'La campaña Jolies Bestioles tenía como objetivo medir el valor estético que el público atribuye a la naturaleza cotidiana: artrópodos, elementos de jardín y paisajes del día a día. La pregunta central era si nuestras preferencias estéticas podían explicar las decisiones de gestión de los jardines y en qué medida estas decisiones son favorables o desfavorables para la biodiversidad. Aunque se realizó únicamente en francés, la campaña llegó a un público muy amplio (Nourdin et al. 2019, Le Courrier de la Nature).',
        'En la primavera de 2019, pusimos en línea un cuestionario fotográfico anónimo compuesto por tres series de imágenes: 27 artrópodos que pueden encontrarse en Francia, 23 elementos de jardín y 23 paisajes. Los participantes debían elegir, mediante comparaciones por pares, la foto que encontraban más bonita, generando más de 69 500 duelos. Más de 5 000 personas completaron la encuesta, y las puntuaciones estéticas, calculadas mediante el algoritmo Elo, resultaron muy estables independientemente del perfil social de los participantes.',
        'Nuestros resultados muestran que la clasificación estética tiende a seguir el valor ecológico de los elementos. Entre los artrópodos, las especies coloridas como la mariposa pavo real, la mariquita o la rosalía alpina encabezan la lista, aunque no todas las arañas quedaron relegadas al final. En cuanto a los elementos de jardín, las praderas floridas, los estanques y los caminos sinuosos fueron los más apreciados, mientras que los setos de tuja recortados y el boj obtuvieron las puntuaciones más bajas, un resultado sorprendente que sugiere que la estética por sí sola no explica completamente las decisiones reales de diseño de jardines.',
      ],
    },
    partners: ['CNRS', 'CEBC'],
    publications: ['nourdin-counat-2019'],
  },

  // ── 2018 ──────────────────────────────────────────────────────────────────
  {
    slug: 'mayotte',
    year: 2018,
    name: { fr: 'Mayotte', en: 'Mayotte', es: 'Mayotte' },
    description: {
      fr: 'Poissons des récifs tropicaux à Mayotte',
      en: 'Mayotte Tropical reef fish',
      es: 'Peces de Mayotte arrecife tropicales',
    },
    image: 'mayotte.jpg',
    imageCredit: 'Sophie Tribot',
    longDescription: {
      fr: [
        "La campagne Mayotte avait pour objectif de comprendre comment les différentes facettes de la biodiversité, richesse spécifique, abondance, composition et diversité fonctionnelle, déterminent la valeur esthétique des assemblages de poissons de récifs coralliens. Passer de l\'espèce à la communauté est une étape essentielle pour évaluer la valeur culturelle des écosystèmes et mieux comprendre notre réponse émotionnelle à la nature.",
        "Nous avons utilisé 84 photographies réelles d\'un récif frangeant de Mayotte, représentant 66 espèces de poissons de l\'océan Indien occidental et couvrant un gradient de diversité de 0 à 16 espèces et de 0 à 35 individus. Une enquête en ligne anonyme a réuni 2 137 participants qui ont évalué ces assemblages par comparaisons par paires, les scores étant calculés via l\'algorithme Elo (Tribot et al. 2019, Biology Letters).",
        "Nos résultats montrent que la richesse spécifique a un effet positif mais saturant sur la préférence esthétique : au-delà d\'un certain seuil, ajouter des espèces n\'améliore plus la beauté perçue. Nous avons également mis en évidence un effet négatif net de l\'abondance, suggérant qu\'un excès de complexité visuelle dégrade l\'appréciation esthétique. La diversité fonctionnelle, en revanche, n\'a aucun effet direct. La composition spécifique joue un rôle majeur : richesse et composition expliquent ensemble 94 % de la variation des scores esthétiques, et la présence d\'espèces individuellement attractives augmente la valeur de l\'assemblage tandis que les espèces peu attrayantes la diminuent (Tribot et al. 2019, Biology letters). En modélisant statistiquement ces relations, nous avons pu calculer la contribution de chaque espèce à la beauté d\'un assemblage. Nous avons ensuite (McLean et al. 2025, PNAS) appliqué ces résultats à plus de 7 000 sites de récifs dans le monde entier, permettant pour la première fois de cartographier la valeur esthétique des communautés de poissons à l\'échelle planétaire.",
      ],
      en: [
        'The Mayotte survey aimed to understand how different facets of biodiversity, species richness, abundance, composition and functional diversity, determine the aesthetic value of coral reef fish assemblages. Moving from the species to the community level is an essential step in evaluating the cultural value of ecosystems and better understanding our emotional response to nature.',
        'We used 84 real photographs taken on a fringing reef in Mayotte, representing 66 fish species from the western Indian Ocean and covering a diversity gradient of 0 to 16 species and 0 to 35 individuals. An anonymous online survey brought together 2,137 participants who evaluated these assemblages through pairwise comparisons, with scores calculated using the Elo algorithm (Tribot et al. 2019, Biology Letters).',
        'Our results show that species richness has a positive but saturating effect on aesthetic preference: beyond a certain threshold, adding more species no longer improves perceived beauty. We also found a net negative effect of abundance, suggesting that an excess of visual complexity reduces aesthetic appreciation. Functional diversity, on the other hand, has no direct effect. Species composition plays a major role: richness and composition together explain 94% of the variation in aesthetic scores, and the presence of individually attractive species increases assemblage value while less appealing species decrease it (Tribot et al. 2019, Biology letters). By statistically modelling these relationships, we were able to calculate the contribution of each species to the beauty of an assemblage. We then (McLean et al. 2025, PNAS) applied these results to more than 7,000 reef sites worldwide, allowing for the first time the aesthetic value of fish communities to be mapped at a global scale.',
      ],
      es: [
        'La campaña Mayotte tenía como objetivo comprender cómo las diferentes facetas de la biodiversidad, riqueza específica, abundancia, composición y diversidad funcional, determinan el valor estético de los ensamblajes de peces de arrecifes coralinos. Pasar de la especie a la comunidad es un paso esencial para evaluar el valor cultural de los ecosistemas y comprender mejor nuestra respuesta emocional a la naturaleza.',
        'Utilizamos 84 fotografías reales tomadas en un arrecife costero de Mayotte, que representan 66 especies de peces del océano Índico occidental y cubren un gradiente de diversidad de 0 a 16 especies y de 0 a 35 individuos. Una encuesta anónima en línea reunió a 2 137 participantes que evaluaron estos ensamblajes mediante comparaciones por pares, con puntuaciones calculadas mediante el algoritmo Elo (Tribot et al. 2019, Biology Letters).',
        'Nuestros resultados muestran que la riqueza específica tiene un efecto positivo pero saturante sobre la preferencia estética: más allá de cierto umbral, añadir más especies ya no mejora la belleza percibida. También encontramos un efecto negativo neto de la abundancia, lo que sugiere que un exceso de complejidad visual reduce la apreciación estética. La diversidad funcional, en cambio, no tiene ningún efecto directo. La composición específica desempeña un papel fundamental: riqueza y composición explican juntas el 94 % de la variación en las puntuaciones estéticas, y la presencia de especies individualmente atractivas aumenta el valor del ensamblaje mientras que las especies poco atractivas lo disminuyen (Tribot et al. 2019, Biology letters). Al modelizar estadísticamente estas relaciones, pudimos calcular la contribución de cada especie a la belleza de un ensamblaje. Luego (McLean et al. 2025, PNAS) aplicamos estos resultados a más de 7 000 sitios de arrecifes en todo el mundo, permitiendo por primera vez cartografiar el valor estético de las comunidades de peces a escala planetaria.',
      ],
    },
    partners: ['CNRS', 'MARBEC', 'UM', 'UMAYOTTE'],
    publications: ['mclean-2025', 'tribot-biolett-2019'],
  },

  // ── 2016 ──────────────────────────────────────────────────────────────────
  {
    slug: 'fisheyes',
    year: 2017,
    name: { fr: 'FishEyes', en: 'FishEyes', es: 'FishEyes' },
    description: {
      fr: 'Poissons de récifs tropicaux',
      en: 'Tropical reef fish',
      es: 'Peces de arrecife tropicales',
    },
    image: 'fisheyes_ballesta.jpg',
    imageCredit: 'Laurent Ballesta www.andromede-ocean.com',
    longDescription: {
      fr: [
        "La campagne FishEyes avait pour objectif de quantifier la valeur esthétique des poissons de récifs tropicaux et d'explorer dans quelle mesure nos préférences esthétiques sont alignées avec la valeur écologique des espèces et les priorités de conservation. Les récifs coralliens sont parmi les écosystèmes les plus riches et les plus menacés de la planète, et comprendre le rôle de la beauté dans notre rapport à la biodiversité est essentiel pour développer des stratégies de conservation moins biaisées.",
        "Nous avons conduit deux campagnes en ligne. La première, réalisée entre mars et juin 2016, a réuni près de 8 000 participants qui ont évalué par comparaisons par paires 116 espèces de l'océan Indien occidental (Tribot et al. 2018, Scientific Reports). La seconde, conduite en 2019, a rassemblé 13 000 répondants et nous a permis d'entraîner un algorithme d'apprentissage profond pour prédire la valeur esthétique de 2 417 espèces de poissons de récifs (Langlois et al. 2022, PLoS Biology).",
        "Nos résultats révèlent une déconnexion profonde entre beauté perçue et valeur écologique. Les poissons les moins attractifs assurent une richesse fonctionnelle en moyenne 33 % supérieure à celle des plus beaux, ce sont souvent les espèces les plus discrètes qui jouent les rôles les plus essentiels dans les écosystèmes (Tribot et al. 2018). Les espèces les plus attractives sont concentrées dans de petites régions de l'arbre du vivant, tandis que les espèces menacées et écologiquement importantes sont en moyenne les moins belles (Langlois et al. 2022). Nous avons également montré que les aires marines protégées améliorent la valeur esthétique des assemblages en favorisant la diversité des espèces (McLean et al. 2025, PNAS), et que l'intérêt humain est systématiquement plus faible pour les espèces les plus vulnérables (Mouquet et al. 2024, Science Advances).",
      ],
      en: [
        'The FishEyes survey aimed to quantify the aesthetic value of tropical reef fish and to explore the extent to which our aesthetic preferences are aligned, or not, with the ecological value of species and conservation priorities. Coral reefs are among the richest and most threatened ecosystems on the planet, and understanding the role of beauty in our relationship with biodiversity is essential for developing less biased conservation strategies.',
        'We conducted two online surveys. The first, carried out between March and June 2016, gathered nearly 8 000 participants who evaluated 116 species from the western Indian Ocean through pairwise photographic comparisons (Tribot et al. 2018, Scientific Reports). The second, conducted in 2019, brought together 13 000 respondents and allowed us to train a deep learning algorithm to predict the aesthetic value of 2 417 reef fish species worldwide (Langlois et al. 2022, PLoS Biology).',
        'Our results reveal a profound disconnect between perceived beauty and ecological value. The least attractive fish provide a functional richness on average 33% higher than the most beautiful ones, meaning it is often the most inconspicuous species that play the most essential roles in ecosystems (Tribot et al. 2018). The most attractive species are concentrated in small regions of the tree of life, while threatened and ecologicaly important species are on average the least beautiful (Langlois et al. 2022). We also showed that marine protected areas enhance the aesthetic value of fish assemblages by promoting species diversity (McLean et al. 2025, PNAS), and that human interest is systematically lower for the most climate-vulnerable species (Mouquet et al. 2024, Science Advances).',
      ],
      es: [
        'La campaña FishEyes tenía como objetivo cuantificar el valor estético de los peces de arrecifes tropicales y explorar en qué medida nuestras preferencias estéticas están alineadas, o no, con el valor ecológico de las especies y las prioridades de conservación. Los arrecifes de coral se encuentran entre los ecosistemas más ricos y amenazados del planeta, y comprender el papel de la belleza en nuestra relación con la biodiversidad es esencial para desarrollar estrategias de conservación menos sesgadas.',
        'Realizamos dos campañas en línea. La primera, llevada a cabo entre marzo y junio de 2016, reunió a cerca de 8 000 participantes que evaluaron 116 especies del océano Índico occidental mediante comparaciones fotográficas por pares (Tribot et al. 2018, Scientific Reports). La segunda, realizada en 2019, reunió a 13 000 participantes y nos permitió entrenar un algoritmo de aprendizaje profundo para predecir el valor estético de 2 417 especies de peces de arrecife de todo el mundo (Langlois et al. 2022, PLoS Biology).',
        'Nuestros resultados revelan una profunda desconexión entre la belleza percibida y el valor ecológico. Los peces menos atractivos presentan una riqueza funcional en promedio un 33 % superior a la de los más bellos, lo que significa que a menudo son las especies más discretas las que desempeñan los roles más esenciales en los ecosistemas (Tribot et al. 2018). Las especies más atractivas están concentradas en pequeñas regiones del árbol de la vida, mientras que las especies amenazadas y ecológicamente importantes son en promedio las menos bellas (Langlois et al. 2022). También demostramos que las áreas marinas protegidas mejoran el valor estético de las comunidades de peces al favorecer la diversidad de especies (McLean et al. 2025, PNAS), y que el interés humano es sistemáticamente menor para las especies más vulnerables al cambio climático (Mouquet et al. 2024, Science Advances).',
      ],
    },
    partners: ['CNRS', 'MARBEC', 'AERMC', 'UM', 'UMAYOTTE', 'UNCW'],
    publications: ['mclean-2025', 'mouquet-sciadv-2024', 'langlois-2022', 'tribot-scirep-2018'],
  },

  // ── 2014 ──────────────────────────────────────────────────────────────────
  {
    slug: 'coralibo',
    year: 2014,
    name: { fr: 'CoraliBo', en: 'CoraliBo', es: 'CoraliBo' },
    description: {
      fr: 'Récifs coralligène méditerranée',
      en: 'Mediterranean coralligenous reefs',
      es: 'Arrecifes coralígenos mediterráneos',
    },
    image: 'coralibo.jpg',
    imageCredit: 'Laurent Ballesta www.andromede-ocean.com',
    longDescription: {
      fr: [
        "La campagne CoraliBo avait pour objectif d'évaluer la valeur esthétique des récifs coralligènes de Méditerranée et de comprendre dans quelle mesure cette valeur est liée à la biodiversité. Ces récifs, situés entre 20 et 120 m de profondeur, hébergent plus de 1700 espèces et comptent parmi les écosystèmes les plus riches de Méditerranée. Si leurs services matériels sont bien documentés, leur valeur esthétique, en tant que contribution culturelle à la nature, restait très peu étudiée en milieu marin. CoraliBo visait à quantifier la beauté perçue de ces assemblages benthiques et à identifier les composantes de la biodiversité qui l'expliquent (Tribot et al. 2016, Scientific Reports ; Langlois et al. 2021, Ecological Indicators).",
        "Nous avons d'abord mis en ligne entre avril et mai 2014 un questionnaire photographique anonyme présentant des paires de quadrats (50 x 50 cm) issus du programme RECOR couvrant 113 stations le long du littoral méditerranéen français. Les 1 260 participants choisissaient dans chaque paire la photo la plus belle, générant des scores esthétiques via l'algorithme Elo (Tribot et al. 2016). Nous avons ensuite utilisé ces 297 quadrats évalués comme données d'entraînement d'un réseau de neurones convolutif (ResNet50, R²=0,83) pour prédire la valeur esthétique des 7 692 quadrats disponibles dans la base RECOR, répartis sur 160 stations entre 20 et 90 m de profondeur. Ces estimations ont été combinées avec des mesures de diversité taxonomique, fonctionnelle et phylogénétique au sein d'un modèle d'équations structurales (Langlois et al. 2021).",
        "Nos résultats montrent que la richesse spécifique et, dans une moindre mesure, la richesse fonctionnelle ont un effet positif significatif sur la valeur esthétique, les assemblages les plus diversifiés étant perçus comme les plus beaux (Tribot et al. 2016). En élargissant l'analyse à 7 692 quadrats, nous avons confirmé l'effet positif fort de la diversité taxonomique mais révélé un biais inattendu : les diversités fonctionnelle et phylogénétique, corrigées de la richesse spécifique, ont un effet négatif, probablement lié à la présence d'algues vertes peu appréciées (Langlois et al. 2021). Au total, 68 espèces ont un effet significatif sur l'esthétique, les gorgones et certaines ascidies arrivant en tête. Nous avons enfin cartographié en trois dimensions les valeurs esthétique et écologique des récifs le long du littoral méditerranéen français, montrant que la Corse présente des valeurs esthétiques plus élevées que le continent, et que valeur esthétique et valeur écologique, si elles sont positivement corrélées, ne coïncident pas toujours.",
      ],
      en: [
        'The CoraliBo campaign aimed to assess the aesthetic value of Mediterranean coralligenous reefs and to understand how this value relates to biodiversity. These reefs, found between 20 and 120 m depth, host more than 1700 species and rank among the richest ecosystems in the Mediterranean. While their material services are well documented, their aesthetic value as a cultural contribution of nature had received little attention in marine settings. CoraliBo sought to quantify the perceived beauty of these benthic assemblages and identify the biodiversity components that explain it (Tribot et al. 2016, Scientific Reports; Langlois et al. 2021, Ecological Indicators).',
        'We first launched an anonymous online photographic questionnaire between April and May 2014, presenting pairs of photographic quadrats (50 x 50 cm) from the RECOR monitoring programme covering 113 stations along the French Mediterranean coastline. The 1,260 participants chose the most beautiful photo in each pair, generating aesthetic scores via the Elo algorithm (Tribot et al. 2016). We then used these 297 evaluated quadrats as training data for a convolutional neural network (ResNet50, R²=0.83) to predict the aesthetic value of all 7,692 quadrats in the RECOR database, distributed across 160 stations between 20 and 90 m depth. These estimates were combined with taxonomic, functional and phylogenetic diversity metrics within a structural equation model (Langlois et al. 2021).',
        'Our results show that species richness and, to a lesser extent, functional richness have a significant positive effect on aesthetic value, with the most diverse assemblages perceived as the most beautiful (Tribot et al. 2016). Extending the analysis to 7,692 quadrats confirmed the strong positive effect of taxonomic diversity but revealed an unexpected bias: functional and phylogenetic diversities, once corrected for species richness, have a negative effect, likely linked to the presence of poorly appreciated green algae (Langlois et al. 2021). Overall, 68 species had a significant effect on aesthetic value, with gorgonians and certain ascidians ranking highest. We also produced the first three-dimensional map of the aesthetic and ecological values of coralligenous reefs along the French Mediterranean coastline, showing that Corsica has higher aesthetic values than the mainland, and that aesthetic and ecological values, while positively correlated, do not always coincide.',
      ],
      es: [
        'La campaña CoraliBo tenía como objetivo evaluar el valor estético de los arrecifes coralígenos del Mediterráneo y comprender en qué medida este valor está relacionado con la biodiversidad. Estos arrecifes, situados entre 20 y 120 m de profundidad, albergan más de 1700 especies y se encuentran entre los ecosistemas más ricos del Mediterráneo. Si bien sus servicios materiales están bien documentados, su valor estético como contribución cultural de la naturaleza había recibido poca atención en entornos marinos. CoraliBo buscaba cuantificar la belleza percibida de estos ensamblajes bentónicos e identificar los componentes de la biodiversidad que la explican (Tribot et al. 2016, Scientific Reports; Langlois et al. 2021, Ecological Indicators).',
        'Primero pusimos en línea entre abril y mayo de 2014 un cuestionario fotográfico anónimo que presentaba pares de cuadrantes fotográficos (50 x 50 cm) del programa de seguimiento RECOR, cubriendo 113 estaciones a lo largo del litoral mediterráneo francés. Los 1.260 participantes elegían en cada par la foto más bella, generando puntuaciones estéticas mediante el algoritmo Elo (Tribot et al. 2016). Luego utilizamos estos 297 cuadrantes evaluados como datos de entrenamiento de una red neuronal convolucional (ResNet50, R²=0,83) para predecir el valor estético de los 7.692 cuadrantes disponibles en la base de datos RECOR, distribuidos en 160 estaciones entre 20 y 90 m de profundidad. Estas estimaciones se combinaron con medidas de diversidad taxonómica, funcional y filogenética dentro de un modelo de ecuaciones estructurales (Langlois et al. 2021).',
        'Nuestros resultados muestran que la riqueza de especies y, en menor medida, la riqueza funcional tienen un efecto positivo significativo sobre el valor estético, siendo los ensamblajes más diversos percibidos como los más bellos (Tribot et al. 2016). Al ampliar el análisis a 7.692 cuadrantes, confirmamos el fuerte efecto positivo de la diversidad taxonómica pero revelamos un sesgo inesperado: las diversidades funcional y filogenética, corregidas por la riqueza de especies, tienen un efecto negativo, probablemente vinculado a la presencia de algas verdes poco apreciadas (Langlois et al. 2021). En total, 68 especies tuvieron un efecto significativo sobre el valor estético, siendo las gorgonias y ciertas ascidias las que encabezaron la lista. También elaboramos el primer mapa tridimensional de los valores estético y ecológico de los arrecifes coralígenos a lo largo del litoral mediterráneo francés, mostrando que Córcega presenta valores estéticos más altos que el continente, y que el valor estético y el valor ecológico, aunque correlacionados positivamente, no siempre coinciden.',
      ],
    },
    partners: ['CNRS', 'MARBEC', 'AERMC', 'UM', 'ANDROM'],
    publications: ['langlois-2021', 'tribot-scirep-2016'],
  },

  // ── TEMPLATE pour un nouveau survey ───────────────────────────────────────
  // {
  //   slug: 'mon-survey',
  //   year: 2027,
  //   name: { fr: '...', en: '...', es: '...' },
  //   description: { fr: '...', en: '...', es: '...' },
  //   image: 'mon-survey.jpg',
  //   imageCredit: '© Auteur / Institution',
  //   longDescription: {
  //     fr: ['Paragraphe 1.', 'Paragraphe 2.'],
  //     en: ['Paragraph 1.', 'Paragraph 2.'],
  //     es: ['Párrafo 1.', 'Párrafo 2.'],
  //   },
  //   partners: ['MARBEC', 'CEFE'],       // codes de partners.data.ts
  //   publications: ['mclean-2025'],       // slugs de publications.data.ts
  // },
];
