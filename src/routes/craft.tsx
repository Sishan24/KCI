import { createFileRoute, Link } from "@tanstack/react-router";
import craft from "@/assets/craft.jpg";

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "Our Craft | Khan Carpets International" },
      {
        name: "description",
        content:
          "From wool sorting and small-lot dyeing to hand-knotting, washing and shearing — how KCI makes an heirloom carpet in Bhadohi, India.",
      },
      { property: "og:title", content: "Our Craft | Khan Carpets International" },
      {
        property: "og:description",
        content:
          "Inside the KCI workshop: seven stages, fair wages and a named weaver certificate with every carpet.",
      },
    ],
  }),
  component: Craft,
});

const steps = [
  ["01", "Wool & silk sorting", "Highland wool and mulberry silk are graded by staple length, then hand-spun on the charkha."],
  ["02", "Small-lot dyeing", "Colour is matched against your Pantone in 20kg lots, sun-dried on the roof, then re-checked in daylight."],
  ["03", "Cartoon & CAD", "Our design desk redraws the pattern knot-by-knot; you approve a render before a single knot is tied."],
  ["04", "Hand-knotting", "Two to four weavers on one loom, 8,000–14,000 knots a day, for ten weeks to two years."],
  ["05", "Washing", "Soft water, natural soap and a slow lustre wash that opens the pile and deepens the dye."],
  ["06", "Shearing & finishing", "Hand-shorn in passes until the pattern sits in relief. Edges are bound, fringes hand-knotted."],
  ["07", "Export", "Rolled, wrapped, documented and consolidated for sea or air — DDP available on request."],
];

function Craft() {
  return (
    <>
      <section className="relative pt-36 pb-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-10">
          <div>
            <p className="text-accent text-[11px] tracking-luxe uppercase">
              Our Craft
            </p>
            <h1 className="mt-5 font-display text-5xl leading-tight lg:text-7xl">
              Slow work, in a fast world
            </h1>
            <p className="text-muted-foreground mt-6 text-sm leading-relaxed">
              Khan Carpets International began in 1974 with four looms in
              Bhadohi. Today we work with over two hundred weaving families
              across Uttar Pradesh and Kashmir — the same families, often the
              grandchildren of the first weavers who tied knots for us.
            </p>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              We refuse child labour, pay by the knot rather than the hour, and
              keep the workshop open to any client who wants to walk it.
            </p>
          </div>
          <img
            src={craft}
            alt="Artisan hands knotting wool on a traditional Indian loom"
            loading="lazy"
            width={1200}
            height={1408}
            className="shadow-luxe aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <h2 className="font-display text-4xl lg:text-5xl">
            Seven stages, one carpet
          </h2>
          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {steps.map(([n, title, body]) => (
              <div
                key={n}
                className="grid gap-4 py-8 sm:grid-cols-[80px_1fr] sm:gap-10"
              >
                <span className="text-accent font-display text-3xl">{n}</span>
                <div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed opacity-80">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="texture-weave py-24 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-display text-4xl lg:text-5xl">
            Come see the loom
          </h2>
          <p className="text-muted-foreground mt-5 text-sm leading-relaxed">
            Buyers and designers are welcome in Bhadohi year-round. We arrange
            pickup from Varanasi airport, two hours away.
          </p>
          <Link
            to="/contact"
            className="bg-primary text-primary-foreground mt-10 inline-flex px-10 py-4 text-xs tracking-luxe uppercase transition-transform hover:-translate-y-0.5"
          >
            Plan a visit
          </Link>
        </div>
      </section>
    </>
  );
}
