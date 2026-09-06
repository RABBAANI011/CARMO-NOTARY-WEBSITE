import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      number: "01",
      title: "Ansixinta Dukumentiyada",
      description:
        "Xaqiijinta dukumentiyada, aqoonsiga iyo saxiixyada si loo raaco habraac notary oo nidaamsan.",
    },
    {
      number: "02",
      title: "Affidavit iyo Qoraallo Dhaar ah",
      description:
        "Adeegyo notary ah oo loogu talagalay affidavit, bayaanno iyo qoraallo rasmi ah.",
    },
    {
      number: "03",
      title: "Power of Attorney",
      description:
        "Xaqiijinta dukumentiyada awood-siinta qof kale inuu magacaaga ku matalo arrimo gaar ah.",
    },
    {
      number: "04",
      title: "Qandaraasyo iyo Heshiisyo",
      description:
        "Adeeg notary ah oo ku saabsan heshiisyo iyo qandaraasyo u baahan xaqiijin rasmi ah.",
    },
    {
      number: "05",
      title: "Nuqullo La Xaqiijiyey",
      description:
        "Taageero ku saabsan dukumentiyada iyo nuqullada u baahan xaqiijin rasmi ah.",
    },
    {
      number: "06",
      title: "Xaqiijinta Dukumentiyada",
      description:
        "Taageero xirfadeed oo ku saabsan xaqiijinta iyo habraacyada la xiriira dukumentiyada.",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Xirfad",
      description:
        "Adeeg nidaamsan oo ku saleysan xirfad iyo masuuliyad.",
    },
    {
      number: "02",
      title: "Asturnaan",
      description:
        "Macluumaadka iyo dukumentiyada waxaa loola dhaqmaa si taxaddar leh.",
    },
    {
      number: "03",
      title: "Nidaam Cad",
      description:
        "Waxaan kuu sharxeynaa tallaabooyinka iyo waxa aad u baahan tahay.",
    },
    {
      number: "04",
      title: "Kalsooni",
      description:
        "Adeeg la isku halleyn karo oo xirfad leh.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Dooro Adeegga",
      description:
        "Ogow adeegga notary-ga ee ku habboon baahidaada.",
    },
    {
      number: "2",
      title: "Ballan Qabso",
      description:
        "Nala soo xiriir ama isticmaal bogga ballanta.",
    },
    {
      number: "3",
      title: "Diyaari Dukumentiyada",
      description:
        "Soo diyaari aqoonsiga iyo dukumentiyada looga baahan yahay.",
    },
    {
      number: "4",
      title: "Adeegga Dhamee",
      description:
        "Ballantaada waxaa loo fulinayaa si nidaamsan oo xirfad leh.",
    },
  ];

  return (
    <main className="bg-[var(--page-background)]">
      {/* =====================================================
          HERO
          SAME MEASURE AS SERVICES PAGE
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#081D39]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#4591DD]/10" />
        <div className="absolute -right-2 top-20 h-36 w-36 rounded-full bg-[#D5A744]/15" />
        <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#3B634B]/20" />

        <div className="relative mx-auto grid min-h-[500px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#4591DD]/40 bg-[#102F5C]/60 px-4 py-2 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4591DD]" />

              <span className="text-sm font-bold text-white">
                CARMO NOTARY
              </span>
            </div>

            <h1 className="carmo-hero-title mt-6 max-w-2xl font-['Plus_Jakarta_Sans'] font-extrabold text-white">
              Adeeg notary ah oo
              <span className="block text-[#4591DD]">
                lagu kalsoonaan karo.
              </span>
            </h1>

            <p className="carmo-body mt-6 max-w-xl text-[#C5D4E6]">
              CARMO NOTARY waxay bixisaa adeegyo notary oo xirfad leh,
              nidaamsan oo diiradda saaraya xaqiijinta dukumentiyada iyo
              fududeynta habraaca macaamiisha.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center rounded-lg bg-[#4591DD] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#4591DD]/20 transition hover:bg-[#D5A744]"
              >
                Ballan Qabso
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-lg border border-[#4591DD] bg-transparent px-7 py-4 text-sm font-bold text-white transition hover:bg-[#4591DD]/10"
              >
                Eeg Adeegyada
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#D5A744]/20" />

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-[#102F5C] bg-[#102F5C] shadow-[0_25px_70px_rgba(0,0,0,0.30)]">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85"
                alt="Dukumentiyo muhiim ah"
                className="h-[330px] w-full object-cover sm:h-[400px]"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#102F5C]/95 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D5A744] text-xl font-extrabold text-white">
                    ✓
                  </div>

                  <div>
                    <p className="font-['Plus_Jakarta_Sans'] text-base font-extrabold text-white sm:text-lg">
                      Adeeg la isku halleyn karo
                    </p>

                    <p className="mt-1 text-sm text-[#C5D4E6]">
                      Xirfad, asturnaan iyo nidaam cad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}
      <section className="bg-[var(--page-background)] py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B634B] dark:text-[#D5A744]">
            Ku Soo Dhawoow CARMO NOTARY
          </p>

          <h2 className="carmo-section-title mt-3 font-['Plus_Jakarta_Sans'] font-extrabold">
            Waxaan fududeyneynaa habka adeegga notary-ga.
          </h2>

          <p className="carmo-body mt-5 text-[#52677F] dark:text-[#C5D4E6]">
            Dukumentiyada muhiimka ah waxay u baahan yihiin taxaddar,
            saxnaan iyo adeeg xirfadeed. CARMO NOTARY waxay ku dadaashaa inay
            kuu sameyso khibrad cad oo nidaamsan laga bilaabo ballanta ilaa
            dhammeystirka adeegga.
          </p>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="bg-[#F8FAFC] py-20 dark:bg-[#081D39] lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4591DD]">
                Adeegyadayada
              </p>

              <h2 className="carmo-section-title mt-3 font-['Plus_Jakarta_Sans'] font-extrabold">
                Adeegyo loogu talagalay baahiyahaaga dukumenti.
              </h2>
            </div>

            <Link
              to="/services"
              className="shrink-0 font-bold text-[#4591DD] transition hover:text-[#102F5C] dark:hover:text-[#D5A744]"
            >
              Eeg dhammaan adeegyada →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="rounded-3xl border border-[#D9E3EE] bg-white p-7 shadow-[0_8px_30px_rgba(16,47,92,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,47,92,0.12)] dark:border-[#294564] dark:bg-[#0B2445] dark:shadow-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF4FF] text-sm font-extrabold text-[#4591DD] dark:bg-[#163B63]">
                    {service.number}
                  </div>

                  <span className="h-1 w-10 rounded-full bg-[#D5A744]" />
                </div>

                <h3 className="mt-6 font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#102F5C] dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#64748B] dark:text-[#B9C9DC]">
                  {service.description}
                </p>

                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4591DD] transition hover:text-[#102F5C] dark:hover:text-[#D5A744]"
                >
                  Faahfaahin dheeraad ah
                  <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CARMO
      ===================================================== */}
      <section className="bg-[var(--page-background)] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#3B634B]/10" />

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-[#EAF4FF] shadow-xl dark:border-[#102F5C]">
              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=90"
                alt="Xirfadlayaal ka shaqeynaya dukumentiyo"
                className="h-[350px] w-full object-cover sm:h-[430px]"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B634B] dark:text-[#D5A744]">
              Maxaa CARMO NOTARY?
            </p>

            <h2 className="carmo-section-title mt-3 font-['Plus_Jakarta_Sans'] font-extrabold">
              Dukumentiyada muhiimka ah waxay u baahan yihiin daryeel.
            </h2>

            <p className="carmo-body mt-5 text-[#52677F] dark:text-[#C5D4E6]">
              Waxaan fahamsanahay in dukumentiyada notary-ga ay noqon karaan
              kuwo muhiim u ah arrimo shaqsiyeed, ganacsi iyo rasmi ah. Sidaas
              darteed waxaan diiradda saarnaa adeeg cad, xirfad leh oo
              nidaamsan.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="rounded-2xl border border-[#D9E3EE] bg-[#F8FAFC] p-5 dark:border-[#294564] dark:bg-[#0B2445]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3B634B] text-xs font-extrabold text-white">
                      {benefit.number}
                    </div>

                    <h3 className="font-bold text-[#102F5C] dark:text-white">
                      {benefit.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#64748B] dark:text-[#B9C9DC]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#4591DD] transition hover:text-[#102F5C] dark:hover:text-[#D5A744]"
            >
              Wax badan naga ogow
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ===================================================== */}
      <section className="bg-[#EAF4FF] py-20 dark:bg-[#102F5C] lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B634B] dark:text-[#D5A744]">
              Sida Ay U Shaqeyso
            </p>

            <h2 className="carmo-section-title mt-3 font-['Plus_Jakarta_Sans'] font-extrabold">
              Habraac fudud oo cad.
            </h2>

            <p className="mt-5 leading-8 text-[#52677F] dark:text-[#C5D4E6]">
              Waxaan rabnaa inaad ogaato waxa xiga tallaabo kasta, si
              adeeggaaga notary uu kuugu noqdo mid sahlan oo nidaamsan.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl border border-[#D9E3EE] bg-white p-7 dark:border-[#294564] dark:bg-[#0B2445]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4591DD] font-['Plus_Jakarta_Sans'] text-lg font-extrabold text-white">
                  {step.number}
                </div>

                <h3 className="mt-6 font-['Plus_Jakarta_Sans'] text-lg font-extrabold text-[#102F5C] dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#64748B] dark:text-[#B9C9DC]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/how-it-works"
              className="font-bold text-[#102F5C] transition hover:text-[#4591DD] dark:text-white dark:hover:text-[#D5A744]"
            >
              Faahfaahin habraaca →
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENT PREPARATION
      ===================================================== */}
      <section className="bg-[var(--page-background)] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4591DD]">
              Kahor Ballanta
            </p>

            <h2 className="carmo-section-title mt-3 font-['Plus_Jakarta_Sans'] font-extrabold">
              U diyaari dukumentiyadaada si wanaagsan.
            </h2>

            <p className="carmo-body mt-5 text-[#52677F] dark:text-[#C5D4E6]">
              Diyaargarow wanaagsan wuxuu kaa caawin karaa in ballantaadu
              noqoto mid fudud. Hubi inaad haysato aqoonsiga iyo
              dukumentiyada ku habboon adeegga aad u baahan tahay.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Soo diyaari dukumentiga ama dukumentiyada loo baahan yahay.",
                "Haysato aqoonsi sax ah haddii adeeggu u baahan yahay.",
                "Hubi in magacyada iyo macluumaadka muhiimka ahi sax yihiin.",
                "Haddii aad shaki qabto, nala soo xiriir ka hor ballanta.",
              ].map((item, index) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#3B634B] text-xs font-bold text-white">
                    {index + 1}
                  </div>

                  <p className="text-sm leading-7 text-[#52677F] dark:text-[#C5D4E6]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/faq"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#4591DD] hover:text-[#102F5C] dark:hover:text-[#D5A744]"
            >
              Akhri su&apos;aalaha inta badan la isweydiiyo
              <span>→</span>
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#D5A744]/15" />

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-[#EAF4FF] dark:border-[#102F5C]">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=90"
                alt="Dukumentiyo iyo qalab qoraal"
                className="h-[350px] w-full object-cover sm:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#102F5C] py-20">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#4591DD]/15" />
        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#D5A744]/15" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D5A744] text-xl font-extrabold text-white">
            ✓
          </div>

          <h2 className="mt-6 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Ma diyaar baad u tahay inaad ballan qabsato?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#C5D4E6]">
            Dooro adeegga aad u baahan tahay, kadibna la xiriir CARMO NOTARY
            si aad u bilowdo habraaca ballantaada.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center rounded-lg bg-[#4591DD] px-8 py-4 font-bold text-white transition hover:bg-[#D5A744]"
            >
              Ballan Qabso
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#102F5C]"
            >
              Nala Soo Xiriir
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;