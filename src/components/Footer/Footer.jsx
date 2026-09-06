import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#102A43] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white">
                <img
                  src="/src/assets/carmo-logo.png"
                  alt="CARMO NOTARY"
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>

            <h2 className="mt-6 font-['Plus_Jakarta_Sans'] text-2xl font-bold">
              Professional Notary Services
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              CARMO NOTARY provides professional, confidential, and reliable
              notary services designed to make important document processes
              clear, convenient, and dependable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                className="text-sm text-slate-300 transition hover:text-[#2BC016]"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-sm text-slate-300 transition hover:text-[#2BC016]"
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-sm text-slate-300 transition hover:text-[#2BC016]"
              >
                Services
              </Link>

              <Link
                to="/how-it-works"
                className="text-sm text-slate-300 transition hover:text-[#2BC016]"
              >
                How It Works
              </Link>

              <Link
                to="/pricing"
                className="text-sm text-slate-300 transition hover:text-[#2BC016]"
              >
                Pricing
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-['Plus_Jakarta_Sans'] text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <p>
                <span className="block font-semibold text-white">
                  Phone
                </span>
                +252 XX XXX XXXX
              </p>

              <p>
                <span className="block font-semibold text-white">
                  Email
                </span>
                info@carmonotary.com
              </p>

              <p>
                <span className="block font-semibold text-white">
                  Location
                </span>
                Mogadishu, Somalia
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} CARMO NOTARY. All rights reserved.
          </p>

          <Link
            to="/book-appointment"
            className="font-semibold text-[#2BC016] transition hover:text-white"
          >
            Book an Appointment →
          </Link>

        </div>

      </div>
    </footer>
  );
}

export default Footer;