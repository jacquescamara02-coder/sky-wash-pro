import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock3, HeartHandshake, ShieldCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionHeading } from "@/components/site-shell";

export const Route = createFileRoute("/a-propos")({
  head: () => ({ meta: [
    { title: "À propos et FAQ | WASH Services" },
    { name: "description", content: "Découvrez WASH Services et les réponses aux questions fréquentes sur nos services automobiles." },
    { property: "og:title", content: "À propos et FAQ | WASH Services" },
    { property: "og:description", content: "Une équipe attentive au service de votre véhicule à Ouagadougou." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: AboutPage,
});

const faq = [
  ["Quels types de véhicules prenez-vous en charge ?", "Nous accueillons les voitures particulières, SUV et véhicules utilitaires légers. Pour un besoin spécifique, contactez-nous avant votre visite."],
  ["Faut-il prendre rendez-vous ?", "Il est recommandé de nous contacter afin de confirmer la disponibilité et de réduire votre temps d’attente."],
  ["Proposez-vous la location pour plusieurs jours ?", "Oui. Précisez vos dates, le type de véhicule souhaité et votre besoin dans le formulaire ou sur WhatsApp."],
  ["Comment obtenir un tarif ?", "Le tarif dépend du véhicule et du service demandé. Envoyez-nous les détails de votre besoin pour recevoir une réponse adaptée."],
  ["Où êtes-vous situés ?", "Nous sommes à Ouagadougou, dans le quartier Pissy. La carte et les coordonnées sont disponibles sur la page Contact."],
];

function AboutPage() {
  return <main>
    <PageIntro eyebrow="Qui sommes-nous ?" title="Votre véhicule mérite une attention complète." text="WASH Services réunit les services essentiels de l’automobile dans un seul espace, avec une priorité : vous simplifier la vie." />
    <section className="section-space"><div className="site-container grid gap-12 lg:grid-cols-[1fr_1.1fr]">
      <SectionHeading eyebrow="Notre engagement" title="Un service clair, humain et exigeant." text="Nous vous écoutons, nous identifions la solution utile et nous prenons soin de chaque détail. Notre approche repose sur la confiance, la disponibilité et le travail bien fait." />
      <div className="grid gap-4 sm:grid-cols-2">
        {[{ icon: ShieldCheck, t: "Fiabilité", d: "Des prestations réalisées avec sérieux." }, { icon: HeartHandshake, t: "Écoute", d: "Une réponse adaptée à votre besoin." }, { icon: Clock3, t: "Réactivité", d: "Un contact simple et rapide." }, { icon: CheckCircle2, t: "Soin", d: "Une attention portée aux finitions." }].map(({icon: Icon,t,d}) => <div className="value-block" key={t}><Icon className="size-6 text-primary"/><h3 className="mt-4 font-display text-xl font-bold">{t}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{d}</p></div>)}
      </div>
    </div></section>
    <section className="bg-secondary section-space"><div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionHeading eyebrow="Questions fréquentes" title="Les réponses utiles avant de nous contacter." text="Vous ne trouvez pas votre réponse ? Écrivez-nous directement, nous vous renseignerons." />
      <Accordion type="single" collapsible className="rounded-lg border border-border bg-background px-6">
        {faq.map(([q,a],i) => <AccordionItem key={q} value={`item-${i}`}><AccordionTrigger className="py-5 text-left text-base hover:no-underline">{q}</AccordionTrigger><AccordionContent className="pb-5 leading-7 text-muted-foreground">{a}</AccordionContent></AccordionItem>)}
      </Accordion>
    </div></section>
    <section className="py-16"><div className="site-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"><div><p className="eyebrow">À votre service</p><h2 className="mt-2 font-display text-3xl font-extrabold">Confiez-nous votre prochain besoin.</h2></div><Button asChild size="lg"><Link to="/contact">Nous contacter</Link></Button></div></section>
  </main>;
}