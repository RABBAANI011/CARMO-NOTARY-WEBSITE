import { Link } from "react-router-dom";

function FAQ() {
  const faqs = [
    {
      question: "What is a notary?",
      answer:
        "A notary is an authorized professional who performs notarial acts such as verifying identity, witnessing signatures, administering oaths where applicable, and completing the required notarial certificate.",
    },
    {
      question: "What should I bring to my appointment?",
      answer:
        "Bring the original document or documents that require notarization and a valid identification document. If you are unsure about what is required for your specific document, contact CARMO NOTARY before your appointment.",
    },
    {
      question: "Do I need an appointment?",
      answer:
        "Appointments are recommended so we can prepare for your visit and provide a smooth service. Use the Book Appointment page to request a suitable time.",
    },
    {
      question: "Can CARMO NOTARY notarize any document?",
      answer:
        "Not every document or situation can be notarized. Requirements can depend on the document, the requested notarial act, identification, signatures, and applicable rules. Contact us if you are unsure.",
    },
    {
      question: "Can I sign my document before coming?",
      answer:
        "Some documents must be signed in the presence of the notary, depending on the type of notarial act. Do not sign a document in advance if you have been instructed that the signature must be witnessed by the notary.",
    },
    {
      question: "How much does notarization cost?",
      answer:
        "Fees can depend on the type of service, number of documents, number of signers, and other requirements. Contact CARMO NOTARY to confirm the applicable fee for your specific request.",
    },
    {
      question: "How long does a notarization appointment take?",
      answer:
        "The time can vary depending on the number and type of documents and whether everything required is ready. Providing complete documents and valid identification can help keep the appointment efficient.",
    },
    {
      question: "Can I notarize documents for someone else?",
      answer:
        "The person whose signature or statement requires notarization generally needs to appear and satisfy the applicable identification and notarial requirements. Contact us if you are arranging an appointment for another person.",
    },
    {
      question: "What if I am not sure whether my document needs notarization?",
      answer:
        "You can contact CARMO NOTARY and explain what type of document you have and what you need to accomplish. We can provide general information about the notarial service and what to prepare.",
    },
    {
      question: "What happens during a notarization appointment?",
      answer:
        "The process may include reviewing the document, confirming the signer's identity, completing the required notarial steps, witnessing or acknowledging the signature where applicable, and completing the notarial certificate.",
    },
  ];

  const categories = [
    {
      number: "01",
      title: "Before Your Appointment",
      description:
        "Know what to prepare, what identification you may need, and how to get ready.",
    },
    {
      number: "02",
      title: "During Notarization",
      description:
        "Understand the basic steps that take place when you meet with the notary.",
    },
    {
      number: "03",
      title: "Services & Pricing",
      description:
        "Learn about available services and how applicable fees are determined.",
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F3FBEF]">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#DDF5D8]" />
        <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#EAF9E7]" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-[#BFE8B8] bg-white px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2BC016]" />

              <span className="text-sm font-bold text-[#176B16]">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="mt-6 font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-[1.08] tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
              Answers to your
              <span className="block text-[#2BC016]">
                most common questions.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526B82]">
              Find clear information about notarization, appointments,
              documents, identification, services, and pricing.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                className="rounded-lg bg-[#2BC016] px-7 py-4 font-bold text-white shadow-lg shadow-green-100 transition hover:bg-[#176B16]"
              >
                Book an Appointment →
              </Link>

              <Link
                to="/contact"
                className="rounded-lg border border-[#176B16] bg-white px-7 py-4 font-bold text-[#176B16] transition hover:bg-[#176B16] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.number}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#BFE8B8] hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-extrabold text-[#2BC016]">
                    {category.number}
                  </span>

                  <div className="h-2.5 w-2.5 rounded-full bg-[#2BC016]" />
                </div>

                <h2 className="mt-5 font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#102A43]">
                  {category.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Questions & Answers
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              Everything you need to know.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#64748B]">
              We want your notarization experience to be straightforward.
              Here are answers to some of the questions clients ask most
              often.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[#BFE8B8] hover:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF9E7] text-xs font-extrabold text-[#176B16]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="font-['Plus_Jakarta_Sans'] text-base font-bold leading-7 text-[#102A43] sm:text-lg">
                      {faq.question}
                    </span>
                  </div>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl text-[#2BC016] transition group-open:rotate-45">
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 pl-[4.5rem]">
                  <p className="max-w-3xl leading-7 text-[#64748B]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEED MORE HELP */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] bg-[#102A43] lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
                Still Have Questions?
              </p>

              <h2 className="mt-4 max-w-xl font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                We are here to help you prepare.
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-300">
                If you cannot find the answer you are looking for, contact
                CARMO NOTARY before your appointment. We can help you
                understand what to prepare for your notarization request.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="rounded-lg bg-[#2BC016] px-6 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#176B16]"
                >
                  Contact Us
                </Link>

                <Link
                  to="/services"
                  className="rounded-lg border border-white/30 px-6 py-3.5 font-bold text-white transition hover:border-[#2BC016] hover:bg-[#2BC016]"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative min-h-[300px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85"
                alt="Professional document consultation"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[#102A43]/35" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/95 p-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2BC016]">
                  CARMO NOTARY
                </p>

                <p className="mt-2 font-semibold leading-6 text-[#102A43]">
                  Professional service. Clear guidance. Careful attention to
                  your documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#2BC016] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white sm:text-4xl">
            Ready to move forward?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Prepare your documents and book an appointment with CARMO NOTARY.
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

export default FAQ;