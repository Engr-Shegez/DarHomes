import { Button } from "../ui/Button";
import Image from "next/image";

const journeys = [
  {
    label: "Buy",
    title: "Find a place with room for your next chapter.",
    href: "/buy",
  },
  {
    label: "Build",
    title: "Start a custom home project with guided execution.",
    href: "/build",
  },
  {
    label: "Stay",
    title: "Book curated short-term stays designed for comfort.",
    href: "/rent",
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 md:py-14 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-olive sm:text-sm">
            Land. Build. Stay.
          </p>

          <h1 className="mt-5 font-display text-5xl font-semibold leading-[0.95] text-charcoal sm:text-6xl md:text-7xl lg:text-8xl">
            We do not just find homes. We create them.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Darhomes Realty helps you buy, sell, secure prime land, build custom
            homes, and book curated stays with confidence.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/land">Explore Properties</Button>
            <Button href="/contact" variant="outline">
              Book Consultation
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {journeys.map((journey) => (
              <a
                key={journey.label}
                href={journey.href}
                className="group rounded-[1.4rem] border border-line bg-surface p-4 transition hover:-translate-y-1 hover:border-charcoal"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-clay">
                  {journey.label}
                </span>
                <p className="mt-3 text-sm font-semibold leading-6 text-charcoal">
                  {journey.title}
                </p>
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-charcoal sm:aspect-[5/6] lg:min-h-[620px]">
            <Image
              src="/land.jpg"
              alt="Modern Darhomes Realty property exterior"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-[1.4rem] border border-white/20 bg-surface/95 p-4 shadow-2xl shadow-charcoal/20 backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:w-80">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-olive">
              Start Here
            </p>

            <div className="mt-4 grid grid-cols-3 gap-2">
              {["Buy", "Rent", "Land"].map((item) => (
                <button
                  key={item}
                  className="rounded-full border border-line px-3 py-2 text-xs font-bold text-charcoal transition hover:border-charcoal"
                  type="button"
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-line bg-background px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-muted">
                Location
              </p>
              <p className="mt-1 text-sm font-semibold text-charcoal">
                Lagos, Abuja, Ibadan...
              </p>
            </div>

            <Button href="/contact" className="mt-4 w-full">
              Talk to Darhomes
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
