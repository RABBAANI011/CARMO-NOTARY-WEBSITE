import { Link } from "react-router-dom";

function BookAppointment() {
  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#063c2f] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9a96e]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex rounded-full border border-[#c9a96e]/40 bg-white/5 px-4 py-2 text-sm font-semibold text-[#e8d3a5]">
            Book an Appointment
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Schedule Your Notary Service
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg">
            Tell us what you need and choose a convenient date and time.
            We’ll help make your notarization process clear and organized.
          </p>
        </div>
      </section>

      {/* Main Booking Area */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Form */}
          <div className="rounded-3xl border border-emerald-950/10 bg-white p-7 shadow-sm sm:p-9">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
                Appointment Details
              </p>

              <h2 className="mt-3 text-3xl font-bold text-[#063c2f]">
                Tell Us About Your Visit
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Complete the form below with your preferred service and
                appointment details.
              </p>
            </div>

            <form className="mt-8 space-y-6">
              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-[#063c2f]"
                >
                  Select a Service
                </label>

                <select
                  id="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option value="personal">
                    Personal Documents
                  </option>
                  <option value="business">
                    Business Documents
                  </option>
                  <option value="official">
                    Official Documents
                  </option>
                  <option value="special">
                    Special Document Requirements
                  </option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-[#063c2f]"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                />
              </div>

              {/* Phone + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#063c2f]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+252 ..."
                    className="w-full rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#063c2f]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                  />
                </div>
              </div>

              {/* Date + Time */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-semibold text-[#063c2f]"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="date"
                    type="date"
                    className="w-full rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-sm font-semibold text-[#063c2f]"
                  >
                    Preferred Time
                  </label>

                  <input
                    id="time"
                    type="time"
                    className="w-full rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                  />
                </div>
              </div>

              {/* Number of Documents */}
              <div>
                <label
                  htmlFor="documents"
                  className="mb-2 block text-sm font-semibold text-[#063c2f]"
                >
                  Number of Documents
                </label>

                <select
                  id="documents"
                  defaultValue=""
                  className="w-full rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                >
                  <option value="" disabled>
                    Select number of documents
                  </option>
                  <option value="1">1 document</option>
                  <option value="2">2 documents</option>
                  <option value="3">3 documents</option>
                  <option value="4">4 documents</option>
                  <option value="5+">5 or more documents</option>
                </select>
              </div>

              {/* Notes */}
              <div>
                <label
                  htmlFor="notes"
                  className="mb-2 block text-sm font-semibold text-[#063c2f]"
                >
                  Additional Notes
                </label>

                <textarea
                  id="notes"
                  rows="5"
                  placeholder="Tell us anything important about your request..."
                  className="w-full resize-none rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                className="w-full rounded-xl bg-[#063c2f] px-6 py-3.5 font-bold text-white transition hover:bg-emerald-900"
              >
                Request Appointment
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                Appointment requests are currently frontend-only. Online
                submission will be connected when the backend is implemented.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* What to Bring */}
            <div className="rounded-3xl bg-[#063c2f] p-8 text-white">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9a96e] font-bold text-[#063c2f]">
                ✓
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                What to Bring
              </h2>

              <p className="mt-3 text-sm leading-7 text-emerald-50/75">
                Preparing your documents before the appointment can make your
                visit smoother and more efficient.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "Original documents",
                  "Valid identification when required",
                  "Supporting documents related to your request",
                  "Any specific instructions you have received",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c9a96e] text-xs font-bold text-[#063c2f]">
                      ✓
                    </span>

                    <span className="text-emerald-50/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Before Your Appointment */}
            <div className="rounded-3xl border border-emerald-950/10 bg-[#f5f0e6] p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
                Before Your Visit
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#063c2f]">
                A Few Helpful Tips
              </h2>

              <div className="mt-6 space-y-5">
                <div>
                  <h3 className="font-bold text-[#063c2f]">
                    01. Choose the right service
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Review our services page if you are unsure which category
                    best matches your document.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#063c2f]">
                    02. Prepare your documents
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Have the relevant documents ready before arriving for your
                    appointment.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-[#063c2f]">
                    03. Confirm your details
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Make sure your contact information and preferred
                    appointment time are correct.
                  </p>
                </div>
              </div>
            </div>

            {/* Need Help */}
            <div className="rounded-3xl border border-[#c9a96e]/40 bg-white p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                ?
              </div>

              <h2 className="mt-5 text-xl font-bold text-[#063c2f]">
                Not Sure What You Need?
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Check our frequently asked questions or contact CARMO before
                booking if you need additional guidance.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <Link
                  to="/faq"
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-950/10 px-5 py-3 text-sm font-bold text-[#063c2f] transition hover:bg-[#f5f0e6]"
                >
                  View FAQ
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#063c2f] px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-900"
                >
                  Contact CARMO
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
              Simple Process
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#063c2f] sm:text-4xl">
              What Happens Next?
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Once your appointment request is prepared, the next steps can be
              confirmed with CARMO.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-950/10 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                Submit Your Request
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Provide your service, contact information, and preferred
                appointment details.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-950/10 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                Confirm Details
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Appointment details and any important requirements can be
                clarified before your visit.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-950/10 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                Visit CARMO
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Arrive prepared with the relevant documents and complete your
                notarization service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#063c2f] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8d3a5]">
            Need Assistance?
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Questions Before Your Appointment?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-emerald-50/75">
            Our FAQ and Contact pages are available if you need more
            information before submitting your appointment request.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              View FAQ
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#c9a96e] px-7 py-3.5 font-bold text-[#063c2f] transition hover:bg-[#e0c58e]"
            >
              Contact CARMO
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BookAppointment;