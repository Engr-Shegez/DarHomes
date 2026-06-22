import { Button } from "../ui/Button";

const pillars = [
  {
    eyebrow: "01 / Land",
    title: "Secure your foundation in prime locations.",
    description:
      "Explore verified land opportunities with guidance on location, documentation, inspection, and investment fit.",
    href: "/land",
    cta: "View land options",
  },
  {
    eyebrow: "02 / Build",
    title: "Bring your home from concept to completion.",
    description:
      "From custom home planning to project coordination, Darhomes helps you manage the construction journey with clarity.",
    href: "/build",
    cta: "Start a build project",
  },
  {
    eyebrow: "03 / Stay",
    title: "Book short stays that feel considered.",
    description:
      "Discover curated apartments and homes for business trips, family visits, retreats, and modern city escapes.",
    href: "/rent",
    cta: "Explore stays",
  },
];

export function BusinessPillars() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-olive sm:text-sm">
            What Darhomes Does
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl md:text-6xl">
            A complete real estate partner, not just another property list.
          </h2>

          <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
            Whether you are buying land, building from scratch, or choosing a
            short stay, every Darhomes experience is designed around confidence,
            care, and long-term value.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.eyebrow}
              className="group flex min-h-[340px] flex-col justify-between rounded-[1.5rem] border border-line bg-background p-6 transition hover:-translate-y-1 hover:border-charcoal"
            >
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-clay">
                  {pillar.eyebrow}
                </p>

                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-charcoal">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8">
                <Button href={pillar.href} variant="outline" className="w-full">
                  {pillar.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
