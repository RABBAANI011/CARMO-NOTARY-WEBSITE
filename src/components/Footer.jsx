import { Link } from "react-router-dom";
import carmoLogo from "../assets/carmo-logo.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-primary-dark)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        {/* ================================
            TOP FOOTER
        ================================= */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <img
                src={carmoLogo}
                alt="CARMO"
                className="h-16 w-auto rounded-sm"
              />
            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/70">
              Professional notary services designed around
              clarity, security, and convenience.
            </p>

            <p className="mt-5 text-sm font-medium text-[var(--color-secondary)]">
              Trusted. Legal. Convenient.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  to="/how-it-works"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
              Services
            </h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Document Notarization
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Business Documents
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Personal Documents
                </Link>
              </li>

              <li>
                <Link
                  to="/book-appointment"
                  className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                >
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-secondary)]">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-sm text-white/70">

              <div>
                <p className="mb-1 font-medium text-white">
                  Phone
                </p>
                <p>+252 XX XXX XXXX</p>
              </div>

              <div>
                <p className="mb-1 font-medium text-white">
                  Email
                </p>
                <p>info@carmo.so</p>
              </div>

              <div>
                <p className="mb-1 font-medium text-white">
                  Location
                </p>
                <p>Somalia</p>
              </div>

            </div>
          </div>
        </div>

        {/* ================================
            DIVIDER
        ================================= */}
        <div className="my-12 h-px bg-white/10" />

        {/* ================================
            BOTTOM FOOTER
        ================================= */}
        <div className="flex flex-col gap-5 text-sm text-white/50 md:flex-row md:items-center md:justify-between">

          <p>
            © {currentYear} CARMO. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/faq"
              className="transition-colors duration-200 hover:text-white"
            >
              FAQ
            </Link>

            <Link
              to="/contact"
              className="transition-colors duration-200 hover:text-white"
            >
              Contact
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;