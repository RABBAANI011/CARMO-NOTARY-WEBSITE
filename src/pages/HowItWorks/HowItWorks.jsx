import { Link } from "react-router-dom";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      description:
        "Start by identifying the document or notarization service you need. Our services cover common personal, legal, and business documentation needs.",
    },
    {
      number: "02",
      title: "Book an Appointment",
      description:
        "Choose a convenient appointment time and provide the basic information needed to help us prepare for your visit.",
    },
    {
      number: "03",
      title: "Bring Your Documents",
      description:
        "Bring the original documents that need notarization along with the required identification and any supporting materials.",
    },
    {
      number: "04",
      title: "Complete Your Appointment",
      description:
        "We will guide you through the notarization process and make sure the appointment is handled professionally and clearly.",
    },
  ];

  const preparation = [
    {
      title: "Valid Identification",
      description:
        "Bring an accepted form of identification so your identity can be properly verified.",
    },
    {
      title: "Original Documents",
      description:
        "Bring the documents that require notarization. Avoid signing documents in advance when a signature must be witnessed.",
    },
    {
      title: "Required Information",
      description:
        "Have any relevant names, dates, reference information, or supporting documents ready before your appointment.",
    },
    {
      title: "All Required Parties",
      description:
        "Anyone whose signature or presence is required should attend the appointment when applicable.",
    },
  ];

  const appointmentPoints = [
    "Identity and document requirements are reviewed.",
    "The appropriate notarization procedure is followed.",
    "Required signatures and acknowledgements are completed.",
    "Your documents are handled with care and professionalism.",
  ];

  const reasons = [
    {
      title: "Clear Process",
      description:
        "We keep the experience straightforward so you know what to expect.",
    },
    {
      title: "Professional Service",
      description:
        "Every appointment receives careful attention and a professional approach.",
    },
    {
      title: "Confidentiality",
      description:
        "We respect the privacy and importance of your documents and information.",
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#F3FBEF]">
        <div className="mx-auto grid min-h-[560px] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#BFE8B8] bg-white px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2BC016]" />

              <span className="text-sm font-bold text-[#176B16]">
                How It Works
              </span>
            </div>

            <h1 className="mt-6 max-w-2xl font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-[1.08] tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
              Simple steps.
              <span className="block text-[#2BC016]">
                Professional service.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#526B82]">
              We make the notarization process easy to understand, from
              choosing your service to completing your appointment.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center rounded-lg bg-[#2BC016] px-7 py-4 font-bold text-white shadow-lg shadow-green-100 transition hover:bg-[#176B16]"
              >
                Book an Appointment →
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#2BC016] bg-white px-7 py-4 font-bold text-[#176B16] transition hover:bg-[#2BC016] hover:text-white"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#DDF5D8]" />

            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#E8F8E5]" />

            <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
                alt="Professional consultation"
                className="h-[380px] w-full object-cover sm:h-[430px]"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF9E7] text-xl font-bold text-[#2BC016]">
                    ✓
                  </div>

                  <div>
                    <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#102A43]">
                      Straightforward & Clear
                    </p>

                    <p className="mt-1 text-sm text-[#64748B]">
                      Know what to prepare before your appointment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
            The Process
          </p>

          <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
            From preparation to completion.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#64748B]">
            Our process is designed to remove unnecessary confusion and help
            you arrive prepared for your notarization appointment.
          </p>
        </div>
      </section>

      {/* STEPS */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <article
                key={step.number}
                className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-5xl font-extrabold text-[#DDF5D8] transition group-hover:text-[#2BC016]">
                    {step.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF9E7] text-lg font-bold text-[#2BC016]">
                    →
                  </div>
                </div>

                <h3 className="mt-7 font-['Plus_Jakarta_Sans'] text-2xl font-bold text-[#102A43]">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-lg leading-7 text-[#64748B]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT TO PREPARE */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Before Your Appointment
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl">
              Come prepared and make your appointment easier.
            </h2>

            <p className="mt-5 max-w-xl leading-8 text-[#64748B]">
              A little preparation can help your appointment move smoothly.
              These are some of the things you may need to have ready.
            </p>

            <div className="mt-8 overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85"
                alt="Professional office"
                className="h-[300px] w-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            {preparation.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2BC016] text-sm font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#102A43]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#64748B]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT */}
      <section className="bg-[#102A43] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Your Appointment
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              What happens during the appointment?
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              We focus on keeping the appointment professional, clear, and
              organized while following the appropriate notarization
              requirements.
            </p>

            <Link
              to="/book-appointment"
              className="mt-8 inline-flex rounded-lg bg-[#2BC016] px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#102A43]"
            >
              Schedule Your Appointment →
            </Link>
          </div>

          <div className="space-y-4">
            {appointmentPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2BC016] text-sm font-bold text-white">
                  ✓
                </span>

                <p className="leading-7 text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CARMO */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Why CARMO NOTARY
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              A better experience starts with clarity.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EAF9E7] text-lg font-bold text-[#2BC016]">
                  ✓
                </div>

                <h3 className="mt-5 font-['Plus_Jakarta_Sans'] text-lg font-bold text-[#102A43]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Quick Answers
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              Have questions before you come?
            </h2>
          </div>

          <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200">
            <details className="group p-6">
              <summary className="cursor-pointer list-none font-bold text-[#102A43]">
                What should I bring to my appointment?
              </summary>

              <p className="mt-3 leading-7 text-[#64748B]">
                Bring the documents requiring notarization, valid
                identification, and any supporting materials relevant to your
                document.
              </p>
            </details>

            <details className="group border-t border-slate-200 p-6">
              <summary className="cursor-pointer list-none font-bold text-[#102A43]">
                Should I sign my document before arriving?
              </summary>

              <p className="mt-3 leading-7 text-[#64748B]">
                If your document requires a signature to be witnessed or
                acknowledged by the notary, wait until the appropriate point in
                the appointment unless you have been instructed otherwise.
              </p>
            </details>

            <details className="group border-t border-slate-200 p-6">
              <summary className="cursor-pointer list-none font-bold text-[#102A43]">
                Can I ask what I need before booking?
              </summary>

              <p className="mt-3 leading-7 text-[#64748B]">
                Yes. Contact CARMO NOTARY if you need clarification about the
                general preparation requirements for your appointment.
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
            Ready to book your appointment?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Choose your service, prepare your documents, and let CARMO NOTARY
            help make the process straightforward.
          </p>

          <Link
            to="/book-appointment"
            className="mt-8 inline-flex rounded-lg bg-white px-7 py-4 font-bold text-[#176B16] shadow-lg transition hover:bg-[#102A43] hover:text-white"
          >
            Book an Appointment →
          </Link>
        </div>
      </section>
    </main>
  );
}

export default HowItWorks;