import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/carmo-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("carmo-theme") === "dark";
  });

  const navLinks = [
    { name: "Bogga Hore", path: "/" },
    { name: "Nagu Saabsan", path: "/about" },
    { name: "Adeegyadayada", path: "/services" },
    { name: "Sida Ay U Shaqeyso", path: "/how-it-works" },
    { name: "Qiimaha", path: "/pricing" },
    { name: "Su'aalo", path: "/faq" },
    { name: "Nala Soo Xiriir", path: "/contact" },
  ];

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("carmo-theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("carmo-theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          FIXED HEADER
          ===================================================== */}

      <header
        className={
          darkMode
            ? "fixed left-0 right-0 top-0 z-[9999] border-b border-[#294564] bg-[#102F5C] shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
            : "fixed left-0 right-0 top-0 z-[9999] border-b border-[#D9E3EE] bg-white shadow-[0_4px_20px_rgba(16,47,92,0.10)]"
        }
        style={{
          height: "78px",
        }}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">

          {/* =================================================
              LOGO
              ================================================= */}

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white"
            aria-label="CARMO NOTARY"
          >
            <img
              src={logo}
              alt="CARMO NOTARY"
              className="h-full w-full object-contain"
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#4591DD]"
                      : darkMode
                        ? "text-white hover:text-[#B7D7FF]"
                        : "text-[#102F5C] hover:text-[#4591DD]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}

                    <span
                      className={`absolute -bottom-[19px] left-0 right-0 mx-auto h-[3px] rounded-full bg-[#4591DD] transition-all duration-200 ${
                        isActive
                          ? "scale-x-100 opacity-100"
                          : "scale-x-0 opacity-0"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* =================================================
              RIGHT SIDE
              ================================================= */}

          <div className="flex items-center gap-3">

            {/* DARK MODE BUTTON */}

            <button
              type="button"
              onClick={() => {
                setDarkMode((current) => !current);
                setMenuOpen(false);
              }}
              className={
                darkMode
                  ? "flex h-11 w-11 items-center justify-center rounded-full border border-[#48698D] bg-[#0B2445] text-[#D5A744] transition hover:border-[#B7D7FF] hover:bg-[#163B63]"
                  : "flex h-11 w-11 items-center justify-center rounded-full border border-[#D9E3EE] bg-[#F8FAFC] text-[#102F5C] transition hover:border-[#4591DD] hover:bg-[#EAF4FF]"
              }
              aria-label="Beddel muuqaalka"
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? (
                <span className="text-xl leading-none">☀</span>
              ) : (
                <span className="text-xl leading-none">☾</span>
              )}
            </button>

            {/* DESKTOP CTA */}

            <Link
              to="/book-appointment"
              className="hidden rounded-lg bg-[#4591DD] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#0A2345] lg:block xl:px-6"
            >
              Ballan Qabso
            </Link>

            {/* MOBILE BUTTON */}

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className={
                darkMode
                  ? "flex h-11 w-11 items-center justify-center rounded-lg border border-[#48698D] bg-[#0B2445] text-white transition hover:border-[#B7D7FF] lg:hidden"
                  : "flex h-11 w-11 items-center justify-center rounded-lg border border-[#D9E3EE] bg-[#F8FAFC] text-[#102F5C] transition hover:border-[#4591DD] lg:hidden"
              }
              aria-label="Fur menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <span className="text-2xl leading-none">×</span>
              ) : (
                <span className="text-xl leading-none">☰</span>
              )}
            </button>
          </div>
        </div>

        {/* ===================================================
            MOBILE MENU
            =================================================== */}

        {menuOpen && (
          <div
            className={
              darkMode
                ? "border-t border-[#294564] bg-[#0B2445] lg:hidden"
                : "border-t border-[#D9E3EE] bg-white lg:hidden"
            }
          >
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">

              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `border-b px-2 py-4 text-sm font-semibold transition-colors ${
                      darkMode
                        ? "border-[#294564]"
                        : "border-[#EEF2F6]"
                    } ${
                      isActive
                        ? "text-[#4591DD]"
                        : darkMode
                          ? "text-white hover:text-[#B7D7FF]"
                          : "text-[#102F5C] hover:text-[#4591DD]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <Link
                to="/book-appointment"
                onClick={() => setMenuOpen(false)}
                className="mt-4 flex items-center justify-center rounded-lg bg-[#4591DD] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#0A2345]"
              >
                Ballan Qabso
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;