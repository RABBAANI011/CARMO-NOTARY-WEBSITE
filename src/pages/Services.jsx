import { Link } from "react-router-dom";

function Services() {
  return (
    <main className="overflow-hidden bg-[var(--color-background)]">

      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#063525]">

        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#e5bd52]/10" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#3f806b]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e5bd52]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e5bd52]">
                Our Services
              </p>
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl">
              Notary Services
              <br />
              <span className="text-[#e5bd52]">
                You Can Rely On
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Professional notary services for individuals, families,
              organizations, and businesses, delivered through a clear
              and dependable process.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ====================================================== */}
      <section className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                What We Provide
              </p>

              <h2 className="mt-4 max-w-lg font-serif text-4xl font-semibold leading-[1.08] text-[var(--color-primary-dark)] sm:text-5xl">
                Professional Support
                <br />
                for Important
                <br />
                <span className="text-[var(--color-secondary)]">
                  Documents
                </span>
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-[var(--color-text)]">
                CARMO provides notary services designed to help clients
                handle important documents with greater clarity and
                confidence.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
                Whether you need assistance with a personal document,
                business paperwork, an authorization, or another document
                requiring notarization, our goal is to make the process
                straightforward and professional.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICE CATEGORIES
      ====================================================== */}
      <section className="bg-[#f4f0e6] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88b24]">
              Service Categories
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#174f40] sm:text-5xl">
              Services Built Around
              <br />
              <span className="text-[#b88b24]">
                Your Requirements
              </span>
            </h2>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-2">

            {/* =================================================
                PERSONAL DOCUMENTS
            ================================================== */}
            <article className="group rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_50px_rgba(23,79,64,0.10)] sm:p-10">

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="8" r="3" />
                    <path d="M5 21c.8-4.2 3.1-6.5 7-6.5s6.2 2.3 7 6.5" />
                  </svg>

                </div>

                <span className="font-serif text-5xl text-[#174f40]/10">
                  01
                </span>

              </div>

              <h3 className="mt-8 font-serif text-3xl font-semibold text-[#174f40]">
                Personal Documents
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#64746e]">
                Notary assistance for individuals handling important
                personal documentation and formal requirements.
              </p>

              <div className="mt-7 border-t border-[#d9d1c0] pt-6">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b88b24]">
                  Suitable For
                </p>

                <ul className="mt-4 space-y-3 text-sm text-[#64746e]">

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b88b24]" />
                    Personal declarations
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b88b24]" />
                    Authorizations
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b88b24]" />
                    Important personal documents
                  </li>

                </ul>

              </div>

            </article>


            {/* =================================================
                BUSINESS DOCUMENTS
            ================================================== */}
            <article className="group rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_50px_rgba(23,79,64,0.10)] sm:p-10">

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 21V8l8-5 8 5v13" />
                    <path d="M8 21v-7h8v7" />
                    <path d="M9 10h1M14 10h1" />
                  </svg>

                </div>

                <span className="font-serif text-5xl text-[#174f40]/10">
                  02
                </span>

              </div>

              <h3 className="mt-8 font-serif text-3xl font-semibold text-[#174f40]">
                Business Documents
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#64746e]">
                Professional notary support for businesses, organizations,
                and people handling business-related documentation.
              </p>

              <div className="mt-7 border-t border-[#d9d1c0] pt-6">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b88b24]">
                  Suitable For
                </p>

                <ul className="mt-4 space-y-3 text-sm text-[#64746e]">

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b88b24]" />
                    Business agreements
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b88b24]" />
                    Business authorizations
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b88b24]" />
                    Official business documentation
                  </li>

                </ul>

              </div>

            </article>


            {/* =================================================
                LEGAL & OFFICIAL DOCUMENTS
            ================================================== */}
            <article className="group rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_50px_rgba(23,79,64,0.10)] sm:p-10">

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M6 2h9l4 4v16H6z" />
                    <path d="M15 2v5h5" />
                    <path d="M9 12h6M9 16h6" />
                  </svg>

                </div>

                <span className="font-serif text-5xl text-[#174f40]/10">
                  03
                </span>

              </div>

              <h3 className="mt-8 font-serif text-3xl font-semibold text-[#174f40]">
                Official Documents
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#64746e]">
                Professional assistance for documents that require
                notarization as part of an official or formal process.
              </p>

              <div className="mt-7 border-t border-[#d9d1c0] pt-6">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b88b24]">
                  Suitable For
                </p>

                <ul className="mt-4 space-y-3 text-sm text-[#64746e]">

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b88b24]" />
                    Formal declarations
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b88b24]" />
                    Official authorizations
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#b88b24]" />
                    Other notarization requirements
                  </li>

                </ul>

              </div>

            </article>


            {/* =================================================
                CUSTOM REQUIREMENTS
            ================================================== */}
            <article className="group rounded-2xl bg-[#174f40] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(23,79,64,0.20)] sm:p-10">

              <div className="flex items-start justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e5bd52] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M12 3v18" />
                    <path d="M3 12h18" />
                    <circle cx="12" cy="12" r="8" />
                  </svg>

                </div>

                <span className="font-serif text-5xl text-white/10">
                  04
                </span>

              </div>

              <h3 className="mt-8 font-serif text-3xl font-semibold text-white">
                Specific Requirements
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">
                If you are unsure which service applies to your document,
                contact CARMO and explain what you need. We can help you
                understand the appropriate next step.
              </p>

              <div className="mt-7 border-t border-white/10 pt-6">

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e5bd52]">
                  Need Guidance?
                </p>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  Tell us about your document or requirement and we can
                  guide you toward the appropriate service.
                </p>

                <Link
                  to="/contact"
                  className="group/link mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#e5bd52]"
                >
                  Contact CARMO

                  <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                    →
                  </span>

                </Link>

              </div>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICE PROCESS
      ====================================================== */}
      <section className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                Before Your Appointment
              </p>

              <h2 className="mt-4 max-w-md font-serif text-4xl font-semibold leading-[1.08] text-[var(--color-primary-dark)] sm:text-5xl">
                Come Prepared.
                <br />
                Leave With
                <br />
                <span className="text-[var(--color-secondary)]">
                  Confidence.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[var(--color-text-muted)]">
                Preparing the necessary information before your appointment
                can help make your notarization process smoother.
              </p>

            </div>


            <div className="space-y-4">

              {/* Preparation 1 */}
              <div className="flex gap-5 rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-7">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#174f40] font-serif text-sm font-semibold text-[#e5bd52]">
                  01
                </div>

                <div>

                  <h3 className="font-serif text-xl font-semibold text-[var(--color-primary-dark)]">
                    Identify Your Document
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    Know which document needs notarization and understand
                    the purpose of your appointment.
                  </p>

                </div>

              </div>


              {/* Preparation 2 */}
              <div className="flex gap-5 rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-7">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#174f40] font-serif text-sm font-semibold text-[#e5bd52]">
                  02
                </div>

                <div>

                  <h3 className="font-serif text-xl font-semibold text-[var(--color-primary-dark)]">
                    Prepare Required Information
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    Bring the information and identification required for
                    your specific notarization.
                  </p>

                </div>

              </div>


              {/* Preparation 3 */}
              <div className="flex gap-5 rounded-2xl border border-[var(--color-border)] bg-white p-6 sm:p-7">

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#174f40] font-serif text-sm font-semibold text-[#e5bd52]">
                  03
                </div>

                <div>

                  <h3 className="font-serif text-xl font-semibold text-[var(--color-primary-dark)]">
                    Attend Your Appointment
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                    Meet with CARMO and complete the necessary verification
                    and notarization steps.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#063525] py-20 sm:py-24 lg:py-28">

        <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[#e5bd52]/10" />

        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e5bd52]">
            Need a Notary?
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Start With the
            <br />
            <span className="text-[#e5bd52]">
              Right Service
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Choose the service that fits your needs or contact CARMO if you
            need help understanding what your document requires.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/book-appointment"
              className="group inline-flex h-12 items-center justify-center gap-4 rounded-full bg-[#e5bd52] px-8 text-sm font-semibold text-[#063525] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0cf70] hover:shadow-2xl"
            >
              Book Appointment

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

            <Link
              to="/contact"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/30 px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#063525]"
            >
              Contact Us

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Services;