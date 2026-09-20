import { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  Menu,
  X,
  HeartPulse,
  LayoutDashboard,
  History as HistoryIcon,
  LogIn,
  LogOut,
  Globe,
  User,
} from "lucide-react";

import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import api from "../services/api";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [localUser, setLocalUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const { language, setLanguage } = useLanguage();

  const {
    user: authUser,
    isLoggedIn,
    logout,
  } = useAuth();

  const user = authUser || localUser;

  /* ============================================================
     LOAD AUTHENTICATED USER
  ============================================================ */

  useEffect(() => {
    const loadUser = async () => {
      const storedUser = localStorage.getItem("medimind_user");
      const storedToken = localStorage.getItem("medimind_token");

      if (!storedToken) {
        setLocalUser(null);
        return;
      }

      if (storedUser) {
        try {
          setLocalUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Unable to read stored user:", error);
          localStorage.removeItem("medimind_user");
          setLocalUser(null);
        }
      }

      try {
        const response = await api.get("/auth/me");

        if (response.data) {
          setLocalUser(response.data);

          localStorage.setItem(
            "medimind_user",
            JSON.stringify(response.data)
          );
        }
      } catch (error) {
        console.warn(
          "Unable to refresh authenticated user:",
          error
        );
      }
    };

    loadUser();
  }, [location.pathname]);

  /* ============================================================
     STORAGE SYNC
  ============================================================ */

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = localStorage.getItem("medimind_user");

      if (storedUser) {
        try {
          setLocalUser(JSON.parse(storedUser));
        } catch (error) {
          console.error(
            "Unable to read stored user:",
            error
          );
          setLocalUser(null);
        }
      } else {
        setLocalUser(null);
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

  /* ============================================================
     MENU
  ============================================================ */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* ============================================================
     LANGUAGE
  ============================================================ */

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  /* ============================================================
     LOGOUT
  ============================================================ */

  const handleLogout = () => {
    logout();

    localStorage.removeItem("medimind_token");
    localStorage.removeItem("medimind_user");

    setLocalUser(null);
    closeMenu();

    navigate("/");
  };

  /* ============================================================
     NAVIGATION LINK STYLE
  ============================================================ */

  const navLink = ({ isActive }) =>
    `px-3.5 py-2 rounded-xl text-[14px] font-semibold whitespace-nowrap transition-all duration-200 ${
      isActive
        ? "text-[#0E6F78] bg-[#E5F2F3]"
        : "text-[#3E3934] hover:text-[#0E6F78] hover:bg-[#F1F5F3]"
    }`;

  const labels =
    language === "te"
      ? {
          home: "హోమ్",
          symptoms: "లక్షణాలు",
          reports: "రిపోర్ట్స్",
          medicines: "మందులు",
          chat: "AI చాట్",
          about: "గురించి",
          dashboard: "డ్యాష్‌బోర్డ్",
          history: "చరిత్ర",
          login: "లాగిన్",
          logout: "లాగ్ అవుట్",
        }
      : {
          home: "Home",
          symptoms: "Symptoms",
          reports: "Reports",
          medicines: "Medicines",
          chat: "AI Chat",
          about: "About",
          dashboard: "Dashboard",
          history: "History",
          login: "Login",
          logout: "Logout",
        };

  return (
    <header className="sticky top-0 z-50 bg-[#F7F5F1]/95 backdrop-blur-xl border-b border-[#E2DED4] shadow-sm">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="h-[76px] flex items-center justify-between">

          {/* =====================================================
              LOGO
          ===================================================== */}

          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-11 h-11 rounded-[14px] bg-[#0E6F78] flex items-center justify-center shadow-[0_6px_18px_rgba(14,111,120,0.18)]">
              <HeartPulse
                size={23}
                strokeWidth={2.1}
                className="text-white"
              />
            </div>

            <div>
              <h1 className="text-[21px] font-extrabold text-[#1C1A16] leading-tight">
                MediMind
              </h1>

              <p className="text-[9px] font-bold tracking-[1.2px] text-[#0E6F78] uppercase">
                AI Healthcare
              </p>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP MENU
          ===================================================== */}

          <nav className="hidden lg:flex items-center gap-4 ml-8 mr-auto">

            <NavLink
              to="/"
              className={navLink}
            >
              {labels.home}
            </NavLink>

            <NavLink
              to="/symptoms"
              className={navLink}
            >
              {labels.symptoms}
            </NavLink>

            <NavLink
              to="/report"
              className={navLink}
            >
              {labels.reports}
            </NavLink>

            <NavLink
              to="/medicine"
              className={navLink}
            >
              {labels.medicines}
            </NavLink>

            <NavLink
              to="/chat"
              className={navLink}
            >
              {labels.chat}
            </NavLink>

            <NavLink
              to="/about"
              className={navLink}
            >
              {labels.about}
            </NavLink>

          </nav>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div className="hidden lg:flex items-center gap-3 shrink-0">

            {/* LANGUAGE */}

            <div className="flex items-center gap-1.5 rounded-xl border border-[#E2DED4] bg-white px-2.5 py-2">
              <Globe
                size={16}
                className="text-[#0E6F78]"
              />

              <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-transparent outline-none text-sm font-medium text-[#3E3934] cursor-pointer"
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
              className="flex items-center gap-1.5 rounded-xl bg-[#0E6F78] text-white px-3.5 py-2 text-sm font-semibold hover:bg-[#083E44] transition whitespace-nowrap"
            >
              <LayoutDashboard size={16} />
              {labels.dashboard}
            </Link>

            {/* HISTORY */}

            <Link
              to="/history"
              className="flex items-center gap-1.5 rounded-xl border border-[#E2DED4] bg-white text-[#3E3934] px-3.5 py-2 text-sm font-semibold hover:border-[#0E6F78] hover:text-[#0E6F78] transition whitespace-nowrap"
            >
              <HistoryIcon size={16} />
              {labels.history}
            </Link>

            {/* AUTH */}

            {isLoggedIn || user ? (
              <>
                <div className="flex items-center gap-2 rounded-xl bg-[#E5F2F3] px-3.5 py-2 text-[#083E44]">
                  <User
                    size={16}
                    className="text-[#0E6F78]"
                  />

                  <span className="max-w-[120px] truncate text-sm font-semibold">
                    {user?.name || "User"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-1.5 rounded-xl border border-[#E2DED4] bg-white text-[#55504A] px-3.5 py-2 text-sm font-semibold hover:border-[#B42318] hover:text-[#B42318] transition whitespace-nowrap"
                >
                  <LogOut size={16} />
                  {labels.logout}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="flex items-center gap-1.5 rounded-xl border border-[#E2DED4] bg-white text-[#55504A] px-3.5 py-2 text-sm font-semibold hover:border-[#0E6F78] hover:text-[#0E6F78] transition whitespace-nowrap"
              >
                <LogIn size={16} />
                {labels.login}
              </Link>
            )}

          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <button
            type="button"
            onClick={() =>
              setMenuOpen((previous) => !previous)
            }
            className="lg:hidden w-10 h-10 rounded-xl border border-[#E2DED4] bg-white flex items-center justify-center text-[#3E3934]"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>

        </div>

        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {menuOpen && (
          <div className="lg:hidden border-t border-[#E2DED4] py-4">

            <nav className="flex flex-col gap-2">

              <NavLink
                to="/"
                onClick={closeMenu}
                className={navLink}
              >
                {labels.home}
              </NavLink>

              <NavLink
                to="/symptoms"
                onClick={closeMenu}
                className={navLink}
              >
                {labels.symptoms}
              </NavLink>

              <NavLink
                to="/report"
                onClick={closeMenu}
                className={navLink}
              >
                {labels.reports}
              </NavLink>

              <NavLink
                to="/medicine"
                onClick={closeMenu}
                className={navLink}
              >
                {labels.medicines}
              </NavLink>

              <NavLink
                to="/chat"
                onClick={closeMenu}
                className={navLink}
              >
                {labels.chat}
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className={navLink}
              >
                {labels.about}
              </NavLink>

              <div className="h-px bg-[#E2DED4] my-2" />

              <Link
                to="/dashboard"
                onClick={closeMenu}
                className="flex items-center gap-2 rounded-xl bg-[#0E6F78] text-white px-4 py-3 font-semibold"
              >
                <LayoutDashboard size={18} />
                {labels.dashboard}
              </Link>

              <Link
                to="/history"
                onClick={closeMenu}
                className="flex items-center gap-2 rounded-xl border border-[#E2DED4] bg-white px-4 py-3 font-semibold text-[#3E3934]"
              >
                <HistoryIcon size={18} />
                {labels.history}
              </Link>

              {isLoggedIn || user ? (
                <>
                  <div className="flex items-center gap-2 rounded-xl bg-[#E5F2F3] px-4 py-3 mt-1">
                    <User
                      size={18}
                      className="text-[#0E6F78]"
                    />

                    <span className="font-semibold text-[#083E44]">
                      {user?.name || "User"}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex items-center gap-2 rounded-xl border border-[#E2DED4] bg-white px-4 py-3 font-semibold text-[#55504A]"
                  >
                    <LogOut size={18} />
                    {labels.logout}
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="flex items-center gap-2 rounded-xl border border-[#E2DED4] bg-white px-4 py-3 font-semibold text-[#55504A]"
                >
                  <LogIn size={18} />
                  {labels.login}
                </Link>
              )}

              <div className="flex items-center gap-2 rounded-xl border border-[#E2DED4] bg-white px-3 py-2 mt-1">
                <Globe
                  size={17}
                  className="text-[#0E6F78]"
                />

                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="flex-1 bg-transparent outline-none text-sm font-medium"
                >
                  <option value="en">
                    English
                  </option>

                  <option value="te">
                    తెలుగు
                  </option>
                </select>
              </div>

            </nav>
          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;