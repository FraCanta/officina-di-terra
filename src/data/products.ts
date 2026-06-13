export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: "olio" | "vino";
  price: number;
  volume: string;
  image: string;
  description: string;
  notes: string[];
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
    description:
      "La scorta di olio EVO biologico per chi sceglie qualità e provenienza certa tutto l'anno.",
    notes: ["Formato convenienza", "Filiera aziendale", "Estratto a freddo"],
  },
  {
    slug: "nero-davola-doc-nero",
    name: "Vino rosso Nero d'Avola DOC Sicilia “NERO”",
    shortName: "NERO",
    category: "vino",
    price: 17,
    volume: "750 ml",
    image: `${base}/2024/02/vino-1920jpg-768x768.jpg`,
    description:
      "Nero d'Avola DOC Sicilia 100%, raccolto a mano nella contrada Grancifone ad Agrigento.",
    notes: ["Rosso rubino", "Frutta rossa", "Morbidi tannini"],
  },
];

export const featuredProducts = [
  products[4],
  products[6],
  products[8],
  products[1],
];

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(price);

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
