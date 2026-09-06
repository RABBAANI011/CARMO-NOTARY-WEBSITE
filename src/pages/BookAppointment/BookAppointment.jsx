import { Link } from "react-router-dom";

function BookAppointment() {
  const services = [
    "Document Notarization",
    "Affidavits",
    "Power of Attorney",
    "Contracts & Agreements",
    "Certified Copies",
    "Document Verification",
    "Other",
  ];

  const preparation = [
    {
      number: "01",
      title: "Bring your document",
      description:
        "Bring the original document or documents that require notarization.",
    },
    {
      number: "02",
      title: "Bring valid identification",
      description:
        "Have an acceptable identification document ready for identity verification.",
    },
    {
      number: "03",
      title: "Know your requirements",
      description:
        "If another organization gave you instructions for notarization, bring those requirements with you.",
    },
    {
      number: "04",
      title: "Do not sign too early",
      description:
        "Some documents may need to be signed in the presence of the notary. Confirm before signing.",
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F3FBEF]">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#DDF5D8]" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#EAF9E7]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#BFE8B8] bg-white px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2BC016]" />

              <span className="text-sm font-bold text-[#176B16]">
                Book an Appointment
              </span>
            </div>

            <h1 className="mt-6 font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-[1.08] tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
              Request your
              <span className="block text-[#2BC016]">
                notarization appointment.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526B82]">
              Tell us what you need and your preferred appointment details.
              We will use the information to understand your request and
              arrange the next step.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN APPOINTMENT AREA */}
      <section className="bg-[#F8FAFC] py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9 lg:p-10">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
                Appointment Request
              </p>

              <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
                Tell us about your appointment.
              </h2>

              <p className="mt-4 leading-7 text-[#64748B]">
                Complete the form below with the information you currently
                have. Your request can be reviewed before the appointment is
                finalized.
              </p>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-8 space-y-6"
            >
              {/* NAME + PHONE */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-bold text-[#102A43]"
                  >
                    Full Name
                  </label>

                  <input
                    id="fullName"
                    type="text"
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-bold text-[#102A43]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+252 ..."
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-[#102A43]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                />
              </div>

              {/* SERVICE */}
              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold text-[#102A43]"
                >
                  Service Needed
                </label>

                <select
                  id="service"
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                >
                  <option value="" disabled>
                    Select the service you need
                  </option>

                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* DATE + TIME */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-bold text-[#102A43]"
                  >
                    Preferred Date
                  </label>

                  <input
                    id="date"
                    type="date"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="time"
                    className="mb-2 block text-sm font-bold text-[#102A43]"
                  >
                    Preferred Time
                  </label>

                  <input
                    id="time"
                    type="time"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                  />
                </div>
              </div>

              {/* DOCUMENT COUNT */}
              <div>
                <label
                  htmlFor="documents"
                  className="mb-2 block text-sm font-bold text-[#102A43]"
                >
                  Number of Documents
                </label>

                <select
                  id="documents"
                  defaultValue="1"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                >
                  <option value="1">1 document</option>
                  <option value="2">2 documents</option>
                  <option value="3">3 documents</option>
                  <option value="4">4 documents</option>
                  <option value="5+">5 or more documents</option>
                </select>
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[#102A43]"
                >
                  Additional Information
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us anything important about your request..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-xl bg-[#2BC016] px-6 py-4 font-bold text-white shadow-lg shadow-green-100 transition hover:bg-[#176B16]"
              >
                Request Appointment →
              </button>

              <p className="text-center text-xs leading-5 text-[#64748B]">
                This appointment form is currently a frontend interface.
                Appointment submission and confirmation can be connected when
                the backend is implemented.
              </p>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* IMAGE */}
            <div className="relative min-h-[300px] overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                alt="Professional appointment consultation"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#102A43]/45" />

              <div className="relative flex min-h-[300px] flex-col justify-end p-7">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
                  CARMO NOTARY
                </span>

                <h3 className="mt-2 max-w-md font-['Plus_Jakarta_Sans'] text-2xl font-extrabold leading-tight text-white">
                  Come prepared. Leave with clarity.
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-200">
                  We aim to make every appointment organized, professional,
                  and easy to understand.
                </p>
              </div>
            </div>

            {/* WHAT TO BRING */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
                Before You Arrive
              </p>

              <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#102A43]">
                What should you prepare?
              </h2>

              <div className="mt-6 space-y-4">
                {preparation.map((item) => (
                  <div key={item.number} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2BC016] text-xs font-extrabold text-white">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="font-bold text-[#102A43]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-[#64748B]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* IMPORTANT NOTE */}
            <div className="rounded-3xl bg-[#102A43] p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2BC016] text-lg font-extrabold text-white">
                i
              </div>

              <h3 className="mt-5 font-['Plus_Jakarta_Sans'] text-xl font-bold text-white">
                Please bring the complete documents.
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-300">
                If your document has specific instructions from a government
                office, company, court, embassy, or another organization,
                bring those instructions with you when applicable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW THE REQUEST WORKS */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              What Happens Next
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              A simple appointment request process.
            </h2>

            <p className="mt-5 leading-7 text-[#64748B]">
              Once your request process is connected, the information you
              provide will help CARMO NOTARY understand your service needs and
              appointment preferences.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Submit Your Request",
                description:
                  "Provide your contact details, service, preferred date, and other relevant information.",
              },
              {
                number: "02",
                title: "Review & Confirmation",
                description:
                  "Your appointment details can be reviewed and confirmed through the final booking workflow.",
              },
              {
                number: "03",
                title: "Attend Your Appointment",
                description:
                  "Arrive with the required documents and identification ready for the notarization process.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-7"
              >
                <span className="text-sm font-extrabold text-[#2BC016]">
                  {step.number}
                </span>

                <h3 className="mt-5 font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#102A43]">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELP SECTION */}
      <section className="bg-[#F3FBEF] py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Need Help First?
            </p>

            <h2 className="mt-2 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#102A43]">
              Not sure which service you need?
            </h2>

            <p className="mt-2 text-sm leading-6 text-[#64748B]">
              Contact us and tell us what you are trying to accomplish.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 rounded-lg border border-[#176B16] bg-white px-6 py-3.5 font-bold text-[#176B16] transition hover:bg-[#176B16] hover:text-white"
          >
            Contact Us →
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#2BC016] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white sm:text-4xl">
            Your next step starts here.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Complete your appointment request and prepare your documents for a
            professional notarization experience.
          </p>

          <Link
            to="/services"
            className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-bold text-[#176B16] shadow-lg transition hover:bg-[#102A43] hover:text-white"
          >
            Review Our Services →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default BookAppointment;