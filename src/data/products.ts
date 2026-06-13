export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: "olio" | "vino";
  price: number;
  volume: string;
  image: string;
  detailImage?: string;
  description: string;
  notes: string[];
  technicalDetails?: Array<[string, string]>;
};

type ProductTranslation = Pick<Product, "name" | "shortName" | "description" | "notes"> & {
  technicalDetails?: Array<[string, string]>;
};

const base = "https://officinaditerra.com/wp-content/uploads";

export const products: Product[] = [
  {
    slug: "olio-nocelilla-250ml",
    name: "Olio Extra Vergine di Oliva Biologico Nocelilla 250 ml",
    shortName: "Nocelilla 250 ml",
    category: "olio",
    price: 6.5,
    volume: "250 ml",
    image: `${base}/2024/02/olio-piccola-1920-768x768.jpg`,
    detailImage: "/images/brand/olio-bottiglia-legno.webp",
    description:
      "Olio biologico siciliano ottenuto da molitura a freddo di olive Nocellara del Belice e Biancolilla.",
    notes: ["Giallo dorato", "Fruttato elegante", "Finale dolce e piccante"],
  },
  {
    slug: "olio-nocelilla-basilico-250ml",
    name: "Olio Extra Vergine di Oliva Biologico Nocelilla al Basilico",
    shortName: "Nocelilla Basilico",
    category: "olio",
    price: 7.5,
    volume: "250 ml",
    image: `${base}/2024/02/olio-basilico-1920-768x768.jpg`,
    detailImage: "/images/brand/olio-bottiglia-inclinata.webp",
    description:
      "Il nostro olio EVO biologico incontra il profumo fresco del basilico mediterraneo.",
    notes: ["Aromatico", "Fresco", "Ideale su verdure e pasta"],
  },
  {
    slug: "olio-nocelilla-peperoncino-250ml",
    name: "Olio Extra Vergine di Oliva Biologico Nocelilla al Peperoncino",
    shortName: "Nocelilla Peperoncino",
    category: "olio",
    price: 7.5,
    volume: "250 ml",
    image: `${base}/2024/02/olio-peperoncino-1920-768x768.jpg`,
    detailImage: "/images/brand/olio-peperoncino-editorial.webp",
    description:
      "Un condimento biologico dal carattere siciliano, intenso e piacevolmente piccante.",
    notes: ["Vivace", "Persistente", "Perfetto su pizza e legumi"],
  },
  {
    slug: "olio-nocelilla-rosmarino-250ml",
    name: "Olio Extra Vergine di Oliva Biologico Nocelilla al Rosmarino",
    shortName: "Nocelilla Rosmarino",
    category: "olio",
    price: 7.5,
    volume: "250 ml",
    image: `${base}/2024/02/rosmarino-1920-768x768.jpg`,
    detailImage: "/images/brand/olio-rosmarino-editorial.webp",
    description:
      "Olio EVO biologico impreziosito dalle note balsamiche del rosmarino.",
    notes: ["Balsamico", "Mediterraneo", "Ideale su arrosti e patate"],
  },
  {
    slug: "olio-nocelilla-500ml",
    name: "Olio Extra Vergine di Oliva Biologico Nocelilla 500 ml",
    shortName: "Nocelilla 500 ml",
    category: "olio",
    price: 11.5,
    volume: "500 ml",
    image: `${base}/2024/02/olio-medio-1920-768x768.jpg`,
    detailImage: "/images/brand/olio-bottiglia-verticale.webp",
    description:
      "La bottiglia da tavola: cultivar Nocellara del Belice e Biancolilla, raccolte a mano e molite a freddo.",
    notes: ["Acidità naturale 0,1%", "Molitura a freddo", "Agricoltura biologica"],
  },
  {
    slug: "olio-nocelilla-750ml",
    name: "Olio Extra Vergine di Oliva Biologico Nocelilla 750 ml",
    shortName: "Nocelilla 750 ml",
    category: "olio",
    price: 15,
    volume: "750 ml",
    image: `${base}/2024/02/olio-grande-1920-768x768.jpg`,
    detailImage: "/images/brand/olio-bottiglia-verticale.webp",
    description:
      "Il formato generoso per portare ogni giorno in tavola il gusto autentico dell'olio siciliano.",
    notes: ["Biologico", "Equilibrato", "100% olive aziendali"],
  },
  {
    slug: "olio-nocelilla-3l",
    name: "Olio Extra Vergine di Oliva Biologico Nocelilla 3 L",
    shortName: "Nocelilla 3 L",
    category: "olio",
    price: 49,
    volume: "3 L",
    image: `${base}/2024/02/latta-piccola-1920-768x768.jpg`,
    detailImage: "/images/brand/olio-latta-editorial.webp",
    description:
      "Latta da 3 litri per conservare al meglio profumi, gusto e proprietà dell'olio EVO biologico.",
    notes: ["Formato famiglia", "Protezione dalla luce", "Raccolta precoce"],
  },
  {
    slug: "olio-nocelilla-5l",
    name: "Olio Extra Vergine di Oliva Biologico Nocelilla 5 L",
    shortName: "Nocelilla 5 L",
    category: "olio",
    price: 81,
    volume: "5 L",
    image: `${base}/2024/02/latta-grande-1920-768x768.jpg`,
    detailImage: "/images/brand/olio-latta-editorial.webp",
    description:
      "La scorta di olio EVO biologico per chi sceglie qualità e provenienza certa tutto l'anno.",
    notes: ["Formato convenienza", "Filiera aziendale", "Estratto a freddo"],
  },
  {
    slug: "nero-davola-doc-nero",
    name: "Vino rosso Nero d'Avola DOC Sicilia NERO",
    shortName: "NERO",
    category: "vino",
    price: 17,
    volume: "750 ml",
    image: `${base}/2024/02/vino-1920jpg-768x768.jpg`,
    description:
      "Vino rosso Nero d'Avola DOC Sicilia ottenuto esclusivamente da uve Nero d'Avola coltivate nella contrada Grancifone, ad Agrigento.",
    notes: ["Rosso rubino intenso", "Ciliegia e mora", "Buon equilibrio e morbidi tannini"],
    technicalDetails: [
      ["Classificazione", "Nero d'Avola DOC Sicilia"],
      ["Varietà", "Nero d'Avola 100%"],
      ["Tipologia", "Vino rosso"],
      ["Luogo di produzione", "Contrada Grancifone, Agrigento (AG)"],
      ["Anno d'impianto", "2020"],
      ["Altimetria", "450 metri s.l.m."],
      ["Densità d'impianto", "4.500 viti per ettaro"],
      ["Terreno", "Calcareo-argilloso"],
      ["Sistema di allevamento", "Guyot"],
      ["Epoca di vendemmia", "Terza decade di settembre"],
      ["Resa per ettaro", "70 q.li"],
      [
        "Vinificazione",
        "Uve raccolte e selezionate a mano, poste in cassette, subito diraspate e macerate a 22-24 °C per 10-12 giorni.",
      ],
      [
        "Affinamento",
        "Fermentazione malolattica naturale, maturazione in acciaio e affinamento in bottiglia per 3-4 mesi.",
      ],
      ["Colore", "Rosso rubino intenso, con riflessi violacei"],
      ["Olfatto e gusto", "Fruttato con sentori di ciliegia e mora; buon equilibrio e morbidi tannini"],
      ["Gradazione alcolica", "15% vol"],
      ["Temperatura di servizio", "16-18 °C"],
      ["Abbinamenti", "Primi piatti saporiti, carni rosse e selvaggina"],
    ],
  },
];

export const featuredProducts = [
  products[4],
  products[6],
  products[8],
  products[1],
];

const productEnglish: Record<string, ProductTranslation> = {
  "olio-nocelilla-250ml": {
    name: "Organic Extra Virgin Olive Oil Nocelilla 250 ml",
    shortName: "Nocelilla 250 ml",
    description:
      "Organic Sicilian olive oil, cold extracted from Nocellara del Belice and Biancolilla olives.",
    notes: ["Golden yellow", "Elegant fruitiness", "Sweet and peppery finish"],
  },
  "olio-nocelilla-basilico-250ml": {
    name: "Organic Extra Virgin Olive Oil Nocelilla with Basil",
    shortName: "Nocelilla Basil",
    description:
      "Our organic extra virgin olive oil meets the fresh fragrance of Mediterranean basil.",
    notes: ["Aromatic", "Fresh", "Ideal with vegetables and pasta"],
  },
  "olio-nocelilla-peperoncino-250ml": {
    name: "Organic Extra Virgin Olive Oil Nocelilla with Chilli",
    shortName: "Nocelilla Chilli",
    description:
      "An organic condiment with a Sicilian character, intense and pleasantly spicy.",
    notes: ["Lively", "Persistent", "Perfect with pizza and pulses"],
  },
  "olio-nocelilla-rosmarino-250ml": {
    name: "Organic Extra Virgin Olive Oil Nocelilla with Rosemary",
    shortName: "Nocelilla Rosemary",
    description:
      "Organic extra virgin olive oil enriched by the balsamic notes of rosemary.",
    notes: ["Balsamic", "Mediterranean", "Ideal with roasts and potatoes"],
  },
  "olio-nocelilla-500ml": {
    name: "Organic Extra Virgin Olive Oil Nocelilla 500 ml",
    shortName: "Nocelilla 500 ml",
    description:
      "Our table bottle: Nocellara del Belice and Biancolilla olives, hand-picked and cold extracted.",
    notes: ["Natural acidity 0.1%", "Cold extracted", "Organic farming"],
  },
  "olio-nocelilla-750ml": {
    name: "Organic Extra Virgin Olive Oil Nocelilla 750 ml",
    shortName: "Nocelilla 750 ml",
    description:
      "A generous size for bringing the authentic taste of Sicilian olive oil to the table every day.",
    notes: ["Organic", "Balanced", "100% estate-grown olives"],
  },
  "olio-nocelilla-3l": {
    name: "Organic Extra Virgin Olive Oil Nocelilla 3 L",
    shortName: "Nocelilla 3 L",
    description:
      "A 3-litre tin designed to preserve the fragrance, flavour and properties of our organic olive oil.",
    notes: ["Family size", "Protected from light", "Early harvest"],
  },
  "olio-nocelilla-5l": {
    name: "Organic Extra Virgin Olive Oil Nocelilla 5 L",
    shortName: "Nocelilla 5 L",
    description:
      "A supply of organic olive oil for those who choose quality and traceable origins all year round.",
    notes: ["Value size", "Estate-controlled supply chain", "Cold extracted"],
  },
  "nero-davola-doc-nero": {
    name: "NERO Sicilia DOC Nero d'Avola red wine",
    shortName: "NERO",
    description:
      "Sicilia DOC Nero d'Avola red wine made exclusively from Nero d'Avola grapes grown in Contrada Grancifone, Agrigento.",
    notes: ["Deep ruby red", "Cherry and blackberry", "Balanced with soft tannins"],
    technicalDetails: [
      ["Classification", "Sicilia DOC Nero d'Avola"],
      ["Grape variety", "100% Nero d'Avola"],
      ["Type", "Red wine"],
      ["Production area", "Contrada Grancifone, Agrigento"],
      ["Year planted", "2020"],
      ["Altitude", "450 metres above sea level"],
      ["Planting density", "4,500 vines per hectare"],
      ["Soil", "Limestone and clay"],
      ["Training system", "Guyot"],
      ["Harvest", "Late September"],
      ["Yield per hectare", "70 quintals"],
      [
        "Winemaking",
        "Hand-picked and selected grapes, placed in crates, destemmed and macerated at 22-24 °C for 10-12 days.",
      ],
      [
        "Ageing",
        "Natural malolactic fermentation, maturation in steel and bottle ageing for 3-4 months.",
      ],
      ["Colour", "Deep ruby red with violet reflections"],
      ["Nose and palate", "Cherry and blackberry fruit; balanced with soft tannins"],
      ["Alcohol", "15% vol"],
      ["Serving temperature", "16-18 °C"],
      ["Pairings", "Flavourful pasta dishes, red meat and game"],
    ],
  },
};

export function localizeProduct(product: Product, locale: "it" | "en"): Product {
  if (locale === "it") return product;
  const translation = productEnglish[product.slug];
  return translation ? { ...product, ...translation } : product;
}

export const formatPrice = (price: number, locale: "it" | "en" = "it") =>
  new Intl.NumberFormat(locale === "it" ? "it-IT" : "en-GB", {
    style: "currency",
    currency: "EUR",
  }).format(price);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
