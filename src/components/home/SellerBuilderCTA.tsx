import { Button } from "../ui/Button";

const actions = [
  {
    label: "For Sellers",
    title: "List with a team that understands value.",
    description:
      "Share your property details and let Darhomes help position it for serious buyers with clarity and care.",
    href: "/sell",
    cta: "Start selling",
  },
  {
    label: "For Builders",
    title: "Build with structure from day one.",
    description:
      "From planning to project coordination, Darhomes helps turn your home idea into a managed build journey.",
    href: "/build",
    cta: "Plan my build",
  },
];

export function SellerBuilderCTA() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-surface md:grid-cols-2">
        {actions.map((action, index) => (
          <article
            key={action.label}
            className={[
              "p-6 sm:p-8 lg:p-10",
              index === 0
                ? "border-b border-line md:border-b-0 md:border-r"
                : "",
            ].join(" ")}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-clay">
              {action.label}
            </p>

            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl">
              {action.title}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              {action.description}
            </p>

            <Button href={action.href} className="mt-8 w-full sm:w-fit">
              {action.cta}
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}
