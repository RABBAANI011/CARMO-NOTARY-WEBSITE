import { useState } from "react";
import { Link } from "react-router-dom";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      title: "General Questions",
      questions: [
        {
          question: "What is CARMO?",
          answer:
            "CARMO is a professional notary service designed to make document notarization simple, clear, and convenient for individuals, businesses, and organizations in Somalia.",
        },
        {
          question: "What types of documents can CARMO notarize?",
          answer:
            "CARMO supports a range of personal, business, and official documents. The exact requirements depend on the type and purpose of your document.",
        },
        {
          question: "Do I need an appointment?",
          answer:
            "Booking an appointment is recommended because it helps us organize your visit and prepare for the service you need.",
        },
      ],
    },
    {
      title: "Documents & Requirements",
      questions: [
        {
          question: "What should I bring to my appointment?",
          answer:
            "Bring the original documents that need to be notarized and any identification or supporting documents that may be relevant to your request.",
        },
        {
          question: "Can I bring a document that is not listed on the website?",
          answer:
            "Yes. If you have a document with specific requirements, contact CARMO before your appointment so we can guide you on the appropriate process.",
        },
        {
          question: "Should I sign my document before coming?",
          answer:
            "Some documents may need to be signed in the presence of the notary. If you are unsure, contact CARMO before signing so you can receive the correct guidance.",
        },
      ],
    },
    {
      title: "Appointments",
      questions: [
        {
          question: "How do I book an appointment?",
          answer:
            "You can use the Book Appointment page to submit your preferred service, date, time, and contact information.",
        },
        {
          question: "Can I change my appointment?",
          answer:
            "If you need to change your appointment, contact CARMO as soon as possible so we can help you arrange another suitable time.",
        },
        {
          question: "How long does an appointment take?",
          answer:
            "The time required depends on the type and number of documents. Simple requests may be completed quickly, while more detailed requests may require additional time.",
        },
      ],
    },
    {
      title: "Notarization & Pricing",
      questions: [
        {
          question: "How much does notarization cost?",
          answer:
            "Pricing depends on the type of service and document. Visit the Pricing page for starting prices and more information about the pricing structure.",
        },
        {
          question: "Can the final price be different from the starting price?",
          answer:
            "Yes. Certain documents or requests may require additional review or specialized handling. Any applicable cost should be clarified before proceeding.",
        },
        {
          question: "What happens after my document is notarized?",
          answer:
            "After the notarization process is completed, you receive your notarized document according to the service provided. CARMO will guide you through the next steps when necessary.",
        },
      ],
    },
  ];

  let questionIndex = 0;

  return (
    <main className="overflow-hidden bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#063c2f] px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9a96e]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl text-center">
          <span className="inline-flex rounded-full border border-[#c9a96e]/40 bg-white/5 px-4 py-2 text-sm font-semibold text-[#e8d3a5]">
            Frequently Asked Questions
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Answers Before You Get Started
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-emerald-50/80 sm:text-lg">
            Find clear answers to common questions about CARMO services,
            documents, appointments, pricing, and the notarization process.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
            Need to Know
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#063c2f] sm:text-4xl">
            Everything You Need to Know
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            We believe a professional service should also be easy to
            understand. Browse the questions below to learn more about how
            CARMO works.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="px-6 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-12">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <div className="mb-5 flex items-center gap-4">
                <div className="h-1 w-10 rounded-full bg-[#c9a96e]" />

                <h2 className="text-2xl font-bold text-[#063c2f]">
                  {category.title}
                </h2>
              </div>

              <div className="space-y-3">
                {category.questions.map((item) => {
                  const currentIndex = questionIndex++;
                  const isOpen = openIndex === currentIndex;

                  return (
                    <div
                      key={item.question}
                      className={`overflow-hidden rounded-2xl border transition ${
                        isOpen
                          ? "border-[#c9a96e]/50 bg-[#f5f0e6]"
                          : "border-emerald-950/10 bg-white"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() =>
                          setOpenIndex(isOpen ? null : currentIndex)
                        }
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-base font-bold text-[#063c2f] sm:text-lg">
                          {item.question}
                        </span>

                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#063c2f] text-lg text-white transition-transform duration-300 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                        >
                          +
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-6 leading-8 text-slate-600">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-[#f5f0e6] px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#a37d3c]">
              Explore CARMO
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#063c2f] sm:text-4xl">
              Find More Information
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Link
              to="/services"
              className="group rounded-2xl border border-emerald-950/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                01
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                Our Services
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Explore the different notary services available through CARMO.
              </p>

              <span className="mt-5 inline-block font-bold text-[#a37d3c] transition group-hover:translate-x-1">
                View Services →
              </span>
            </Link>

            <Link
              to="/pricing"
              className="group rounded-2xl border border-emerald-950/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                02
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                Pricing
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Learn about our pricing structure and service starting prices.
              </p>

              <span className="mt-5 inline-block font-bold text-[#a37d3c] transition group-hover:translate-x-1">
                View Pricing →
              </span>
            </Link>

            <Link
              to="/how-it-works"
              className="group rounded-2xl border border-emerald-950/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#063c2f] font-bold text-white">
                03
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#063c2f]">
                How It Works
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                See the simple process from choosing a service to completing
                your notarization.
              </p>

              <span className="mt-5 inline-block font-bold text-[#a37d3c] transition group-hover:translate-x-1">
                Learn More →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#063c2f] px-8 py-12 text-center text-white sm:px-12">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#c9a96e] text-xl font-bold text-[#063c2f]">
            ?
          </div>

          <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
            Still Have a Question?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-emerald-50/75">
            If you cannot find the answer you are looking for, our team is
            ready to help you understand the service and next steps.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white px-6 py-3 font-bold text-[#063c2f] transition hover:bg-[#f5f0e6]"
            >
              Contact CARMO
            </Link>

            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center rounded-xl bg-[#c9a96e] px-6 py-3 font-bold text-[#063c2f] transition hover:bg-[#e0c58e]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default FAQ;