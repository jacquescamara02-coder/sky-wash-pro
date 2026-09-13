import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CarFront, CheckCircle2, KeyRound, MapPin, ShoppingBag, Sparkles, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site-shell";
import heroImage from "@/assets/wash-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "WASH Services | Automobile à Ouagadougou" },
    { name: "description", content: "Lavage, entretien, accessoires, vente et location de véhicules à Pissy, Ouagadougou." },
    { property: "og:title", content: "WASH Services | Automobile à Ouagadougou" },
    { property: "og:description", content: "Nous prenons soin de votre véhicule de A à Z." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-ink text-ink-foreground">
        <img src={heroImage} alt="Véhicule pris en charge par WASH Services" width={1920} height={1200} fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover object-center" />
        <div className="hero-shade absolute inset-0 -z-10" />
        <div className="site-container flex min-h-[calc(100svh-5rem)] items-end pb-16 pt-28 sm:items-center sm:py-24">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-ink/50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-sky backdrop-blur"><MapPin className="size-3.5" /> Pissy, Ouagadougou</p>
            <h1 className="mt-6 font-display text-5xl font-black leading-[1.02] sm:text-7xl">Votre véhicule.<br/><span className="text-sky">Notre priorité.</span></h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-muted sm:text-xl">Chez WASH Services, nous prenons soin de votre véhicule de A à Z — avec exigence, attention et simplicité.</p>
            <div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Demander un service <ArrowRight /></Link></Button><Button asChild size="lg" variant="heroOutline"><Link to="/services">Découvrir nos services</Link></Button></div>
          </div>
        </div>
      </section>
      <section className="section-space"><div className="site-container">
        <SectionHeading eyebrow="Une prise en charge complète" title="Un seul partenaire pour tous vos besoins automobiles." text="Du soin quotidien aux projets de mobilité, nous vous proposons des solutions pratiques et personnalisées." />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[{ icon: Sparkles, title: "Lavage", text: "Intérieur et extérieur, avec soin." },{ icon: Wrench, title: "Entretien", text: "Pour une conduite sereine et durable." },{ icon: ShoppingBag, title: "Accessoires", text: "Les équipements adaptés à vos besoins." },{ icon: KeyRound, title: "Vente & location", text: "La mobilité selon votre rythme." }].map(({icon: Icon,title,text}) => <article className="bg-background p-7 transition-colors hover:bg-secondary" key={title}><span className="service-icon"><Icon /></span><h2 className="mt-8 font-display text-xl font-bold">{title}</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}
        </div>
        <Button asChild variant="link" className="mt-6 px-0"><Link to="/services">Explorer tous les services <ArrowRight /></Link></Button>
      </div></section>
      <section className="bg-secondary section-space"><div className="site-container grid items-center gap-10 lg:grid-cols-2">
        <div><SectionHeading eyebrow="Pourquoi nous choisir ?" title="La simplicité d’un service qui s’occupe de tout." text="Vous nous expliquez votre besoin. Nous vous orientons vers la bonne solution et vous accompagnons à chaque étape." /><ul className="mt-7 grid gap-4">{["Des services réunis au même endroit", "Un accompagnement attentif", "Un contact direct et rapide", "Une adresse accessible à Pissy"].map((x)=><li key={x} className="flex items-center gap-3 font-semibold"><CheckCircle2 className="size-5 text-primary"/>{x}</li>)}</ul><Button asChild size="lg" className="mt-8"><Link to="/a-propos">Découvrir WASH Services</Link></Button></div>
        <div className="impact-panel"><CarFront className="size-12 text-sky"/><p className="mt-10 font-display text-3xl font-extrabold">Du lavage à la location, on s’occupe de tout.</p><p className="mt-4 text-ink-muted">Contactez-nous aujourd’hui et recevez une réponse adaptée à votre véhicule.</p><Button asChild variant="heroOutline" size="lg" className="mt-8"><a href="tel:+22668781305">Appeler le 68 78 13 05</a></Button></div>
      </div></section>
    </main>
  );
}
