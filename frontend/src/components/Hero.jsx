import { Link } from "react-router-dom";
import {
  HeartPulse,
  ShieldCheck,
  Activity,
  FileText,
  Pill,
  ArrowRight,
} from "lucide-react";

function Hero() {
  return (
    <section
      data-aos="fade-up"
      className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-cyan-600 to-teal-500 min-h-screen flex items-center"
    >
      {/* Background Blur */}

      <div className="absolute -top-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-5 py-2 rounded-full text-sm font-medium mb-6">

            <ShieldCheck size={18} />

            Trusted AI Healthcare Platform

          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">

            AI-Powered

            <span className="block text-cyan-200">
              Healthcare
            </span>

            Assistant

          </h1>

          <p className="mt-8 text-xl leading-9 text-blue-100 max-w-xl">

            Understand symptoms, analyze medical reports,
            explore medicine information and receive intelligent
            healthcare guidance—all in one modern AI platform.

          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/dashboard"
              className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition flex items-center gap-2"
            >
              Get Started

              <ArrowRight size={20} />

            </Link>

            <Link
              to="/chat"
              className="border-2 border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition"
            >
              AI Chat
            </Link>

          </div>

          {/* Trust Cards */}

          <div className="grid grid-cols-3 gap-5 mt-14">

            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5 text-center">

              <Activity className="mx-auto mb-3" />

              <h3 className="text-2xl font-bold">

                98%

              </h3>

              <p className="text-blue-100 text-sm">

                Accuracy

              </p>

            </div>

            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5 text-center">

              <FileText className="mx-auto mb-3" />

              <h3 className="text-2xl font-bold">

                10K+

              </h3>

              <p className="text-blue-100 text-sm">

                Reports

              </p>

            </div>

            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-5 text-center">

              <Pill className="mx-auto mb-3" />

              <h3 className="text-2xl font-bold">

                24/7

              </h3>

              <p className="text-blue-100 text-sm">

                AI Support

              </p>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">

          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative bg-white/15 backdrop-blur-xl rounded-full p-14 shadow-2xl animate-pulse">

            <HeartPulse
              size={240}
              strokeWidth={1.3}
            />

          </div>

          {/* Floating Cards */}

          <div className="absolute top-10 left-0 bg-white rounded-2xl shadow-xl p-4 hidden lg:flex items-center gap-3">

            <ShieldCheck className="text-green-600" />

            <div>

              <p className="font-semibold">

                Secure Reports

              </p>

              <span className="text-sm text-gray-500">

                Privacy First

              </span>

            </div>

          </div>

          <div className="absolute bottom-12 right-0 bg-white rounded-2xl shadow-xl p-4 hidden lg:flex items-center gap-3">

            <Activity className="text-blue-600" />

            <div>

              <p className="font-semibold">

                AI Analysis

              </p>

              <span className="text-sm text-gray-500">

                Instant Results

              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;