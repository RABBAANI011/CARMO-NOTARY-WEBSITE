import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";

const Services = () => {
  const { language } = useLanguage();

  const isSomali = language === "SO";

  const content = {
    en: {
      eyebrow: "PROFESSIONAL NOTARY SERVICES",
      title: "Services Designed Around",
      accent: "Your Documents",
      description:
        "CARMO provides professional notary services for individuals and businesses, helping make document verification and notarization clear, secure, and convenient.",

      services: [
        {
          number: "01",
          title: "Personal Documents",
          description:
            "Professional notarization support for personal and individual documents that require verification, certification, or an official signature.",
          items: [
            "Personal agreements",
            "Declarations and statements",
            "Signature verification",
            "Other personal documents",
          ],
        },
        {
          number: "02",
          title: "Business Documents",
          description:
            "Notary support for businesses and organizations handling important commercial, administrative, and corporate documentation.",
          items: [
            "Business agreements",
            "Company documents",
            "Commercial documents",
            "Authorized signatures",
          ],
        },
        {
          number: "03",
          title: "Document Verification",
          description:
            "Careful review and verification support for documents where authenticity, signatures, or required information need additional attention.",
          items: [
            "Document review",
            "Signature verification",
            "Information checking",
            "Verification guidance",
          ],
        },
        {
          number: "04",
          title: "Certification Support",
          description:
            "Guidance for documents that require certification or formal notary handling based on their intended use.",
          items: [
            "Certification guidance",
            "Required document checks",
            "Formal document handling",
            "Service preparation",
          ],
        },
      ],

      processTitle: "The right service starts with the right document",
      processDescription:
        "Not every document requires the same type of notary service. CARMO helps you understand what is needed before your appointment so the process is straightforward.",

      points: [
        {
          title: "Tell us what you need",
          description:
            "Share the type of document and the purpose of your request.",
        },
        {
          title: "Prepare your documents",
          description:
            "Bring the required documents and identification for your appointment.",
        },
        {
          title: "Complete the service",
          description:
            "Our professional team handles the requested notarization or verification process.",
        },
      ],

      ctaTitle: "Not sure which service you need?",
      ctaDescription:
        "Contact CARMO or book an appointment and tell us what type of document you are working with. We can guide you toward the appropriate service.",
      book: "Book an Appointment",
      contact: "Contact CARMO",
    },

    so: {
      eyebrow: "ADEEGYO NOTARY OO XIRFAD LEH",
      title: "Adeegyo Loogu Talagalay",
      accent: "Dukumentiyadaada",
      description:
        "CARMO waxay bixisaa adeegyo notary oo xirfad leh oo loogu talagalay dadka iyo ganacsiyada, iyadoo fududaynaysa hubinta iyo notarization-ka dukumentiyada.",

      services: [
        {
          number: "01",
          title: "Dukumentiyada Shaqsiga",
          description:
            "Taageero notary oo xirfad leh oo loogu talagalay dukumentiyada shaqsiga ee u baahan xaqiijin, shahaado ama saxiix rasmi ah.",
          items: [
            "Heshiisyada shaqsiga",
            "Bayaanno iyo qoraallo",
            "Xaqiijinta saxiixa",
            "Dukumentiyo kale oo shaqsiyeed",
          ],
        },
        {
          number: "02",
          title: "Dukumentiyada Ganacsiga",
          description:
            "Adeeg notary oo loogu talagalay shirkadaha iyo hay'adaha maareeya dukumentiyada ganacsi, maamul iyo shirkadeed.",
          items: [
            "Heshiisyada ganacsiga",
            "Dukumentiyada shirkadda",
            "Dukumentiyada ganacsiga",
            "Saxiixyada la oggol yahay",
          ],
        },
        {
          number: "03",
          title: "Xaqiijinta Dukumentiyada",
          description:
            "Dib-u-eegis iyo taageero xaqiijin ah oo loogu talagalay dukumentiyada u baahan in la hubiyo saxnimadooda ama saxiixyadooda.",
          items: [
            "Dib-u-eegista dukumentiga",
            "Xaqiijinta saxiixa",
            "Hubinta macluumaadka",
            "Hagitaan ku saabsan xaqiijinta",
          ],
        },
        {
          number: "04",
          title: "Taageerada Shahaadaynta",
          description:
            "Hagitaan ku saabsan dukumentiyada u baahan shahaado ama maareyn rasmi ah oo notary ah iyadoo lagu salaynayo ujeeddada dukumentiga.",
          items: [
            "Hagitaan shahaadayneed",
            "Hubinta dukumentiyada loo baahan yahay",
            "Maareynta dukumentiyada rasmiga ah",
            "Diyaarinta adeegga",
          ],
        },
      ],

      processTitle: "Adeegga saxda ahi wuxuu ka bilaabmaa dukumentiga saxda ah",
      processDescription:
        "Dukumenti kasta uma baahna adeeg notary oo isku mid ah. CARMO waxay kaa caawinaysaa fahamka waxa loo baahan yahay ka hor ballantaada si habku u noqdo mid fudud.",

      points: [
        {
          title: "Noo sheeg waxa aad u baahan tahay",
          description:
            "Noo sheeg nooca dukumentiga iyo ujeeddada codsigaaga.",
        },
        {
          title: "Diyaari dukumentiyadaada",
          description:
            "Keen dukumentiyada iyo aqoonsiga loo baahan yahay marka aad ballanta timaaddo.",
        },
        {
          title: "Dhammaystir adeegga",
          description:
            "Kooxdayada xirfadlayaasha ahi waxay maareynayaan notarization-ka ama xaqiijinta aad codsatay.",
        },
      ],

      ctaTitle: "Ma hubtid adeegga aad u baahan tahay?",
      ctaDescription:
        "La xiriir CARMO ama samee ballan oo noo sheeg nooca dukumentiga aad hayso. Waxaan kaa caawin karnaa inaad hesho adeegga ku habboon.",
      book: "Samee Ballan",
      contact: "La Xiriir CARMO",
    },
  };

  const text = isSomali ? content.so : content.en;

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Hero */}
      <section className="border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-[var(--color-secondary)]/40 bg-[var(--color-secondary)]/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-[var(--color-secondary)]">
              {text.eyebrow}
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {text.title}{" "}
              <span className="text-[var(--color-secondary)]">
                {text.accent}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              {text.description}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {text.services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-5">
                <span className="text-sm font-semibold text-[var(--color-secondary)]">
                  {service.number}
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-primary)] transition-all duration-300 group-hover:border-[var(--color-secondary)] group-hover:bg-[var(--color-secondary)] group-hover:text-white">
                  →
                </span>
              </div>

              <h2 className="mt-7 text-2xl font-semibold">
                {service.title}
              </h2>

              <p className="mt-4 text-sm leading-6 text-[var(--color-text-muted)]">
                {service.description}
              </p>

              <ul className="mt-7 space-y-3 border-t border-[var(--color-border)] pt-6">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]"
                  >
                    <span className="mt-1 text-[var(--color-secondary)]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Process Explanation */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
                CARMO
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                {text.processTitle}
              </h2>

              <p className="mt-5 text-base leading-7 text-[var(--color-text-muted)]">
                {text.processDescription}
              </p>
            </div>

            <div className="space-y-4">
              {text.points.map((point, index) => (
                <div
                  key={point.title}
                  className="flex gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-semibold text-white">
                    0{index + 1}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{point.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="rounded-3xl bg-[var(--color-primary)] px-7 py-12 text-white sm:px-10 lg:px-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {text.ctaTitle}
              </h2>

              <p className="mt-4 text-base leading-7 text-white/75">
                {text.ctaDescription}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book-appointment"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {text.book}
                <span className="ml-2">→</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                {text.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;