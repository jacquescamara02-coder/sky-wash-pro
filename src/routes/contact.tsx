import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact WASH Services | Ouagadougou" },
    { name: "description", content: "Contactez WASH Services à Pissy, Ouagadougou, pour un lavage, entretien, accessoire, achat ou location." },
    { property: "og:title", content: "Contact WASH Services | Ouagadougou" },
    { property: "og:description", content: "Demandez votre service automobile à WASH Services." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ContactPage,
});

const requestSchema = z.object({
  name: z.string().trim().min(2, "Indiquez votre nom.").max(80),
  phone: z.string().trim().regex(/^[+\d\s-]{8,20}$/, "Indiquez un numéro valide."),
  service: z.string().min(1, "Choisissez un service."),
  vehicle: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "Ajoutez quelques détails (10 caractères minimum).").max(600),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form.entries());
    const parsed = requestSchema.safeParse(data);
    if (!parsed.success) {
      setErrors(Object.fromEntries(parsed.error.issues.map((issue) => [String(issue.path[0]), issue.message])));
      return;
    }
    setErrors({});
    const d = parsed.data;
    const text = `Bonjour WASH Services,\n\nNom : ${d.name}\nTéléphone : ${d.phone}\nService : ${d.service}\nVéhicule : ${d.vehicle || "Non précisé"}\n\nDemande : ${d.message}`;
    window.open(`https://wa.me/22668781305?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
  }
  return <main>
    <PageIntro eyebrow="Parlons de votre besoin" title="Une demande simple. Une réponse rapide." text="Décrivez votre véhicule et le service recherché. Votre demande sera préparée puis envoyée directement à notre équipe sur WhatsApp." />
    <section className="section-space"><div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <aside>
        <h2 className="font-display text-2xl font-bold">Coordonnées</h2><p className="mt-3 leading-7 text-muted-foreground">Nous sommes disponibles pour vous conseiller et organiser votre prise en charge.</p>
        <div className="mt-8 grid gap-4">
          <a className="contact-line" href="tel:+22668781305"><span className="service-icon"><Phone /></span><span><strong>Téléphone</strong><small>+226 68 78 13 05</small></span></a>
          <a className="contact-line" href="mailto:samaassami32@gmail.com"><span className="service-icon"><Mail /></span><span><strong>E-mail</strong><small>samaassami32@gmail.com</small></span></a>
          <div className="contact-line"><span className="service-icon"><MapPin /></span><span><strong>Adresse</strong><small>Quartier Pissy, Ouagadougou</small></span></div>
        </div>
        <Button asChild variant="outline" size="lg" className="mt-7 w-full"><a href="https://wa.me/22668781305" target="_blank" rel="noreferrer"><MessageCircle /> Discuter sur WhatsApp</a></Button>
      </aside>
      <form onSubmit={submit} noValidate className="request-form">
        <div><p className="eyebrow">Demande de service</p><h2 className="mt-2 font-display text-2xl font-bold">Comment pouvons-nous vous aider ?</h2></div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Nom complet" name="name" placeholder="Votre nom" error={errors.name} />
          <Field label="Téléphone" name="phone" type="tel" placeholder="Ex. 70 00 00 00" error={errors.phone} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="form-label">Service souhaité<select name="service" defaultValue="" className="form-control"><option value="" disabled>Sélectionnez</option><option>Lavage de véhicule</option><option>Entretien de véhicule</option><option>Achat d’accessoires</option><option>Achat de véhicule</option><option>Location de véhicule</option></select>{errors.service ? <span className="form-error">{errors.service}</span> : null}</label>
          <Field label="Votre véhicule" name="vehicle" placeholder="Marque et modèle (facultatif)" error={errors.vehicle} />
        </div>
        <label className="form-label">Détails de la demande<textarea name="message" rows={5} maxLength={600} className="form-control resize-none" placeholder="Décrivez le service souhaité, vos dates ou toute information utile..." />{errors.message ? <span className="form-error">{errors.message}</span> : null}</label>
        <Button type="submit" size="lg" className="w-full sm:w-auto"><Send /> Envoyer via WhatsApp</Button>
        <p className="text-xs leading-5 text-muted-foreground">En envoyant, WhatsApp s’ouvrira avec votre demande prête à être transmise.</p>
      </form>
    </div></section>
    <section className="pb-20"><div className="site-container"><div className="overflow-hidden rounded-lg border border-border"><iframe title="Localisation de WASH Services à Pissy, Ouagadougou" src="https://www.google.com/maps?q=Pissy%2C%20Ouagadougou%2C%20Burkina%20Faso&output=embed" width="100%" height="420" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="block" /></div></div></section>
  </main>;
}

function Field({ label, name, type = "text", placeholder, error }: { label: string; name: string; type?: string; placeholder: string; error?: string }) {
  return <label className="form-label">{label}<input className="form-control" name={name} type={type} placeholder={placeholder} maxLength={80} />{error ? <span className="form-error">{error}</span> : null}</label>;
}