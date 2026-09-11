import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import carmoLogo from "../assets/carmo-logo.png";
import { useLanguage } from "./LanguageContext";
import { useTheme } from "./ThemeContext";

function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { theme, changeTheme } = useTheme();

  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  const themeOptions = [
    {
      id: "emerald",
      name: "Emerald",
      icon: "🌿",
    },
    {
      id: "cream",
      name: "Cream",
      icon: "🤍",
    },
    {
      id: "dark",
      name: "Dark",
      icon: "🌙",
    },
    {
      id: "classic",
      name: "Classic",
      icon: "🏛️",
    },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsThemeOpen(false);
  };

  const handleThemeChange = (newTheme) => {
    changeTheme(newTheme);
    setIsThemeOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/95 backdrop-blur-md">
      <nav className="mx-auto max-w-[1600px] pl-6 pr-2 sm:pl-8 sm:pr-3 lg:pl-10 lg:pr-3 xl:pl-12 xl:pr-4">

        {/* MAIN NAVBAR */}
        <div className="flex h-[88px] items-center">

          {/* LOGO */}
          <Link
            to="/"
            onClick={closeMenu}
            className="shrink-0 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="CARMO Home"
          >
            <img
              src={carmoLogo}
              alt="CARMO"
              className="h-[68px] w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="ml-auto mr-8 hidden items-center gap-7 lg:flex xl:mr-10 xl:gap-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={`
                    relative
                    whitespace-nowrap
                    text-[16px]
                    font-medium
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                    }
                  `}
                >
                  {item.name}

                  <span
                    className={`
                      absolute
                      -bottom-2
                      left-0
                      h-[2px]
                      rounded-full
                      bg-[var(--color-secondary)]
                      transition-all
                      duration-300
                      ${isActive ? "w-full" : "w-0"}
                    `}
                  />
                </NavLink>
              );
            })}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden shrink-0 items-center gap-3 lg:flex">

            {/* LANGUAGE */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Change language"
              className="
                flex
                h-[58px]
                min-w-[82px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[var(--color-border)]
                px-5
                text-[16px]
                font-medium
                text-[var(--color-text)]
                transition-all
                duration-300
                hover:border-[var(--color-secondary)]
                hover:bg-[var(--color-surface)]
                hover:text-[var(--color-primary)]
              "
            >
              {/* Globe Icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9" />
                <path d="M12 3c-2.2 2.4-3.3 5.4-3.3 9s1.1 6.6 3.3 9" />
              </svg>

              <span>{language === "en" ? "SO" : "EN"}</span>
            </button>

            {/* THEME SELECTOR */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsThemeOpen(!isThemeOpen)}
                aria-label="Choose theme"
                aria-expanded={isThemeOpen}
                className="
                  flex
                  h-[58px]
                  w-[58px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--color-border)]
                  text-[var(--color-text)]
                  transition-all
                  duration-300
                  hover:border-[var(--color-secondary)]
                  hover:bg-[var(--color-surface)]
                  hover:text-[var(--color-primary)]
                "
              >
                <span className="text-[18px]">
                  ◐
                </span>
              </button>

              {/* THEME DROPDOWN */}
              {isThemeOpen && (
                <div
                  className="
                    absolute
                    right-0
                    top-[68px]
                    w-48
                    rounded-2xl
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-background)]
                    p-2
                    shadow-xl
                  "
                >
                  <div
                    className="
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      uppercase
                      tracking-wider
                      text-[var(--color-text-muted)]
                    "
                  >
                    Choose Theme
                  </div>

                  {themeOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleThemeChange(option.id)}
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-xl
                        px-3
                        py-3
                        text-left
                        text-sm
                        transition-all
                        duration-200
                        ${
                          theme === option.id
                            ? "bg-[var(--color-surface)] font-semibold text-[var(--color-primary)]"
                            : "text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                        }
                      `}
                    >
                      <span>{option.icon}</span>

                      <span>{option.name}</span>

                      {theme === option.id && (
                        <span className="ml-auto text-[var(--color-secondary)]">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* BOOK APPOINTMENT */}
            <Link
              to="/book-appointment"
              className="
                ml-1
                flex
                h-[58px]
                items-center
                justify-center
                rounded-full
                bg-[var(--color-primary)]
                px-7
                text-[16px]
                font-semibold
                text-white
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[var(--color-primary-dark)]
                hover:shadow-lg
                active:translate-y-0
              "
            >
              Book Appointment
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="
              ml-auto
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[var(--color-border)]
              text-[var(--color-primary)]
              transition-all
              duration-300
              hover:border-[var(--color-secondary)]
              hover:bg-[var(--color-surface)]
              lg:hidden
            "
          >
            {isMenuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="border-t border-[var(--color-border)] py-5 lg:hidden">

            {/* MOBILE NAVIGATION */}
            <div className="flex flex-col">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`
                      rounded-lg
                      px-3
                      py-3
                      text-sm
                      font-medium
                      transition-all
                      duration-200
                      ${
                        isActive
                          ? "bg-[var(--color-surface)] text-[var(--color-primary)]"
                          : "text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
                      }
                    `}
                  >
                    {item.name}
                  </NavLink>
                );
              })}
            </div>

            {/* MOBILE ACTIONS */}
            <div className="mt-4 border-t border-[var(--color-border)] pt-4">

              {/* LANGUAGE + THEME */}
              <div className="flex gap-3">

                {/* MOBILE LANGUAGE */}
                <button
                  type="button"
                  onClick={toggleLanguage}
                  aria-label="Change language"
                  className="
                    flex
                    flex-1
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    border
                    border-[var(--color-border)]
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-[var(--color-text)]
                    transition-all
                    duration-200
                    hover:border-[var(--color-secondary)]
                    hover:bg-[var(--color-surface)]
                    hover:text-[var(--color-primary)]
                  "
                >
                  {/* Globe Icon */}
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9" />
                    <path d="M12 3c-2.2 2.4-3.3 5.4-3.3 9s1.1 6.6 3.3 9" />
                  </svg>

                  <span>{language === "en" ? "SO" : "EN"}</span>
                </button>

                {/* MOBILE THEME */}
                <button
                  type="button"
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-[var(--color-border)]
                    text-[var(--color-text)]
                    transition-all
                    duration-200
                    hover:border-[var(--color-secondary)]
                    hover:bg-[var(--color-surface)]
                  "
                  aria-label="Choose theme"
                >
                  ◐
                </button>
              </div>

              {/* MOBILE THEME OPTIONS */}
              {isThemeOpen && (
                <div
                  className="
                    mt-3
                    rounded-xl
                    border
                    border-[var(--color-border)]
                    bg-[var(--color-background)]
                    p-2
                  "
                >
                  {themeOptions.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleThemeChange(option.id)}
                      className={`
                        flex
                        w-full
                        items-center
                        gap-3
                        rounded-lg
                        px-3
                        py-3
                        text-left
                        text-sm
                        transition-all
                        duration-200
                        ${
                          theme === option.id
                            ? "bg-[var(--color-surface)] font-semibold text-[var(--color-primary)]"
                            : "text-[var(--color-text)] hover:bg-[var(--color-surface)]"
                        }
                      `}
                    >
                      <span>{option.icon}</span>

                      <span>{option.name}</span>

                      {theme === option.id && (
                        <span className="ml-auto text-[var(--color-secondary)]">
                          ✓
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* MOBILE BOOK APPOINTMENT */}
              <Link
                to="/book-appointment"
                onClick={closeMenu}
                className="
                  mt-3
                  block
                  rounded-lg
                  bg-[var(--color-primary)]
                  px-5
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[var(--color-primary-dark)]
                "
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;