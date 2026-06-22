import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "dark" | "outline" | "light";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
} & ComponentPropsWithoutRef<"button">;

const variantClasses: Record<ButtonVariant, string> = {
  dark: "bg-charcoal text-surface hover:bg-olive",
  outline:
    "border border-line bg-transparent text-charcoal hover:border-charcoal hover:bg-surface",
  light: "bg-surface text-charcoal hover:bg-background",
};

export function Button({
  children,
  href,
  variant = "dark",
  className = "",
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-bold transition",
    "focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2 focus:ring-offset-background",
    variantClasses[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
