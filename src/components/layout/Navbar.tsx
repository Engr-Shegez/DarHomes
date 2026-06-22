"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";

const navItems = [
  { label: "Buy", href: "/buy" },
  { label: "Rent", href: "/rent" },
  { label: "Sell", href: "/sell" },
  { label: "Get Land", href: "/land" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex flex-col leading-none"
          onClick={closeMenu}
        >
          <span className="font-display text-2xl font-bold tracking-tight">
            Darhomes
          </span>
          <span className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-olive">
            Realty
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted transition hover:text-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button href="/contact" className="min-h-11 px-5">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span
            className={[
              "relative h-0.5 w-5 bg-charcoal transition",
              "before:absolute before:left-0 before:h-0.5 before:w-5 before:bg-charcoal before:transition before:content-['']",
              "after:absolute after:left-0 after:h-0.5 after:w-5 after:bg-charcoal after:transition after:content-['']",
              isMenuOpen
                ? "bg-transparent before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45"
                : "before:-translate-y-2 after:translate-y-2",
            ].join(" ")}
          />
        </button>
      </nav>

      <div
        className={[
          "overflow-hidden border-t border-line bg-background transition-all duration-300 md:hidden",
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-charcoal transition hover:bg-surface"
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-3">
            <Button href="/contact" className="w-full" onClick={closeMenu}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
