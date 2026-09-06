import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      number: "01",
      title: "Ansixinta Dukumentiyada",
      description:
        "Waxaan kaa caawinaynaa dukumentiyada u baahan adeeg notary ah, xaqiijinta aqoonsiga iyo saxiixa si habraac xirfadeed leh.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "02",
      title: "Affidavit iyo Qoraallo Dhaar ah",
      description:
        "Adeeg notary ah oo loogu talagalay affidavit, qoraallo dhaar ah iyo bayaanno rasmi ah oo u baahan xaqiijin.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "03",
      title: "Power of Attorney",
      description:
        "Waxaan xaqiijinnaa dukumentiyada awood-siinta qof kale inuu magacaaga ku fuliyo arrimo sharci ama maamul.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "04",
      title: "Qandaraasyo iyo Heshiisyo",
      description:
        "Adeeg notary ah oo loogu talagalay heshiisyo iyo qandaraasyo u baahan xaqiijin rasmi ah iyo aqoonsiga saxiixayaasha.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "05",
      title: "Nuqullo La Xaqiijiyey",
      description:
        "Waxaan kaa caawinaynaa shuruudaha la xiriira nuqullo dukumenti oo u baahan xaqiijin, marka adeeggu ku habboon yahay.",
      image:
        "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1200&q=85",
    },
    {
      number: "06",
      title: "Xaqiijinta Dukumentiyada",
      description:
        "Taageero xirfadeed oo ku saabsan xaqiijinta dukumentiyada iyo baahiyaha kale ee la xiriira habraacyada notary-ga.",
      image:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Adeeg Xirfadeed",
      description:
        "Waxaan ku shaqeynaa nidaam cad, nidaamsan oo ku saleysan ixtiraamka iyo xirfadda.",
    },
    {
      number: "02",
      title: "Xaqiijin Taxaddar Leh",
      description:
        "Dukumentiyada muhiimka ah waxaa loo eegaa si taxaddar leh ka hor inta aan adeegga la dhammeystirin.",
    },
    {
      number: "03",
      title: "Asturnaan",
      description:
        "Waxaan ilaalineynaa asturnaanta iyo ixtiraamka macluumaadka iyo dukumentiyada macaamiisha.",
    },
    {
      number: "04",
      title: "Habraac Cad",
      description:
        "Waxaan kuu sharxeynaa waxa aad u baahan tahay iyo tallaabada xigta si ay hawshu kuugu fududaato.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Dooro Adeegga",
      description:
        "Ogow adeegga notary-ga ee ku habboon dukumentigaaga iyo baahidaada.",
    },
    {
      number: "2",
      title: "Ballan Qabso",
      description:
        "La xiriir CARMO NOTARY ama isticmaal bogga ballanta si aad u bilowdo.",
    },
    {
      number: "3",
      title: "Keen Dukumentiyada",
      description:
        "Soo diyaari dukumentiyada iyo aqoonsiga loo baahan yahay.",
    },
    {
      number: "4",
      title: "Adeegga Dhamee",
      description:
        "Ballantaada waxaa loo fulinayaa si xirfad leh oo nidaamsan.",
    },
  ];

  return (
    <main className="bg-[var(--page-background)]">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#EAF4FF] dark:bg-[#081D39]">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D5A744]/15" />
        <div className="absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#3B634B]/10" />

        <div className="relative mx-auto grid min-h-[500px] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-[#4591DD]/20 bg-white px-4 py-2 shadow-sm dark:border-[#4591DD]/30 dark:bg-[#0B2445]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4591DD]" />
              <span className="text-sm font-bold text-[#102F5C] dark:text-white">
                Adeegyadayada
              </span>
            </div>

            <h1 className="carmo-hero-title mt-6 max-w-2xl font-['Plus_Jakarta_Sans'] font-extrabold">
              Adeegyo notary ah oo
              <span className="block text-[#4591DD]">
                lagu kalsoonaan karo.
              </span>
            </h1>

            <p className="carmo-body mt-6 max-w-xl text-[#52677F] dark:text-[#C5D4E6]">
              CARMO NOTARY waxay bixisaa adeegyo notary oo xirfad leh,
              nidaamsan oo diiradda saaraya xaqiijinta dukumentiyada iyo
              fududeynta habraaca macaamiisha.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center rounded-lg bg-[#4591DD] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#4591DD]/20 transition hover:bg-[#102F5C]"
              >
                Ballan Qabso
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-[#4591DD] bg-white px-7 py-4 text-sm font-bold text-[#102F5C] transition hover:bg-[#EAF4FF] dark:bg-[#0B2445] dark:text-white dark:hover:bg-[#163B63]"
              >
                Nala Soo Xiriir
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#D5A744]/20" />

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-white bg-white shadow-2xl dark:border-[#0B2445]">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=85"
                alt="Dukumentiyo muhiim ah"
                className="h-[330px] w-full object-cover sm:h-[400px]"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-[#102F5C]/95 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D5A744] text-lg font-extrabold text-white">
                    ✓
                  </div>

                  <div>
                    <p className="font-bold text-white">
                      Adeeg la isku halleyn karo
                    </p>
                    <p className="mt-1 text-sm text-white/75">
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
            Waxa Aan Bixino
          </p>

          <h2 className="carmo-section-title mt-3 font-['Plus_Jakarta_Sans'] font-extrabold">
            Adeeg ku habboon baahida dukumentigaaga
          </h2>

          <p className="carmo-body mt-5 text-[#52677F] dark:text-[#C5D4E6]">
            Adeegyadeennu waxay daboolayaan noocyo kala duwan oo dukumentiyo
            iyo xaalado u baahan adeeg notary. Haddii aadan hubin adeegga ku
            habboon, nala soo xiriir si aan kuu hagno.
          </p>
        </div>
      </section>

      {/* =====================================================
          SERVICE CARDS
      ===================================================== */}
      <section className="bg-[#F8FAFC] py-20 dark:bg-[#081D39] lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.number}
                className="group overflow-hidden rounded-3xl border border-[#D9E3EE] bg-white shadow-[0_10px_35px_rgba(16,47,92,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(16,47,92,0.14)] dark:border-[#294564] dark:bg-[#0B2445] dark:shadow-none"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#102F5C]/95 text-sm font-extrabold text-white">
                    {service.number}
                  </div>
                </div>

                <div className="p-7">
                  <div className="h-1 w-12 rounded-full bg-[#D5A744]" />

                  <h3 className="mt-5 font-['Plus_Jakarta_Sans'] text-xl font-extrabold text-[#102F5C] dark:text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 min-h-[112px] text-sm leading-7 text-[#64748B] dark:text-[#B9C9DC]">
                    {service.description}
                  </p>

                  <Link
                    to="/book-appointment"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#4591DD] transition hover:text-[#102F5C] dark:hover:text-[#B7D7FF]"
                  >
                    Ballan ka qabso adeeggan
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY PROFESSIONAL NOTARIZATION
      ===================================================== */}
      <section className="bg-[var(--page-background)] py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-[#3B634B]/10" />

            <div className="relative overflow-hidden rounded-[2rem] border-8 border-[#EAF4FF] shadow-xl dark:border-[#102F5C]">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85"
                alt="Xirfadlayaal ka shaqeynaya dukumentiyo"
                className="h-[360px] w-full object-cover sm:h-[430px]"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#4591DD]">
              Maxaa CARMO?
            </p>

            <h2 className="carmo-section-title mt-3 font-['Plus_Jakarta_Sans'] font-extrabold">
              Dukumentiyada muhiimka ah waxay u baahan yihiin taxaddar.
            </h2>

            <p className="carmo-body mt-5 text-[#52677F] dark:text-[#C5D4E6]">
              Adeeg notary oo wanaagsan ma aha oo keliya saxiix. Waa habraac
              u baahan in aqoonsiga, dukumentiyada iyo shuruudaha adeegga si
              taxaddar leh loo eego.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="rounded-2xl border border-[#D9E3EE] bg-[#F8FAFC] p-5 dark:border-[#294564] dark:bg-[#0B2445]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3B634B] text-xs font-extrabold text-white">
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
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#4591DD] transition hover:text-[#102F5C] dark:hover:text-[#B7D7FF]"
            >
              Wax badan naga ogow
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="bg-[#EAF4FF] py-20 dark:bg-[#102F5C] lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3B634B] dark:text-[#D5A744]">
              Habraaca
            </p>

            <h2 className="carmo-section-title mt-3 font-['Plus_Jakarta_Sans'] font-extrabold">
              Sida adeeggu u dhacayo
            </h2>

            <p className="mt-5 leading-8 text-[#52677F] dark:text-[#C5D4E6]">
              Waxaan isku daynaa inaan ka dhigno habraaca mid fudud, cad oo
              nidaamsan laga bilaabo ballanta ilaa dhammeystirka adeegga.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative rounded-3xl border border-[#D9E3EE] bg-white p-7 dark:border-[#294564] dark:bg-[#0B2445]"
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
              className="inline-flex items-center gap-2 font-bold text-[#102F5C] hover:text-[#4591DD] dark:text-white dark:hover:text-[#D5A744]"
            >
              Faahfaahin dheeraad ah oo ku saabsan habraaca
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          DOCUMENT NOTE
      ===================================================== */}
      <section className="bg-[var(--page-background)] py-20 lg:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-[#D9E3EE] bg-white p-8 shadow-[0_10px_35px_rgba(16,47,92,0.08)] sm:p-10 lg:p-12 dark:border-[#294564] dark:bg-[#0B2445]">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#D5A744] text-2xl font-extrabold text-white">
                i
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#3B634B] dark:text-[#D5A744]">
                  Fiiro Gaar ah
                </p>

                <h2 className="mt-3 font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#102F5C] sm:text-3xl dark:text-white">
                  Dukumentigaaga waa muhiim.
                </h2>

                <p className="mt-4 leading-8 text-[#64748B] dark:text-[#C5D4E6]">
                  Kahor ballanta, hubi inaad haysato dukumentiyada muhiimka ah
                  iyo aqoonsiga loo baahan yahay. Haddii aad hubin la&apos;dahay
                  waxa aad u baahan tahay, nala soo xiriir si aad u hesho
                  tilmaamo ku saabsan diyaarinta ballantaada.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to="/faq"
                    className="inline-flex items-center justify-center rounded-lg border border-[#4591DD] px-6 py-3.5 text-sm font-bold text-[#102F5C] transition hover:bg-[#EAF4FF] dark:text-white dark:hover:bg-[#163B63]"
                  >
                    Akhri Su&apos;aalaha
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-[#3B634B] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#102F5C]"
                  >
                    Nala Soo Xiriir
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="relative overflow-hidden bg-[#102F5C] py-20">
        <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-[#4591DD]/20" />
        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#D5A744]/15" />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#D5A744] text-xl font-extrabold text-white">
            ✓
          </div>

          <h2 className="mt-6 font-['Plus_Jakarta_Sans'] text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Ma u baahan tahay adeeg notary?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#C5D4E6]">
            Dooro adeegga ku habboon, kadibna nala soo xiriir ama ballan
            qabso. Waxaan kaa caawinaynaa inaad si cad u fahanto tallaabada
            xigta.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/book-appointment"
              className="inline-flex items-center justify-center rounded-lg bg-[#4591DD] px-8 py-4 font-bold text-white transition hover:bg-white hover:text-[#102F5C]"
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

export default Services;