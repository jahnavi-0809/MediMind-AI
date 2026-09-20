import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserPlus,
  User,
  Mail,
  Lock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { toast } from "react-toastify";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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

    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must contain at least 6 characters.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(
          data.detail || "Registration failed. Please try again."
        );
        return;
      }

      toast.success("Registration successful!");

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Registration error:", error);

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

                  <HeartPulseIcon />

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

                  Your smarter journey to understanding healthcare.

                </h2>

                <p className="mt-5 text-sm leading-7 text-[#D9ECEE] max-w-md">

                  Create your MediMind AI account and explore AI-powered tools for symptoms, medical reports, medicines, and healthcare questions.

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
              REGISTER FORM
          ===================================================== */}

          <div className="p-6 sm:p-9 lg:p-10 xl:p-12">

            {/* Mobile Logo */}

            <div className="lg:hidden flex justify-center mb-6">

              <div className="w-14 h-14 rounded-2xl bg-[#E5F2F3] text-[#0E6F78] flex items-center justify-center">

                <HeartPulseIcon />

              </div>

            </div>

            <div className="text-center mb-8">

              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E5F2F3] text-[#0E6F78] mb-4">

                <UserPlus size={27} />

              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#083E44]">

                Create Account

              </h1>

              <p className="text-sm text-[#7A736B] mt-2">

                Join MediMind AI and explore smarter healthcare tools.

              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}

              <div>

                <label className="block text-sm font-bold text-[#3E3934] mb-2">

                  Name

                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8A837B]"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-[#D9D4CB] bg-[#FDFCF9] pl-11 pr-4 py-3.5 text-sm text-[#1C1A16] outline-none placeholder:text-[#9A938B] focus:border-[#0E6F78] focus:ring-4 focus:ring-[#0E6F78]/10"
                    disabled={loading}
                  />

                </div>

              </div>

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

                <label className="block text-sm font-bold text-[#3E3934] mb-2">

                  Password

                </label>

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
                    placeholder="Enter password"
                    className="w-full rounded-xl border border-[#D9D4CB] bg-[#FDFCF9] pl-11 pr-4 py-3.5 text-sm text-[#1C1A16] outline-none placeholder:text-[#9A938B] focus:border-[#0E6F78] focus:ring-4 focus:ring-[#0E6F78]/10"
                    disabled={loading}
                  />

                </div>

                <div className="mt-2 flex items-center gap-2 text-xs text-[#7A736B]">

                  <ShieldCheck
                    size={14}
                    className="text-[#1F7A4C]"
                  />

                  Password must contain at least 6 characters.

                </div>

              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="group w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#0E6F78] hover:bg-[#083E44] disabled:bg-[#8FC7CC] text-white font-bold py-3.5 shadow-[0_8px_20px_rgba(14,111,120,0.18)] hover:shadow-[0_12px_25px_rgba(8,62,68,0.18)] hover:-translate-y-0.5 transition-all duration-200"
              >

                {loading ? (
                  <>
                    <span className="w-5 h-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}

              </button>

            </form>

            {/* LOGIN */}

            <div className="mt-7 pt-6 border-t border-[#E8E3DA] text-center">

              <p className="text-sm text-[#625C56]">

                Already have an account?{" "}

                <Link
                  to="/login"
                  className="font-extrabold text-[#0E6F78] hover:text-[#083E44] hover:underline"
                >
                  Login
                </Link>

              </p>

            </div>

            {/* DISCLAIMER */}

            <div className="mt-5 flex items-start gap-2 rounded-xl bg-[#F7F5F1] border border-[#E2DED4] p-3.5">

              <ShieldCheck
                size={16}
                className="mt-0.5 shrink-0 text-[#0E6F78]"
              />

              <p className="text-[11px] leading-5 text-[#7A736B]">

                MediMind AI provides educational healthcare information and is not a substitute for professional medical advice.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* =====================================================
   SMALL HEART ICON COMPONENT
===================================================== */

function HeartPulseIcon() {
  return (
    <HeartPulse
      size={26}
      className="text-current"
      strokeWidth={1.8}
    />
  );
}

export default Register;