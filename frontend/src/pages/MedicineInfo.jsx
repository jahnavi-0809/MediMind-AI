import MedicineInfoComponent from "../components/MedicineInfo";
import {
  Pill,
  ShieldCheck,
  Sparkles,
  HeartPulse,
} from "lucide-react";

function MedicineInfo() {
  return (
    <div className="min-h-screen bg-[#F7F5F1] px-4 py-8 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#083E44] via-[#0E6F78] to-[#2B858C] px-6 py-8 sm:px-10 sm:py-10 shadow-[0_18px_45px_rgba(8,62,68,0.16)]">

          <div className="absolute -right-16 -top-20 w-64 h-64 rounded-full border border-white/10" />

          <div className="absolute right-20 -bottom-32 w-52 h-52 rounded-full border border-white/10" />

          <div className="relative z-10 flex items-center gap-5">

            <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shadow-sm">

              <Pill
                size={34}
                className="text-white"
              />

            </div>

            <div>

              <div className="flex items-center gap-2 mb-1">

                <span className="text-xs font-bold tracking-[1.5px] text-[#B9DFE2]">
                  MEDIMIND AI
                </span>

                <Sparkles
                  size={15}
                  className="text-[#C9A227]"
                />

              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Medicine Information
              </h1>

              <p className="mt-2 max-w-3xl text-sm sm:text-base leading-7 text-[#D9ECEE]">
                Search for medicines and receive AI-powered educational
                information about uses, precautions, safety, and general
                guidance.
              </p>

            </div>

          </div>

        </div>

        {/* ================= INFO CARDS ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">

          <div className="flex items-center gap-3 rounded-2xl border border-[#D8E7E5] bg-white px-5 py-4 shadow-sm">

            <div className="w-10 h-10 rounded-xl bg-[#E5F2F3] text-[#0E6F78] flex items-center justify-center">
              <Pill size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#1C1A16]">
                Medicine Uses
              </p>

              <p className="text-xs text-[#7A736B]">
                Educational information
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#E8DCA9] bg-white px-5 py-4 shadow-sm">

            <div className="w-10 h-10 rounded-xl bg-[#F6EFD2] text-[#A18416] flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#1C1A16]">
                Safety & Precautions
              </p>

              <p className="text-xs text-[#7A736B]">
                General safety guidance
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#C9E5D3] bg-white px-5 py-4 shadow-sm">

            <div className="w-10 h-10 rounded-xl bg-[#EDF7F1] text-[#1F7A4C] flex items-center justify-center">
              <HeartPulse size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#1C1A16]">
                Health Guidance
              </p>

              <p className="text-xs text-[#7A736B]">
                AI-powered assistance
              </p>
            </div>

          </div>

        </div>

        {/* ================= MEDICINE TOOL ================= */}

        <div className="mt-6 rounded-3xl border border-[#E2DED4] bg-white shadow-[0_10px_30px_rgba(28,26,22,0.06)] overflow-hidden">

          <div className="px-6 py-5 sm:px-8 border-b border-[#E2DED4] bg-[#FCFBF8]">

            <div className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-[#E5F2F3] text-[#0E6F78] flex items-center justify-center">
                <Pill size={23} />
              </div>

              <div>

                <h2 className="text-lg font-extrabold text-[#1C1A16]">
                  Search Medicine
                </h2>

                <p className="text-xs text-[#7A736B] mt-0.5">
                  Get clear and simple medicine information
                </p>

              </div>

            </div>

          </div>

          <div className="p-5 sm:p-8">

            <MedicineInfoComponent />

          </div>

        </div>

        {/* ================= DISCLAIMER ================= */}

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#E2DED4] bg-[#F1F5F3] px-5 py-4">

          <ShieldCheck
            size={20}
            className="mt-0.5 shrink-0 text-[#0E6F78]"
          />

          <p className="text-xs leading-6 text-[#6B655E]">
            Medicine information provided by MediMind AI is for educational
            purposes only. It should not be considered a diagnosis,
            prescription, or substitute for professional medical advice.
          </p>

        </div>

      </div>

    </div>
  );
}

export default MedicineInfo;