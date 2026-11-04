import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Ruler, Sparkles } from "lucide-react";
import hero from "@/assets/hero.jpg";
import craft from "@/assets/craft.jpg";
import { rugs } from "@/lib/rugs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Khan Carpets International (KCI) | Hand-Knotted Indian Rugs",
      },
      {
        name: "description",
        content:
          "KCI hand-knots heirloom wool and silk carpets in Bhadohi, India and exports to 30+ countries. Custom sizes, designs and colourways for homes, hotels and designers.",
      },
      {
        property: "og:title",
        content: "Khan Carpets International (KCI) | Hand-Knotted Indian Rugs",
      },
      {
        property: "og:description",
        content:
          "Heirloom hand-knotted carpets from Bhadohi, India — exported worldwide. Custom design, wool, silk and botanical collections.",
      },
    ],
  }),
  component: Home,
});

const marquee = [
  "Bhadohi",
  "New York",
  "London",
  "Dubai",
  "Milan",
  "Sydney",
  "Tokyo",
  "Paris",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <img
          src={hero}
          alt="Hand-knotted emerald and gold Indian carpet unrolled in a showroom"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="from-ink/95 via-ink/55 absolute inset-0 bg-gradient-to-t to-transparent" />
        <div className="text-ink-foreground relative mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
          <p className="animate-rise text-accent text-[11px] tracking-luxe uppercase">
            Bhadohi, India · Since 1974
          </p>
          <h1 className="animate-rise mt-6 max-w-4xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-8xl">
            Every knot carries
            <span className="text-accent italic"> a country </span>
            across the world.
          </h1>
          <p className="animate-rise mt-8 max-w-xl text-base leading-relaxed opacity-80">
            Khan Carpets International hand-knots wool and silk rugs in the
            looms of Uttar Pradesh, and ships them to homes, hotels and design
            houses in more than thirty countries.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-4">
            <Link
              to="/collections"
              className="bg-accent text-accent-foreground group inline-flex items-center gap-3 px-8 py-4 text-xs tracking-luxe uppercase transition-transform hover:-translate-y-0.5"
            >
              View collections
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="border-ink-foreground/40 hover:bg-ink-foreground/10 inline-flex items-center border px-8 py-4 text-xs tracking-luxe uppercase transition-colors"
            >
              Request a custom rug
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="bg-primary text-primary-foreground overflow-hidden py-5">
        <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((city, i) => (
            <span
              key={`${city}-${i}`}
              className="flex items-center gap-12 text-[11px] tracking-luxe uppercase opacity-90"
            >
              {city}
              <span className="bg-accent inline-block h-1 w-1 rounded-full" />
            </span>
          ))}
        </div>
      </section>

      {/* Stats / pillars */}
      <section className="texture-weave">
        <div className="mx-auto grid max-w-7xl gap-px px-6 py-24 md:grid-cols-3 lg:px-10">
          {[
            {
              icon: Sparkles,
              k: "50 Years",
              v: "Three generations of weaving families on our looms, from Bhadohi to Mirzapur.",
            },
            {
              icon: Globe2,
              k: "30+ Countries",
              v: "Export-ready documentation, container consolidation and door delivery worldwide.",
            },
            {
              icon: Ruler,
              k: "Any Size",
              v: "Bespoke dimensions, colourways and CAD design — from a 3x5 to a 40-foot ballroom.",
            },
          ].map((s) => (
            <div key={s.k} className="px-2 py-6 md:px-8">
              <s.icon className="text-accent h-6 w-6" />
              <h3 className="mt-5 font-display text-4xl">{s.k}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured pieces */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-accent text-[11px] tracking-luxe uppercase">
                The Atelier Selection
              </p>
              <h2 className="mt-4 font-display text-4xl lg:text-5xl">
                Four pieces off the loom
              </h2>
            </div>
            <Link
              to="/collections"
              className="border-foreground/20 hover:border-accent hover:text-accent border-b pb-1 text-xs tracking-luxe uppercase"
            >
              All collections
            </Link>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {rugs.map((r) => (
              <Link
                key={r.id}
                to="/collections"
                className="group block"
                aria-label={r.name}
              >
                <div className="bg-muted overflow-hidden">
                  <img
                    src={r.image}
                    alt={`${r.name} hand-knotted rug`}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 font-display text-2xl">{r.name}</h3>
                <p className="text-muted-foreground mt-1 text-[11px] tracking-luxe uppercase">
                  {r.collection} · {r.origin}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Craft split */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2 lg:px-10">
          <img
            src={craft}
            alt="Artisan hand-knotting a wool carpet on a traditional loom"
            loading="lazy"
            width={1200}
            height={1408}
            className="shadow-luxe aspect-[4/5] w-full object-cover"
          />
          <div>
            <p className="text-accent text-[11px] tracking-luxe uppercase">
              Our Craft
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight lg:text-5xl">
              A rug is roughly one million decisions, taken by hand.
            </h2>
            <p className="mt-6 text-sm leading-relaxed opacity-80">
              We dye in small lots, wash in river-soft water and finish by
              hand-shearing. No child labour, fair wages, and a named weaver
              certificate travels with every carpet we ship.
            </p>
            <div className="rule-gold my-10" />
            <dl className="grid grid-cols-2 gap-8 text-sm">
              {[
                ["Knot counts", "100 – 400 KPSI"],
                ["Materials", "Wool, silk, bamboo silk, jute"],
                ["Lead time", "10 – 26 weeks"],
                ["MOQ", "One piece for bespoke"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-accent text-[10px] tracking-luxe uppercase">
                    {k}
                  </dt>
                  <dd className="mt-2 opacity-85">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/craft"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground mt-12 inline-flex border px-8 py-4 text-xs tracking-luxe uppercase transition-colors"
            >
              Inside the workshop
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="texture-weave">
        <div className="mx-auto max-w-3xl px-6 py-28 text-center">
          <h2 className="font-display text-4xl leading-tight lg:text-6xl">
            Tell us the room. We will weave the floor.
          </h2>
          <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-sm leading-relaxed">
            Share a size, a palette or a photograph of your space — our design
            desk replies with a CAD render and a quotation within 48 hours.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground mt-10 inline-flex px-10 py-4 text-xs tracking-luxe uppercase transition-transform hover:-translate-y-0.5"
          >
            Start an enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
