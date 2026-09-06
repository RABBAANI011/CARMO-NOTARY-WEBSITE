import { Link } from "react-router-dom";

function Pricing() {
  const pricing = [
    {
      title: "Document Notarization",
      description:
        "For documents that require a formal notarial act, identity verification, and signature acknowledgment.",
      price: "Contact Us",
      popular: true,
    },
    {
      title: "Affidavits",
      description:
        "Professional notarization support for affidavits and sworn statements.",
      price: "Contact Us",
      popular: false,
    },
    {
      title: "Power of Attorney",
      description:
        "Notarization for documents authorizing another person to act on your behalf.",
      price: "Contact Us",
      popular: false,
    },
    {
      title: "Contracts & Agreements",
      description:
        "Notarization services for agreements and contracts requiring formal acknowledgment.",
      price: "Contact Us",
      popular: false,
    },
    {
      title: "Certified Copies",
      description:
        "Assistance with certified copy requirements where the service is applicable.",
      price: "Contact Us",
      popular: false,
    },
    {
      title: "Document Verification",
      description:
        "Professional support for document verification and related formal documentation needs.",
      price: "Contact Us",
      popular: false,
    },
  ];

  const included = [
    "Professional and respectful service",
    "Clear appointment guidance",
    "Identity and document review",
    "Careful handling of important documents",
    "Confidential client experience",
    "Clear next steps when applicable",
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F3FBEF]">
        <div className="mx-auto grid min-h-[520px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#BFE8B8] bg-white px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2BC016]" />

              <span className="text-sm font-bold text-[#176B16]">
                Pricing
              </span>
            </div>

            <h1 className="mt-6 max-w-2xl font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-[1.08] tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
              Clear service options.
              <span className="block text-[#2BC016]">
                No unnecessary complexity.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#526B82]">
              Every notarization is different. We provide clear service
              information and discuss the applicable fee before your
              appointment.
            </p>

            <Link
              to="/book-appointment"
              className="mt-8 inline-flex items-center rounded-lg bg-[#2BC016] px-7 py-4 font-bold text-white shadow-lg shadow-green-100 transition hover:bg-[#176B16]"
            >
              Book an Appointment →
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#DDF5D8]" />

            <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85"
                alt="Professional documents and pricing"
                className="h-[360px] w-full object-cover sm:h-[410px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
            Our Services
          </p>

          <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
            Choose the service that fits your needs.
          </h2>

          <p className="mt-5 leading-8 text-[#64748B]">
            We keep our pricing approach simple. Select the service you need,
            then contact us or book an appointment to confirm the applicable
            fee for your specific document.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map((item) => (
              <article
                key={item.title}
                className={`relative rounded-3xl border bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  item.popular
                    ? "border-[#2BC016] ring-1 ring-[#2BC016]/20"
                    : "border-slate-200"
                }`}
              >
                {item.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#EAF9E7] px-3 py-1 text-xs font-bold text-[#176B16]">
                    Popular
                  </span>
                )}

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF9E7] text-xl font-bold text-[#2BC016]">
                  ✓
                </div>

                <h3 className="mt-6 max-w-[230px] font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#102A43]">
                  {item.title}
                </h3>

                <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#64748B]">
                  {item.description}
                </p>

                <div className="mt-7 border-t border-slate-100 pt-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">
                    Pricing
                  </p>

                  <p className="mt-1 font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#102A43]">
                    {item.price}
                  </p>
                </div>

                <Link
                  to="/book-appointment"
                  className="mt-7 flex items-center justify-center rounded-lg border border-[#2BC016] px-5 py-3 text-sm font-bold text-[#176B16] transition hover:bg-[#2BC016] hover:text-white"
                >
                  Book This Service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              What You Can Expect
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl">
              A professional experience from appointment to completion.
            </h2>

            <p className="mt-5 leading-8 text-[#64748B]">
              Our goal is to make your appointment clear, organized, and
              professional while giving your documents the attention they
              deserve.
            </p>

            <Link
              to="/how-it-works"
              className="mt-8 inline-flex font-bold text-[#2BC016] hover:text-[#176B16]"
            >
              See how the process works →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {included.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2BC016] text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="text-sm font-semibold leading-6 text-[#334E68]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT NOTE */}
      <section className="bg-[#102A43] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2BC016] text-2xl font-bold text-white">
            i
          </div>

          <h2 className="mt-5 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-white sm:text-3xl">
            Pricing may depend on your specific document.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            The applicable fee can depend on the type of notarization,
            number of documents, number of signers, and other relevant
            requirements. Contact CARMO NOTARY to confirm your specific
            service and fee.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex rounded-lg bg-white px-7 py-3.5 font-bold text-[#176B16] transition hover:bg-[#2BC016] hover:text-white"
          >
            Contact CARMO NOTARY
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Pricing Questions
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              Common questions about pricing.
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            <details className="p-6">
              <summary className="cursor-pointer list-none font-bold text-[#102A43]">
                Is every notarization the same price?
              </summary>

              <p className="mt-3 leading-7 text-[#64748B]">
                Not necessarily. The applicable fee may depend on the service,
                documents, signers, and other requirements.
              </p>
            </details>

            <details className="border-t border-slate-200 p-6">
              <summary className="cursor-pointer list-none font-bold text-[#102A43]">
                Can I confirm the price before my appointment?
              </summary>

              <p className="mt-3 leading-7 text-[#64748B]">
                Yes. Contact CARMO NOTARY with the relevant details so the
                applicable service and fee can be confirmed.
              </p>
            </details>

            <details className="border-t border-slate-200 p-6">
              <summary className="cursor-pointer list-none font-bold text-[#102A43]">
                How do I book a service?
              </summary>

              <p className="mt-3 leading-7 text-[#64748B]">
                Use the Book an Appointment page to begin the appointment
                process.
              </p>
            </details>
          </div>

          <div className="mt-7 text-center">
            <Link
              to="/faq"
              className="font-bold text-[#2BC016] hover:text-[#176B16]"
            >
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2BC016] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white sm:text-4xl">
            Ready to schedule your notarization?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Choose your service and take the next step with CARMO NOTARY.
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

export default Pricing;