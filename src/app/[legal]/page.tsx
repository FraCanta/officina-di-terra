import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLocale } from "@/i18n/config";

const pages = {
  "termini-e-condizioni": {
    it: {
      eyebrow: "Informazioni legali",
      title: "Termini e condizioni",
      intro: "Le condizioni che regolano gli acquisti effettuati sullo shop di Officina di Terra.",
      sections: [
        ["Ordini", "L'ordine si considera ricevuto dopo la conferma inviata all'indirizzo email indicato dal cliente."],
        ["Prezzi e pagamenti", "I prezzi sono espressi in euro e includono l'IVA, salvo diversa indicazione. I metodi disponibili vengono mostrati al checkout."],
        ["Disponibilità", "I prodotti sono soggetti a disponibilità. In caso di indisponibilità successiva all'ordine, il cliente verrà contattato e rimborsato."],
      ],
    },
    en: {
      eyebrow: "Legal information",
      title: "Terms and conditions",
      intro: "The conditions governing purchases made through the Officina di Terra online shop.",
      sections: [
        ["Orders", "An order is considered received after confirmation is sent to the email address provided by the customer."],
        ["Prices and payments", "Prices are shown in euros and include VAT unless otherwise stated. Available payment methods are displayed at checkout."],
        ["Availability", "Products are subject to availability. If an item becomes unavailable after ordering, the customer will be contacted and refunded."],
      ],
    },
  },
  spedizioni: {
    it: {
      eyebrow: "Servizio clienti",
      title: "Spedizioni e consegne",
      intro: "Prepariamo ogni ordine con imballaggi protettivi adatti a olio e vino.",
      sections: [
        ["Destinazioni", "Spediamo su tutto il territorio italiano. Per spedizioni internazionali è possibile contattarci direttamente."],
        ["Tempi", "La consegna avviene indicativamente entro 3-5 giorni lavorativi dalla conferma dell'ordine."],
        ["Tracciamento", "Quando disponibile, il codice di tracciamento viene inviato via email dopo l'affidamento al corriere."],
      ],
    },
    en: {
      eyebrow: "Customer care",
      title: "Shipping and delivery",
      intro: "Every order is prepared using protective packaging suitable for olive oil and wine.",
      sections: [
        ["Destinations", "We ship throughout Italy. Please contact us directly for international shipping."],
        ["Timing", "Delivery usually takes 3-5 working days from order confirmation."],
        ["Tracking", "When available, a tracking code is sent by email after the parcel is handed to the courier."],
      ],
    },
  },
  "resi-e-rimborsi": {
    it: {
      eyebrow: "Servizio clienti",
      title: "Resi e rimborsi",
      intro: "Indicazioni per segnalarci prodotti danneggiati o esercitare il diritto di recesso.",
      sections: [
        ["Prodotti danneggiati", "Fotografa il pacco e il prodotto e contattaci entro 48 ore dalla consegna."],
        ["Diritto di recesso", "Il consumatore può comunicare il recesso entro 14 giorni, nei limiti previsti dalla normativa applicabile."],
        ["Rimborso", "Dopo la verifica del reso, il rimborso viene effettuato sul metodo di pagamento originario."],
      ],
    },
    en: {
      eyebrow: "Customer care",
      title: "Returns and refunds",
      intro: "Information on reporting damaged products or exercising your right of withdrawal.",
      sections: [
        ["Damaged products", "Photograph the parcel and product and contact us within 48 hours of delivery."],
        ["Right of withdrawal", "Consumers may communicate their withdrawal within 14 days, subject to applicable law."],
        ["Refunds", "Once the return has been checked, the refund is issued to the original payment method."],
      ],
    },
  },
  privacy: {
    it: {
      eyebrow: "Dati personali",
      title: "Privacy policy",
      intro: "Informazioni sintetiche sul trattamento dei dati personali attraverso il sito.",
      sections: [
        ["Dati raccolti", "Il sito può raccogliere i dati necessari a gestire richieste, ordini, pagamenti e consegne."],
        ["Finalità", "I dati vengono utilizzati per fornire i servizi richiesti, adempiere agli obblighi di legge e migliorare l'esperienza."],
        ["Diritti", "È possibile richiedere accesso, rettifica o cancellazione scrivendo a info@officinaditerra.com."],
      ],
    },
    en: {
      eyebrow: "Personal data",
      title: "Privacy policy",
      intro: "A concise overview of how personal data is processed through the website.",
      sections: [
        ["Data collected", "The website may collect the data required to manage enquiries, orders, payments and deliveries."],
        ["Purposes", "Data is used to provide requested services, comply with legal obligations and improve the experience."],
        ["Rights", "You may request access, correction or deletion by writing to info@officinaditerra.com."],
      ],
    },
  },
  "cookie-policy": {
    it: {
      eyebrow: "Preferenze",
      title: "Cookie policy",
      intro: "Il sito utilizza cookie tecnici e, previo consenso, eventuali strumenti di misurazione.",
      sections: [
        ["Cookie tecnici", "Sono necessari al funzionamento del carrello, della lingua e delle funzionalità essenziali."],
        ["Cookie analitici", "Possono essere utilizzati in forma aggregata per comprendere l'utilizzo del sito."],
        ["Gestione", "Le preferenze possono essere modificate attraverso il browser o l'eventuale pannello di consenso."],
      ],
    },
    en: {
      eyebrow: "Preferences",
      title: "Cookie policy",
      intro: "The website uses technical cookies and, subject to consent, optional measurement tools.",
      sections: [
        ["Technical cookies", "These are required for the cart, language selection and essential functionality."],
        ["Analytics cookies", "They may be used in aggregate form to understand how the website is used."],
        ["Management", "Preferences can be changed through the browser or the consent panel, where available."],
      ],
    },
  },
} as const;

export function generateStaticParams() {
  return Object.keys(pages).map((legal) => ({ legal }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ legal: string }>;
}): Promise<Metadata> {
  const locale = await getLocale();
  const page = pages[(await params).legal as keyof typeof pages];
  return { title: page?.[locale].title ?? "Officina di Terra" };
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ legal: string }>;
}) {
  const locale = await getLocale();
  const page = pages[(await params).legal as keyof typeof pages]?.[locale];
  if (!page) notFound();

  return (
    <section className="site-container max-w-4xl py-20 lg:py-28">
      <p className="eyebrow text-[#8a672f]">{page.eyebrow}</p>
      <h1 className="mt-5 font-serif text-6xl leading-[0.95] md:text-8xl">{page.title}</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60">{page.intro}</p>
      <div className="mt-16 border-t border-black/10">
        {page.sections.map(([title, copy]) => (
          <article className="grid gap-4 border-b border-black/10 py-9 md:grid-cols-[220px_1fr]" key={title}>
            <h2 className="font-serif text-2xl">{title}</h2>
            <p className="leading-7 text-black/60">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
