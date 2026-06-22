import Link from "next/link";

const footerLinks = [
  { label: "Land", href: "/land" },
  { label: "Build", href: "/build" },
  { label: "Stay", href: "/stay" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal text-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="font-display text-3xl font-semibold">Darhomes Realty</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-surface/70">
            Land, construction, and curated stays for people building their next
            chapter with confidence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-surface/50">
              Explore
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-surface/75 transition hover:text-surface"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-surface/50">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm text-surface/75">
              <p>Lagos, Nigeria</p>
              <p>hello@darhomes.com</p>
              <p>+234 000 000 0000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-surface/50">
        © {new Date().getFullYear()} Darhomes Realty. All rights reserved.
      </div>
    </footer>
  );
}
