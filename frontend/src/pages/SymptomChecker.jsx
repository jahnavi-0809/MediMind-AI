import { useState } from "react";
import {
  Stethoscope,
  Loader2,
  HeartPulse,
  ShieldAlert,
  ShieldCheck,
  Activity,
  Keyboard,
} from "lucide-react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useLanguage } from "../context/LanguageContext";
import TeluguKeyboard from "../components/TeluguKeyboard";

function SymptomChecker() {
  const [symptoms, setSymptoms] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const { language, t } = useLanguage();

  const handleKeyboardInput = (character) => {
    setSymptoms((previous) => previous + character);
  };

  const handleBackspace = () => {
    setSymptoms((previous) => previous.slice(0, -1));
  };

  const handleSpace = () => {
    setSymptoms((previous) => previous + " ");
  };

  const handleClear = () => {
    setSymptoms("");
  };

  const checkSymptoms = async () => {
    if (!symptoms.trim()) {
      toast.warning(t("enterSymptomsWarning"));
      return;
    }

    try {
      setLoading(true);

      const languageInstruction =
        language === "te"
          ? "Respond completely in Telugu language. Use simple Telugu that elderly users can easily understand."
          : "Respond completely in English using simple language.";

      const response = await api.get("/ask", {
        params: {
          question: `
My symptoms are: ${symptoms}

${languageInstruction}

Provide educational health information only.
Do not provide a final diagnosis.
Do not prescribe medicines or dosages.
          `,
        },
      });

      setAnswer(response.data.answer);

      toast.success(t("analysisCompleted"));
    } catch (error) {
      console.error(error);
      toast.error(t("analysisFailed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F1] py-8 px-4 sm:py-10">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-[0_16px_40px_rgba(28,26,22,0.10)] overflow-hidden border border-[#E2DED4]">

        {/* Header */}
        <div className="bg-gradient-to-r from-[#083E44] to-[#0E6F78] text-white p-7 sm:p-8">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <HeartPulse size={34} />
            </div>

            <div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {t("symptomChecker")}
              </h1>

              <p className="text-[#D9ECEE] mt-1.5 text-sm sm:text-base">
                {t("enterSymptoms")}
              </p>
            </div>

          </div>

        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 lg:p-9">

          {/* Symptoms Input */}
          <div>
            <label className="font-semibold text-[#1C1A16] mb-3 block">
              {t("describeSymptoms")}
            </label>

            <textarea
              rows={7}
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder={t("symptomPlaceholder")}
              className="w-full rounded-2xl border border-[#D3CEC2] bg-[#FDFDFC] p-5 resize-none text-[#1C1A16] placeholder:text-[#7A736B] focus:outline-none focus:ring-2 focus:ring-[#0E6F78]/25 focus:border-[#0E6F78] transition"
            />
          </div>

          {/* Telugu Keyboard Button */}
          {language === "te" && (
            <button
              type="button"
              onClick={() => setShowKeyboard(!showKeyboard)}
              className="mt-3 flex items-center gap-2 px-4 py-2.5 bg-[#E5F2F3] text-[#083E44] border border-[#BFDDE0] rounded-xl font-semibold hover:bg-[#D9ECEE] transition"
            >
              <Keyboard size={19} />

              {showKeyboard
                ? "తెలుగు కీబోర్డ్ మూసివేయండి"
                : "తెలుగు కీబోర్డ్ తెరవండి"}
            </button>
          )}

          {/* Telugu Keyboard */}
          {language === "te" && showKeyboard && (
            <TeluguKeyboard
              onKeyPress={handleKeyboardInput}
              onBackspace={handleBackspace}
              onSpace={handleSpace}
              onClear={handleClear}
            />
          )}

          {/* Analyze Button */}
          <button
            onClick={checkSymptoms}
            disabled={loading}
            className="mt-6 w-full bg-[#0E6F78] hover:bg-[#083E44] disabled:bg-[#A8B5B5] text-white rounded-xl py-4 font-semibold flex justify-center items-center gap-3 transition shadow-sm hover:shadow-md"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={22} />
                {t("aiAnalyzing")}
              </>
            ) : (
              <>
                <Stethoscope size={22} />
                {t("checkSymptoms")}
              </>
            )}
          </button>

          {/* Loading */}
          {loading && (
            <div className="mt-8 bg-[#E5F2F3] border border-[#C7E1E3] rounded-2xl p-8 text-center">

              <Loader2
                className="animate-spin mx-auto text-[#0E6F78]"
                size={45}
              />

              <h2 className="text-xl font-bold mt-4 text-[#083E44]">
                {t("checkingSymptoms")}
              </h2>

              <p className="text-[#55504A] mt-2">
                {t("analyzingMessage")}
              </p>

            </div>
          )}

          {/* Result */}
          {answer && !loading && (
            <div className="mt-10 space-y-6">

              {/* AI Analysis */}
              <div className="bg-[#E5F2F3] border border-[#C7E1E3] rounded-2xl shadow-sm p-6">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-11 h-11 rounded-xl bg-[#0E6F78] text-white flex items-center justify-center">
                    <Activity size={24} />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#083E44]">
                    {t("aiHealthAnalysis")}
                  </h2>

                </div>

                <p className="whitespace-pre-wrap leading-8 text-[#55504A]">
                  {answer}
                </p>

              </div>

              {/* Risk Level */}
              <div className="bg-[#F6EFD2] border border-[#E8DCA9] rounded-2xl shadow-sm p-6">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-11 h-11 rounded-xl bg-[#C9A227] text-white flex items-center justify-center">
                    <ShieldAlert size={24} />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#705B12]">
                    {t("riskLevel")}
                  </h2>

                </div>

                <span className="inline-flex bg-[#C9A227] text-white px-5 py-2 rounded-full font-semibold text-sm">
                  {t("educationalAssessment")}
                </span>

                <p className="mt-4 text-[#55504A]">
                  {t("informationalOnly")}
                </p>

              </div>

              {/* Recommendation */}
              <div className="bg-[#EDF7F1] border border-[#C9E5D3] rounded-2xl shadow-sm p-6">

                <div className="flex items-center gap-3 mb-4">

                  <div className="w-11 h-11 rounded-xl bg-[#1F7A4C] text-white flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-[#17613C]">
                    {t("recommendation")}
                  </h2>

                </div>

                <ul className="list-disc pl-6 space-y-2 text-[#55504A]">

                  <li>{t("stayHydrated")}</li>

                  <li>{t("monitorSymptoms")}</li>

                  <li>{t("adequateRest")}</li>

                  <li>{t("consultProfessional")}</li>

                </ul>

              </div>

              {/* Emergency */}
              <div className="bg-[#FEF0EF] border border-[#F3C5C1] border-l-4 border-l-[#B42318] rounded-xl p-6">

                <div className="flex gap-3">

                  <ShieldAlert
                    className="text-[#B42318] shrink-0"
                    size={30}
                  />

                  <div>

                    <h2 className="text-xl font-bold text-[#982018]">
                      {t("emergencyWarning")}
                    </h2>

                    <p className="mt-2 text-[#55504A] leading-7">
                      {t("emergencyText")}
                    </p>

                  </div>

                </div>

              </div>

              {/* Disclaimer */}
              <div className="bg-[#F1F5F3] border border-[#E2DED4] rounded-xl p-6">

                <h3 className="font-bold mb-2 text-[#1C1A16]">
                  {t("medicalDisclaimer")}
                </h3>

                <p className="text-[#7A736B] leading-7">
                  {t("medicalDisclaimerText")}
                </p>

              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default SymptomChecker;