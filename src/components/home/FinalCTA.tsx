import { Button } from "../ui/Button";

export function FinalCTA() {
  return (
    <section className="bg-surface px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
      <div className="mx-auto overflow-hidden rounded-[2rem] bg-charcoal px-6 py-12 text-surface sm:px-8 md:px-12 md:py-16 lg:max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-gold sm:text-sm">
              Start With Darhomes
            </p>

            <h2 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              Build your legacy or book your next escape with Darhomes.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-surface/70 sm:text-lg">
              Tell us what you are trying to do. We will help you find the right
              path across land, homes, construction, sales, and stays.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href="/contact" variant="light" className="w-full sm:w-fit">
              Book Consultation
            </Button>
            <Button
              href="/land"
              variant="outline"
              className="w-full border-white/20 text-surface hover:border-surface hover:bg-white/10 sm:w-fit"
            >
              View Land Options
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
