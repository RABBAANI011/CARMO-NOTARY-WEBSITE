function BookAppointment() {
  return (
    <section className="min-h-screen bg-[var(--color-background)] px-6 py-24">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
            CARMO
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-[var(--color-primary)] md:text-6xl">
            Book an Appointment
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            Choose a convenient time for your notary service.
            We will guide you through the process and help you
            prepare for your appointment.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="+252..."
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Service
              </label>

              <select
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="document">
                  Document Notarization
                </option>
                <option value="business">
                  Business Documents
                </option>
                <option value="personal">
                  Personal Documents
                </option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
                Preferred Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
              />
            </div>

          </div>

          <div className="mt-6">
            <label className="mb-2 block text-sm font-medium text-[var(--color-text)]">
              Additional Information
            </label>

            <textarea
              rows="5"
              placeholder="Tell us briefly what you need help with..."
              className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] px-4 py-3 text-[var(--color-text)] outline-none transition focus:border-[var(--color-secondary)]"
            />
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full bg-[var(--color-primary)] px-6 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary-dark)] hover:shadow-lg"
          >
            Request Appointment →
          </button>
        </div>

      </div>
    </section>
  );
}

export default BookAppointment;