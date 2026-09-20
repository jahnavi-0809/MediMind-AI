import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  Menu,
  X,
  HeartPulse,
  LayoutDashboard,
  History,
  LogIn,
  LogOut,
  Globe,
  User,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const {
    language,
    setLanguage,
    t,
  } = useLanguage();

  const navLink = ({ isActive }) =>
    `relative px-3 py-2 rounded-xl text-[14px] font-semibold transition-all duration-200 ${
      isActive
        ? "text-[#0E6F78] bg-[#E5F2F3]"
        : "text-[#55504A] hover:text-[#0E6F78] hover:bg-[#F1F8F8]"
    }`;

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  useEffect(() => {
    const storedUser =
      localStorage.getItem("medimind_user");

    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error(
          "Unable to read stored user:",
          error
        );

        localStorage.removeItem("medimind_user");
      }
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser =
        localStorage.getItem("medimind_user");

      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error(
            "Unable to read stored user:",
            error
          );

          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    window.addEventListener(
      "storage",
      handleStorageChange
    );

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      );
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("medimind_token");
    localStorage.removeItem("medimind_user");

    setUser(null);
    closeMenu();

    navigate("/");
  };

  const historyLabel =
    language === "te"
      ? "చరిత్ర"
      : "History";

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2DED4] bg-[#F7F5F1]/95 backdrop-blur-xl shadow-[0_2px_14px_rgba(28,26,22,0.04)]">

      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="h-[76px] flex items-center justify-between">

          {/* ==================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            className="flex items-center gap-3 group"
            onClick={closeMenu}
          >
            <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-[#0E6F78] to-[#083E44] flex items-center justify-center shadow-[0_7px_18px_rgba(14,111,120,0.18)] group-hover:scale-105 transition-transform duration-200">
              <HeartPulse
                className="text-white"
                size={23}
              />
            </div>

            <div className="leading-none">
              <h1 className="text-[21px] font-extrabold text-[#1C1A16] tracking-tight">
                MediMind
              </h1>

              <p className="text-[9px] font-semibold tracking-[0.6px] text-[#7A736B] mt-1">
                AI HEALTHCARE
              </p>
            </div>
          </Link>

          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav className="hidden lg:flex items-center gap-1">

            <NavLink
              to="/"
              className={navLink}
            >
              {t("home")}
            </NavLink>

            <NavLink
              to="/symptoms"
              className={navLink}
            >
              {t("symptoms")}
            </NavLink>

            <NavLink
              to="/report"
              className={navLink}
            >
              {t("reports")}
            </NavLink>

            <NavLink
              to="/medicine"
              className={navLink}
            >
              {t("medicines")}
            </NavLink>

            <NavLink
              to="/chat"
              className={navLink}
            >
              {t("aiChat")}
            </NavLink>

            <NavLink
              to="/about"
              className={navLink}
            >
              {t("about")}
            </NavLink>

          </nav>

          {/* ==================================================
              DESKTOP RIGHT SIDE
          ================================================== */}

          <div className="hidden lg:flex items-center gap-2">

            {/* LANGUAGE */}

            <div className="flex items-center gap-2 border border-[#E2DED4] rounded-xl px-3 py-2 bg-white hover:border-[#8FC7CC] transition">

              <Globe
                size={16}
                className="text-[#0E6F78]"
              />

              <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-transparent outline-none text-[12px] font-semibold text-[#55504A] cursor-pointer"
                aria-label={t("language")}
              >
                <option value="en">
                  English
                </option>

                <option value="te">
                  తెలుగు
                </option>
              </select>

            </div>

            {/* DASHBOARD */}

            <Link
              to="/dashboard"
              className="flex items-center gap-2 bg-[#0E6F78] hover:bg-[#083E44] text-white px-4 py-2.5 rounded-xl shadow-[0_6px_16px_rgba(14,111,120,0.16)] transition-all duration-200 hover:-translate-y-[1px]"
            >
              <LayoutDashboard size={16} />

              <span className="text-[11px] font800">
                {t("dashboard")}
              </span>
            </Link>

            {/* HISTORY */}

            <Link
              to="/history"
              title={historyLabel}
              className="flex items-center gap-2 border border-[#E2DED4] bg-white hover:border-[#8FC7CC] hover:text-[#0E6F78] px-3.5 py-2.5 rounded-xl transition text-[#55504A]"
            >
              <History size={16} />

              <span className="text-[11px] font-semibold">
                {historyLabel}
              </span>
            </Link>

            {/* AUTH */}

            {user ? (
              <div className="flex items-center gap-2">

                <div className="flex items-center gap-2 border border-[#E2DED4] bg-white rounded-xl px-3.5 py-2.5">

                  <User
                    size={16}
                    className="text-[#0E6F78]"
                  />

                  <span className="font-semibold text-[11px] text-[#55504A] max-w-[110px] truncate">
                    {user.name}
                  </span>

                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 border border-[#E2DED4] bg-white hover:border-[#B42318] hover:text-[#B42318] px-3.5 py-2.5 rounded-xl transition text-[#55504A]"
                >
                  <LogOut size={16} />

                  <span className="text-[11px] font-semibold">
                    Logout
                  </span>
                </button>

              </div>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-2 border border-[#E2DED4] bg-white hover:border-[#0E6F78] hover:text-[#0E6F78] px-4 py-2.5 rounded-xl transition text-[#55504A]"
              >
                <LogIn size={16} />

                <span className="text-[11px] font-semibold">
                  Login
                </span>
              </Link>
            )}

          </div>

          {/* ==================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-[#E5F2F3] text-[#0E6F78] transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X size={25} />
            ) : (
              <Menu size={25} />
            )}
          </button>

        </div>

      </div>

      {/* ======================================================
          MOBILE MENU
      ====================================================== */}

      {menuOpen && (
        <div className="lg:hidden border-t border-[#E2DED4] bg-[#F7F5F1] shadow-[0_12px_30px_rgba(28,26,22,0.08)]">

          <div className="flex flex-col px-5 py-5 space-y-2">

            <NavLink
              to="/"
              className={navLink}
              onClick={closeMenu}
            >
              {t("home")}
            </NavLink>

            <NavLink
              to="/symptoms"
              className={navLink}
              onClick={closeMenu}
            >
              {t("symptoms")}
            </NavLink>

            <NavLink
              to="/report"
              className={navLink}
              onClick={closeMenu}
            >
              {t("reports")}
            </NavLink>

            <NavLink
              to="/medicine"
              className={navLink}
              onClick={closeMenu}
            >
              {t("medicines")}
            </NavLink>

            <NavLink
              to="/chat"
              className={navLink}
              onClick={closeMenu}
            >
              {t("aiChat")}
            </NavLink>

            <NavLink
              to="/about"
              className={navLink}
              onClick={closeMenu}
            >
              {t("about")}
            </NavLink>

            <div className="h-px bg-[#E2DED4] my-2" />

            {/* MOBILE LANGUAGE */}

            <div className="flex items-center justify-between border border-[#E2DED4] bg-white rounded-xl px-4 py-3">

              <div className="flex items-center gap-2">

                <Globe
                  size={17}
                  className="text-[#0E6F78]"
                />

                <span className="font-semibold text-[12px] text-[#55504A]">
                  {t("language")}
                </span>

              </div>

              <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-transparent outline-none font-semibold text-[12px] cursor-pointer text-[#55504A]"
              >
                <option value="en">
                  English
                </option>

                <option value="te">
                  తెలుగు
                </option>
              </select>

            </div>

            {/* MOBILE DASHBOARD */}

            <Link
              to="/dashboard"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 bg-[#0E6F78] text-white rounded-xl py-3 text-center font-semibold hover:bg-[#083E44] transition"
            >
              <LayoutDashboard size={17} />

              {t("dashboard")}
            </Link>

            {/* MOBILE HISTORY */}

            <Link
              to="/history"
              onClick={closeMenu}
              className="flex items-center justify-center gap-2 border border-[#E2DED4] bg-white rounded-xl py-3 font-semibold hover:border-[#0E6F78] hover:text-[#0E6F78] transition text-[#55504A]"
            >
              <History size={17} />

              {historyLabel}
            </Link>

            {/* MOBILE AUTH */}

            {user ? (
              <>
                <div className="flex items-center justify-center gap-2 border border-[#E2DED4] bg-white rounded-xl py-3">

                  <User
                    size={17}
                    className="text-[#0E6F78]"
                  />

                  <span className="font-semibold text-[12px] text-[#55504A]">
                    {user.name}
                  </span>

                </div>

                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 border border-[#E2DED4] bg-white rounded-xl py-3 font-semibold hover:border-[#B42318] hover:text-[#B42318] transition text-[#55504A]"
                >
                  <LogOut size={17} />

                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 border border-[#E2DED4] bg-white rounded-xl py-3 font-semibold hover:border-[#0E6F78] hover:text-[#0E6F78] transition text-[#55504A]"
              >
                <LogIn size={17} />

                Login
              </Link>
            )}

          </div>

        </div>
      )}

    </header>
  );
}

export default Navbar;