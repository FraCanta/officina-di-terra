import type { Locale } from "@/i18n/config";

type LocalizedText = Record<Locale, string>;

export type Article = {
  slug: string;
  cover: string;
  category: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  date: LocalizedText;
  readTime: LocalizedText;
  intro: LocalizedText;
  sections: Array<{
    title: LocalizedText;
    body: LocalizedText;
  }>;
};

export const articles: Article[] = [
  {
    slug: "il-paesaggio-che-diventa-olio",
    cover: "/images/brand/uliveto-mare.webp",
    category: { it: "Territorio", en: "Territory" },
    title: {
      it: "Il paesaggio che diventa olio",
      en: "The landscape that becomes olive oil",
    },
    excerpt: {
      it: "Tra ulivi, luce mediterranea e brezza marina: come il territorio di Realmonte entra nel carattere del nostro olio.",
      en: "Olive trees, Mediterranean light and sea breeze: how Realmonte shapes the character of our olive oil.",
    },
    date: { it: "13 giugno 2026", en: "June 13, 2026" },
    readTime: { it: "4 min di lettura", en: "4 min read" },
    intro: {
      it: "Un olio non nasce soltanto da una cultivar. Nasce da un luogo, dal modo in cui la luce attraversa le foglie e dalla cura con cui ogni albero viene accompagnato durante l'anno.",
      en: "Olive oil is not born from a cultivar alone. It comes from a place, from the way light crosses the leaves and from the care each tree receives throughout the year.",
    },
    sections: [
      {
        title: { it: "Una terra aperta al Mediterraneo", en: "A land open to the Mediterranean" },
        body: {
          it: "Gli uliveti di Officina di Terra crescono nel paesaggio agrigentino, non lontano dalla Scala dei Turchi. Il mare mitiga le temperature e accompagna una maturazione lenta, mentre il terreno restituisce all'olio una personalità netta e riconoscibile.",
          en: "Officina di Terra's olive groves grow in the Agrigento landscape, close to the Scala dei Turchi. The sea softens temperatures and supports slow ripening, while the soil gives the oil a clear, distinctive personality.",
        },
      },
      {
        title: { it: "Coltivare è osservare", en: "To cultivate is to observe" },
        body: {
          it: "L'agricoltura biologica richiede presenza: leggere le stagioni, intervenire con misura e rispettare i tempi della pianta. È un lavoro quotidiano che mette la qualità prima della quantità.",
          en: "Organic farming requires presence: reading the seasons, acting with restraint and respecting the plant's timing. It is daily work that puts quality before quantity.",
        },
      },
    ],
  },
  {
    slug: "raccolta-precoce-gesto-di-qualita",
    cover: "/images/brand/trattore-uliveto.webp",
    category: { it: "Olio EVO", en: "Extra virgin olive oil" },
    title: {
      it: "Raccolta precoce, un gesto di qualità",
      en: "Early harvest, a choice for quality",
    },
    excerpt: {
      it: "Perché raccogliere prima significa scegliere profumi più vivi, maggiore freschezza e un olio dalla struttura elegante.",
      en: "Why harvesting early means brighter aromas, greater freshness and an olive oil with an elegant structure.",
    },
    date: { it: "7 giugno 2026", en: "June 7, 2026" },
    readTime: { it: "3 min di lettura", en: "3 min read" },
    intro: {
      it: "La raccolta è uno dei momenti decisivi dell'anno agricolo. Anticiparla significa accettare una resa inferiore per ottenere un profilo aromatico più intenso e una materia prima integra.",
      en: "Harvest is one of the decisive moments of the farming year. Bringing it forward means accepting a lower yield in order to obtain a more intense aromatic profile and pristine fruit.",
    },
    sections: [
      {
        title: { it: "Il momento giusto", en: "The right moment" },
        body: {
          it: "Le olive vengono seguite fino al punto di maturazione che meglio conserva la componente verde e fruttata. La scelta non è affidata a una data fissa, ma all'osservazione del frutto e dell'andamento climatico.",
          en: "The olives are monitored until the stage of ripeness that best preserves their green, fruity character. The decision is not tied to a fixed date, but to observation of the fruit and the weather.",
        },
      },
      {
        title: { it: "Dal campo al frantoio", en: "From grove to mill" },
        body: {
          it: "Ridurre il tempo tra raccolta e molitura aiuta a proteggere aromi e qualità. La lavorazione a freddo completa un percorso pensato per conservare ciò che la terra ha costruito.",
          en: "Reducing the time between harvest and milling helps protect aroma and quality. Cold extraction completes a process designed to preserve what the land has created.",
        },
      },
    ],
  },
  {
    slug: "nero-davola-ad-alta-quota",
    cover: "/images/brand/vigneto-paesaggio.webp",
    category: { it: "Vino", en: "Wine" },
    title: {
      it: "Nero d'Avola a 450 metri sul mare",
      en: "Nero d'Avola, 450 metres above the sea",
    },
    excerpt: {
      it: "Contrada Grancifone, terreno calcareo-argilloso e vendemmia manuale: il racconto del nostro rosso DOC Sicilia.",
      en: "Contrada Grancifone, limestone-clay soil and hand harvesting: the story of our Sicilia DOC red wine.",
    },
    date: { it: "29 maggio 2026", en: "May 29, 2026" },
    readTime: { it: "5 min di lettura", en: "5 min read" },
    intro: {
      it: "Il nostro Nero d'Avola nasce in contrada Grancifone, ad Agrigento. Qui altitudine, escursione termica e terreno ciottoloso costruiscono un vino mediterraneo, ma capace di misura.",
      en: "Our Nero d'Avola comes from Contrada Grancifone in Agrigento. Here altitude, temperature variation and stony soil create a Mediterranean wine with poise and restraint.",
    },
    sections: [
      {
        title: { it: "La vigna", en: "The vineyard" },
        body: {
          it: "L'impianto del 2020 segue il sistema Guyot, con 4.500 viti per ettaro. La resa contenuta concentra il frutto e permette di selezionare grappoli sani, raccolti a mano nella terza decade di settembre.",
          en: "Planted in 2020, the vineyard is trained using the Guyot system with 4,500 vines per hectare. Limited yields concentrate the fruit and allow healthy bunches to be selected and hand-picked in late September.",
        },
      },
      {
        title: { it: "Dalla fermentazione all'affinamento", en: "From fermentation to ageing" },
        body: {
          it: "Le uve vengono diraspate e macerate a 22-24 °C per 10-12 giorni. Dopo la fermentazione malolattica naturale, il vino matura in acciaio e riposa in bottiglia per alcuni mesi.",
          en: "The grapes are destemmed and macerated at 22-24 °C for 10-12 days. After natural malolactic fermentation, the wine matures in steel and rests in bottle for several months.",
        },
      },
    ],
  },
  {
    slug: "il-tempo-lento-della-terra",
    cover: "/images/brand/foglie-ruderi.webp",
    category: { it: "Diario agricolo", en: "Farm journal" },
    title: {
      it: "Il tempo lento della terra",
      en: "The slow time of the land",
    },
    excerpt: {
      it: "Una riflessione sul lavoro agricolo, sui gesti che si ripetono e sul valore di costruire qualcosa destinato a durare.",
      en: "A reflection on farm work, recurring gestures and the value of building something meant to last.",
    },
    date: { it: "18 maggio 2026", en: "May 18, 2026" },
    readTime: { it: "4 min di lettura", en: "4 min read" },
    intro: {
      it: "In campagna il tempo non si accelera. Si può soltanto imparare a riconoscerlo, preparare il terreno e attendere che ogni stagione completi il proprio lavoro.",
      en: "In the countryside, time cannot be accelerated. We can only learn to recognise it, prepare the soil and wait for every season to complete its work.",
    },
    sections: [
      {
        title: { it: "Un'officina a cielo aperto", en: "An open-air workshop" },
        body: {
          it: "Il nome Officina di Terra racconta un luogo del fare. Un laboratorio vivo, dove esperienza, strumenti contemporanei e conoscenza del paesaggio lavorano insieme.",
          en: "The name Officina di Terra describes a place of making. A living workshop where experience, contemporary tools and knowledge of the landscape work together.",
        },
      },
      {
        title: { it: "Radici e futuro", en: "Roots and future" },
        body: {
          it: "Coltivare significa lasciare una traccia che supera il raccolto di una sola annata. La cura del suolo e degli alberi è un investimento nella qualità futura del territorio.",
          en: "Farming means leaving a mark that goes beyond a single year's harvest. Caring for the soil and trees is an investment in the future quality of the land.",
        },
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
