import { Link } from "react-router-dom";

function Home() {
  const services = [
    {
      number: "01",
      title: "Ansixinta Dukumentiyada",
      description:
        "Xaqiijinta dukumentiyada, aqoonsiga iyo saxiixyada iyadoo la raacayo habraac cad oo xirfad leh.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=90",
    },
    {
      number: "02",
      title: "Affidavit iyo Qoraallo Dhaar ah",
      description:
        "Xaqiijinta bayaanno iyo qoraallo dhaar ah oo loo diyaariyey ujeeddooyin rasmi ah.",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1200&q=90",
    },
    {
      number: "03",
      title: "Power of Attorney",
      description:
        "Xaqiijinta awood-siinta qof kale loogu oggolaanayo inuu magacaaga ku matalo arrimo gaar ah.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=90",
    },
    {
      number: "04",
      title: "Qandaraasyo iyo Heshiisyo",
      description:
        "Adeeg notary oo ku saabsan heshiisyo iyo qandaraasyo u baahan xaqiijin rasmi ah.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=90",
    },
    {
      number: "05",
      title: "Nuqullo La Xaqiijiyey",
      description:
        "Xaqiijinta nuqullada dukumentiyada muhiimka ah marka loo baahan yahay caddeyn rasmi ah.",
      image:
        "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1200&q=90",
    },
    {
      number: "06",
      title: "Xaqiijinta Dukumentiyada",
      description:
        "Taageero ku saabsan hubinta iyo xaqiijinta dukumentiyada iyo macluumaadka la xiriira.",
      image:
        "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=90",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Xirfad",
      description:
        "Waxaan u shaqeynaa si nidaamsan, taxaddar leh, oo fiiro gaar ah loo siinayo faahfaahinta.",
    },
    {
      number: "02",
      title: "Asturnaan",
      description:
        "Macluumaadkaaga iyo dukumentiyadaada muhiimka ah waxaa loola dhaqmaa si masuuliyad leh.",
    },
    {
      number: "03",
      title: "Nidaam Cad",
      description:
        "Waxaan kuu sharxeynaa waxa loo baahan yahay iyo tallaabooyinka aad qaadi karto.",
    },
    {
      number: "04",
      title: "Kalsooni",
      description:
        "Adeeg lagu dhisay daacadnimo, masuuliyad iyo xiriir cad oo lala yeesho macmiilka.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Dooro Adeegga",
      description:
        "Ogow adeegga notary-ga ee ku habboon baahidaada.",
    },
    {
      number: "02",
      title: "Ballan Qabso",
      description:
        "Qorshee booqashadaada adigoo nala soo xiriiraya ama isticmaalaya bogga ballanta.",
    },
    {
      number: "03",
      title: "Diyaari Dukumentiyada",
      description:
        "Soo diyaari aqoonsiga iyo dukumentiyada looga baahan yahay adeegga.",
    },
    {
      number: "04",
      title: "Adeegga Dhamee",
      description:
        "Ballantaada waxaa loo maareynayaa si cad, nidaamsan oo xirfad leh.",
    },
  ];

  return (
    <main className="overflow-hidden bg-[#F7F3EA] text-[#514D45] transition-colors duration-300 dark:bg-[#252A24] dark:text-[#D9D7CF]">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative border-b border-[#DED7CA] bg-[#F7F3EA] dark:border-[#41473F] dark:bg-[#30352E]">
        <div className="mx-auto grid min-h-[500px] max-w-[1440px] items-center gap-12 px-6 py-12 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14 lg:px-10 lg:py-14 xl:px-12">

          {/* HERO CONTENT */}
          <div className="relative z-10 max-w-[610px]">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D1C3] bg-[#F0EBE1] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#68704F] dark:border-[#555B50] dark:bg-[#3A4037] dark:text-[#C8CDAA]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#858C61]" />
              Adeegyada Notary-ga ee Xirfadlayaasha ah
            </div>

            <h1 className="carmo-hero-title mt-5 max-w-[600px] text-[#3E4038] dark:text-[#F2EFE7]">
              Dukumentiyadaada ku{" "}
              <span className="text-[#737A55] dark:text-[#C8CDAA]">
                xaqiiji kalsooni.
              </span>
            </h1>

            <p className="carmo-body mt-5 max-w-[570px] text-[#625E56] dark:text-[#C7C5BC]">
              CARMO NOTARY waxay bixisaa adeegyo notary oo xirfad leh,
              nidaamsan oo asturan, si ay kaaga caawiyaan dukumentiyadaada
              muhiimka ah iyo habraacyada la xiriira.
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
                  px-6
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
              </Link>

              <Link
                to="/services"
                className="
                  inline-flex
                  min-h-[46px]
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#CEC7B9]
                  bg-transparent
                  px-6
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
                Eeg Adeegyadayada
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {["Adeeg nidaamsan", "Asturnaan", "Xirfad"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-[#716D64] dark:text-[#B7B6AE]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#E2E6D6] text-[10px] font-bold text-[#69704F] dark:bg-[#46503E] dark:text-[#C8CDAA]">
                    ✓
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative lg:justify-self-end lg:w-full lg:max-w-[700px]">
            <div className="relative overflow-hidden rounded-[22px] bg-[#E6E0D4] shadow-[0_20px_50px_rgba(55,50,40,0.14)] dark:bg-[#3A4037] dark:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

              {/* UNIQUE HERO IMAGE */}
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=92"
                alt="Qof diyaarinaya oo saxiixaya dukumenti rasmi ah"
                className="h-[330px] w-full object-cover sm:h-[390px] lg:h-[405px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#20231E]/45 via-transparent to-transparent" />

              {/* IMAGE INFORMATION CARD */}
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
                      Dukumentiyada Muhiimka ah
                    </p>

                    <p className="mt-0.5 text-xs text-[#747067] dark:text-[#B8B7AE]">
                      Si taxaddar leh oo nidaamsan
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
          TRUST STRIP
      ====================================================== */}
      <section className="border-b border-[#DED8CC] bg-[#F0EBE1] dark:border-[#42483F] dark:bg-[#292E28]">
        <div className="mx-auto grid max-w-[1440px] sm:grid-cols-3">

          <div className="flex items-center gap-4 px-6 py-5 sm:px-8 lg:px-10 xl:px-12">
            <span className="text-xl font-bold text-[#737A55] dark:text-[#C8CDAA]">
              01
            </span>

            <div>
              <p className="text-sm font-bold text-[#45463E] dark:text-[#ECEAE2]">
                Habraac Cad
              </p>

              <p className="mt-0.5 text-xs text-[#777168] dark:text-[#AAA9A1]">
                Waxa aad u baahan tahay si cad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-[#DDD6C9] px-6 py-5 sm:border-l sm:border-t-0 sm:px-8 lg:px-10 dark:border-[#444A41]">
            <span className="text-xl font-bold text-[#737A55] dark:text-[#C8CDAA]">
              02
            </span>

            <div>
              <p className="text-sm font-bold text-[#45463E] dark:text-[#ECEAE2]">
                Asturnaan
              </p>

              <p className="mt-0.5 text-xs text-[#777168] dark:text-[#AAA9A1]">
                Macluumaadkaaga si taxaddar leh
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 border-t border-[#DDD6C9] px-6 py-5 sm:border-l sm:border-t-0 sm:px-8 lg:px-10 dark:border-[#444A41]">
            <span className="text-xl font-bold text-[#737A55] dark:text-[#C8CDAA]">
              03
            </span>

            <div>
              <p className="text-sm font-bold text-[#45463E] dark:text-[#ECEAE2]">
                Xirfad
              </p>

              <p className="mt-0.5 text-xs text-[#777168] dark:text-[#AAA9A1]">
                Adeeg lagu kalsoonaan karo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-[#F7F3EA] py-20 dark:bg-[#252A24] sm:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-10 xl:px-12">

          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#737A55] dark:text-[#C8CDAA]">
              Ku Soo Dhawoow CARMO
            </span>

            <h2 className="carmo-section-title mt-4 max-w-[520px] text-[#41433A] dark:text-[#F0EEE6]">
              Adeeg notary oo lagu dhisay{" "}
              <span className="text-[#737A55] dark:text-[#C8CDAA]">
                kalsooni iyo nidaam.
              </span>
            </h2>
          </div>

          <div className="max-w-[680px]">
            <p className="carmo-body text-[#625E56] dark:text-[#C7C5BC]">
              Dukumentiyada muhiimka ah waxay u baahan yihiin fiiro gaar ah,
              faham cad iyo habraac sax ah. CARMO NOTARY waxay kuu fududeyneysaa
              geeddi-socodka iyadoo bixineysa adeeg xirfad leh oo nidaamsan.
            </p>

            <p className="mt-5 text-[15px] leading-7 text-[#777168] dark:text-[#AAA9A1]">
              Waxaan rabnaa in macmiil kasta uu fahmo waxa loo baahan yahay,
              waxa la qabanayo iyo tallaabada xigta ka hor inta aan adeegga la
              bilaabin.
            </p>

            <Link
              to="/about"
              className="
                mt-7
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
              Nagu saabsan
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}
      <section className="bg-[#EEE9DE] py-20 dark:bg-[#2D332D] sm:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

            <div className="max-w-[720px]">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#737A55] dark:text-[#C8CDAA]">
                Adeegyadayada
              </span>

              <h2 className="carmo-section-title mt-3 text-[#41433A] dark:text-[#F0EEE6]">
                Adeegyo notary oo loogu talagalay baahiyahaaga muhiimka ah.
              </h2>

              <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-[#716D64] dark:text-[#B8B7AE]">
                Ka hel adeegyo kala duwan oo ku saabsan xaqiijinta,
                dukumentiyada iyo qoraallada rasmiga ah.
              </p>
            </div>

            <Link
              to="/services"
              className="
                inline-flex
                shrink-0
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
              Dhammaan adeegyada
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <article
                key={service.number}
                className="
                  group
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#DCD5C8]
                  bg-[#F7F3EA]
                  shadow-[0_6px_22px_rgba(57,52,43,0.055)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_14px_34px_rgba(57,52,43,0.10)]
                  dark:border-[#464C43]
                  dark:bg-[#343A33]
                  dark:shadow-[0_6px_22px_rgba(0,0,0,0.12)]
                  dark:hover:shadow-[0_14px_34px_rgba(0,0,0,0.20)]
                "
              >

                {/* UNIQUE SERVICE IMAGE */}
                <div className="relative h-[190px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full
                      w-full
                      object-cover
                      transition-transform
                      duration-500
                      group-hover:scale-[1.045]
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E211C]/40 via-transparent to-transparent" />

                  <span className="absolute left-4 top-4 flex h-9 min-w-9 items-center justify-center rounded-full bg-[#F7F3EA]/95 px-2.5 text-[11px] font-bold text-[#69704F] shadow-sm backdrop-blur-sm dark:bg-[#30352E]/95 dark:text-[#C8CDAA]">
                    {service.number}
                  </span>
                </div>

                <div className="p-6">

                  <h3 className="text-[17px] font-bold tracking-[-0.01em] text-[#41433A] dark:text-[#F0EEE6]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#777168] dark:text-[#B8B7AE]">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="
                      mt-5
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-bold
                      text-[#69704F]
                      dark:text-[#C8CDAA]
                    "
                  >
                    Faahfaahin
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
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

          <div className="max-w-[700px]">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#737A55] dark:text-[#C8CDAA]">
              Sababta CARMO
            </span>

            <h2 className="carmo-section-title mt-3 text-[#41433A] dark:text-[#F0EEE6]">
              Adeeg lagu dhisay masuuliyad, caddeyn iyo kalsooni.
            </h2>
          </div>

          <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, index) => (
              <article
                key={benefit.number}
                className={`
                  py-6
                  lg:px-7
                  ${
                    index > 0
                      ? "border-t border-[#DDD6C9] sm:border-t-0 lg:border-l dark:border-[#444A41]"
                      : ""
                  }
                  ${
                    index === 2
                      ? "sm:border-t sm:border-[#DDD6C9] lg:border-t-0"
                      : ""
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.14em] text-[#9A978C] dark:text-[#7E8479]">
                    {benefit.number}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-[#858C61] dark:bg-[#C8CDAA]" />
                </div>

                <h3 className="mt-6 text-lg font-bold text-[#46473F] dark:text-[#F0EEE6]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#777168] dark:text-[#B8B7AE]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW IT WORKS
      ====================================================== */}
      <section className="bg-[#30352E] py-20 dark:bg-[#1F241F] sm:py-24">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-10 xl:px-12">

          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">

            <div className="max-w-[480px]">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C8CDAA]">
                Sida Ay U Shaqeyso
              </span>

              <h2 className="carmo-section-title mt-4 text-[#F2EFE7]">
                Hab fudud oo cad oo aad ku bilaabi karto adeeggaaga.
              </h2>

              <p className="mt-5 text-[15px] leading-7 text-[#C4C3BA]">
                Laga bilaabo doorashada adeegga ilaa dhammaystirka ballanta,
                waxaan ku dadaaleynaa in geeddi-socodku noqdo mid la fahmi karo.
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

            <div className="grid gap-0 sm:grid-cols-2">

              {steps.map((step, index) => (
                <article
                  key={step.number}
                  className={`
                    border-[#555B51]
                    py-6
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
          DOCUMENT PREPARATION
      ====================================================== */}
      <section className="bg-[#EEE9DE] py-20 dark:bg-[#2D332D] sm:py-24">
        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 xl:px-12">

          {/* UNIQUE PREPARATION IMAGE */}
          <div className="relative overflow-hidden rounded-[20px] shadow-[0_14px_35px_rgba(55,50,40,0.10)] dark:shadow-[0_14px_35px_rgba(0,0,0,0.18)]">

            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90"
              alt="Xafiis xirfad leh oo loogu diyaar garoobayo adeegga"
              className="h-[350px] w-full object-cover sm:h-[410px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#20231E]/30 to-transparent" />

            <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#F7F3EA]/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#69704F] backdrop-blur-md">
              Diyaargarow
            </div>
          </div>

          <div className="max-w-[600px]">

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#737A55] dark:text-[#C8CDAA]">
              Kahor Ballanta
            </span>

            <h2 className="carmo-section-title mt-4 text-[#41433A] dark:text-[#F0EEE6]">
              Diyaargarow wanaagsan wuxuu ka dhigayaa adeegga mid fudud.
            </h2>

            <p className="mt-5 text-[15px] leading-7 text-[#716D64] dark:text-[#B8B7AE]">
              Kahor intaadan iman, hubi inaad haysato aqoonsiga iyo
              dukumentiyada khuseeya adeegga aad u baahan tahay. Haddii aadan
              hubin waxa loo baahan yahay, nala soo xiriir si aan kuu siino
              tilmaamo cad.
            </p>

            <div className="mt-7 space-y-3.5">
              {[
                "Aqoonsi sax ah",
                "Dukumentiyada la xiriira adeegga",
                "Macluumaadka muhiimka ah ee loo baahan yahay",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[#5E5B53] dark:text-[#D0CEC5]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DCE1CF] text-[10px] font-bold text-[#69704F] dark:bg-[#46503E] dark:text-[#C8CDAA]">
                    ✓
                  </span>

                  {item}
                </div>
              ))}
            </div>

            <Link
              to="/how-it-works"
              className="
                mt-8
                inline-flex
                min-h-[44px]
                items-center
                justify-center
                rounded-lg
                bg-[#737A55]
                px-6
                text-sm
                font-bold
                text-white
                transition-all
                duration-200
                hover:-translate-y-[1px]
                hover:bg-[#626947]
                dark:bg-[#858C62]
                dark:hover:bg-[#747B56]
              "
            >
              Wax badan ka ogow
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-[#F7F3EA] py-20 dark:bg-[#252A24] sm:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">

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
                    px-6
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
                    px-6
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

export default Home;