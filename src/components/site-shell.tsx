import { Link } from "@tanstack/react-router";
import { MapPin, Menu, MessageCircle, Phone, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigation = [
  { to: "/" as const, label: "Accueil" },
  { to: "/services" as const, label: "Services" },
  { to: "/a-propos" as const, label: "À propos & FAQ" },
  { to: "/contact" as const, label: "Contact" },
];

export function Brand() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="WASH Services, accueil">
      <span className="grid size-11 place-items-center rounded-lg bg-primary text-lg font-black text-primary-foreground shadow-brand transition-transform group-hover:-rotate-3">
        W
      </span>
      <span>
        <span className="block font-display text-lg font-extrabold leading-none text-foreground">WASH</span>
        <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-primary">Services</span>
      </span>
    </Link>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  return navigation.map((item) => {
    const link = (
      <Link
        key={item.to}
        to={item.to}
        activeOptions={{ exact: item.to === "/" }}
        className={mobile ? "block border-b border-border py-4 text-lg font-semibold" : "text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"}
        activeProps={{ className: mobile ? "block border-b border-border py-4 text-lg font-semibold text-primary" : "text-sm font-semibold text-primary" }}
      >
        {item.label}
      </Link>
    );
    return mobile ? <SheetClose asChild key={item.to}>{link}</SheetClose> : link;
  });
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="site-container flex h-20 items-center justify-between">
        <Brand />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          <NavLinks />
        </nav>
        <div className="hidden md:block">
          <Button asChild size="lg">
            <Link to="/contact"><MessageCircle /> Demander un service</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Ouvrir le menu"><Menu /></Button>
          </SheetTrigger>
          <SheetContent className="w-[88%]">
            <SheetHeader className="text-left">
              <SheetTitle><Brand /></SheetTitle>
              <SheetDescription>Tout pour votre véhicule, à Ouagadougou.</SheetDescription>
            </SheetHeader>
            <nav className="mt-8" aria-label="Navigation mobile"><NavLinks mobile /></nav>
            <Button asChild className="mt-8 w-full" size="lg"><a href="tel:+22668781305"><Phone /> 68 78 13 05</a></Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 font-display text-2xl font-extrabold"><Sparkles className="text-sky" /> WASH Services</div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ink-muted">Lavage, entretien, accessoires, vente et location : une prise en charge complète de votre véhicule.</p>
        </div>
        <div>
          <p className="footer-title">Navigation</p>
          <div className="mt-4 grid gap-3 text-sm text-ink-muted"><NavLinks /></div>
        </div>
        <div>
          <p className="footer-title">Nous trouver</p>
          <div className="mt-4 space-y-3 text-sm text-ink-muted">
            <p className="flex gap-2"><MapPin className="mt-0.5 size-4 shrink-0 text-sky" /> Quartier Pissy, Ouagadougou</p>
            <a className="flex gap-2 hover:text-sky" href="tel:+22668781305"><Phone className="size-4 text-sky" /> +226 68 78 13 05</a>
          </div>
        </div>
      </div>
      <div className="border-t border-ink-border py-5 text-center text-xs text-ink-muted">© 2026 WASH Services. Tous droits réservés.</div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/22668781305?text=Bonjour%20WASH%20Services%2C%20je%20souhaite%20obtenir%20des%20informations."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-float transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-whatsapp/30 md:bottom-7 md:right-7"
      aria-label="Contacter WASH Services sur WhatsApp"
      title="Écrire sur WhatsApp"
    >
      <MessageCircle className="size-7" />
    </a>
  );
}

export function SectionHeading({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-foreground sm:text-4xl">{title}</h2>
      {text ? <p className="mt-4 leading-7 text-muted-foreground">{text}</p> : null}
    </div>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="bg-sky-soft py-16 sm:py-20">
      <div className="site-container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-[1.08] text-foreground sm:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{text}</p>
      </div>
    </section>
  );
}