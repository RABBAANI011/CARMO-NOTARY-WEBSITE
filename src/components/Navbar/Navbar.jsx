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
    <header
      className="fixed left-0 right-0 top-0 z-[9999] border-b border-[var(--color-border)] bg-[var(--card-background)] shadow-[0_4px_20px_rgba(56,43,34,0.10)]"
      style={{ height: "78px" }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
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

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-[var(--carmo-brown-700)] dark:text-[var(--carmo-tan-300)]"
                    : "text-[var(--color-text-primary)] hover:text-[var(--carmo-brown-700)]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute -bottom-[19px] left-0 right-0 mx-auto h-[3px] rounded-full bg-[var(--carmo-brown-700)] transition-all duration-200 dark:bg-[var(--carmo-sage-300)] ${
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

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setDarkMode((current) => !current);
              setMenuOpen(false);
            }}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--surface-soft)] text-[var(--carmo-olive-700)] transition hover:border-[var(--carmo-brown-700)] hover:bg-[var(--carmo-cream-200)] dark:text-[var(--carmo-tan-300)] dark:hover:border-[var(--carmo-sage-300)] dark:hover:bg-[var(--surface-soft)]"
            aria-label="Beddel muuqaalka"
            title={darkMode ? "Light Mode" : "Dark Mode"}
          >
            {darkMode ? (
              <span className="text-xl leading-none">☀</span>
            ) : (
              <span className="text-xl leading-none">☾</span>
            )}
          </button>

          <Link
            to="/book-appointment"
            className="hidden rounded-lg bg-[var(--button-primary)] px-5 py-3 text-sm font-bold text-white transition hover:bg-[var(--button-primary-hover)] lg:block xl:px-6"
          >
            Ballan Qabso
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--surface-soft)] text-[var(--color-text-primary)] transition hover:border-[var(--carmo-brown-700)] lg:hidden"
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

      {menuOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--card-background)] lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-[var(--color-border)] px-2 py-4 text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[var(--carmo-brown-700)] dark:text-[var(--carmo-sage-300)]"
                      : "text-[var(--color-text-primary)] hover:text-[var(--carmo-brown-700)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/book-appointment"
              onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center rounded-lg bg-[var(--button-primary)] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[var(--button-primary-hover)]"
            >
              Ballan Qabso
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
