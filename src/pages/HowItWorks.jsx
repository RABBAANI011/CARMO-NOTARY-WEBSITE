function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      description:
        "Select the notary service that matches your document, requirement, or purpose.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 8h8M8 12h5M8 16h6" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Book an Appointment",
      description:
        "Choose a convenient appointment time and provide the basic information needed for your request.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 1.5" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Complete Your Notarization",
      description:
        "Meet with CARMO, complete the required verification, and receive your notarized document.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="m5 12 4 4L19 6" />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-background)]">

      {/* Page Header */}
      <section className="px-6 pb-16 pt-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              HOW IT WORKS
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight text-[var(--color-primary)] md:text-6xl">
              A simple process,
              <br />
              <span className="text-[var(--color-secondary)]">
                clear from start to finish.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
              CARMO keeps the notarization process straightforward,
              professional, and easy to understand from your first request
              to completion.
            </p>
          </div>

        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-6 lg:grid-cols-3">

            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-primary)] p-8 text-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl md:p-10"
              >
                {/* Number */}
                <div className="absolute right-7 top-6 text-5xl font-bold text-white/10 transition-colors duration-300 group-hover:text-[var(--color-secondary)]/20">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-secondary)] text-[var(--color-secondary)] transition-all duration-300 group-hover:bg-[var(--color-secondary)] group-hover:text-[var(--color-primary)]">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="relative mt-12">
                  <h2 className="text-2xl font-bold md:text-3xl">
                    {step.title}
                  </h2>

                  <p className="mt-5 text-base leading-7 text-white/65">
                    {step.description}
                  </p>
                </div>

                {/* Bottom line */}
                <div className="mt-10 h-px w-12 bg-[var(--color-secondary)] transition-all duration-300 group-hover:w-24" />
              </article>
            ))}

          </div>

        </div>
      </section>

      {/* What to Prepare */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              BEFORE YOUR APPOINTMENT
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight text-[var(--color-primary)] md:text-5xl">
              Come prepared,
              <br />
              <span className="text-[var(--color-secondary)]">
                save time.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
              Having the necessary information and documents ready can
              help make your appointment smoother and more efficient.
            </p>
          </div>

          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">

            <div className="space-y-7">

              <div className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                  1
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--color-primary)]">
                    Valid identification
                  </h3>

                  <p className="mt-2 leading-6 text-[var(--color-text-muted)]">
                    Have appropriate identification available for verification.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                  2
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--color-primary)]">
                    Your document
                  </h3>

                  <p className="mt-2 leading-6 text-[var(--color-text-muted)]">
                    Bring the document that requires notarization and any
                    relevant supporting information.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                  3
                </div>

                <div>
                  <h3 className="font-semibold text-[var(--color-primary)]">
                    Appointment details
                  </h3>

                  <p className="mt-2 leading-6 text-[var(--color-text-muted)]">
                    Keep your appointment time and contact information
                    available.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-[var(--color-surface)] p-8 md:p-10 lg:flex-row lg:items-center">

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                READY TO BEGIN?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[var(--color-primary)] md:text-4xl">
                Book your appointment.
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-[var(--color-text-muted)]">
                Start your notarization process with CARMO today.
              </p>
            </div>

            <a
              href="/book-appointment"
              className="group shrink-0 rounded-full bg-[var(--color-primary)] px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-primary-dark)] hover:shadow-xl"
            >
              Book Appointment
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

export default HowItWorks;