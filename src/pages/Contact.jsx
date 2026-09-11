import { Link } from "react-router-dom";

function Contact() {
  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#063c2f] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9a96e]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex rounded-full border border-[#c9a96e]/40 bg-white/5 px-4 py-2 text-sm font-semibold text-[#e8d3a5]">
            Contact CARMO
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            We’re Here to Help
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg">
            Have a question about our services, documents, or appointments?
            Get in touch with the CARMO team and we’ll help you find the right
            next step.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Information */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
              Get in Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063c2f] sm:text-4xl">
              Contact Information
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Whether you need general information or help preparing for an
              appointment, CARMO is ready to assist you.
            </p>

            <div className="mt-8 space-y-4">
              {/* Phone */}
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063c2f] text-lg text-white">
                  ☎
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Phone
                  </p>

                  <p className="mt-1 font-bold text-[#063c2f]">
                    +252 63 000 0000
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Available during business hours
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063c2f] text-lg text-white">
                  @
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 font-bold text-[#063c2f]">
                    info@carmo.so
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Send us your questions anytime
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063c2f] text-lg text-white">
                  📍
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Location
                  </p>

                  <p className="mt-1 font-bold text-[#063c2f]">
                    Somalia
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Office location details can be confirmed before your visit
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#063c2f] text-lg text-white">
                  ◷
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Working Hours
                  </p>

                  <p className="mt-1 font-bold text-[#063c2f]">
                    Monday – Saturday
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Please contact us to confirm availability
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-emerald-950/10 bg-white p-7 shadow-sm sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
              Send a Message
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#063c2f] sm:text-3xl">
              How Can We Help?
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              Fill out the form below and provide a few details about your
              question.
            </p>

            <form className="mt-8 space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-[#063c2f]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                />
              </div>

              {/* Email */}
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

              {/* Phone */}
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

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-[#063c2f]"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  defaultValue=""
                  className="w-full rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm text-slate-600 outline-none transition focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="general">General Question</option>
                  <option value="services">Notary Services</option>
                  <option value="documents">Document Requirements</option>
                  <option value="appointment">Appointment</option>
                  <option value="pricing">Pricing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-[#063c2f]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-xl border border-emerald-950/15 bg-[#faf9f6] px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#c9a96e] focus:ring-2 focus:ring-[#c9a96e]/20"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-xl bg-[#063c2f] px-6 py-3.5 font-bold text-white transition hover:bg-emerald-900"
              >
                Send Message
              </button>

              <p className="text-center text-xs leading-5 text-slate-400">
                This form is currently frontend-only. Message submission will
                be connected when the backend is implemented.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-950/10 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                Ask a Question
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Contact us if you need clarification about a service or
                document requirement.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-950/10 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                Prepare Your Documents
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Make sure you have the relevant documents and identification
                ready before your appointment.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-950/10 bg-white p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                Book Your Visit
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Choose a convenient appointment and let CARMO help you through
                the notarization process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
              Visit CARMO
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#063c2f] sm:text-4xl">
              Plan Your Visit With Confidence
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Before visiting, we recommend confirming the office location,
              availability, and documents required for your specific service.
            </p>

            <Link
              to="/how-it-works"
              className="mt-7 inline-flex items-center font-bold text-[#063c2f] transition hover:text-[#a37d3c]"
            >
              See How It Works
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="flex min-h-[300px] items-center justify-center rounded-3xl border border-emerald-950/10 bg-[#f5f0e6] p-8 text-center">
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#063c2f] text-2xl text-white">
                📍
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                CARMO Office
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Somalia
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Exact office location can be confirmed before your visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#063c2f] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8d3a5]">
            Ready to Get Started?
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Book Your Notary Appointment
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-emerald-50/75">
            Skip the uncertainty and start with a clear, organized
            appointment process.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center rounded-xl bg-[#c9a96e] px-7 py-3.5 font-bold text-[#063c2f] transition hover:bg-[#e0c58e]"
            >
              Book Appointment
              <span className="ml-2">→</span>
            </Link>

            <Link
              to="/faq"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;