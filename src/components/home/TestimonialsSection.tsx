const testimonials = [
  {
    quote:
      "Darhomes made the land inspection and decision process feel organized. I knew what to ask, what to check, and how to move forward.",
    name: "T. Adewale",
    role: "Land buyer",
  },
  {
    quote:
      "The short stay was exactly as described. Clean, calm, easy check-in, and close to everything I needed for the weekend.",
    name: "M. Okafor",
    role: "Short-stay guest",
  },
  {
    quote:
      "What stood out was the communication. The project steps were explained clearly before we committed to the build process.",
    name: "R. Hassan",
    role: "Build client",
  },
];

const trustSignals = [
  "Verified property guidance",
  "Inspection-first approach",
  "Clear documentation support",
  "Responsive client communication",
];

export function TestimonialsSection() {
  return (
    <section className="bg-surface px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-olive sm:text-sm">
              Client Confidence
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl md:text-6xl">
              Designed for decisions that matter.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
              Real estate decisions carry weight. Darhomes keeps the experience
              clear, responsive, and grounded in practical guidance.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="rounded-full border border-line bg-background px-4 py-3 text-sm font-bold text-charcoal"
              >
                {signal}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.5rem] border border-line bg-background p-6"
            >
              <p className="text-5xl leading-none text-clay">“</p>

              <blockquote className="mt-3 text-sm leading-7 text-muted">
                {testimonial.quote}
              </blockquote>

              <div className="mt-8 border-t border-line pt-5">
                <p className="font-bold text-charcoal">{testimonial.name}</p>
                <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
