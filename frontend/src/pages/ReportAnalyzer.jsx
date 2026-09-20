import ReportAnalyzerComponent from "../components/ReportAnalyzer";
import { useLanguage } from "../context/LanguageContext";
import {
  FileText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

function ReportAnalyzer() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Medical Report Analyzer",
      description:
        "Upload your medical report and get an AI-powered explanation in simple, easy-to-understand language.",
      secure: "Secure & Private",
      aiPowered: "AI-Powered Analysis",
      pdfSupport: "PDF Reports Supported",
    },
    te: {
      title: "వైద్య రిపోర్ట్ విశ్లేషణ",
      description:
        "మీ వైద్య రిపోర్ట్‌ను అప్‌లోడ్ చేసి AI ఆధారిత సులభమైన మరియు అర్థమయ్యే వివరణను పొందండి.",
      secure: "సురక్షితమైన సేవ",
      aiPowered: "AI ఆధారిత విశ్లేషణ",
      pdfSupport: "PDF రిపోర్ట్‌లకు మద్దతు",
    },
  };

  const text = content[language];

  return (
    <div className="min-h-screen bg-[#F7F5F1] px-4 py-8 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#083E44] via-[#0E6F78] to-[#2B858C] px-6 py-8 sm:px-10 sm:py-10 shadow-[0_18px_45px_rgba(8,62,68,0.16)]">

          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute -right-5 -bottom-28 h-56 w-56 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="max-w-3xl">

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold tracking-wide text-[#D9ECEE]">
                <Sparkles size={14} />
                MEDIMIND AI
              </div>

              <div className="flex items-start gap-4">

                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20">
                  <FileText size={30} className="text-white" />
                </div>

                <div>

                  <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-4xl">
                    {text.title}
                  </h1>

                  <p className="mt-2 max-w-2xl text-sm leading-7 text-[#D9ECEE] sm:text-base">
                    {text.description}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= FEATURES ================= */}

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">

          <div className="flex items-center gap-3 rounded-2xl border border-[#D8E7E5] bg-white px-5 py-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E5F2F3] text-[#0E6F78]">
              <ShieldCheck size={21} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#1C1A16]">
                {text.secure}
              </p>

              <p className="text-xs text-[#7A736B]">
                MediMind AI
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#E8DCA9] bg-white px-5 py-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6EFD2] text-[#A18416]">
              <Sparkles size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#1C1A16]">
                {text.aiPowered}
              </p>

              <p className="text-xs text-[#7A736B]">
                Smart healthcare insights
              </p>
            </div>

          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-[#CFE4D7] bg-white px-5 py-4 shadow-sm">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF7F1] text-[#1F7A4C]">
              <FileText size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-[#1C1A16]">
                {text.pdfSupport}
              </p>

              <p className="text-xs text-[#7A736B]">
                Easy report upload
              </p>
            </div>

          </div>

        </div>

        {/* ================= ANALYZER ================= */}

        <div className="mt-6 overflow-hidden rounded-3xl border border-[#E2DED4] bg-white shadow-[0_10px_30px_rgba(28,26,22,0.06)]">

          <div className="border-b border-[#E2DED4] bg-[#FCFBF8] px-6 py-5 sm:px-8">

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5F2F3] text-[#0E6F78]">
                <FileText size={23} />
              </div>

              <div>

                <h2 className="text-lg font-bold text-[#1C1A16]">
                  {language === "te"
                    ? "మీ రిపోర్ట్‌ను అప్‌లోడ్ చేయండి"
                    : "Upload Your Medical Report"}
                </h2>

                <p className="mt-0.5 text-xs text-[#7A736B]">
                  {language === "te"
                    ? "AI మీ రిపోర్ట్‌ను సులభంగా వివరిస్తుంది"
                    : "Let AI explain your report in simple language"}
                </p>

              </div>

            </div>

          </div>

          <div className="p-5 sm:p-8">

            <ReportAnalyzerComponent />

          </div>

        </div>

        {/* ================= FOOT NOTE ================= */}

        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-[#E2DED4] bg-[#F1F5F3] px-5 py-4">

          <ShieldCheck
            size={20}
            className="mt-0.5 shrink-0 text-[#0E6F78]"
          />

          <p className="text-xs leading-6 text-[#6B655E]">
            {language === "te"
              ? "AI విశ్లేషణ విద్యాపరమైన సమాచారం కోసం మాత్రమే. రోగ నిర్ధారణ లేదా చికిత్స కోసం అర్హత కలిగిన వైద్య నిపుణుడిని సంప్రదించండి."
              : "AI analysis is provided for educational purposes only. Please consult a qualified healthcare professional for diagnosis and treatment."}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ReportAnalyzer;