import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = { title: "Contatti" };

export default function ContattiPage() {
  return (
    <section className="site-container grid gap-16 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
      <div>
        <p className="eyebrow text-[#8a672f]">Parliamo</p>
        <h1 className="mt-5 font-serif text-6xl leading-[0.9] md:text-8xl">Vieni a trovarci in Sicilia.</h1>
        <div className="mt-12 grid gap-7 text-sm">
          <p className="flex gap-4"><MapPin className="text-[#8a672f]" size={20} />Via Vesuvio, 15<br />92010 Realmonte (Agrigento)</p>
          <a className="flex gap-4" href="tel:+393928786281"><Phone className="text-[#8a672f]" size={20} />+39 392 878 6281</a>
          <a className="flex gap-4" href="mailto:info@officinaditerra.com"><Mail className="text-[#8a672f]" size={20} />info@officinaditerra.com</a>
        </div>
      </div>
      <form className="bg-[#e9e2d4] p-7 md:p-12">
        <div className="grid gap-7 sm:grid-cols-2">
          <Field label="Nome e cognome" name="name" />
          <Field label="Email" name="email" type="email" />
          <Field label="Telefono" name="phone" />
          <Field label="Oggetto" name="subject" />
        </div>
        <label className="mt-7 block text-xs font-semibold uppercase tracking-[0.18em]">
          Messaggio
          <textarea className="mt-3 min-h-40 w-full border-b border-black/25 bg-transparent py-3 text-base font-normal tracking-normal outline-none focus:border-[#173b2b]" name="message" />
        </label>
        <button className="button-primary mt-8" type="submit">Invia richiesta</button>
        <p className="mt-4 text-xs text-black/45">Il form è pronto per essere collegato a un servizio email.</p>
      </form>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-[0.18em]">
      {label}
      <input className="mt-3 w-full border-b border-black/25 bg-transparent py-3 text-base font-normal tracking-normal outline-none focus:border-[#173b2b]" name={name} type={type} />
    </label>
  );
}
