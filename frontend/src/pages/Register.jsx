import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  UserPlus,
  HeartPulse,
  ShieldCheck,
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
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const password = formData.password;

    if (!name) {
      toast.error("Please enter your name.");
      return;
    }

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    if (password.length < 6) {
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
            name,
            email,
            password,
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
    <div className="min-h-[78vh] bg-[#F7F5F1] px-4 py-10 flex items-center justify-center">
      <div className="w-full max-w-5xl">
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-[#E2DED4] bg-white shadow-xl">

          {/* LEFT PANEL */}
          <div className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-[#083E44] via-[#0E6F78] to-[#2B858C] p-10">

            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <HeartPulse
                    size={27}
                    className="text-white"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <h2 className="text-lg font-extrabold text-white">
                    MediMind AI
                  </h2>

                  <p className="text-xs text-[#CFE7E9]">
                    AI Healthcare Assistant
                  </p>
                </div>
              </div>

              <div className="mt-14">
                <p className="text-xs font-bold tracking-wider text-[#F2D76B]">
                  SMART HEALTHCARE
                </p>

                <h1 className="mt-4 text-4xl font-extrabold leading-tight text-white">
                  Understand your health
                  <span className="block text-[#F2D76B]">
                    with smarter AI.
                  </span>
                </h1>

                <p className="mt-5 max-w-md text-sm leading-7 text-[#D9ECEE]">
                  Create your account and explore AI-powered tools for
                  symptoms, medical reports, medicines, and general
                  healthcare questions.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <ShieldCheck
                    size={16}
                    className="text-[#F2D76B]"
                  />
                </div>

                Secure account access
              </div>

              <div className="flex items-center gap-3 text-sm text-white">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <HeartPulse
                    size={16}
                    className="text-[#F2D76B]"
                  />
                </div>

                Educational healthcare assistance
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="p-7 sm:p-10 lg:p-12">

            <div className="text-center mb-8">
              <div className="mx-auto w-14 h-14 rounded-2xl bg-[#E5F2F3] text-[#0E6F78] flex items-center justify-center">
                <UserPlus size={28} />
              </div>

              <h1 className="mt-4 text-3xl font-extrabold text-[#083E44]">
                Create Account
              </h1>

              <p className="mt-2 text-sm text-[#7A736B]">
                Join MediMind AI and explore smarter healthcare tools.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* NAME */}
              <div>
                <label className="block mb-2 text-sm font-bold text-[#3E3934]">
                  Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A837B]"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    disabled={loading}
                    className="w-full rounded-xl border border-[#D9D4CB] bg-[#FDFCF9] py-3.5 pl-11 pr-4 text-sm text-[#1C1A16] outline-none focus:border-[#0E6F78] focus:ring-4 focus:ring-[#0E6F78]/10"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block mb-2 text-sm font-bold text-[#3E3934]">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A837B]"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    disabled={loading}
                    className="w-full rounded-xl border border-[#D9D4CB] bg-[#FDFCF9] py-3.5 pl-11 pr-4 text-sm text-[#1C1A16] outline-none focus:border-[#0E6F78] focus:ring-4 focus:ring-[#0E6F78]/10"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div>
                <label className="block mb-2 text-sm font-bold text-[#3E3934]">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8A837B]"
                  />

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter password"
                    disabled={loading}
                    className="w-full rounded-xl border border-[#D9D4CB] bg-[#FDFCF9] py-3.5 pl-11 pr-4 text-sm text-[#1C1A16] outline-none focus:border-[#0E6F78] focus:ring-4 focus:ring-[#0E6F78]/10"
                  />
                </div>

                <div className="flex items-center gap-2 mt-2 text-xs text-[#7A736B]">
                  <ShieldCheck
                    size={14}
                    className="text-[#1F7A4C]"
                  />
                  Password must contain at least 6 characters.
                </div>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="group w-full flex items-center justify-center gap-2 rounded-xl bg-[#0E6F78] py-3.5 font-bold text-white shadow-md transition hover:bg-[#083E44] disabled:bg-[#8FC7CC]"
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
                      className="transition-transform group-hover:translate-x-1"
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
                  className="font-extrabold text-[#0E6F78] hover:text-[#083E44]"
                >
                  Login
                </Link>
              </p>
            </div>

            {/* DISCLAIMER */}
            <div className="mt-5 flex gap-2 rounded-xl border border-[#E2DED4] bg-[#F7F5F1] p-3.5">
              <ShieldCheck
                size={16}
                className="mt-0.5 shrink-0 text-[#0E6F78]"
              />

              <p className="text-[11px] leading-5 text-[#7A736B]">
                MediMind AI provides educational healthcare information
                and is not a substitute for professional medical advice.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;