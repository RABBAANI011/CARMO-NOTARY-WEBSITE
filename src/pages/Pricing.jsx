import { Link } from "react-router-dom";

function Pricing() {
  const pricingPlans = [
    {
      title: "Basic Notarization",
      subtitle: "For simple personal documents",
      price: "Starting from $10",
      features: [
        "Document review",
        "Standard notarization",
        "Signature verification",
        "Clear service guidance",
      ],
    },
    {
      title: "Business Documents",
      subtitle: "For companies and organizations",
      price: "Starting from $20",
      features: [
        "Business document review",
        "Notarization support",
        "Multiple signatures",
        "Professional guidance",
      ],
      featured: true,
    },
    {
      title: "Special Documents",
      subtitle: "For documents with specific requirements",
      price: "Custom Pricing",
      features: [
        "Document assessment",
        "Requirement guidance",
        "Notarization support",
        "Personalized assistance",
      ],
    },
  ];

  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#063c2f] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9a96e]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex rounded-full border border-[#c9a96e]/40 bg-white/5 px-4 py-2 text-sm font-semibold text-[#e8d3a5]">
            Simple & Transparent
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Clear Pricing. No Unnecessary Surprises.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg">
            CARMO provides straightforward notary services with pricing
            designed to make the process simple, clear, and convenient.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
            Our Pricing Structure
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063c2f] sm:text-4xl">
            Choose the Service That Fits Your Needs
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            The final cost may depend on the type of document, number of
            signatures, and any specific requirements. We keep our pricing
            transparent so you know what to expect before your appointment.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-3xl border p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? "border-[#c9a96e] bg-[#063c2f] text-white shadow-lg"
                  : "border-emerald-950/10 bg-white"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-6 top-6 rounded-full bg-[#c9a96e] px-3 py-1 text-xs font-bold text-[#063c2f]">
                  Popular
                </div>
              )}

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c9a96e]/15 text-xl font-bold text-[#a37d3c]">
                ✓
              </div>

              <h3
                className={`mt-6 text-2xl font-bold ${
                  plan.featured ? "text-white" : "text-[#063c2f]"
                }`}
              >
                {plan.title}
              </h3>

              <p
                className={`mt-3 text-sm leading-6 ${
                  plan.featured ? "text-emerald-50/70" : "text-slate-500"
                }`}
              >
                {plan.subtitle}
              </p>

              <div
                className={`mt-7 border-y py-5 ${
                  plan.featured
                    ? "border-white/10"
                    : "border-emerald-950/10"
                }`}
              >
                <p
                  className={`text-2xl font-bold ${
                    plan.featured ? "text-[#e8d3a5]" : "text-[#063c2f]"
                  }`}
                >
                  {plan.price}
                </p>
              </div>

              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6"
                  >
                    <span
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        plan.featured
                          ? "bg-[#c9a96e] text-[#063c2f]"
                          : "bg-emerald-50 text-[#063c2f]"
                      }`}
                    >
                      ✓
                    </span>

                    <span
                      className={
                        plan.featured
                          ? "text-emerald-50/80"
                          : "text-slate-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to="/book-appointment"
                className={`mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-bold transition ${
                  plan.featured
                    ? "bg-[#c9a96e] text-[#063c2f] hover:bg-[#e0c58e]"
                    : "bg-[#063c2f] text-white hover:bg-emerald-900"
                }`}
              >
                Book Appointment
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
              What You Receive
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063c2f] sm:text-4xl">
              More Than Just a Signature
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              CARMO focuses on making your notarization experience organized,
              professional, and easy to understand from start to finish.
            </p>

            <Link
              to="/services"
              className="mt-7 inline-flex items-center font-bold text-[#063c2f] transition hover:text-[#a37d3c]"
            >
              Explore Our Services
              <span className="ml-2">→</span>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Professional Review",
                text: "Your documents are reviewed according to the selected service.",
              },
              {
                title: "Clear Guidance",
                text: "We explain the process and help you understand the next steps.",
              },
              {
                title: "Secure Handling",
                text: "We treat your documents and information with care and professionalism.",
              },
              {
                title: "Convenient Process",
                text: "Appointments help keep your visit organized and efficient.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-emerald-950/10 bg-white p-6"
              >
                <div className="mb-4 h-2 w-10 rounded-full bg-[#c9a96e]" />

                <h3 className="text-lg font-bold text-[#063c2f]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl border border-[#c9a96e]/40 bg-white p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#c9a96e]/20 text-xl font-bold text-[#a37d3c]">
              i
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#063c2f]">
                Important Pricing Note
              </h2>

              <p className="mt-3 leading-8 text-slate-600">
                Prices shown above are starting estimates. Certain documents
                or requests may require additional review or specialized
                handling. If your request has specific requirements, CARMO
                will clarify the expected service cost before proceeding.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="bg-[#063c2f] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#e8d3a5]">
              Still Have Questions?
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Need More Information Before Booking?
            </h2>

            <p className="mt-5 leading-8 text-emerald-50/75">
              Visit our FAQ page for answers to common questions about
              appointments, documents, services, and the notarization process.
            </p>
          </div>

          <Link
            to="/faq"
            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white px-6 py-3 font-bold text-[#063c2f] transition hover:bg-[#f5f0e6]"
          >
            Visit FAQ
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#f5f0e6] px-8 py-12 text-center sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
            Ready to Get Started?
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#063c2f] sm:text-4xl">
            Book Your Notary Appointment
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">
            Choose your service, prepare your documents, and schedule a
            convenient appointment with CARMO.
          </p>

          <Link
            to="/book-appointment"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#063c2f] px-7 py-3.5 font-bold text-white transition hover:bg-emerald-900"
          >
            Book Appointment
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Pricing;