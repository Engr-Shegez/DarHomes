const faqs = [
  {
    question: "Can Darhomes help me buy land and build on it?",
    answer:
      "Yes. Darhomes supports the full journey from finding suitable land to planning and managing a custom build project.",
  },
  {
    question: "Do you only sell properties?",
    answer:
      "No. Darhomes works across buying, selling, land acquisition, construction guidance, and curated short-term stays.",
  },
  {
    question: "Can I list my property with Darhomes?",
    answer:
      "Yes. Sellers can share property details with Darhomes so the team can review, position, and guide the listing process.",
  },
  {
    question: "Are short stays available for business and leisure travel?",
    answer:
      "Yes. Darhomes short stays are designed for modern travelers, including business guests, weekend visitors, and families.",
  },
  {
    question: "Where does Darhomes operate?",
    answer:
      "Darhomes is currently positioned around key Nigerian real estate markets, with Lagos as a primary focus. You can update this as your coverage expands.",
  },
];

export function FAQSection() {
  return (
    <section className="bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-olive sm:text-sm">
            Questions
          </p>

          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal sm:text-5xl md:text-6xl">
            Before you take the next step.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
            A few quick answers for buyers, sellers, land seekers, build
            clients, and guests exploring Darhomes.
          </p>
        </div>

        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[1.3rem] border border-line bg-surface"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-base font-bold text-charcoal marker:hidden">
                <span>{faq.question}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-lg transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="px-5 pb-5 text-sm leading-7 text-muted">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
