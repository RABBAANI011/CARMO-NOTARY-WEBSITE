import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      number: "01",
      title: "Professionalism",
      description:
        "Every appointment is handled with care, clarity, and attention to detail.",
    },
    {
      number: "02",
      title: "Confidentiality",
      description:
        "We respect the privacy of your documents and personal information.",
    },
    {
      number: "03",
      title: "Reliability",
      description:
        "We provide a straightforward and dependable experience from start to finish.",
    },
    {
      number: "04",
      title: "Integrity",
      description:
        "We believe in honest communication, responsible service, and doing things properly.",
    },
  ];

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#F3FBEF]">
        <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
          
          {/* LEFT */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#BFE8B8] bg-white px-4 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2BC016]" />

              <span className="text-sm font-bold text-[#176B16]">
                About CARMO NOTARY
              </span>
            </div>

            <h1 className="max-w-2xl font-['Plus_Jakarta_Sans'] text-4xl font-extrabold leading-[1.08] tracking-tight text-[#102A43] sm:text-5xl lg:text-6xl">
              Professional service.
              <span className="block text-[#2BC016]">
                Built on trust.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#526B82]">
              CARMO NOTARY provides professional, confidential, and reliable
              notarization services for individuals, families, businesses, and
              organizations.
            </p>

            {/* SMALL TRUST POINTS */}
            <div className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
              <div>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#2BC016] text-lg font-bold text-white">
                  ✓
                </div>

                <h3 className="font-bold text-[#102A43]">
                  Professional
                </h3>

                <p className="mt-1 text-sm text-[#64748B]">
                  Careful service
                </p>
              </div>

              <div>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#2BC016] text-lg font-bold text-white">
                  ✓
                </div>

                <h3 className="font-bold text-[#102A43]">
                  Confidential
                </h3>

                <p className="mt-1 text-sm text-[#64748B]">
                  Privacy matters
                </p>
              </div>

              <div>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#2BC016] text-lg font-bold text-white">
                  ✓
                </div>

                <h3 className="font-bold text-[#102A43]">
                  Reliable
                </h3>

                <p className="mt-1 text-sm text-[#64748B]">
                  You can count on us
                </p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-lg bg-[#2BC016] px-7 py-4 font-bold text-white shadow-lg shadow-green-100 transition hover:bg-[#176B16]"
              >
                Our Services
                <span className="ml-2">→</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border-2 border-[#2BC016] bg-white px-7 py-4 font-bold text-[#176B16] transition hover:bg-[#2BC016] hover:text-white"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#DDF5D8]" />
            <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-[#E5F8E1]" />

            <div className="relative overflow-hidden rounded-[2rem] border-[10px] border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=1200&q=85"
                alt="Professional notary signing documents"
                className="h-[430px] w-full object-cover sm:h-[500px]"
              />

              {/* IMAGE BADGE */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/60 bg-white/95 p-5 shadow-xl backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#EAF9E7] text-xl text-[#2BC016]">
                    ✓
                  </div>

                  <div>
                    <p className="font-['Plus_Jakarta_Sans'] font-bold text-[#102A43]">
                      Trusted & Professional
                    </p>

                    <p className="mt-1 text-sm text-[#64748B]">
                      Important documents deserve careful attention.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DECORATION */}
        <div className="absolute -bottom-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full border-[30px] border-[#DDF5D8] opacity-70" />
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">

          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85"
              alt="Documents and professional workspace"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Who We Are
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-tight text-[#102A43] sm:text-4xl">
              Making important document processes clear and dependable.
            </h2>

            <p className="mt-6 leading-8 text-[#64748B]">
              Notarization is often connected to important personal, family,
              legal, and business matters. We understand that these moments
              require professionalism, accuracy, and careful attention.
            </p>

            <p className="mt-4 leading-8 text-[#64748B]">
              CARMO NOTARY is built around a simple goal: to give every client
              a professional experience where the process is clear and the
              service is dependable.
            </p>

            <Link
              to="/services"
              className="mt-8 inline-flex font-bold text-[#2BC016] transition hover:text-[#176B16]"
            >
              Explore Our Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-7 px-6 md:grid-cols-2 lg:px-8">

          <div className="rounded-3xl bg-[#102A43] p-8 lg:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Our Mission
            </span>

            <h2 className="mt-4 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white">
              To make professional notarization simple and dependable.
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              We aim to provide a clear, respectful, and professional
              notarization experience while giving every document the attention
              it deserves.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-10">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Our Vision
            </span>

            <h2 className="mt-4 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43]">
              To become a trusted name in professional notary services.
            </h2>

            <p className="mt-5 leading-8 text-[#64748B]">
              We want every client interaction to reflect professionalism,
              reliability, confidentiality, and integrity.
            </p>
          </div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2BC016]">
              Our Values
            </p>

            <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-[#102A43] sm:text-4xl">
              What guides the way we serve.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.number}
                className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-extrabold text-[#2BC016]">
                  {value.number}
                </span>

                <h3 className="mt-5 font-['Plus_Jakarta_Sans'] text-xl font-bold text-[#102A43]">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#2BC016] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="font-['Plus_Jakarta_Sans'] text-3xl font-extrabold text-white sm:text-4xl">
            Let’s take care of the important details.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/90">
            Explore our services or schedule an appointment with CARMO NOTARY.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/book-appointment"
              className="rounded-lg bg-white px-7 py-4 font-bold text-[#176B16] shadow-lg transition hover:bg-[#102A43] hover:text-white"
            >
              Book an Appointment
            </Link>

            <Link
              to="/services"
              className="rounded-lg border-2 border-white px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#176B16]"
            >
              View Services
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}

export default About;