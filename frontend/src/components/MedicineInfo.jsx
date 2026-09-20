import { useState } from "react";
import {
  Pill,
  Search,
  Loader2,
  ShieldCheck,
  AlertTriangle,
  Info,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useLanguage } from "../context/LanguageContext";

function MedicineInfo() {
  const [medicine, setMedicine] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const { language, t } = useLanguage();

  const searchMedicine = async () => {
    if (!medicine.trim()) {
      toast.warning(t("enterMedicineWarning"));
      return;
    }

    try {
      setLoading(true);

      const languageInstruction =
        language === "te"
          ? "Respond completely in Telugu language. Use simple Telugu that elderly users can easily understand."
          : "Respond completely in English using simple language.";

      const res = await api.get("/ask", {
        params: {
          question: `
Provide educational information about the medicine: ${medicine}

${languageInstruction}

Include:
- Medicine name
- Common uses
- Common side effects
- General precautions
- Who should be careful or consult a doctor
- When to seek medical help

Do not prescribe the medicine.
Do not recommend a dosage.
Do not provide a final medical diagnosis.
          `,
        },
      });

      setResponse(res.data.answer);

      toast.success(t("medicineLoaded"));
    } catch (error) {
      console.error(error);
      toast.error(t("medicineFailed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden">

      {/* ================= HEADER ================= */}

      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#E5F2F3] via-white to-[#F6EFD2] border border-[#DCE8E5] p-6 sm:p-7">

        <div className="absolute -right-14 -top-20 w-52 h-52 rounded-full bg-[#D9ECEE]/50" />

        <div className="relative z-10 flex items-center gap-4">

          <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#0E6F78] text-white flex items-center justify-center shadow-md">
            <Pill size={30} />
          </div>

          <div>

            <div className="flex items-center gap-2 mb-1">

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#083E44]">
                {t("medicineAssistant")}
              </h2>

              <Sparkles
                size={17}
                className="text-[#C9A227]"
              />

            </div>

            <p className="text-sm leading-6 text-[#625C56]">
              {t("medicineDescription")}
            </p>

          </div>

        </div>

      </div>

      {/* ================= SEARCH AREA ================= */}

      <div className="mt-6 rounded-2xl border border-[#E2DED4] bg-[#FCFBF8] p-5 sm:p-6">

        <label className="font-bold block mb-3 text-[#1C1A16]">
          {t("medicineName")}
        </label>

        <div className="flex flex-col sm:flex-row gap-3">

          <div className="relative flex-1">

            <Pill
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A736B]"
            />

            <input
              type="text"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchMedicine();
                }
              }}
              placeholder={t("medicinePlaceholder")}
              className="w-full border border-[#D3CEC2] bg-white rounded-xl py-4 pl-12 pr-4 text-[#1C1A16] placeholder:text-[#7A736B] outline-none focus:border-[#0E6F78] focus:ring-2 focus:ring-[#0E6F78]/15 transition"
            />

          </div>

          <button
            onClick={searchMedicine}
            disabled={loading}
            className="sm:w-auto bg-[#0E6F78] hover:bg-[#083E44] disabled:bg-[#A8B5B5] text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition shadow-sm hover:shadow-md"
          >

            {loading ? (
              <>
                <Loader2
                  className="animate-spin"
                  size={20}
                />

                {t("searching")}
              </>
            ) : (
              <>
                <Search size={20} />

                {t("search")}
              </>
            )}

          </button>

        </div>

        <div className="mt-4 flex items-center gap-2 text-xs text-[#7A736B]">

          <Info
            size={15}
            className="text-[#0E6F78]"
          />

          <span>
            {language === "te"
              ? "మెడిసిన్ పేరు టైప్ చేసి Enter నొక్కవచ్చు."
              : "Enter a medicine name and press Enter to search."}
          </span>

        </div>

      </div>

      {/* ================= LOADING ================= */}

      {loading && (

        <div className="mt-6 rounded-2xl border border-[#C7E1E3] bg-gradient-to-br from-[#E5F2F3] to-[#F7F5F1] p-8 text-center">

          <div className="mx-auto w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center">

            <Loader2
              className="animate-spin text-[#0E6F78]"
              size={35}
            />

          </div>

          <h3 className="font-extrabold text-xl mt-5 text-[#083E44]">
            {t("searchingMedicine")}
          </h3>

          <p className="text-[#625C56] mt-2 text-sm">
            {t("collectingMedicine")}
          </p>

          <div className="mt-5 mx-auto max-w-xs h-1.5 bg-white rounded-full overflow-hidden">

            <div className="h-full w-2/3 bg-[#0E6F78] rounded-full animate-pulse" />

          </div>

        </div>

      )}

      {/* ================= RESPONSE ================= */}

      {response && !loading && (

        <div className="mt-7 space-y-5">

          {/* AI RESPONSE */}

          <div className="rounded-2xl border border-[#C7E1E3] bg-[#F2F9F9] overflow-hidden">

            <div className="flex items-center gap-3 px-6 py-5 border-b border-[#D8E9E9]">

              <div className="w-11 h-11 rounded-xl bg-[#0E6F78] text-white flex items-center justify-center">

                <Info size={23} />

              </div>

              <div>

                <h2 className="text-xl font-extrabold text-[#083E44]">
                  {t("aiMedicineInformation")}
                </h2>

                <p className="text-xs text-[#6B7776] mt-0.5">
                  {medicine}
                </p>

              </div>

            </div>

            <div className="p-6">

              <p className="whitespace-pre-wrap leading-8 text-[#4E5755]">
                {response}
              </p>

            </div>

          </div>

          {/* SAFETY */}

          <div className="rounded-2xl border border-[#C9E5D3] bg-[#F4FAF6] p-6">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-11 h-11 rounded-xl bg-[#1F7A4C] text-white flex items-center justify-center">

                <ShieldCheck size={23} />

              </div>

              <div>

                <h2 className="text-xl font-extrabold text-[#17613C]">
                  {t("safetyTips")}
                </h2>

                <p className="text-xs text-[#66806F] mt-0.5">
                  General safety guidance
                </p>

              </div>

            </div>

            <div className="space-y-3">

              <div className="flex items-start gap-3 rounded-xl bg-white border border-[#DDECE1] p-3">

                <CheckCircle2
                  size={18}
                  className="text-[#1F7A4C] mt-0.5 shrink-0"
                />

                <span className="text-sm text-[#555E59]">
                  {t("prescribedOnly")}
                </span>

              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white border border-[#DDECE1] p-3">

                <CheckCircle2
                  size={18}
                  className="text-[#1F7A4C] mt-0.5 shrink-0"
                />

                <span className="text-sm text-[#555E59]">
                  {t("doNotExceed")}
                </span>

              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white border border-[#DDECE1] p-3">

                <CheckCircle2
                  size={18}
                  className="text-[#1F7A4C] mt-0.5 shrink-0"
                />

                <span className="text-sm text-[#555E59]">
                  {t("storeSafely")}
                </span>

              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white border border-[#DDECE1] p-3">

                <CheckCircle2
                  size={18}
                  className="text-[#1F7A4C] mt-0.5 shrink-0"
                />

                <span className="text-sm text-[#555E59]">
                  {t("keepAwayChildren")}
                </span>

              </div>

              <div className="flex items-start gap-3 rounded-xl bg-white border border-[#DDECE1] p-3">

                <CheckCircle2
                  size={18}
                  className="text-[#1F7A4C] mt-0.5 shrink-0"
                />

                <span className="text-sm text-[#555E59]">
                  {t("consultDoctor")}
                </span>

              </div>

            </div>

          </div>

          {/* DISCLAIMER */}

          <div className="rounded-2xl border border-[#F3C5C1] border-l-4 border-l-[#B42318] bg-[#FEF4F3] p-6">

            <div className="flex gap-3">

              <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FDE3E0] text-[#B42318] flex items-center justify-center">

                <AlertTriangle size={23} />

              </div>

              <div>

                <h2 className="font-extrabold text-xl text-[#982018]">
                  {t("medicalDisclaimer")}
                </h2>

                <p className="text-[#5E5754] mt-2 leading-7">
                  {t("medicineDisclaimer")}
                </p>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default MedicineInfo;