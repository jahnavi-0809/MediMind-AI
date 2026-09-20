import "./Home.css";
import { Link } from "react-router-dom";
import {
  HeartPulse,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Activity,
  FileText,
  Pill,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

function Home() {
  const { language } = useLanguage();

  const content = {
    en: {
      badge: "Trusted AI Healthcare Platform",

      title: "AI-Powered",
      titleHighlight: "Healthcare Assistant",

      description:
        "Understand symptoms, analyze medical reports, explore medicine information, and receive intelligent healthcare guidance using advanced Artificial Intelligence.",

      getStarted: "Get Started",
      learnMore: "Learn More",

      secureReports: "Secure Reports",
      privacyFirst: "Privacy First",

      aiAnalysis: "AI Analysis",
      instantResults: "Instant Results",

      trusted: "Smart healthcare tools in one platform",
      servicesTitle: "Everything You Need for Better Health",
      servicesDescription:
        "MediMind AI brings essential healthcare assistance together in one simple and accessible platform.",

      symptoms: "AI Symptom Checker",
      symptomsDesc:
        "Understand your symptoms with simple AI-powered educational guidance.",

      reports: "Medical Report Analyzer",
      reportsDesc:
        "Upload your medical report and understand important findings easily.",

      medicine: "Medicine Information",
      medicineDesc:
        "Explore medicine uses, precautions, side effects, and general guidance.",

      chat: "AI Health Chat",
      chatDesc:
        "Ask healthcare questions and get easy-to-understand AI responses.",

      whyTitle: "Why Choose MediMind AI?",
      whyDescription:
        "Designed to make healthcare information easier to understand while keeping safety and privacy in mind.",

      safety: "Safety Focused",
      safetyDesc:
        "Educational guidance with clear medical safety reminders.",

      simple: "Simple & Accessible",
      simpleDesc:
        "Healthcare information explained in easy-to-understand language.",

      intelligent: "AI Powered",
      intelligentDesc:
        "Advanced AI technology helps provide fast and useful responses.",

      privacy: "Privacy First",
      privacyDesc:
        "Your healthcare journey is designed with privacy and secure access in mind.",

      ctaTitle: "Start Your Smarter Healthcare Journey",
      ctaDescription:
        "Explore MediMind AI tools and get helpful educational healthcare information in seconds.",

      explore: "Explore MediMind AI",

      disclaimer:
        "MediMind AI provides educational information only and is not a substitute for professional medical advice.",
    },

    te: {
      badge: "నమ్మకమైన AI ఆరోగ్య వేదిక",

      title: "AI ఆధారిత",
      titleHighlight: "ఆరోగ్య సహాయకుడు",

      description:
        "అధునాతన కృత్రిమ మేధస్సు (AI) ఉపయోగించి లక్షణాలను అర్థం చేసుకోండి, వైద్య రిపోర్టులను విశ్లేషించండి, మందుల సమాచారాన్ని తెలుసుకోండి మరియు తెలివైన ఆరోగ్య మార్గదర్శకత్వాన్ని పొందండి.",

      getStarted: "ప్రారంభించండి",
      learnMore: "మరింత తెలుసుకోండి",

      secureReports: "సురక్షితమైన రిపోర్టులు",
      privacyFirst: "గోప్యతకు ప్రాధాన్యత",

      aiAnalysis: "AI విశ్లేషణ",
      instantResults: "వెంటనే ఫలితాలు",

      trusted: "ఒకే వేదికలో స్మార్ట్ ఆరోగ్య సాధనాలు",
      servicesTitle: "మెరుగైన ఆరోగ్యం కోసం మీకు అవసరమైనవి",
      servicesDescription:
        "MediMind AI అవసరమైన ఆరోగ్య సహాయక సాధనాలను ఒకే సులభమైన మరియు అందుబాటులో ఉండే వేదికలో అందిస్తుంది.",

      symptoms: "AI లక్షణాల పరిశీలన",
      symptomsDesc:
        "AI ఆధారిత విద్యాపరమైన మార్గదర్శకత్వంతో మీ లక్షణాలను అర్థం చేసుకోండి.",

      reports: "వైద్య రిపోర్ట్ విశ్లేషణ",
      reportsDesc:
        "మీ వైద్య రిపోర్ట్‌ను అప్‌లోడ్ చేసి ముఖ్యమైన వివరాలను సులభంగా అర్థం చేసుకోండి.",

      medicine: "మందుల సమాచారం",
      medicineDesc:
        "మందుల ఉపయోగాలు, జాగ్రత్తలు, దుష్ప్రభావాలు మరియు సాధారణ సమాచారాన్ని తెలుసుకోండి.",

      chat: "AI ఆరోగ్య చాట్",
      chatDesc:
        "ఆరోగ్య ప్రశ్నలను అడిగి సులభంగా అర్థమయ్యే AI సమాధానాలను పొందండి.",

      whyTitle: "MediMind AI ఎందుకు?",
      whyDescription:
        "భద్రత మరియు గోప్యతను దృష్టిలో ఉంచుకుని ఆరోగ్య సమాచారాన్ని సులభంగా అర్థం చేసుకునేలా రూపొందించబడింది.",

      safety: "భద్రతకు ప్రాధాన్యత",
      safetyDesc:
        "స్పష్టమైన వైద్య భద్రతా సూచనలతో విద్యాపరమైన ఆరోగ్య సమాచారం.",

      simple: "సులభమైన ఉపయోగం",
      simpleDesc:
        "ఆరోగ్య సమాచారాన్ని సులభంగా అర్థమయ్యే భాషలో అందిస్తుంది.",

      intelligent: "AI ఆధారితం",
      intelligentDesc:
        "అధునాతన AI సాంకేతికత వేగవంతమైన మరియు ఉపయోగకరమైన సమాధానాలను అందించడంలో సహాయపడుతుంది.",

      privacy: "గోప్యతకు ప్రాధాన్యత",
      privacyDesc:
        "మీ ఆరోగ్య ప్రయాణం గోప్యత మరియు సురక్షితమైన యాక్సెస్‌ను దృష్టిలో ఉంచుకుని రూపొందించబడింది.",

      ctaTitle: "మీ స్మార్ట్ ఆరోగ్య ప్రయాణాన్ని ప్రారంభించండి",
      ctaDescription:
        "MediMind AI సాధనాలను ఉపయోగించి కొన్ని సెకన్లలో ఉపయోగకరమైన విద్యాపరమైన ఆరోగ్య సమాచారాన్ని పొందండి.",

      explore: "MediMind AIని అన్వేషించండి",

      disclaimer:
        "MediMind AI విద్యాపరమైన సమాచారాన్ని మాత్రమే అందిస్తుంది. ఇది వృత్తిపరమైన వైద్య సలహాకు ప్రత్యామ్నాయం కాదు.",
    },
  };

  const text = content[language];

  const services = [
    {
      icon: Activity,
      title: text.symptoms,
      description: text.symptomsDesc,
      path: "/symptoms",
      box: "bg-[#E5F2F3]",
      iconColor: "text-[#0E6F78]",
    },
    {
      icon: FileText,
      title: text.reports,
      description: text.reportsDesc,
      path: "/report",
      box: "bg-[#F6EFD2]",
      iconColor: "text-[#9A7A0D]",
    },
    {
      icon: Pill,
      title: text.medicine,
      description: text.medicineDesc,
      path: "/medicine",
      box: "bg-[#EDF7F1]",
      iconColor: "text-[#1F7A4C]",
    },
    {
      icon: MessageCircle,
      title: text.chat,
      description: text.chatDesc,
      path: "/chat",
      box: "bg-[#F1ECF8]",
      iconColor: "text-[#72539A]",
    },
  ];

  const benefits = [
    {
      icon: ShieldCheck,
      title: text.safety,
      description: text.safetyDesc,
      box: "bg-[#E5F2F3]",
      iconColor: "text-[#0E6F78]",
    },
    {
      icon: Sparkles,
      title: text.simple,
      description: text.simpleDesc,
      box: "bg-[#F6EFD2]",
      iconColor: "text-[#9A7A0D]",
    },
    {
      icon: HeartPulse,
      title: text.intelligent,
      description: text.intelligentDesc,
      box: "bg-[#EDF7F1]",
      iconColor: "text-[#1F7A4C]",
    },
    {
      icon: CheckCircle2,
      title: text.privacy,
      description: text.privacyDesc,
      box: "bg-[#F1ECF8]",
      iconColor: "text-[#72539A]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F1]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#083E44] via-[#0E6F78] to-[#2B858C]">

        <div className="absolute -top-32 -right-24 w-80 h-80 rounded-full border border-white/10" />

        <div className="absolute -bottom-48 left-1/3 w-96 h-96 rounded-full border border-white/10" />

        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-[#C9A227]/10 blur-xl" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">

            {/* HERO CONTENT */}

            <div className="text-center lg:text-left">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[#E5F2F3] text-xs sm:text-sm font-semibold backdrop-blur-sm">

                <ShieldCheck
                  size={17}
                  className="text-[#C9A227]"
                />

                {text.badge}

              </div>

              <h1 className="mt-7 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-white">

                {text.title}

                <br />

                <span className="text-[#F2D76B]">
                  {text.titleHighlight}
                </span>

              </h1>

              <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-[#D9ECEE] leading-8">

                {text.description}

              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">

                <Link
                  to="/symptoms"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#083E44] shadow-lg hover:bg-[#F7F5F1] hover:-translate-y-0.5"
                >

                  {text.getStarted}

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />

                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-bold text-white hover:bg-white/10"
                >

                  {text.learnMore}

                </Link>

              </div>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-xs sm:text-sm text-[#CFE7E9]">

                <span className="inline-flex items-center gap-2">
                  <CheckCircle2
                    size={16}
                    className="text-[#C9A227]"
                  />
                  {text.secureReports}
                </span>

                <span className="inline-flex items-center gap-2">
                  <ShieldCheck
                    size={16}
                    className="text-[#C9A227]"
                  />
                  {text.privacyFirst}
                </span>

              </div>

            </div>

            {/* HERO VISUAL */}

            <div className="flex justify-center">

              <div className="relative w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] lg:w-[390px] lg:h-[390px]">

                <div className="absolute inset-0 rounded-full border border-white/15" />

                <div className="absolute inset-7 rounded-full border border-white/10" />

                <div className="absolute inset-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">

                  <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-white/10 flex items-center justify-center">

                    <HeartPulse
                      size={115}
                      className="text-white sm:w-[135px] sm:h-[135px]"
                      strokeWidth={1.5}
                    />

                  </div>

                </div>

                {/* TOP FLOAT CARD */}

                <div className="absolute -top-2 left-0 sm:left-2 rounded-2xl bg-white px-4 py-3 shadow-xl">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-xl bg-[#E5F2F3] text-[#0E6F78] flex items-center justify-center">
                      <ShieldCheck size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-extrabold text-[#1C1A16]">
                        {text.secureReports}
                      </p>

                      <p className="text-[11px] text-[#7A736B]">
                        {text.privacyFirst}
                      </p>
                    </div>

                  </div>

                </div>

                {/* RIGHT FLOAT CARD */}

                <div className="absolute -right-4 sm:-right-8 bottom-8 rounded-2xl bg-white px-4 py-3 shadow-xl">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-xl bg-[#F6EFD2] text-[#9A7A0D] flex items-center justify-center">
                      <Sparkles size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-extrabold text-[#1C1A16]">
                        {text.aiAnalysis}
                      </p>

                      <p className="text-[11px] text-[#7A736B]">
                        {text.instantResults}
                      </p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TRUST STRIP
      ===================================================== */}

      <section className="border-b border-[#E2DED4] bg-white">

        <div className="max-w-7xl mx-auto px-6 py-5">

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-[#55504A]">

            <span className="inline-flex items-center gap-2">
              <ShieldCheck
                size={18}
                className="text-[#0E6F78]"
              />
              {text.trusted}
            </span>

            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#C9A227]" />

            <span className="inline-flex items-center gap-2">
              <Sparkles
                size={17}
                className="text-[#C9A227]"
              />
              AI Powered
            </span>

            <span className="hidden sm:block w-1 h-1 rounded-full bg-[#C9A227]" />

            <span className="inline-flex items-center gap-2">
              <HeartPulse
                size={18}
                className="text-[#1F7A4C]"
              />
              Healthcare Focused
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">

        <div className="text-center max-w-2xl mx-auto">

          <span className="inline-flex items-center gap-2 rounded-full bg-[#E5F2F3] px-4 py-2 text-xs font-bold text-[#0E6F78]">

            <Sparkles size={15} />

            MediMind AI

          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#1C1A16] tracking-tight">

            {text.servicesTitle}

          </h2>

          <p className="mt-4 text-[#706A64] leading-7 text-sm sm:text-base">

            {text.servicesDescription}

          </p>

        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (
              <Link
                key={index}
                to={service.path}
                className="group rounded-2xl border border-[#E2DED4] bg-white p-6 shadow-[0_5px_18px_rgba(28,26,22,0.045)] hover:-translate-y-1.5 hover:shadow-[0_16px_30px_rgba(14,111,120,0.10)] transition-all duration-300"
              >

                <div className="flex items-start justify-between">

                  <div
                    className={`w-12 h-12 rounded-xl ${service.box} ${service.iconColor} flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    <Icon size={24} />
                  </div>

                  <ArrowRight
                    size={18}
                    className="text-[#B5AEA5] group-hover:text-[#0E6F78] group-hover:translate-x-1 transition-all"
                  />

                </div>

                <h3 className="mt-6 text-lg font-extrabold text-[#1C1A16]">
                  {service.title}
                </h3>

                <p className="mt-2 text-sm text-[#706A64] leading-6">
                  {service.description}
                </p>

              </Link>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          WHY MEDIMIND
      ===================================================== */}

      <section className="bg-white border-y border-[#E2DED4]">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-[#F6EFD2] px-4 py-2 text-xs font-bold text-[#856A09]">

                <ShieldCheck size={15} />

                {language === "te"
                  ? "భద్రత & సరళత"
                  : "Safety & Simplicity"}

              </span>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#083E44] leading-tight">

                {text.whyTitle}

              </h2>

              <p className="mt-4 text-[#706A64] leading-7">

                {text.whyDescription}

              </p>

              <div className="mt-6 h-1 w-16 rounded-full bg-[#C9A227]" />

            </div>

            <div className="grid sm:grid-cols-2 gap-5">

              {benefits.map((benefit, index) => {

                const Icon = benefit.icon;

                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#E2DED4] bg-[#FDFCF9] p-5 hover:shadow-md transition-shadow"
                  >

                    <div
                      className={`w-11 h-11 rounded-xl ${benefit.box} ${benefit.iconColor} flex items-center justify-center`}
                    >
                      <Icon size={22} />
                    </div>

                    <h3 className="mt-4 font-extrabold text-[#1C1A16]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm text-[#706A64] leading-6">
                      {benefit.description}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 sm:py-20">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#083E44] to-[#0E6F78] px-6 py-12 sm:px-10 sm:py-14 text-center shadow-[0_18px_40px_rgba(8,62,68,0.14)]">

          <div className="absolute -right-20 -top-28 w-72 h-72 rounded-full border border-white/10" />

          <div className="absolute -left-16 -bottom-32 w-64 h-64 rounded-full border border-white/10" />

          <div className="relative z-10">

            <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">

              <HeartPulse
                size={28}
                className="text-[#F2D76B]"
              />

            </div>

            <h2 className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">

              {text.ctaTitle}

            </h2>

            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-[#D9ECEE] leading-7">

              {text.ctaDescription}

            </p>

            <Link
              to="/symptoms"
              className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#083E44] shadow-lg hover:bg-[#F7F5F1] hover:-translate-y-0.5"
            >

              {text.explore}

              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />

            </Link>

          </div>

        </div>

        <p className="mt-6 text-center text-xs text-[#8A837B] max-w-2xl mx-auto leading-5">

          ⚠️ {text.disclaimer}

        </p>

      </section>

    </div>
  );
}

export default Home;