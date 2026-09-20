import { Link } from "react-router-dom";
import {
  ArrowRight,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

function CTA() {
  return (
    <section
      data-aos="zoom-in"
      className="relative overflow-hidden py-28"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-500"></div>

      {/* Decorative Blurs */}

      <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-24 -right-20 w-72 h-72 rounded-full bg-cyan-300/20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] p-10 md:p-16 text-center shadow-2xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2 rounded-full text-white font-semibold mb-8">

            <HeartPulse size={18} />

            FUTURE OF HEALTHCARE

          </div>

          {/* Heading */}

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">

            Smarter Healthcare

            <span className="block text-cyan-100">
              Starts with MediMind AI
            </span>

          </h2>

          {/* Description */}

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-blue-100 leading-9">

            Explore AI-powered symptom analysis, medical report explanations,
            medicine information, and educational healthcare guidance—all from
            one modern, intelligent platform.

          </p>

          {/* Highlights */}

          <div className="flex flex-wrap justify-center gap-8 mt-10 text-white">

            <div className="flex items-center gap-2">

              <ShieldCheck size={20} />

              Secure Analysis

            </div>

            <div className="flex items-center gap-2">

              <ShieldCheck size={20} />

              Fast AI Responses

            </div>

            <div className="flex items-center gap-2">

              <ShieldCheck size={20} />

              Educational Guidance

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <Link
              to="/symptoms"
              className="group bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
            >
              Start Free

              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-2 transition"
              />

            </Link>

            <Link
              to="/report"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              Analyze Report
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CTA;