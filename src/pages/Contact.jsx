function Contact() {
  return (
    <main className="min-h-screen bg-[var(--color-background)]">

      {/* Header */}
      <section className="px-6 pb-16 pt-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-secondary)]">
              GET IN TOUCH
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight text-[var(--color-primary)] md:text-6xl">
              Contact CARMO
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
              Have a question about our notary services or need help
              preparing your documents? Our team is ready to assist you.
            </p>
          </div>

        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl bg-[var(--color-primary)] p-8 text-white md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
              CONTACT INFORMATION
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-4xl">
              We are here to help.
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-white/70">
              Reach out to CARMO for professional notary assistance,
              appointment information, or general enquiries.
            </p>

            <div className="mt-10 space-y-6">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-[var(--color-secondary)]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="mt-1 text-white/65">
                    +252 XXX XXX XXX
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-[var(--color-secondary)]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold">Email</p>
                  <p className="mt-1 text-white/65">
                    info@carmo.so
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 text-[var(--color-secondary)]">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold">Location</p>
                  <p className="mt-1 text-white/65">
                    Somalia
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
              SEND A MESSAGE
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[var(--color-primary)]">
              How can we help?
            </h2>

            <form className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3.5 text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3.5 text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3.5 text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3.5 text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
                />
              </div>

              <button
                type="button"
                className="group w-full rounded-full bg-[var(--color-primary)] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] hover:shadow-lg"
              >
                Send Message
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Contact;