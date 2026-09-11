import { Link } from "react-router-dom";

function About() {
  return (
    <main className="overflow-hidden bg-[var(--color-background)]">

      {/* =====================================================
          PAGE HERO
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#063525]">

        {/* Decorative Elements */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#e5bd52]/10" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#3f806b]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

          <div className="max-w-3xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e5bd52]" />

              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e5bd52]">
                About CARMO
              </p>
            </div>

            <h1 className="font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.025em] text-white sm:text-6xl lg:text-7xl">
              Professional Service.
              <br />
              <span className="text-[#e5bd52]">
                Built on Trust.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              CARMO is focused on making professional notary services
              clearer, more convenient, and easier to access for individuals
              and businesses in Somalia.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          OUR STORY
      ====================================================== */}
      <section className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">

            {/* Section Label */}
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                Our Story
              </p>

              <h2 className="mt-4 max-w-md font-serif text-4xl font-semibold leading-[1.08] text-[var(--color-primary-dark)] sm:text-5xl">
                Making Important
                <br />
                Documents
                <br />
                <span className="text-[var(--color-secondary)]">
                  Simpler.
                </span>
              </h2>

            </div>


            {/* Story Content */}
            <div className="max-w-3xl">

              <p className="text-lg leading-8 text-[var(--color-text)]">
                Important documents often carry significant personal,
                professional, and business responsibilities. The notarization
                process should therefore be handled with care, clarity, and
                professionalism.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)]">
                CARMO was created with a simple purpose: to provide a
                dependable notary experience where clients can understand
                what they need, prepare with confidence, and complete their
                notarization through a clear and professional process.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--color-text-muted)]">
                From personal documents to business-related requirements,
                CARMO aims to make every interaction straightforward while
                treating each client's documents with the attention and
                discretion they deserve.
              </p>

              <div className="mt-9 border-l-2 border-[#e5bd52] pl-6">

                <p className="font-serif text-xl italic leading-8 text-[var(--color-primary-dark)]">
                  “Clear documents. Professional service. Greater confidence.”
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION & VISION
      ====================================================== */}
      <section className="bg-[#f4f0e6] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-5 lg:grid-cols-2">

            {/* Mission */}
            <article className="group rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_20px_50px_rgba(23,79,64,0.10)] sm:p-10">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 12h16" />
                    <path d="M13 5l7 7-7 7" />
                  </svg>

                </div>

                <span className="font-serif text-5xl text-[#174f40]/10">
                  01
                </span>

              </div>

              <h2 className="mt-9 font-serif text-3xl font-semibold text-[#174f40]">
                Our Mission
              </h2>

              <p className="mt-4 max-w-xl text-base leading-8 text-[#64746e]">
                To make notary services more accessible, understandable,
                and dependable by providing clients with professional
                service and a clear experience from beginning to end.
              </p>

            </article>


            {/* Vision */}
            <article className="group rounded-2xl border border-[#d9d1c0] bg-[#174f40] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(23,79,64,0.20)] sm:p-10">

              <div className="flex items-center justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5bd52] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 8v4l3 2" />
                  </svg>

                </div>

                <span className="font-serif text-5xl text-white/10">
                  02
                </span>

              </div>

              <h2 className="mt-9 font-serif text-3xl font-semibold text-white">
                Our Vision
              </h2>

              <p className="mt-4 max-w-xl text-base leading-8 text-white/65">
                To become a trusted name for professional notary services
                in Somalia by building a service experience centered on
                trust, professionalism, convenience, and respect for every
                client.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORE VALUES
      ====================================================== */}
      <section className="bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          {/* Header */}
          <div className="max-w-2xl">

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
              Our Values
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--color-primary-dark)] sm:text-5xl">
              What Guides
              <br />
              <span className="text-[var(--color-secondary)]">
                Our Service
              </span>
            </h2>

          </div>


          {/* Values */}
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {/* Trust */}
            <article className="group rounded-2xl border border-[var(--color-border)] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 3l8 4v5c0 4.8-3.2 7.9-8 9-4.8-1.1-8-4.2-8-9V7l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>

              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[var(--color-primary-dark)]">
                Trust
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                We believe professional service begins with earning and
                protecting the trust of every client.
              </p>

            </article>


            {/* Integrity */}
            <article className="group rounded-2xl border border-[var(--color-border)] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M12 3v18" />
                  <path d="M5 8h14" />
                  <path d="M7 8l-3 6h6L7 8z" />
                  <path d="M17 8l-3 6h6l-3-6z" />
                </svg>

              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[var(--color-primary-dark)]">
                Integrity
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                We value honesty, responsibility, and professional conduct
                in every client interaction.
              </p>

            </article>


            {/* Clarity */}
            <article className="group rounded-2xl border border-[var(--color-border)] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M5 5h14v14H5z" />
                  <path d="M8 9h8M8 13h6" />
                </svg>

              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[var(--color-primary-dark)]">
                Clarity
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                We aim to make each step easy to understand so clients
                know what to expect.
              </p>

            </article>


            {/* Care */}
            <article className="group rounded-2xl border border-[var(--color-border)] p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-xl sm:p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-[#e5bd52] transition-transform duration-300 group-hover:scale-110">

                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M20 8.5c0 5.5-8 10-8 10s-8-4.5-8-10a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 8.5z" />
                </svg>

              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[var(--color-primary-dark)]">
                Care
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                Every document and every client deserves careful,
                respectful, and professional attention.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROFESSIONAL APPROACH
      ====================================================== */}
      <section className="bg-[#063525] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">

            {/* Left */}
            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#e5bd52]">
                Our Approach
              </p>

              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                Professional From
                <br />
                <span className="text-[#e5bd52]">
                  First Contact to Completion
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
                We believe a professional notary experience is about more
                than completing a document. It is about clear communication,
                careful handling, and making the process understandable.
              </p>

            </div>


            {/* Right */}
            <div className="space-y-4">

              {/* Point 1 */}
              <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e5bd52] font-serif text-sm font-semibold text-[#e5bd52]">
                  01
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">
                    Clear Communication
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/55">
                    Understand the process and know what information is
                    needed before your appointment.
                  </p>
                </div>

              </div>


              {/* Point 2 */}
              <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e5bd52] font-serif text-sm font-semibold text-[#e5bd52]">
                  02
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">
                    Careful Attention
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/55">
                    Important documents are approached with attention,
                    professionalism, and discretion.
                  </p>
                </div>

              </div>


              {/* Point 3 */}
              <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e5bd52] font-serif text-sm font-semibold text-[#e5bd52]">
                  03
                </div>

                <div>
                  <h3 className="font-serif text-xl font-semibold text-white">
                    Dependable Experience
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/55">
                    A straightforward service experience designed around
                    your needs and appointment.
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
      <section className="bg-[#f4f0e6] py-20 sm:py-24">

        <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b88b24]">
            Work With CARMO
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-[#174f40] sm:text-5xl lg:text-6xl">
            Ready to Take the
            <br />
            <span className="text-[#b88b24]">
              Next Step?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#64746e]">
            Learn more about our services or schedule an appointment with
            CARMO when you are ready.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/services"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#174f40] px-7 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#216451] hover:shadow-xl"
            >
              Explore Services

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>

            </Link>

            <Link
              to="/book-appointment"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full border border-[#174f40] px-7 text-sm font-semibold text-[#174f40] transition-all duration-300 hover:-translate-y-1 hover:bg-[#174f40] hover:text-white"
            >
              Book Appointment

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

export default About;