import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      number: "01",
      title: "Ansixinta Dukumentiyada",
      description:
        "Xaqiijinta dukumentiyada, aqoonsiga iyo saxiixyada iyadoo la raacayo habraac notary oo cad, taxaddar leh oo xirfadeysan.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=90",
    },
    {
      number: "02",
      title: "Affidavit iyo Qoraallo Dhaar ah",
      description:
        "Adeeg notary ah oo loogu talagalay affidavit, qoraallo dhaar ah iyo bayaanno rasmi ah oo u baahan xaqiijin.",
      image:
        "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1400&q=90",
    },
    {
      number: "03",
      title: "Power of Attorney",
      description:
        "Xaqiijinta dukumentiyada awood-siinta qof kale inuu magacaaga ku matalo ama ku fuliyo arrimo gaar ah.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=90",
    },
    {
      number: "04",
      title: "Qandaraasyo iyo Heshiisyo",
      description:
        "Adeeg notary ah oo ku saabsan heshiisyo iyo qandaraasyo u baahan xaqiijin rasmi ah iyo aqoonsiga dhinacyada saxiixaya.",
      image:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1400&q=90",
    },
    {
      number: "05",
      title: "Nuqullo La Xaqiijiyey",
      description:
        "Taageero ku saabsan nuqullada dukumentiyada u baahan xaqiijin rasmi ah marka adeeggaasi ku habboon yahay.",
      image:
        "https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1400&q=90",
    },
    {
      number: "06",
      title: "Xaqiijinta Dukumentiyada",
      description:
        "Taageero xirfadeed oo ku saabsan xaqiijinta dukumentiyada iyo baahiyaha kale ee la xiriira adeegyada notary.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=90",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Xirfad",
      description:
        "Waxaan ku shaqeynaa nidaam cad oo diiradda saaraya saxnaan, ixtiraam iyo masuuliyad.",
    },
    {
      number: "02",
      title: "Asturnaan",
      description:
        "Macluumaadka iyo dukumentiyada macaamiisha waxaa loola dhaqmaa si taxaddar iyo xushmad leh.",
    },
    {
      number: "03",
      title: "Kalsooni",
      description:
        "Waxaan ku dadaaleynaa inaan bixino adeeg la fahmi karo oo macaamilku ku kalsoonaan karo.",
    },
    {
      number: "04",
      title: "Habraac Cad",
      description:
        "Waxaan kuu sharxeynaa waxa aad u baahan tahay iyo tallaabada xigta ee habraacaaga.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Dooro Adeegga",
      description:
        "Ogow adeegga notary-ga ee ku habboon dukumentigaaga iyo baahidaada.",
    },
    {
      number: "02",
      title: "Ballan Qabso",
      description:
        "Nala soo xiriir ama isticmaal bogga ballanta si aad u bilowdo.",
    },
    {
      number: "03",
      title: "Diyaari Dukumentiyada",
      description:
        "Soo diyaari aqoonsiga iyo dukumentiyada muhiimka ah ee loo baahan yahay.",
    },
    {
      number: "04",
      title: "Adeegga Dhamee",
      description:
        "Ballantaada waxaa loo fulinayaa si nidaamsan, taxaddar leh oo xirfadeysan.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#F7F3EA] text-[#514D45] transition-colors duration-300 dark:bg-[#252A24] dark:text-[#D9D7CF]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-[#DDD7CA] bg-[#F7F3EA] dark:border-[#454A42] dark:bg-[#30352E]">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#737A55]/10 dark:bg-[#C8CDAA]/5" />
        <div className="absolute right-20 top-32 h-28 w-28 rounded-full bg-[#858C62]/10" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#737A55]/10 dark:bg-[#C8CDAA]/5" />

        <div className="relative mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-14 xl:px-12">

          {/* LEFT */}
          <div className="relative z-10 max-w-[610px]">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D1C3] bg-[#EEE9DE] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#69704F] dark:border-[#555B50] dark:bg-[#3A4037] dark:text-[#C8CDAA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#858C62]" />
              Adeegyadayada
            </div>

            <h1 className="carmo-hero-title mt-5 max-w-[620px] text-[#41433A] dark:text-[#F2EFE7]">
              Adeegyo notary ah oo
              <span className="block text-[#737A55] dark:text-[#C8CDAA]">
                lagu kalsoonaan karo.
              </span>
            </h1>

            <p className="carmo-body mt-5 max-w-[570px] text-[#625E56] dark:text-[#C7C5BC]">
              CARMO NOTARY waxay bixisaa adeegyo notary oo xirfad leh,
              nidaamsan oo loogu talagalay dukumentiyada iyo baahiyaha kala
              duwan ee macaamiisha.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/book-appointment"
                className="
                  inline-flex
                  min-h-[46px]
                  items-center
                  justify-center
                  rounded-lg
                  bg-[#737A55]
                  px-7
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_5px_15px_rgba(76,82,52,0.13)]
                  transition-all
                  duration-200
                  hover:-translate-y-[1px]
                  hover:bg-[#626947]
                  dark:bg-[#858C62]
                  dark:hover:bg-[#747B56]
                "
              >
                Ballan Qabso
                <span className="ml-2">→</span>
              </Link>

              <Link
                to="/contact"
                className="
                  inline-flex
                  min-h-[46px]
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#CEC7B9]
                  bg-transparent
                  px-7
                  text-sm
                  font-bold
                  text-[#5C6148]
                  transition-all
                  duration-200
                  hover:border-[#9BA080]
                  hover:bg-[#EEE9DE]
                  dark:border-[#5A6053]
                  dark:text-[#D0D3B8]
                  dark:hover:border-[#7E8561]
                  dark:hover:bg-[#394037]
                "
              >
                Nala Soo Xiriir
              </Link>

            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:justify-self-end lg:w-full lg:max-w-[650px]">

            <div className="absolute -right-5 -top-5 h-28 w-28 rounded-full bg-[#858C62]/15" />

            <div className="relative overflow-hidden rounded-[22px] bg-[#E6E0D4] shadow-[0_20px_50px_rgba(55,50,40,0.14)] dark:bg-[#3A4037] dark:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=92"
                alt="Dukumentiyo muhiim ah oo miis lagu diyaariyey"
                className="h-[330px] w-full object-cover sm:h-[390px] lg:h-[405px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#20231E]/45 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">

                <div className="flex items-center gap-3 rounded-xl border border-white/30 bg-[#F7F3EA]/95 px-4 py-3.5 shadow-[0_8px_24px_rgba(30,30,25,0.13)] backdrop-blur-md dark:bg-[#30352E]/95">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#737A55] text-white dark:bg-[#858C62]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path
                        d="M7 3.5h7l4 4V20.5H7A2.5 2.5 0 0 1 4.5 18V6A2.5 2.5 0 0 1 7 3.5Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />

                      <path
                        d="M14 3.5V8h4M8.5 12h7M8.5 15.5h5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#41433A] dark:text-[#F0EEE6]">
                      Adeegyo Kala Duwan
                    </p>

                    <p className="mt-0.5 text-xs text-[#747067] dark:text-[#B8B7AE]">
                      Xirfad, asturnaan iyo nidaam cad
                    </p>
                  </div>

                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden h-20 w-20 rounded-full border border-[#D9D2C4] bg-[#EEE9DE] lg:block dark:border-[#4E554A] dark:bg-[#394037]" />

          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-[#F7F3EA] py-20 dark:bg-[#252A24] sm:py-24">

        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">

          <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#737A55] dark:text-[#C8CDAA]">
            Waxa Aan Bixino
          </span>

          <h2 className="carmo-section-title mt-4 text-[#41433A] dark:text-[#F0EEE6]">
            Adeeg ku habboon baahida dukumentigaaga
          </h2>

          <p className="carmo-body mt-5 text-[#625E56] dark:text-[#C7C5BC]">
            Adeegyadeennu waxay daboolayaan noocyo kala duwan oo dukumentiyo
            iyo xaalado u baahan adeeg notary. Haddii aadan hubin adeegga ku
            habboon, nala soo xiriir si aan kuu hagno.
          </p>

        </div>
      </section>

      {/* =====================================================
          SERVICES GRID
      ====================================================== */}
      <section className="bg-[#EEE9DE] py-20 dark:bg-[#2D332D] sm:py-24">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

          <div className="mb-10 max-w-[700px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#737A55] dark:text-[#C8CDAA]">
              Adeegyada CARMO
            </span>

            <h2 className="carmo-section-title mt-3 text-[#41433A] dark:text-[#F0EEE6]">
              Xulashooyin adeeg oo loogu talagalay dukumentiyada muhiimka ah.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <article
                key={service.number}
                className="
                  group
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#D8D1C4]
                  bg-[#F7F3EA]
                  shadow-[0_7px_24px_rgba(57,52,43,0.055)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_15px_36px_rgba(57,52,43,0.10)]
                  dark:border-[#474D44]
                  dark:bg-[#343A33]
                  dark:shadow-[0_7px_24px_rgba(0,0,0,0.12)]
                  dark:hover:shadow-[0_15px_36px_rgba(0,0,0,0.20)]
                "
              >

                {/* IMAGE */}
                <div className="relative h-[250px] overflow-hidden">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.035]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#20231E]/30 via-transparent to-transparent" />

                  {/* NUMBER */}
                  <span className="absolute left-5 top-5 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#F7F3EA]/95 text-[15px] font-bold text-[#69704F] shadow-[0_3px_10px_rgba(40,38,30,0.08)] backdrop-blur-sm dark:bg-[#30352E]/95 dark:text-[#C8CDAA]">
                    {service.number}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="min-h-[255px] p-7">

                  <div className="h-1 w-10 rounded-full bg-[#858C62]" />

                  <h3 className="mt-5 text-[19px] font-bold tracking-[-0.015em] text-[#41433A] dark:text-[#F0EEE6]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#777168] dark:text-[#B8B7AE]">
                    {service.description}
                  </p>

                  <Link
                    to="/book-appointment"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-[14px]
                      font-bold
                      text-[#69704F]
                      transition-colors
                      hover:text-[#4F5638]
                      dark:text-[#C8CDAA]
                      dark:hover:text-white
                    "
                  >
                    Ballan ka qabso adeeggan

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>

                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          WHY CARMO
      ====================================================== */}
      <section className="bg-[#F7F3EA] py-20 dark:bg-[#252A24] sm:py-24">

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10 xl:px-12">

          {/* IMAGE */}
          <div className="relative">

            <div className="absolute -bottom-5 -left-5 h-24 w-24 rounded-full border border-[#D9D2C4] bg-[#EEE9DE] dark:border-[#4E554A] dark:bg-[#394037]" />

            <div className="relative overflow-hidden rounded-[22px] shadow-[0_16px_40px_rgba(55,50,40,0.12)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.22)]">

              <img
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=90"
                alt="Xirfadlayaal ka wada shaqeynaya"
                className="h-[350px] w-full object-cover sm:h-[430px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#20231E]/25 to-transparent" />
            </div>

          </div>

          {/* CONTENT */}
          <div className="max-w-[620px]">

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#737A55] dark:text-[#C8CDAA]">
              Maxaa CARMO?
            </span>

            <h2 className="carmo-section-title mt-4 text-[#41433A] dark:text-[#F0EEE6]">
              Dukumentiyada muhiimka ah waxay u baahan yihiin taxaddar.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#716D64] dark:text-[#B8B7AE]">
              Adeeg notary oo wanaagsan ma aha oo keliya saxiix. Waa habraac
              u baahan in aqoonsiga, dukumentiyada iyo shuruudaha adeegga si
              taxaddar leh loo eego.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="
                    rounded-[16px]
                    border
                    border-[#DDD6C9]
                    bg-[#EEE9DE]
                    p-5
                    dark:border-[#464C43]
                    dark:bg-[#343A33]
                  "
                >
                  <div className="flex items-center gap-3">

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#737A55] text-[11px] font-bold text-white dark:bg-[#858C62]">
                      {benefit.number}
                    </span>

                    <h3 className="text-sm font-bold text-[#46473F] dark:text-[#F0EEE6]">
                      {benefit.title}
                    </h3>

                  </div>

                  <p className="mt-3 text-sm leading-6 text-[#777168] dark:text-[#B8B7AE]">
                    {benefit.description}
                  </p>
                </div>
              ))}

            </div>

            <Link
              to="/about"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                text-sm
                font-bold
                text-[#69704F]
                transition-colors
                hover:text-[#4F5638]
                dark:text-[#C8CDAA]
                dark:hover:text-white
              "
            >
              Wax badan naga ogow
              <span aria-hidden="true">→</span>
            </Link>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS
      ====================================================== */}
      <section className="bg-[#30352E] py-20 dark:bg-[#1F241F] sm:py-24">

        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

            {/* LEFT */}
            <div className="max-w-[480px]">

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C8CDAA]">
                Habraaca
              </span>

              <h2 className="carmo-section-title mt-4 text-[#F2EFE7]">
                Sida adeegga notary-gu u dhacayo.
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#C4C3BA]">
                Waxaan isku daynaa inaan ka dhigno habraaca mid fudud, cad oo
                nidaamsan laga bilaabo doorashada adeegga ilaa dhammeystirka
                ballanta.
              </p>

              <Link
                to="/how-it-works"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-bold
                  text-[#D0D5B5]
                  transition-colors
                  hover:text-white
                "
              >
                Baro sida ay u shaqeyso
                <span aria-hidden="true">→</span>
              </Link>

            </div>

            {/* RIGHT */}
            <div className="grid gap-0 sm:grid-cols-2">

              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className={`
                    border-[#555B51]
                    py-7
                    sm:px-7
                    ${index >= 2 ? "border-t" : ""}
                    ${index % 2 === 1 ? "sm:border-l" : ""}
                  `}
                >

                  <span className="text-xs font-bold tracking-[0.14em] text-[#AEB598]">
                    {step.number}
                  </span>

                  <h3 className="mt-3 text-lg font-bold text-[#F2EFE7]">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-[360px] text-sm leading-6 text-[#B8B9B0]">
                    {step.description}
                  </p>

                </article>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#EEE9DE] py-20 dark:bg-[#2D332D] sm:py-24">

        <div className="mx-auto max-w-4xl px-6 sm:px-8">

          <div className="relative overflow-hidden rounded-[24px] bg-[#737A55] px-7 py-12 text-center shadow-[0_16px_38px_rgba(65,70,46,0.15)] sm:px-12 sm:py-14 dark:bg-[#596044]">

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10" />

            <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full border border-white/10" />

            <div className="relative">

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E0E3CB]">
                CARMO NOTARY
              </span>

              <h2 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-white sm:text-3xl lg:text-4xl">
                Ma u baahan tahay adeeg notary?
              </h2>

              <p className="mx-auto mt-4 max-w-[570px] text-sm leading-7 text-[#E2E4D7] sm:text-[15px]">
                Qorshee ballantaada oo hel tilmaamaha aad u baahan tahay ka hor
                intaadan iman.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  to="/book-appointment"
                  className="
                    inline-flex
                    min-h-[46px]
                    items-center
                    justify-center
                    rounded-lg
                    bg-[#F7F3EA]
                    px-7
                    text-sm
                    font-bold
                    text-[#596044]
                    transition-all
                    duration-200
                    hover:-translate-y-[1px]
                    hover:bg-white
                  "
                >
                  Ballan Qabso
                </Link>

                <Link
                  to="/contact"
                  className="
                    inline-flex
                    min-h-[46px]
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/30
                    px-7
                    text-sm
                    font-bold
                    text-white
                    transition-all
                    duration-200
                    hover:border-white/60
                    hover:bg-white/10
                  "
                >
                  Nala Soo Xiriir
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Services;