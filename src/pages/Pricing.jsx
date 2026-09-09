import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../components/LanguageContext";

const Pricing = () => {
  const { language } = useLanguage();

  const isSomali = language === "SO";

  const content = {
    en: {
      eyebrow: "SIMPLE. CLEAR. TRANSPARENT.",
      title: "Notary Services",
      titleAccent: "Pricing",
      description:
        "Clear pricing designed to make professional notary services easier to understand. Choose the service that matches your document needs, then book an appointment for confirmation.",
      noteTitle: "Pricing may vary",
      note:
        "Final fees can depend on the document type, number of documents, required verification, and any additional service needs. We confirm the applicable fee before your appointment.",
      popular: "Most Requested",

      plans: [
        {
          name: "Personal Documents",
          description:
            "For individuals who need documents reviewed, verified, or notarized.",
          price: "From $10",
          features: [
            "Personal document notarization",
            "Signature verification",
            "Document review",
            "Clear service guidance",
          ],
        },
        {
          name: "Business Documents",
          description:
            "Professional notarization support for companies and business-related documents.",
          price: "From $20",
          popular: true,
          features: [
            "Business document notarization",
            "Signature and document verification",
            "Multiple-document support",
            "Professional service coordination",
          ],
        },
        {
          name: "Special Requests",
          description:
            "For documents or requirements that need additional review before service.",
          price: "Custom",
          features: [
            "Requirement assessment",
            "Document-specific guidance",
            "Additional verification support",
            "Fee confirmed before service",
          ],
        },
      ],

      comparisonTitle: "What your fee can include",
      comparisonDescription:
        "Our pricing is based on the work required for your specific notarization request.",
      included: [
        {
          title: "Document Review",
          description:
            "We help identify the basic requirements for your requested notary service.",
        },
        {
          title: "Verification",
          description:
            "Where applicable, documents and signatures are checked as part of the requested service.",
        },
        {
          title: "Professional Handling",
          description:
            "Your request is handled with care, clarity, and attention to the required documentation.",
        },
      ],

      ctaTitle: "Need a clear quote for your documents?",
      ctaDescription:
        "Tell us what you need notarized and we can guide you toward the appropriate service and pricing.",
      ctaButton: "Book an Appointment",
      secondaryButton: "View Services",
    },

    so: {
      eyebrow: "FUDUD. CAD. HUFAN.",
      title: "Qiimaha Adeegyada",
      titleAccent: "Notary-ga",
      description:
        "Qiimeyn cad oo fudud oo kaa caawinaysa inaad fahanto adeegyada notary-ga. Dooro adeegga ku habboon dukumentiyadaada, kadibna samee ballan si loo xaqiijiyo adeegga.",
      noteTitle: "Qiimuhu wuu kala duwanaan karaa",
      note:
        "Qiimaha ugu dambeeya wuxuu ku xirnaan karaa nooca dukumentiga, tirada dukumentiyada, hubinta loo baahan yahay, iyo adeegyo dheeraad ah. Waxaan kuu xaqiijin doonaa qiimaha ku habboon ka hor ballanta.",
      popular: "Adeegga Ugu Badan",

      plans: [
        {
          name: "Dukumentiyada Shaqsiga",
          description:
            "Loogu talagalay dadka u baahan in dukumentiyadooda la hubiyo, la xaqiijiyo ama notary loo sameeyo.",
          price: "Laga bilaabo $10",
          features: [
            "Notary-ga dukumentiyada shaqsiga",
            "Xaqiijinta saxiixa",
            "Dib-u-eegista dukumentiga",
            "Hagitaan cad oo adeegga ah",
          ],
        },
        {
          name: "Dukumentiyada Ganacsiga",
          description:
            "Adeeg notary oo xirfad leh oo loogu talagalay shirkadaha iyo dukumentiyada ganacsiga.",
          price: "Laga bilaabo $20",
          popular: true,
          features: [
            "Notary-ga dukumentiyada ganacsiga",
            "Xaqiijinta saxiixa iyo dukumentiga",
            "Taageerada dukumentiyo badan",
            "Isku-duwid adeeg oo xirfad leh",
          ],
        },
        {
          name: "Codsiyada Gaarka ah",
          description:
            "Loogu talagalay dukumentiyada ama baahiyaha u baahan dib-u-eegis dheeraad ah.",
          price: "Qiime Gaar ah",
          features: [
            "Qiimeynta baahida",
            "Hagitaan ku saabsan dukumentiga",
            "Taageero hubin dheeraad ah",
            "Qiimaha oo la xaqiijiyo ka hor adeegga",
          ],
        },
      ],

      comparisonTitle: "Maxaa ku jiri kara qiimaha?",
      comparisonDescription:
        "Qiimuhu wuxuu ku salaysan yahay shaqada looga baahan yahay codsigaaga notary-ga.",
      included: [
        {
          title: "Dib-u-eegista Dukumentiga",
          description:
            "Waxaan kaa caawinaynaa fahamka shuruudaha aasaasiga ah ee adeegga aad codsanayso.",
        },
        {
          title: "Xaqiijin",
          description:
            "Haddii ay khusayso, dukumentiyada iyo saxiixyada ayaa la hubiyaa iyadoo la raacayo adeegga la codsaday.",
        },
        {
          title: "Maareyn Xirfad Leh",
          description:
            "Codsigaaga waxaa loo maareeyaa si taxaddar leh, cad, oo waafaqsan dukumentiyada loo baahan yahay.",
        },
      ],

      ctaTitle: "Ma u baahan tahay qiime cad oo dukumentiyadaada ah?",
      ctaDescription:
        "Noo sheeg waxa aad u baahan tahay in notary loo sameeyo, waxaanan kuu tilmaami doonaa adeegga iyo qiimaha ku habboon.",
      ctaButton: "Samee Ballan",
      secondaryButton: "Eeg Adeegyada",
    },
  };

  const text = isSomali ? content.so : content.en;

  return (
    <main className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[var(--color-secondary)]/40 bg-[var(--color-secondary)]/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-[var(--color-secondary)]">
              {text.eyebrow}
            </span>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {text.title}{" "}
              <span className="text-[var(--color-secondary)]">
                {text.titleAccent}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              {text.description}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {text.plans.map((plan, index) => (
            <article
              key={plan.name}
              className={`group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                  : "border-[var(--color-border)] bg-[var(--color-surface)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute right-5 top-5 rounded-full bg-[var(--color-secondary)] px-3 py-1 text-xs font-semibold text-white">
                  {text.popular}
                </div>
              )}

              <div className={plan.popular ? "pr-24" : ""}>
                <p
                  className={`text-sm font-semibold ${
                    plan.popular
                      ? "text-[var(--color-secondary)]"
                      : "text-[var(--color-primary)]"
                  }`}
                >
                  0{index + 1}
                </p>

                <h2 className="mt-4 text-2xl font-semibold">{plan.name}</h2>

                <p
                  className={`mt-4 min-h-[72px] text-sm leading-6 ${
                    plan.popular
                      ? "text-white/75"
                      : "text-[var(--color-text-muted)]"
                  }`}
                >
                  {plan.description}
                </p>

                <div
                  className={`mt-7 border-y py-5 ${
                    plan.popular
                      ? "border-white/15"
                      : "border-[var(--color-border)]"
                  }`}
                >
                  <p className="text-3xl font-semibold tracking-tight">
                    {plan.price}
                  </p>
                </div>
              </div>

              <ul className="mt-7 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${
                      plan.popular
                        ? "text-white/85"
                        : "text-[var(--color-text-muted)]"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                        plan.popular
                          ? "bg-white/15 text-[var(--color-secondary)]"
                          : "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                      }`}
                    >
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/book-appointment"
                className={`mt-8 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                  plan.popular
                    ? "bg-white text-[var(--color-primary)] hover:shadow-lg"
                    : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] hover:shadow-lg"
                }`}
              >
                {text.ctaButton}
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="mx-auto max-w-5xl px-6 pb-16 sm:px-8 lg:px-12">
        <div className="rounded-2xl border border-[var(--color-secondary)]/30 bg-[var(--color-secondary)]/5 p-7 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-lg font-bold text-white">
              i
            </div>

            <div>
              <h2 className="text-lg font-semibold">{text.noteTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                {text.note}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
              CARMO
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {text.comparisonTitle}
            </h2>

            <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">
              {text.comparisonDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {text.included.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-semibold text-[var(--color-secondary)]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="overflow-hidden rounded-3xl bg-[var(--color-primary)] px-7 py-12 text-white sm:px-10 lg:px-14 lg:py-14">
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
                {text.ctaButton}
                <span className="ml-2">→</span>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                {text.secondaryButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;