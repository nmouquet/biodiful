// partners.data.ts
// ─────────────────────────────────────────────────────────────────────────────
// Source unique de tous les partenaires du projet Biodiful.
//
// Utilisé par :
//   - page About   → affiche tous les partenaires (code + name + location + url)
//   - page Survey  → filtre sur les codes listés dans surveys.data.ts
//
// COMMENT AJOUTER UN PARTENAIRE :
//   Ajouter un objet dans PARTNERS.
//   Le champ 'code' doit correspondre exactement aux codes utilisés
//   dans surveys.data.ts (partners: ['CODE1', 'CODE2', ...])
// ─────────────────────────────────────────────────────────────────────────────

export interface Partner {
  code: string; // acronyme court — utilisé comme référence dans surveys.data.ts
  name: string; // nom complet affiché sur les pages
  location: string; // ville/pays
  url: string; // lien vers le site de l'institution
}

export const PARTNERS: Partner[] = [
  { code: 'AERMC', name: "Agence de l'Eau Rhône Méditerranée Corse", location: 'France', url: 'https://www.eaurmc.fr/' },
  { code: 'ANDROM', name: 'Andromède Océanologie', location: 'France', url: 'https://www.andromede-ocean.com/' },
  { code: 'CEBC', name: "Centre d'Etudes Biologiques de Chizé", location: 'CNRS, France', url: 'https://www.cebc.cnrs.fr/' },
  { code: 'CEFE', name: "Centre d'Ecologie Fonctionnelle et Evolutive", location: 'CNRS, France', url: 'https://www.cefe.cnrs.fr/' },
  { code: 'INDOC', name: 'Indo Ocean Foundation', location: 'Indonesia', url: 'https://indoocean.org/' },
  { code: 'IPB', name: 'IPB University', location: 'Indonesia', url: 'https://www.ipb.ac.id/' },
  { code: 'LEC', name: 'Lancaster Environment Centre', location: 'UK', url: 'https://www.lancaster.ac.uk/lec/' },
  { code: 'MARBEC', name: 'Marine Biodiversity Exploitation and Conservation', location: 'CNRS, France', url: 'https://umr-marbec.fr/' },
  { code: 'MNHN', name: "Muséum National d'Histoire Naturelle", location: 'France', url: 'https://www.mnhn.fr/' },
  { code: 'SAPIENZA', name: 'Sapienza University of Rome', location: 'Italy', url: 'https://www.uniroma1.it/en/pagina-strutturale/home' },
  { code: 'SETE', name: "Station d'Ecologie Théorique et Expérimentale", location: 'France', url: 'https://sete-moulis-cnrs.fr/fr/' },
  { code: 'TELEMME', name: 'TELEMMe', location: 'Aix-Marseille Univ., France', url: 'https://telemme.mmsh.fr/' },
  { code: 'USP', name: 'Universidade de São Paulo', location: 'Brazil', url: 'https://www5.usp.br/' },
  { code: 'UNCW', name: 'University of North Carolina Wilmington', location: 'USA', url: 'https://uncw.edu/' },
  { code: 'UPOTSDAM', name: 'University of Potsdam', location: 'Germany', url: 'https://www.uni-potsdam.de/de' },
  { code: 'UPV', name: 'Université Paul-Valéry Montpellier', location: 'France', url: 'https://www.univ-montp3.fr/en' },
  { code: 'UM', name: 'Université de Montpellier', location: 'France', url: 'https://www.umontpellier.fr/' },
  { code: 'UMAYOTTE', name: 'Université de Mayotte', location: 'Mayotte', url: 'https://www.univ-mayotte.fr/fr/index.html' },
  { code: 'WSL', name: 'Swiss Federal Research Institute', location: 'Switzerland', url: 'https://www.wsl.ch/en/' },
];
