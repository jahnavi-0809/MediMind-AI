import {
  Activity,
  FileText,
  Pill,
  MessageCircle,
  Bot,
  ShieldCheck,
  Sparkles,
  HeartPulse,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function About() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "About MediMind AI",
      description:
        "MediMind AI is an AI-powered healthcare assistant developed to provide educational health information in a simple and accessible way.",

      features: "Our AI Healthcare Features",

      featureList: [
        {
          icon: Activity,
          title: "AI Symptom Checker",
          description:
            "Describe your symptoms and receive simple educational health insights.",
          color: "teal",
        },
        {
          icon: FileText,
          title: "Medical Report Analyzer",
          description:
            "Upload medical reports and understand important information in simple language.",
          color: "gold",
        },
        {
          icon: Pill,
          title: "Medicine Information",
          description:
            "Learn about medicine uses, precautions, side effects, and general safety.",
          color: "green",
        },
        {
          icon: MessageCircle,
          title: "AI Health Chat",
          description:
            "Ask healthcare-related questions and interact with your AI health assistant.",
          color: "purple",
        },
        {
          icon: Bot,
          title: "Powered by Groq LLM",
          description:
            "Fast AI-powered responses designed to make healthcare information easier to understand.",
          color: "teal",
        },
      ],

      howItWorks: "How MediMind AI Helps",

      howItWorksText:
        "MediMind AI brings multiple AI-powered healthcare tools together in one platform, helping users understand symptoms, medical reports, medicines, and general healthcare questions.",

      disclaimer: "Medical Disclaimer",

      disclaimerText:
        "MediMind AI provides educational information only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions.",
    },

    te: {
      title: "MediMind AI గురించి",
      description:
        "MediMind AI అనేది సులభంగా మరియు అందరికీ అర్థమయ్యే విధంగా విద్యాపరమైన ఆరోగ్య సమాచారాన్ని అందించడానికి రూపొందించబడిన AI ఆధారిత ఆరోగ్య సహాయకుడు.",

      features: "మా AI ఆరోగ్య ఫీచర్లు",

      featureList: [
        {
          icon: Activity,
          title: "AI లక్షణాల పరిశీలన",
          description:
            "మీ లక్షణాలను వివరించి సులభమైన విద్యాపరమైన ఆరోగ్య సమాచారాన్ని పొందండి.",
          color: "teal",
        },
        {
          icon: FileText,
          title: "వైద్య రిపోర్ట్ విశ్లేషణ",
          description:
            "వైద్య రిపోర్ట్‌లను అప్‌లోడ్ చేసి ముఖ్యమైన సమాచారాన్ని సులభంగా అర్థం చేసుకోండి.",
          color: "gold",
        },
        {
          icon: Pill,
          title: "మందుల సమాచారం",
          description:
            "మందుల ఉపయోగాలు, జాగ్రత్తలు, దుష్ప్రభావాలు మరియు సాధారణ భద్రతా సమాచారాన్ని తెలుసుకోండి.",
          color: "green",
        },
        {
          icon: MessageCircle,
          title: "AI ఆరోగ్య చాట్",
          description:
            "ఆరోగ్యానికి సంబంధించిన ప్రశ్నలను అడిగి AI ఆరోగ్య సహాయకుడితో మాట్లాడండి.",
          color: "purple",
        },
        {
          icon: Bot,
          title: "Groq LLM ద్వారా ఆధారితం",
          description:
            "ఆరోగ్య సమాచారాన్ని సులభంగా అర్థం చేసుకోవడానికి వేగవంతమైన AI సమాధానాలు.",
          color: "teal",
        },
      ],

      howItWorks: "MediMind AI ఎలా సహాయపడుతుంది",

      howItWorksText:
        "MediMind AI అనేక AI ఆధారిత ఆరోగ్య సాధనాలను ఒకే ప్లాట్‌ఫారమ్‌లో అందిస్తుంది. లక్షణాలు, వైద్య రిపోర్ట్‌లు, మందులు మరియు సాధారణ ఆరోగ్య ప్రశ్నలను అర్థం చేసుకోవడంలో ఇది సహాయపడుతుంది.",

      disclaimer: "వైద్య నిరాకరణ ప్రకటన",

      disclaimerText:
        "MediMind AI విద్యాపరమైన సమాచారాన్ని మాత్రమే అందిస్తుంది. ఇది వృత్తిపరమైన వైద్య సలహా, నిర్ధారణ లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు. వైద్య నిర్ణయాల కోసం ఎల్లప్పుడూ అర్హత కలిగిన వైద్య నిపుణుడిని సంప్రదించండి.",
    },
  };

  const text = content[language];

  const iconStyles = {
    teal: {
      box: "bg-[#E5F2F3]",
      icon: "text-[#0E6F78]",
      border: "border-[#C7E1E3]",
    },
    gold: {
      box: "bg-[#F6EFD2]",
      icon: "text-[#A18416]",
      border: "border-[#E8DCA9]",
    },
    green: {
      box: "bg-[#EDF7F1]",
      icon: "text-[#1F7A4C]",
      border: "border-[#C9E5D3]",
    },
    purple: {
      box: "bg-[#F1ECF8]",
      icon: "text-[#72539A]",
      border: "border-[#DDD1EC]",
    },
  };

  return (
    <div className="min-h-screen bg-[#F7F5F1] px-4 py-8 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#083E44] via-[#0E6F78] to-[#2B858C] px-6 py-9 sm:px-10 sm:py-11 shadow-[0_18px_45px_rgba(8,62,68,0.16)]">

          <div className="absolute -right-20 -top-24 w-72 h-72 rounded-full border border-white/10" />

          <div className="absolute right-20 -bottom-32 w-60 h-60 rounded-full border border-white/10" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-5">

            <div className="w-16 h-16 shrink-0 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">

              <HeartPulse
                size={34}
                className="text-white"
              />

            </div>

            <div>

              <div className="flex items-center gap-2 mb-2">

                <span className="text-xs font-bold tracking-[1.5px] text-[#B9DFE2]">
                  MEDIMIND AI
                </span>

                <Sparkles
                  size={15}
                  className="text-[#C9A227]"
                />

              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {text.title}
              </h1>

              <p className="mt-3 max-w-3xl text-sm sm:text-base text-[#D9ECEE] leading-7">
                {text.description}
              </p>

            </div>

          </div>

        </div>

        {/* =====================================================
            INTRO
        ===================================================== */}

        <div className="mt-6 rounded-3xl border border-[#E2DED4] bg-white p-6 sm:p-8 shadow-[0_8px_25px_rgba(28,26,22,0.05)]">

          <div className="flex items-center gap-3 mb-4">

            <div className="w-11 h-11 rounded-xl bg-[#E5F2F3] text-[#0E6F78] flex items-center justify-center">
              <Bot size={23} />
            </div>

            <h2 className="text-xl sm:text-2xl font-extrabold text-[#083E44]">
              {language === "te"
                ? "స్మార్ట్ హెల్త్‌కేర్ అసిస్టెంట్"
                : "Your Smart Healthcare Assistant"}
            </h2>

          </div>

          <p className="text-[#625C56] leading-7 text-sm sm:text-base">
            {text.description}
          </p>

        </div>

        {/* =====================================================
            FEATURES
        ===================================================== */}

        <div className="mt-8">

          <div className="mb-5">

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1C1A16]">
              {text.features}
            </h2>

            <p className="mt-1 text-sm text-[#7A736B]">
              {language === "te"
                ? "మీ ఆరోగ్య అవసరాల కోసం రూపొందించిన AI సాధనాలు"
                : "AI tools designed to support your healthcare journey"}
            </p>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {text.featureList.map((feature, index) => {

              const Icon = feature.icon;
              const style = iconStyles[feature.color];

              return (
                <div
                  key={index}
                  className={`group rounded-2xl border ${style.border} bg-white p-6 shadow-[0_5px_18px_rgba(28,26,22,0.045)] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(14,111,120,0.09)] transition-all duration-300`}
                >

                  <div className="flex items-start justify-between">

                    <div
                      className={`w-12 h-12 rounded-xl ${style.box} ${style.icon} flex items-center justify-center group-hover:scale-105 transition-transform`}
                    >
                      <Icon size={24} />
                    </div>

                    <span className="text-xs font-bold text-[#B2AAA1]">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-5 text-lg font-extrabold text-[#1C1A16]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#706A64]">
                    {feature.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <div className="mt-8 rounded-3xl overflow-hidden border border-[#C7E1E3] bg-gradient-to-br from-[#E5F2F3] to-white shadow-[0_8px_25px_rgba(14,111,120,0.06)]">

          <div className="p-6 sm:p-8">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-11 h-11 rounded-xl bg-[#0E6F78] text-white flex items-center justify-center">
                <Sparkles size={22} />
              </div>

              <h2 className="text-xl sm:text-2xl font-extrabold text-[#083E44]">
                {text.howItWorks}
              </h2>

            </div>

            <p className="max-w-4xl text-sm sm:text-base text-[#55504A] leading-7">
              {text.howItWorksText}
            </p>

          </div>

        </div>

        {/* =====================================================
            DISCLAIMER
        ===================================================== */}

        <div className="mt-6 rounded-2xl border border-[#F3C5C1] border-l-4 border-l-[#B42318] bg-[#FEF4F3] p-6">

          <div className="flex items-start gap-4">

            <div className="w-11 h-11 shrink-0 rounded-xl bg-[#FDE3E0] text-[#B42318] flex items-center justify-center">

              <ShieldCheck size={23} />

            </div>

            <div>

              <h3 className="font-extrabold text-lg text-[#982018]">
                ⚠️ {text.disclaimer}
              </h3>

              <p className="mt-2 text-sm text-[#5E5754] leading-7">
                {text.disclaimerText}
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;