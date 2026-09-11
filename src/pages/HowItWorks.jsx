import { Link } from "react-router-dom";

function HowItWorks() {
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
                How It Works
              </p>

            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl">
              Simple Steps.
              <br />
              <span className="text-[#e5bd52]">
                Clear Process.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              From choosing your service to completing your notarization,
              CARMO keeps the process straightforward and easy to understand.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                The CARMO Process
              </p>

              <h2 className="mt-4 max-w-lg font-serif text-4xl font-semibold leading-[1.08] text-[var(--color-primary-dark)] sm:text-5xl">
                Notarization Without
                <br />
                <span className="text-[var(--color-secondary)]">
                  Unnecessary Complexity
                </span>
              </h2>

            </div>

            <div>

              <p className="text-lg leading-8 text-[var(--color-text)]">
                We designed our process around one simple idea: you should
                know what happens next.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--color-text-muted)]">
                Each appointment follows a clear sequence so you can prepare
                your documents, understand the requirements, and complete
                the notarization with confidence.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MAIN STEPS
      ====================================================== */}
      <section className="bg-[#f4f0e6] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#b88b24]">
              Step by Step
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#174f40] sm:text-5xl">
              From Your First Request
              <br />
              <span className="text-[#b88b24]">
                to Completion
              </span>
            </h2>

          </div>


          <div className="relative mt-14">

            {/* Connecting Line */}
            <div className="absolute left-[27px] top-8 hidden h-[calc(100%-64px)] w-px bg-[#b88b24]/25 md:block" />


            <div className="space-y-5">

              {/* =================================================
                  STEP 01
              ================================================== */}
              <article className="group relative rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-9">

                <div className="flex flex-col gap-6 md:flex-row">

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#174f40] font-serif text-lg font-semibold text-[#e5bd52] shadow-lg">
                    01
                  </div>

                  <div className="max-w-3xl">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88b24]">
                      Start Here
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-semibold text-[#174f40]">
                      Choose Your Service
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#64746e] sm:text-base">
                      Begin by identifying the type of notarization or
                      document service you need. You can review our services
                      or contact CARMO if you are unsure which option fits.
                    </p>

                    <Link
                      to="/services"
                      className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#174f40] transition-colors hover:text-[#b88b24]"
                    >
                      View Services

                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </article>


              {/* =================================================
                  STEP 02
              ================================================== */}
              <article className="group relative rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-9">

                <div className="flex flex-col gap-6 md:flex-row">

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#174f40] font-serif text-lg font-semibold text-[#e5bd52] shadow-lg">
                    02
                  </div>

                  <div className="max-w-3xl">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88b24]">
                      Prepare
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-semibold text-[#174f40]">
                      Prepare Your Documents
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#64746e] sm:text-base">
                      Have the document that requires notarization ready,
                      together with the information and identification
                      required for your appointment.
                    </p>

                  </div>

                </div>

              </article>


              {/* =================================================
                  STEP 03
              ================================================== */}
              <article className="group relative rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-9">

                <div className="flex flex-col gap-6 md:flex-row">

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#174f40] font-serif text-lg font-semibold text-[#e5bd52] shadow-lg">
                    03
                  </div>

                  <div className="max-w-3xl">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88b24]">
                      Schedule
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-semibold text-[#174f40]">
                      Book Your Appointment
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#64746e] sm:text-base">
                      Select a convenient appointment option and provide the
                      basic details needed so your visit can be prepared
                      efficiently.
                    </p>

                    <Link
                      to="/book-appointment"
                      className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#174f40] transition-colors hover:text-[#b88b24]"
                    >
                      Book Appointment

                      <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                        →
                      </span>
                    </Link>

                  </div>

                </div>

              </article>


              {/* =================================================
                  STEP 04
              ================================================== */}
              <article className="group relative rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl sm:p-9">

                <div className="flex flex-col gap-6 md:flex-row">

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#174f40] font-serif text-lg font-semibold text-[#e5bd52] shadow-lg">
                    04
                  </div>

                  <div className="max-w-3xl">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88b24]">
                      Appointment
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-semibold text-[#174f40]">
                      Meet With CARMO
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-[#64746e] sm:text-base">
                      Attend your scheduled appointment with the required
                      documents and information. The necessary verification
                      and notarization steps can then be completed.
                    </p>

                  </div>

                </div>

              </article>


              {/* =================================================
                  STEP 05
              ================================================== */}
              <article className="group relative rounded-2xl border border-[#174f40] bg-[#174f40] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:p-9">

                <div className="flex flex-col gap-6 md:flex-row">

                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#e5bd52] font-serif text-lg font-semibold text-[#e5bd52]">
                    05
                  </div>

                  <div className="max-w-3xl">

                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5bd52]">
                      Completion
                    </p>

                    <h3 className="mt-2 font-serif text-3xl font-semibold text-white">
                      Complete Your Notarization
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
                      Once the required steps are completed, your document
                      can be finalized according to the applicable
                      notarization requirements.
                    </p>

                  </div>

                </div>

              </article>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHAT TO BRING
      ====================================================== */}
      <section className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                Be Prepared
              </p>

              <h2 className="mt-4 max-w-md font-serif text-4xl font-semibold leading-[1.08] text-[var(--color-primary-dark)] sm:text-5xl">
                What to Have
                <br />
                <span className="text-[var(--color-secondary)]">
                  Ready
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[var(--color-text-muted)]">
                Preparing ahead of time can help your appointment move
                smoothly and avoid unnecessary delays.
              </p>

            </div>


            <div className="grid gap-4 sm:grid-cols-2">

              {/* Item 1 */}
              <article className="rounded-2xl border border-[var(--color-border)] bg-white p-7">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52]">

                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M6 2h9l4 4v16H6z" />
                    <path d="M15 2v5h5" />
                  </svg>

                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-[var(--color-primary-dark)]">
                  Your Document
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                  Bring the original document that requires notarization,
                  unless you have been advised otherwise.
                </p>

              </article>


              {/* Item 2 */}
              <article className="rounded-2xl border border-[var(--color-border)] bg-white p-7">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52]">

                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="8" r="3" />
                    <path d="M5 21c.8-4.2 3.1-6.5 7-6.5s6.2 2.3 7 6.5" />
                  </svg>

                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-[var(--color-primary-dark)]">
                  Identification
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                  Bring the identification or other information required
                  for your specific appointment.
                </p>

              </article>


              {/* Item 3 */}
              <article className="rounded-2xl border border-[var(--color-border)] bg-white p-7">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52]">

                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" />
                  </svg>

                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-[var(--color-primary-dark)]">
                  Appointment Details
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                  Keep your appointment time and any instructions received
                  from CARMO available.
                </p>

              </article>


              {/* Item 4 */}
              <article className="rounded-2xl border border-[var(--color-border)] bg-white p-7">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52]">

                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>

                </div>

                <h3 className="mt-6 font-serif text-xl font-semibold text-[var(--color-primary-dark)]">
                  Questions
                </h3>

                <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">
                  If you are unsure about a requirement, contact CARMO
                  before your appointment.
                </p>

              </article>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ PREVIEW
      ====================================================== */}
      <section className="bg-[#f4f0e6] py-20 sm:py-24">

        <div className="mx-auto max-w-5xl px-6 sm:px-8">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b88b24]">
              Need More Information?
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#174f40] sm:text-5xl">
              Have Questions About
              <br />
              <span className="text-[#b88b24]">
                the Process?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#64746e]">
              Visit our FAQ page for answers to common questions about
              appointments, documents, services, and notarization.
            </p>

            <Link
              to="/faq"
              className="group mt-8 inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#174f40] px-7 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#216451] hover:shadow-xl"
            >
              Visit FAQ

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#063525] py-20 sm:py-24 lg:py-28">

        <div className="absolute -right-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-[#e5bd52]/10" />

        <div className="relative mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e5bd52]">
            Your Next Step
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to
            <br />
            <span className="text-[#e5bd52]">
              Book Your Appointment?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
            Choose a convenient appointment option and take the next step
            toward completing your notarization.
          </p>

          <Link
            to="/book-appointment"
            className="group mt-9 inline-flex h-12 items-center justify-center gap-4 rounded-full bg-[#e5bd52] px-8 text-sm font-semibold text-[#063525] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0cf70] hover:shadow-2xl"
          >
            Book Appointment

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>

          </Link>

        </div>
      </section>

    </main>
  );
}

export default HowItWorks;