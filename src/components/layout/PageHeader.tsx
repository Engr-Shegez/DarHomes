type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-olive sm:text-sm">
          {eyebrow}
        </p>

        <h1 className="mt-4 max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-charcoal sm:text-6xl md:text-7xl">
          {title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
