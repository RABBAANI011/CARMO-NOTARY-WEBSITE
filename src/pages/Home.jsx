import { Link } from "react-router-dom";

const homeImage =
  "https://kancelaria-primero.pl/static/img/kancelaria-syndyka.webp";

function Home() {
  return (
    <main className="overflow-hidden bg-[var(--color-background)]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="group relative min-h-[560px] overflow-hidden sm:min-h-[575px] lg:min-h-[590px]">

        {/* Background Image */}
        <img
          src={homeImage}
          alt="Professional legal office with justice scales and legal documents"
          className="absolute inset-0 h-full w-full scale-[1.01] object-cover object-center transition duration-[1800ms] ease-out group-hover:scale-[1.035]"
        />

        {/* Main Emerald Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021c14]/95 via-[#063525]/86 to-[#063525]/32" />

        {/* Right Side Overlay */}
        <div className="absolute inset-y-0 right-0 w-[42%] bg-gradient-to-l from-[#031b15]/50 to-transparent" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#021c14]/75 to-transparent" />

        {/* Soft Decorative Glow */}
        <div className="absolute -left-28 top-16 h-64 w-64 rounded-full bg-[#e5bd52]/8 blur-3xl" />

        {/* =====================================================
            HERO CONTENT
        ====================================================== */}
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl items-start px-6 pt-8 sm:min-h-[575px] sm:px-8 sm:pt-10 lg:min-h-[590px] lg:px-12 lg:pt-12">

          {/* Main Content */}
          <div className="max-w-[670px]">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-9 bg-[#e5bd52]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e5bd52] sm:text-xs">
                Trusted. Legal. Convenient.
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-serif text-[40px] font-semibold leading-[0.98] tracking-[-0.025em] text-white sm:text-[48px] lg:text-[60px]">

              Your Trusted
              <br />

              Notary Partner
              <br />

              in{" "}
              <span className="relative inline-block text-[#e5bd52]">
                Somalia

                <span className="absolute -bottom-1 left-0 h-[3px] w-[46%] rounded-full bg-[#e5bd52]/70" />
              </span>

            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[610px] text-[13px] leading-6 text-white/75 sm:text-sm sm:leading-7 lg:text-[15px]">
              At CARMO, we make notarization simple, secure, and accessible
              for individuals and businesses. Professional service you can
              trust, wherever you are in Somalia.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">

              {/* Primary Button */}
              <Link
                to="/book-appointment"
                className="group/btn inline-flex h-12 items-center justify-center gap-4 rounded-full bg-[#3f806b] px-7 text-[13px] font-semibold text-white shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4b927b] hover:shadow-[0_16px_35px_rgba(0,0,0,0.25)]"
              >
                Book Appointment

                <span className="text-base transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </Link>

              {/* Secondary Button */}
              <Link
                to="/about"
                className="group/btn inline-flex h-12 items-center justify-center gap-3 rounded-full border border-white/55 bg-white/[0.02] px-7 text-[13px] font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#063525]"
              >
                Learn More

                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </Link>

            </div>

            {/* =====================================================
                TRUST FEATURES
            ====================================================== */}
            <div className="mt-7 grid max-w-[650px] grid-cols-1 gap-4 border-t border-white/15 pt-5 sm:grid-cols-3 sm:gap-5">

              {/* Feature 1 */}
              <div className="group/feature flex items-center gap-2.5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e5bd52]/80 text-[#e5bd52] transition-all duration-300 group-hover/feature:bg-[#e5bd52] group-hover/feature:text-[#063525]">

                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3l8 4v5c0 4.8-3.2 7.9-8 9-4.8-1.1-8-4.2-8-9V7l8-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>

                </div>

                <div>
                  <p className="text-[11px] font-semibold text-white sm:text-xs">
                    Secure & Reliable
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/50">
                    Your documents, our priority
                  </p>
                </div>

              </div>

              {/* Feature 2 */}
              <div className="group/feature flex items-center gap-2.5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e5bd52]/80 text-[#e5bd52] transition-all duration-300 group-hover/feature:bg-[#e5bd52] group-hover/feature:text-[#063525]">

                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="8" />
                    <path d="M12 7v5l3 2" />
                  </svg>

                </div>

                <div>
                  <p className="text-[11px] font-semibold text-white sm:text-xs">
                    Fast & Convenient
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/50">
                    Save time, get results
                  </p>
                </div>

              </div>

              {/* Feature 3 */}
              <div className="group/feature flex items-center gap-2.5">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e5bd52]/80 text-[#e5bd52] transition-all duration-300 group-hover/feature:bg-[#e5bd52] group-hover/feature:text-[#063525]">

                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3l2.2 5.1L20 10l-5.8 1.9L12 17l-2.2-5.1L4 10l5.8-1.9L12 3z" />
                    <path d="M19 16l.8 1.8L22 18.5l-2.2-.7L19 16z" />
                  </svg>

                </div>

                <div>
                  <p className="text-[11px] font-semibold text-white sm:text-xs">
                    Professional Service
                  </p>

                  <p className="mt-0.5 text-[10px] text-white/50">
                    For individuals & businesses
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* =====================================================
              QUOTE
          ====================================================== */}
          <div className="absolute right-7 top-[46%] hidden w-36 -translate-y-1/2 xl:right-12 xl:block">

            <div className="mb-4 h-px w-8 bg-[#e5bd52]" />

            <p className="font-serif text-[15px] italic leading-6 text-white/80">
              “Documents today.
              <br />
              Greater opportunities
              <br />
              tomorrow.”
            </p>

            <div className="mt-4 h-[3px] w-8 bg-[#e5bd52]" />

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 2 — WHY CARMO
      ====================================================== */}
      <section className="relative bg-[var(--color-background)] py-20 sm:py-24 lg:py-28">

        <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-[#e5bd52]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

            <div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
                Why CARMO
              </p>

              <h2 className="max-w-xl font-serif text-4xl font-semibold leading-[1.05] text-[var(--color-primary-dark)] sm:text-5xl lg:text-6xl">

                Notarization You
                <br />

                Can{" "}
                <span className="text-[var(--color-secondary)]">
                  Trust
                </span>

              </h2>

            </div>

            <div className="lg:pl-4">

              <p className="max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
                CARMO provides professional notary services designed around
                clarity, security, and convenience. Whether you are an
                individual or a business, we help make important documents
                easier to notarize with confidence.
              </p>

              <Link
                to="/services"
                className="group mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
              >
                Explore Our Services

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>


          {/* Feature Cards */}
          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {/* Convenient */}
            <article className="group rounded-2xl border border-[#d9d1c1] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b88b24]/40 hover:shadow-xl sm:p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174d3c] text-[#e5bd52] transition-all duration-300 group-hover:scale-110">

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

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174d3c]">
                Convenient
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                A simple appointment process helps you save time and stay
                focused on what matters.
              </p>

            </article>


            {/* Reliable */}
            <article className="group rounded-2xl border border-[#d9d1c1] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b88b24]/40 hover:shadow-xl sm:p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174d3c] text-[#e5bd52] transition-all duration-300 group-hover:scale-110">

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <path d="M5 12l4 4L19 6" />
                </svg>

              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174d3c]">
                Reliable
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Clear steps and professional attention help you complete
                your notarization with confidence.
              </p>

            </article>


            {/* Professional */}
            <article className="group rounded-2xl border border-[#d9d1c1] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b88b24]/40 hover:shadow-xl sm:p-8">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174d3c] text-[#e5bd52] transition-all duration-300 group-hover:scale-110">

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M12 3l2.2 5.1L20 10l-5.8 1.9L12 17l-2.2-5.1L4 10l5.8-1.9L12 3z" />
                  <path d="M19 16l.8 1.8L22 18.5 19.8 17.8 19 16z" />
                </svg>

              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174d3c]">
                Professional
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Service built around accuracy, communication, and respect
                for every client.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 3 — FEATURED SERVICES
      ====================================================== */}
      <section className="bg-[#f4f0e6] py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

            <div className="max-w-2xl">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#b58b28]">
                Our Services
              </p>

              <h2 className="font-serif text-4xl font-semibold leading-tight text-[#174f40] sm:text-5xl">

                Professional Notary
                <br />

                <span className="text-[#b58b28]">
                  Services for You
                </span>

              </h2>

            </div>

            <Link
              to="/services"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#174f40] px-6 py-3 text-sm font-semibold text-[#174f40] transition-all duration-300 hover:-translate-y-1 hover:bg-[#174f40] hover:text-white"
            >
              View All Services

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {/* Service 1 */}
            <article className="group rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#b58b28]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(23,79,64,0.10)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">

                <svg
                  width="22"
                  height="22"
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

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174f40]">
                Document Notarization
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#64746e]">
                Professional notarization for important personal and
                business documents, with careful attention to accuracy
                and proper identification.
              </p>

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#174f40] transition-colors group-hover:text-[#b58b28]"
              >
                Learn More

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </article>


            {/* Service 2 */}
            <article className="group rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#b58b28]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(23,79,64,0.10)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">

                <svg
                  width="22"
                  height="22"
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

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174f40]">
                Business Documents
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#64746e]">
                Notary support for businesses and organizations handling
                agreements, authorizations, declarations, and other
                official documentation.
              </p>

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#174f40] transition-colors group-hover:text-[#b58b28]"
              >
                Learn More

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </article>


            {/* Service 3 */}
            <article className="group rounded-2xl border border-[#d9d1c0] bg-[#faf8f2] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#b58b28]/40 hover:bg-white hover:shadow-[0_20px_50px_rgba(23,79,64,0.10)]">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174f40] text-[#e5bd52] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">

                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  <circle cx="12" cy="8" r="3" />
                  <path d="M5 21c.8-4.2 3.1-6.5 7-6.5s6.2 2.3 7 6.5" />
                </svg>

              </div>

              <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174f40]">
                Personal Documents
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#64746e]">
                Convenient notary assistance for individuals who need
                trusted handling of personal documents and formal
                declarations.
              </p>

              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#174f40] transition-colors group-hover:text-[#b58b28]"
              >
                Learn More

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </article>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 4 — HOW IT WORKS
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#063525] py-20 sm:py-24 lg:py-28">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#e5bd52]/10" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border border-[#e5bd52]/10" />

        <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="max-w-2xl">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#e5bd52]">
              How It Works
            </p>

            <h2 className="font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">

              A Simple Process,
              <br />

              <span className="text-[#e5bd52]">
                Professional Results
              </span>

            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/65">
              Getting your documents notarized should not be complicated.
              CARMO keeps the process clear from your first request to
              completion.
            </p>

          </div>


          <div className="mt-12 grid gap-5 lg:grid-cols-3">

            {/* Step 1 */}
            <article className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#e5bd52]/30 hover:bg-white/[0.07] hover:shadow-2xl sm:p-8">

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5bd52] text-[#e5bd52] transition-all duration-300 group-hover:bg-[#e5bd52] group-hover:text-[#063525]">

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
                    <path d="M9 12h6M9 16h6" />
                  </svg>

                </div>

                <span className="font-serif text-4xl text-white/10 transition-colors duration-300 group-hover:text-[#e5bd52]/20">
                  01
                </span>

              </div>

              <h3 className="mt-8 font-serif text-2xl font-semibold text-white">
                Choose Your Service
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Select the notary service that matches your document or
                requirement.
              </p>

            </article>


            {/* Step 2 */}
            <article className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#e5bd52]/30 hover:bg-white/[0.07] hover:shadow-2xl sm:p-8">

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5bd52] text-[#e5bd52] transition-all duration-300 group-hover:bg-[#e5bd52] group-hover:text-[#063525]">

                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M4 5h16v14H4z" />
                    <path d="M8 9h8M8 13h6" />
                  </svg>

                </div>

                <span className="font-serif text-4xl text-white/10 transition-colors duration-300 group-hover:text-[#e5bd52]/20">
                  02
                </span>

              </div>

              <h3 className="mt-8 font-serif text-2xl font-semibold text-white">
                Prepare Your Documents
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Bring the required documents and valid identification so
                everything is ready for your appointment.
              </p>

            </article>


            {/* Step 3 */}
            <article className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#e5bd52]/30 hover:bg-white/[0.07] hover:shadow-2xl sm:p-8">

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e5bd52] text-[#e5bd52] transition-all duration-300 group-hover:bg-[#e5bd52] group-hover:text-[#063525]">

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

                <span className="font-serif text-4xl text-white/10 transition-colors duration-300 group-hover:text-[#e5bd52]/20">
                  03
                </span>

              </div>

              <h3 className="mt-8 font-serif text-2xl font-semibold text-white">
                Complete Your Notarization
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/60">
                Meet with CARMO, complete the required verification, and
                receive your notarized document.
              </p>

            </article>

          </div>


          {/* CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-8 sm:flex-row sm:items-center">

            <p className="max-w-lg text-sm leading-6 text-white/55">
              Ready to get started? Book your appointment and take the next
              step with confidence.
            </p>

            <Link
              to="/book-appointment"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#e5bd52] px-7 text-sm font-semibold text-[#063525] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0cf70] hover:shadow-xl"
            >
              Book Appointment

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 5 — TRUST & CONFIDENCE
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#f7f3e9] py-20 sm:py-24 lg:py-28">

        <div className="absolute left-0 top-0 h-1 w-32 bg-[#b88b24]" />

        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT CONTENT */}
            <div>

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#b88b24]">
                Why Clients Choose CARMO
              </p>

              <h2 className="max-w-xl font-serif text-4xl font-semibold leading-[1.08] text-[#174d3c] sm:text-5xl lg:text-6xl">

                Documents Matter.
                <br />

                <span className="text-[#b88b24]">
                  Trust Matters More.
                </span>

              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                Important documents deserve careful handling, clear
                communication, and professional attention. CARMO is designed
                to make notarization a more confident and straightforward
                experience.
              </p>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-[#174d3c] transition-colors hover:text-[#b88b24]"
              >
                Learn More About CARMO

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>


              {/* Small image panel */}
              <div className="group relative mt-10 hidden overflow-hidden rounded-2xl sm:block">

                <img
                  src={homeImage}
                  alt="Professional notary and legal setting"
                  className="h-44 w-full object-cover object-center grayscale-[10%] transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#063525]/65 to-transparent" />

                <div className="absolute bottom-5 left-5">

                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e5bd52]">
                    CARMO
                  </p>

                  <p className="mt-1 font-serif text-xl text-white">
                    Built on Trust
                  </p>

                </div>

              </div>

            </div>


            {/* RIGHT CARDS */}
            <div className="grid gap-4 sm:grid-cols-2">

              {/* Confidential */}
              <article className="group rounded-2xl border border-[#d9d1c1] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b88b24]/40 hover:shadow-xl sm:p-8">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174d3c] text-[#e5bd52] transition-all duration-300 group-hover:scale-110">

                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>

                </div>

                <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174d3c]">
                  Confidential
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Your documents and personal information are handled with
                  care and professional discretion.
                </p>

              </article>


              {/* Convenient */}
              <article className="group rounded-2xl border border-[#d9d1c1] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b88b24]/40 hover:shadow-xl sm:p-8">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174d3c] text-[#e5bd52] transition-all duration-300 group-hover:scale-110">

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

                <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174d3c]">
                  Convenient
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  A straightforward appointment process helps you save time
                  and stay focused on what matters.
                </p>

              </article>


              {/* Reliable */}
              <article className="group rounded-2xl border border-[#d9d1c1] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b88b24]/40 hover:shadow-xl sm:p-8">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174d3c] text-[#e5bd52] transition-all duration-300 group-hover:scale-110">

                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M5 12l4 4L19 6" />
                  </svg>

                </div>

                <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174d3c]">
                  Reliable
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Clear steps and professional attention help you complete
                  your notarization with confidence.
                </p>

              </article>


              {/* Professional */}
              <article className="group rounded-2xl border border-[#d9d1c1] bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#b88b24]/40 hover:shadow-xl sm:p-8">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#174d3c] text-[#e5bd52] transition-all duration-300 group-hover:scale-110">

                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M12 3l2.2 5.1L20 10l-5.8 1.9L12 17l-2.2-5.1L4 10l5.8-1.9L12 3z" />
                    <path d="M19 16l.8 1.8L22 18.5 19.8 17.8 19 16z" />
                  </svg>

                </div>

                <h3 className="mt-7 font-serif text-2xl font-semibold text-[#174d3c]">
                  Professional
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Service built around accuracy, communication, and respect
                  for every client.
                </p>

              </article>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SECTION 6 — FINAL CTA
      ====================================================== */}
      <section className="relative overflow-hidden bg-[#174d3c] py-20 sm:py-24 lg:py-28">

        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-[#e5bd52]/10" />

        <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full border border-[#e5bd52]/10" />

        <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-8">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e5bd52]">
            Ready When You Are
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">

            Let CARMO Help You
            <br />

            <span className="text-[#e5bd52]">
              Move Forward With Confidence
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/65">
            Start your notarization journey with a simple appointment and
            professional support from CARMO.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              to="/book-appointment"
              className="group inline-flex h-13 items-center justify-center gap-4 rounded-full bg-[#e5bd52] px-8 text-sm font-semibold text-[#063525] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#f0cf70] hover:shadow-2xl"
            >
              Book Appointment

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              to="/contact"
              className="group inline-flex h-13 items-center justify-center gap-3 rounded-full border border-white/30 px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#063525]"
            >
              Contact CARMO

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

export default Home;