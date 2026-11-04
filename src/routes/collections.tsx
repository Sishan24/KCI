import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { collections, rugs } from "@/lib/rugs";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Rug Collections | Khan Carpets International" },
      {
        name: "description",
        content:
          "Browse KCI collections — Heritage medallions, Botanical tufts, Contemporary minimals and pure Kashmiri silk. Filter by style and enquire on any piece.",
      },
      {
        property: "og:title",
        content: "Rug Collections | Khan Carpets International",
      },
      {
        property: "og:description",
        content:
          "Heritage, Botanical, Contemporary and Silk hand-knotted rugs, made to order in India.",
      },
    ],
  }),
  component: Collections,
});

function Collections() {
  const [active, setActive] = useState<string>("All");

  const shown = useMemo(
    () => (active === "All" ? rugs : rugs.filter((r) => r.collection === active)),
    [active],
  );

  return (
    <>
      <section className="bg-primary text-primary-foreground pt-36 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="text-accent text-[11px] tracking-luxe uppercase">
            The Catalogue
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-tight lg:text-7xl">
            Collections woven for every kind of room
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed opacity-80">
            Every piece below can be re-scaled, re-coloured and re-proportioned
            to your drawing. Filter to find a starting point.
          </p>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-wrap gap-3">
            {collections.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                className={`border px-6 py-2.5 text-[11px] tracking-luxe uppercase transition-colors ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-14 md:grid-cols-2">
            {shown.map((r) => (
              <article key={r.id} className="group">
                <div className="bg-muted overflow-hidden">
                  <img
                    src={r.image}
                    alt={`${r.name} — ${r.collection} hand-knotted rug`}
                    loading="lazy"
                    width={900}
                    height={1100}
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h2 className="font-display text-3xl">{r.name}</h2>
                  <span className="text-muted-foreground text-[11px] tracking-luxe uppercase">
                    {r.id}
                  </span>
                </div>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {r.blurb}
                </p>
                <dl className="border-border mt-6 grid grid-cols-2 gap-y-4 border-t pt-6 text-sm sm:grid-cols-4">
                  {[
                    ["Origin", r.origin],
                    ["Material", r.material],
                    ["Knot", r.knots],
                    ["Size", r.size],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-accent text-[10px] tracking-luxe uppercase">
                        {k}
                      </dt>
                      <dd className="mt-1.5 leading-snug">{v}</dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
