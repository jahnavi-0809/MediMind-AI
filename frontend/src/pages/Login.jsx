import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  LogIn,
  Mail,
  Lock,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { toast } from "react-toastify";

import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (!formData.password) {
      toast.error("Please enter your password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email.trim(),
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(
          data.detail || "Invalid email or password."
        );
        return;
      }

      login(
        data.access_token,
        data.user
      );

      toast.success("Login successful!");

      const redirectPath =
        location.state?.from || "/dashboard";

      setTimeout(() => {
        navigate(redirectPath, {
          replace: true,
        });
      }, 800);

    } catch (error) {
      console.error("Login error:", error);

      toast.error(
        "Unable to connect to the MediMind AI server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[78vh] bg-[#F7F5F1] px-4 py-10 sm:py-14 flex items-center justify-center">

      <div className="w-full max-w-5xl">

        <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-[#E2DED4] bg-white shadow-[0_18px_50px_rgba(28,26,22,0.09)]">

          {/* =====================================================
              LEFT INFORMATION PANEL
          ===================================================== */}

          <div className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#083E44] via-[#0E6F78] to-[#2B858C] p-10 xl:p-12">

            <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full border border-white/10" />

            <div className="absolute -left-20 -bottom-32 w-72 h-72 rounded-full border border-white/10" />

            <div className="relative z-10">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">

                  <HeartPulse
                    size={26}
                    className="text-white"
                    strokeWidth={1.8}
                  />

                </div>

                <div>

                  <p className="text-white font-extrabold text-lg">
                    MediMind AI
                  </p>

                  <p className="text-[#CFE7E9] text-xs">
                    AI Healthcare Assistant
                  </p>

                </div>

              </div>

              <div className="mt-12">

                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-2 text-xs font-bold text-[#E5F2F3]">

                  <Sparkles
                    size={15}
                    className="text-[#F2D76B]"
                  />

                  Smart Healthcare

                </span>

                <h2 className="mt-5 text-3xl xl:text-4xl font-extrabold leading-tight text-white">

                  Welcome back to your smarter healthcare journey.

                </h2>

                <p className="mt-5 text-sm leading-7 text-[#D9ECEE] max-w-md">

                  Sign in to continue using MediMind AI's intelligent healthcare tools for symptoms, medical reports, medicines, and health questions.

                </p>

              </div>

            </div>

            <div className="relative z-10 mt-10 space-y-3">

              <div className="flex items-center gap-3 text-sm text-white">

                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">

                  <ShieldCheck
                    size={17}
                    className="text-[#F2D76B]"
                  />

                </div>

                Secure account access

              </div>

              <div className="flex items-center gap-3 text-sm text-white">

                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">

                  <Sparkles
                    size={17}
                    className="text-[#F2D76B]"
                  />

                </div>

                AI-powered healthcare assistance

              </div>

            </div>

          </div>

          {/* =====================================================
              LOGIN FORM
          ===================================================== */}

          <div className="p-6 sm:p-9 lg:p-10 xl:p-12">

            {/* MOBILE LOGO */}

            <div className="lg:hidden flex justify-center mb-6">

              <div className="w-14 h-14 rounded-2xl bg-[#E5F2F3] text-[#0E6F78] flex items-center justify-center">

                <HeartPulse
                  size={28}
                  strokeWidth={1.8}
                />

              </div>

            </div>

            {/* HEADER */}

            <div className="text-center mb-8">

              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E5F2F3] text-[#0E6F78] mb-4">

                <LogIn size={27} />

              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#083E44]">

                Welcome Back

              </h1>

              <p className="text-sm text-[#7A736B] mt-2">

                Login to your MediMind AI account.

              </p>

            </div>

            {/* LOGIN FORM */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* EMAIL */}

              <div>

                <label className="block text-sm font-bold text-[#3E3934] mb-2">

                  Email

                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A837B]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-[#D9D4CB] bg-[#FDFCF9] pl-11 pr-4 py-3.5 text-sm text-[#1C1A16] outline-none placeholder:text-[#9A938B] focus:border-[#0E6F78] focus:ring-4 focus:ring-[#0E6F78]/10"
                    disabled={loading}
                  />

                </div>

              </div>

              {/* PASSWORD */}

              <div>

                <div className="flex items-center justify-between mb-2">

                  <label className="block text-sm font-bold text-[#3E3934]">

                    Password

                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs sm:text-sm font-bold text-[#0E6F78] hover:text-[#083E44] hover:underline"
                  >
                    Forgot Password?
                  </Link>

                </div>

                <div className="relative">

                  <Lock
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A837B]"
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    className="w-full rounded-xl border border-[#D9D4CB] bg-[#FDFCF9] pl-11 pr-4 py-3.5 text-sm text-[#1C1A16] outline-none placeholder:text-[#9A938B] focus:border-[#0E6F78] focus:ring-4 focus:ring-[#0E6F78]/10"
                    disabled={loading}
                  />

                </div>

              </div>

              {/* LOGIN BUTTON */}

              <button
                type="submit"
                disabled={loading}
                className="group w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#0E6F78] hover:bg-[#083E44] disabled:bg-[#8FC7CC] text-white font-bold py-3.5 shadow-[0_8px_20px_rgba(14,111,120,0.18)] hover:shadow-[0_12px_25px_rgba(8,62,68,0.18)] hover:-translate-y-0.5 transition-all duration-200"
              >

                {loading ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />

                    Logging in...
                  </>
                ) : (
                  <>
                    Login

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />

                  </>
                )}

              </button>

            </form>

            {/* REGISTER */}

            <div className="mt-7 pt-6 border-t border-[#E8E3DA] text-center">

              <p className="text-sm text-[#625C56]">

                Don't have an account?{" "}

                <Link
                  to="/register"
                  className="font-extrabold text-[#0E6F78] hover:text-[#083E44] hover:underline"
                >
                  Create Account
                </Link>

              </p>

            </div>

            {/* SECURITY INFO */}

            <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#F7F5F1] border border-[#E2DED4] p-4">

              <ShieldCheck
                size={18}
                className="mt-0.5 shrink-0 text-[#1F7A4C]"
              />

              <div>

                <p className="text-xs font-bold text-[#3E3934]">
                  Secure Access
                </p>

                <p className="mt-1 text-[11px] leading-5 text-[#7A736B]">
                  Your account is protected with secure authentication.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;