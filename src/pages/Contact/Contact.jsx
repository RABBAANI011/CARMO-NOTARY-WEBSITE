import { Link } from "react-router-dom";

function Contact() {
  const contactInfo = [
    {
      title: "Call Us",
      value: "+252 XX XXX XXXX",
      description: "Speak with our team about your notarization needs.",
      icon: "☎",
    },
    {
      title: "Email Us",
      value: "info@carmonotary.com",
      description: "Send us your questions or service inquiries.",
      icon: "✉",
    },
    {
      title: "Visit Us",
      value: "CARMO NOTARY Office",
      description: "Visit our office for your scheduled appointment.",
      icon: "⌖",
    },
  ];

  const hours = [
    ["Monday – Thursday", "8:00 AM – 5:00 PM"],
    ["Friday", "2:00 PM – 5:00 PM"],
    ["Saturday", "9:00 AM – 1:00 PM"],
    ["Sunday", "Closed"],
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
                Contact CARMO NOTARY
              </span>
            </div>

            <h1 className="mt-6 font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-[1.08] tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
              Let’s make your
              <span className="block text-[#2BC016]">
                notarization simple.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526B82]">
              Have a question, need to confirm a service, or want to prepare
              for an appointment? Get in touch with CARMO NOTARY.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                className="rounded-lg bg-[#2BC016] px-7 py-4 font-bold text-white shadow-lg shadow-green-100 transition hover:bg-[#176B16]"
              >
                Book an Appointment →
              </Link>

              <Link
                to="/services"
                className="rounded-lg border border-[#176B16] bg-white px-7 py-4 font-bold text-[#176B16] transition hover:bg-[#176B16] hover:text-white"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#BFE8B8] hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF9E7] text-xl text-[#2BC016]">
                  {item.icon}
                </div>

                <h2 className="mt-5 font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#102A43]">
                  {item.title}
                </h2>

                <p className="mt-2 font-semibold text-[#176B16]">
                  {item.value}
                </p>

                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          {/* FORM */}
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
                Send a Message
              </p>

              <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
                How can we help?
              </h2>

              <p className="mt-4 leading-7 text-[#64748B]">
                Fill out the form below and provide a few details about what
                you need. Our team can use this information to understand your
                request.
              </p>
            </div>

            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-8 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-[#102A43]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
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

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-bold text-[#102A43]"
                >
                  Service Needed
                </label>

                <select
                  id="service"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Document Notarization</option>
                  <option>Affidavit</option>
                  <option>Power of Attorney</option>
                  <option>Contracts & Agreements</option>
                  <option>Certified Copies</option>
                  <option>Document Verification</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-[#102A43]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Tell us briefly what you need help with..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-[#102A43] outline-none transition placeholder:text-slate-400 focus:border-[#2BC016] focus:ring-4 focus:ring-green-50"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-[#2BC016] px-6 py-4 font-bold text-white shadow-lg shadow-green-100 transition hover:bg-[#176B16]"
              >
                Send Message →
              </button>

              <p className="text-center text-xs leading-5 text-[#64748B]">
                This form is currently a frontend interface. Online message
                delivery can be connected later.
              </p>
            </form>
          </div>

          {/* SIDE INFORMATION */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
                Visit CARMO NOTARY
              </p>

              <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl">
                Professional service starts with clear communication.
              </h2>

              <p className="mt-5 leading-8 text-[#64748B]">
                Whether you need a single document notarized or have questions
                about preparing for an appointment, we want to make the next
                step easy to understand.
              </p>
            </div>

            {/* HOURS */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF9E7] text-[#2BC016]">
                  ◷
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#2BC016]">
                    Office Hours
                  </p>

                  <h3 className="mt-1 font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#102A43]">
                    When to visit
                  </h3>
                </div>
              </div>

              <div className="mt-6 divide-y divide-slate-100">
                {hours.map(([day, time]) => (
                  <div
                    key={day}
                    className="flex items-center justify-between gap-5 py-3"
                  >
                    <span className="text-sm font-medium text-[#526B82]">
                      {day}
                    </span>

                    <span className="text-right text-sm font-bold text-[#102A43]">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs leading-5 text-[#64748B]">
                Hours shown are for website presentation and should be
                confirmed with CARMO NOTARY before visiting.
              </p>
            </div>

            {/* MAP / LOCATION */}
            <div className="relative min-h-[280px] overflow-hidden rounded-3xl bg-[#102A43]">
              <img
                src="https://images.unsplash.com/photo-1524666041070-9e7e5b1a6b7d?auto=format&fit=crop&w=1200&q=85"
                alt="City location"
                className="absolute inset-0 h-full w-full object-cover opacity-45"
              />

              <div className="absolute inset-0 bg-[#102A43]/55" />

              <div className="relative flex min-h-[280px] flex-col justify-end p-7">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
                  Location
                </span>

                <h3 className="mt-2 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-white">
                  CARMO NOTARY Office
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
                  Add the exact office address here once the final business
                  location is confirmed.
                </p>

                <button
                  type="button"
                  className="mt-5 w-fit rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#176B16] transition hover:bg-[#2BC016] hover:text-white"
                >
                  Get Directions →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO INCLUDE */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
                Before You Contact Us
              </p>

              <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl">
                A few details can help us assist you faster.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-[#64748B]">
                When contacting us, it can be helpful to mention the type of
                document, the service you believe you need, and whether you
                already have a preferred appointment time.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Type of document",
                "Service required",
                "Number of documents",
                "Preferred appointment time",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2BC016] text-sm font-extrabold text-white">
                    {index + 1}
                  </span>

                  <span className="text-sm font-bold text-[#334E68]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2BC016] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white sm:text-4xl">
            Prefer to book directly?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Go straight to our appointment page and start your request.
          </p>

          <Link
            to="/book-appointment"
            className="mt-8 inline-flex rounded-lg bg-white px-8 py-4 font-bold text-[#176B16] shadow-lg transition hover:bg-[#102A43] hover:text-white"
          >
            Book an Appointment →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Contact;