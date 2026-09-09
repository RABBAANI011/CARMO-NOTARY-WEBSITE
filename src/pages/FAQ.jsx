function FAQ() {
  const faqs = [
    {
      question: "What is notarization?",
      answer:
        "Notarization is a formal process that helps verify the identity of the people signing a document and supports the proper execution of important documents.",
    },
    {
      question: "What documents can CARMO notarize?",
      answer:
        "CARMO provides notary assistance for a range of personal and business documents. The exact requirements depend on the type and purpose of the document.",
    },
    {
      question: "Do I need identification?",
      answer:
        "Yes. Valid identification may be required to verify your identity before a document can be notarized.",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can use the Book Appointment option on the website to request a convenient appointment time.",
    },
    {
      question: "Can businesses use CARMO's services?",
      answer:
        "Yes. CARMO provides professional notary support for both individuals and businesses.",
    },
    {
      question: "Where is CARMO available?",
      answer:
        "CARMO is designed to provide professional notary services across Somalia.",
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-background)]">

      {/* Header */}
      <section className="px-6 pb-16 pt-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight text-[var(--color-primary)] md:text-6xl">
              Questions,
              <br />
              <span className="text-[var(--color-secondary)]">
                answered clearly.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
              Find answers to common questions about CARMO's notary
              services, appointments, documents, and process.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">

          <div className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className={`group px-6 py-6 md:px-8 ${
                  index !== faqs.length - 1
                    ? "border-b border-[var(--color-border)]"
                    : ""
                }`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-[var(--color-primary)]">
                  <span>{faq.question}</span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-all duration-300 group-open:rotate-45 group-open:bg-[var(--color-primary)] group-open:text-white">
                    +
                  </span>
                </summary>

                <p className="max-w-3xl pr-10 pt-4 text-base leading-7 text-[var(--color-text-muted)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-[var(--color-primary)] p-8 text-white md:p-10 lg:flex-row lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                STILL HAVE QUESTIONS?
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                We're ready to help.
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-white/70">
                Contact CARMO if you need more information about our
                services or want to discuss your document requirements.
              </p>
            </div>

            <a
              href="/contact"
              className="group shrink-0 rounded-full bg-[var(--color-secondary)] px-7 py-4 font-semibold text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Contact Us
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

          </div>

        </div>
      </section>

    </main>
  );
}

export default FAQ;