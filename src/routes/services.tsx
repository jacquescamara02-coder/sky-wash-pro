import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CarFront, KeyRound, ShoppingBag, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/site-shell";
import maintenanceImage from "@/assets/wash-maintenance.jpg";
import fleetImage from "@/assets/wash-fleet.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Nos services automobiles | WASH Services" },
    { name: "description", content: "Lavage, entretien, accessoires, vente et location de véhicules à Ouagadougou." },
    { property: "og:title", content: "Nos services automobiles | WASH Services" },
    { property: "og:description", content: "Une prise en charge complète de votre véhicule à Ouagadougou." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ServicesPage,
});

const services = [
  { icon: Sparkles, title: "Lavage de véhicules", text: "Un nettoyage soigné de l’extérieur à l’habitacle pour retrouver un véhicule propre et valorisé.", points: ["Lavage extérieur", "Nettoyage intérieur", "Finitions soignées"] },
  { icon: Wrench, title: "Entretien de véhicules", text: "Des contrôles et interventions adaptés pour préserver les performances et la fiabilité de votre véhicule.", points: ["Contrôle général", "Entretien courant", "Conseils personnalisés"] },
  { icon: ShoppingBag, title: "Vente d’accessoires", text: "Des accessoires pratiques et esthétiques sélectionnés pour le confort, la protection et le style.", points: ["Équipements utiles", "Accessoires intérieurs", "Conseil avant achat"] },
  { icon: KeyRound, title: "Vente & location", text: "Des solutions souples pour acheter ou louer un véhicule selon votre besoin et votre budget.", points: ["Véhicules sélectionnés", "Location flexible", "Accompagnement dédié"] },
];

function ServicesPage() {
  return <main>
    <PageIntro eyebrow="Notre savoir-faire" title="Tout ce dont votre véhicule a besoin, au même endroit." text="Du simple lavage à la recherche d’un véhicule, notre équipe vous accompagne avec attention et efficacité." />
    <section className="section-space"><div className="site-container grid gap-6 md:grid-cols-2">
      {services.map(({ icon: Icon, title, text, points }, index) => <article className="service-detail" key={title}>
        <div className="flex items-start justify-between gap-4"><span className="service-icon"><Icon /></span><span className="text-sm font-bold text-primary">0{index + 1}</span></div>
        <h2 className="mt-7 font-display text-2xl font-bold">{title}</h2><p className="mt-3 leading-7 text-muted-foreground">{text}</p>
        <ul className="mt-6 grid gap-3">{points.map((point) => <li className="flex items-center gap-3 text-sm font-medium" key={point}><span className="size-1.5 rounded-full bg-primary" />{point}</li>)}</ul>
      </article>)}
    </div></section>
    <section className="bg-secondary py-16"><div className="site-container grid items-center gap-10 lg:grid-cols-2">
      <img src={maintenanceImage} alt="Technicien automobile lors d'un entretien" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full rounded-lg object-cover" />
      <div><p className="eyebrow">Un besoin précis ?</p><h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Parlons de votre véhicule.</h2><p className="mt-4 leading-7 text-muted-foreground">Indiquez-nous votre besoin. Nous vous répondrons rapidement avec une solution adaptée.</p><Button asChild size="lg" className="mt-7"><Link to="/contact">Faire une demande <ArrowRight /></Link></Button></div>
    </div></section>
    <section className="section-space"><div className="site-container grid items-center gap-10 lg:grid-cols-2"><div><p className="eyebrow">Mobilité</p><h2 className="mt-3 font-display text-3xl font-extrabold sm:text-4xl">Acheter ou louer en toute simplicité.</h2><p className="mt-4 leading-7 text-muted-foreground">Présentez-nous le type de véhicule recherché, la durée ou votre budget. Notre équipe vous orientera vers les options disponibles.</p><Button asChild variant="outline" size="lg" className="mt-7"><a href="https://wa.me/22668781305?text=Bonjour%2C%20je%20cherche%20un%20v%C3%A9hicule%20%C3%A0%20acheter%20ou%20%C3%A0%20louer." target="_blank" rel="noreferrer"><CarFront /> Voir les possibilités</a></Button></div><img src={fleetImage} alt="Sélection de véhicules disponibles" loading="lazy" width={1200} height={900} className="aspect-[4/3] w-full rounded-lg object-cover lg:order-last" /></div></section>
  </main>;
}