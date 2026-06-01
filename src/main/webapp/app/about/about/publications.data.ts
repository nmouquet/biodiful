// publications.data.ts
// ─────────────────────────────────────────────────────────────────────────────
// Source unique de toutes les publications du projet Biodiful.
//
// Utilisé par :
//   - page About   → affiche toutes les publications (ordre anti-chronologique)
//   - page Survey  → filtre sur les slugs listés dans surveys.data.ts
//
// COMMENT AJOUTER UNE PUBLICATION :
//   Ajouter un objet dans PUBLICATIONS (en tête de liste = plus récent).
//   Le champ 'slug' est un identifiant unique court, utilisé dans
//   surveys.data.ts pour relier une publication à un survey.
//   ex: publications: ['mclean-2025', 'tribot-2019']
// ─────────────────────────────────────────────────────────────────────────────

export interface Publication {
  slug: string; // identifiant unique court (auteur-année)
  title: string;
  url: string;
  authors: string; // auteurs + année + journal + doi en une seule string
}

export const PUBLICATIONS: Publication[] = [
  // ── 2025 ──────────────────────────────────────────────────────────────────
  {
    slug: 'mclean-2025',
    title: 'Conserving the beauty of the worlds reef fish assemblages.',
    url: 'https://nicolasmouquet.fr/pages/McLean_et_al_2025_PNAS.html',
    authors:
      'McLean M.*, Mouillot D., Langlois J., Arif S., Bejarano S., Casajus C., Edgar G.J., Flandrin U., Guilhaumon F., Judah A.B., Loiseau N., MacNeil M.A., Maire E., Stuart-Smith R.D., & Mouquet N.* (2025). Proc. Natl. Acad. Sci. U.S.A. 122 (25) e2415931122, doi.org/10.1073/pnas.2415931122 (* These authors contributed equally to this study)',
  },
  {
    slug: 'alisa-2025',
    title: 'Benthic communities on restored coral reefs confer equivalent aesthetic value to healthy reefs.',
    url: 'https://nicolasmouquet.fr/pages/Alisa_et_al_2025_SciRep.html',
    authors:
      'Alisa C.A.G., Razak T.B., Mouquet N.*, Graham A.J, Hemingson C.R., Mouillot D., Damayanti L., Prasetya M.E., Maulana P.B., Hamka A., Dwiyanto A., Abeng A.T., Madjid, Irwan R.E., Hidayat A., Lakota H., Parrangan C.V., Pratama A.M.A., Hamzah, Suandar, Subhan B., Zamani N.P., Vida R.T. & Lamont T.A.C. (2025). Scientific Reports 15, 20790. doi.org/10.1038/s41598-025-06373-3',
  },
  {
    slug: 'casoli-2025',
    title: 'Assessing the ecological and aesthetic effectiveness of restoration interventions on coralligenous reefs.',
    url: 'https://nicolasmouquet.fr/pages/Casoli_et_al_2025_RestEcol.html',
    authors:
      'Casoli E., Raschetti S., Mouquet N., Ventura D., Mancini G., Penna M., Andrea Belluscio A. and Ardizzone G. (2025). Restoration Ecology, e70092, doi.org/10.1111/rec.70092',
  },
  {
    slug: 'mouquet-bioscience-2025',
    title: 'Too cute to be wild: what teddy bears reveal about our disconnection from nature.',
    url: 'https://nicolasmouquet.fr/pages/Mouquet_et_al_2025_BioScience.html',
    authors: 'Mouquet N., Blanc N., Brassac T. and Tribot A.S. (2025). BioScience, doi.org/10.1093/biosci/biaf146',
  },
  {
    slug: 'zeller-2025',
    title: 'Danger versus fear: A key to understanding biophobia.',
    url: 'https://nicolasmouquet.fr/pages/Zeller_et_al_2025_PeopleNature.html',
    authors:
      'Zeller K., Mouquet N., Garcia C., Dezecache G., Maille A., Duboscq J., Morino J.L., & Bonnet X. (2025). People and Nature, doi: 10.1002/pan3.70009',
  },
  {
    slug: 'blanc-2025',
    title: 'The science of cuteness: where teddy bears beauty, comfort and care converge.',
    url: 'https://nicolasmouquet.fr/pages/Blanc_et_al_2025_JPP.html',
    authors:
      'Blanc N., Tribot A.S., Brassac T., and Mouquet N. (2025). The Journal of Positive Psychology, doi.org/10.1080/17439760.2025.2538890',
  },

  // ── 2024 ──────────────────────────────────────────────────────────────────
  {
    slug: 'mouquet-sciadv-2024',
    title: 'Low human interest for the most at-risk reef fishes worldwide.',
    url: 'https://nicolasmouquet.fr/pages/Mouquet_et_al_2024_SciAdv.html',
    authors:
      'Mouquet N., Langlois J., Casajus N., Auber A., Flandrin U., Guilhaumon F., Loiseau N., McLean M., Aurore R., Stuart Smith R.D. & Mouillot D. (2024). Science Advances, 10, eadj9510, DOI:10.1126/sciadv.adj9510',
  },

  // ── 2023 ──────────────────────────────────────────────────────────────────
  {
    slug: 'tribot-2023',
    title:
      'What makes a teddy bear comforting? A participatory study reveals the prevalence of sensory characteristics and emotional bonds in the perception of comforting teddy bears.',
    url: 'https://nicolasmouquet.fr/pages/Tribot_et_al_2023_JPP.html',
    authors:
      'Tribot A.S., Blanc N., Brassac T., Guilhaumon F., Casajus N., and Mouquet N. (2023). The Journal of Positive Psychology, DOI:10.1080/17439760.2023.2170273',
  },

  // ── 2022 ──────────────────────────────────────────────────────────────────
  {
    slug: 'langlois-2022',
    title: 'The aesthetic value of reef fishes is globally mismatched to their conservation priorities.',
    url: 'https://nicolasmouquet.fr/pages/Langlois_et_al_2022_PlosBiol.html',
    authors:
      'Langlois J.*, Guilhaumon F., Baletaud F., Casajus N., De Almeida Braga C., Fleure V., Kulbicki K., Loiseau N., Mouillot D., Renoult J.P., Stahl A., Stuart Smith R.D., Tribot A.S. & Mouquet N.* (2022). PLoS Biol 20(6): e3001640. doi:10.1371/journal.pbio.3001640 (* These authors contributed equally to this study)',
  },

  // ── 2021 ──────────────────────────────────────────────────────────────────
  {
    slug: 'langlois-2021',
    title: 'An integrated approach to estimate aesthetic and ecological values of coralligenous reefs.',
    url: 'https://nicolasmouquet.fr/pages/Langlois_et_al_2021_EcolInd.html',
    authors:
      'Langlois J., Guilhaumon F., Bockel T., Boissery P., Braga C.D.A., Deter J., Holon F., Marre G., Tribot A., Mouquet N. (2021). Ecological Indicators, doi.org/10.1016/j.ecolind.2021.107935',
  },

  // ── 2019 ──────────────────────────────────────────────────────────────────
  {
    slug: 'tribot-biolett-2019',
    title: 'Species diversity and composition drive the aesthetic value of coral reef fish assemblages.',
    url: 'https://nicolasmouquet.fr/pages/Tribot_et_al_2019_BioLett.html',
    authors:
      'Tribot A.S., Deter J., Claverie T., Guilhaumon F., Villeger S., & Mouquet N. (2019). Biology letters, 15, 20190703, doi:10.1098/rsbl.2019.0703',
  },

  // ── 2018 ──────────────────────────────────────────────────────────────────
  {
    slug: 'tribot-scirep-2018',
    title: 'Confronting species aesthetics with ecological functions in coral reef fish.',
    url: 'https://nicolasmouquet.fr/pages/Tribot_et_al_2018_SciRep.html',
    authors:
      'Tribot A.S., Carabeux Q., Deter J., Claverie T., Villeger S., & Mouquet N. (2018). Scientific Reports, 8, 11733, doi:10.1038/s41598-018-29637-7',
  },

  // ── 2016 ──────────────────────────────────────────────────────────────────
  {
    slug: 'tribot-scirep-2016',
    title: 'Taxonomic and functional diversity increase the aesthetic value of coralligenous reefs.',
    url: 'https://nicolasmouquet.fr/pages/Tribot_et_al_2016_SciRep.html',
    authors:
      'Tribot A.S., Mouquet N., Villeger S., Raymond M., Hoff F., Boissery P., Holon F., Deter J. (2016). Scientific Reports, doi:10.1038/srep34229',
  },

  // ── TEMPLATE pour une nouvelle publication ────────────────────────────────
  // {
  //   slug: 'auteur-année',
  //   title: 'Titre de la publication.',
  //   url: 'https://nicolasmouquet.fr/pages/...',
  //   authors: 'Auteur A., Auteur B. (2026). Journal, doi:...',
  // },
];
