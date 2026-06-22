const steps = [
  {
    number: "01",
    title: "Understand the goal",
    description:
      "We begin with what you are trying to achieve: buying, selling, securing land, building, or booking a short stay.",
  },
  {
    number: "02",
    title: "Match the right path",
    description:
      "You get curated options, location insight, documentation guidance, or project direction based on your needs.",
  },
  {
    number: "03",
    title: "Move with confidence",
    description:
      "From inspections and negotiations to build planning and stay check-ins, Darhomes keeps the process clear.",
  },
];

const stats = [
  { value: "3", label: "Real estate journeys" },
  { value: "1", label: "Integrated partner" },
  { value: "24h", label: "Response window" },
];

export function ProcessSection() {
  return (
    <section className="bg-charcoal px-4 py-16 text-surface sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold sm:text-sm">
            Why Darhomes
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            Real estate feels better when the path is clear.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-surface/70 sm:text-lg">
            Darhomes brings land, construction, sales, rentals, and stays into a
            single experience, so every decision feels guided rather than
            guessed.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:max-w-xl">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.3rem] border border-white/10 bg-white/5 p-4"
              >
                <p className="font-display text-4xl font-semibold text-gold">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-surface/55">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex flex-col gap-5 sm:flex-row">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-extrabold text-charcoal">
                  {step.number}
                </span>

                <div>
                  <h3 className="font-display text-3xl font-semibold leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-surface/65">
                    {step.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
