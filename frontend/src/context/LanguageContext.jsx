import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const LanguageContext = createContext();

const translations = {
  // ============================================================
  // ENGLISH
  // ============================================================

  en: {
    // ------------------------------------------------------------
    // Navbar
    // ------------------------------------------------------------

    home: "Home",
    symptoms: "Symptoms",
    reports: "Reports",
    medicines: "Medicines",
    aiChat: "AI Chat",
    about: "About",
    dashboard: "Dashboard",

    // ------------------------------------------------------------
    // Language
    // ------------------------------------------------------------

    language: "Language",
    english: "English",
    telugu: "తెలుగు",

    // ------------------------------------------------------------
    // Common
    // ------------------------------------------------------------

    selectLanguage: "Select Language",
    loading: "Loading...",
    submit: "Submit",
    cancel: "Cancel",
    back: "Back",

    // ------------------------------------------------------------
    // Symptom Checker
    // ------------------------------------------------------------

    symptomChecker: "AI Symptom Checker",

    describeSymptoms: "Describe Your Symptoms",

    enterSymptoms:
      "Describe your symptoms and receive an AI-powered educational health assessment.",

    symptomPlaceholder:
      "Example: I have fever, cough, sore throat and body pain since yesterday...",

    checkSymptoms: "Analyze Symptoms",

    aiAnalyzing: "AI is analyzing...",

    checkingSymptoms: "Checking Symptoms...",

    analyzingMessage:
      "MediMind AI is analyzing your symptoms.",

    aiHealthAnalysis: "AI Health Analysis",

    riskLevel: "Risk Level",

    educationalAssessment: "Educational Assessment",

    informationalOnly:
      "This AI result is informational only and should not be considered a medical diagnosis.",

    recommendation: "Recommendation",

    stayHydrated: "Stay hydrated.",

    monitorSymptoms:
      "Monitor your symptoms regularly.",

    adequateRest:
      "Take adequate rest.",

    consultProfessional:
      "Consult a qualified healthcare professional if symptoms worsen or persist.",

    emergencyWarning: "Emergency Warning",

    emergencyText:
      "Seek immediate medical attention if you experience severe chest pain, difficulty breathing, loss of consciousness, seizures, heavy bleeding, or other life-threatening symptoms.",

    medicalDisclaimer: "Medical Disclaimer",

    medicalDisclaimerText:
      "MediMind AI provides educational health information and is not a replacement for professional medical advice, diagnosis, or treatment. Always consult a licensed healthcare provider regarding your health concerns.",

    enterSymptomsWarning:
      "Please enter your symptoms.",

    analysisCompleted:
      "AI analysis completed!",

    analysisFailed:
      "Failed to analyze symptoms.",

    // ------------------------------------------------------------
    // Report Analyzer
    // ------------------------------------------------------------

    reportAnalyzer: "Medical Report Analyzer",

    uploadReport:
      "Upload your medical report (PDF) and get an AI-powered explanation in simple language.",

    uploadPdf: "Upload PDF Report",

    chooseReport:
      "Click here to choose your medical report.",

    analyzeReport: "Analyze Report",

    // ------------------------------------------------------------
    // Medicine
    // ------------------------------------------------------------

    medicineInformation: "Medicine Information",

    enterMedicine: "Enter medicine name",

    getInformation: "Get Information",

    medicineAssistant: "AI Medicine Assistant",

    medicineDescription:
      "Learn about medicines, their uses, precautions, safety, and general guidance.",

    medicineName: "Medicine Name",

    medicinePlaceholder:
      "Example: Paracetamol 650",

    searching: "Searching...",

    search: "Search",

    searchingMedicine:
      "Searching Medicine...",

    collectingMedicine:
      "MediMind AI is collecting medicine information.",

    aiMedicineInformation:
      "AI Medicine Information",

    safetyTips: "Safety Tips",

    prescribedOnly:
      "Take medicines only as prescribed by a qualified healthcare professional.",

    doNotExceed:
      "Do not exceed the recommended amount prescribed for you.",

    storeSafely:
      "Store medicines in a cool, dry place.",

    keepAwayChildren:
      "Keep medicines away from children.",

    consultDoctor:
      "Consult your doctor before starting, changing, or stopping a medicine.",

    medicineDisclaimer:
      "AI-generated medicine information is for educational purposes only. Always consult a licensed healthcare professional before taking, changing, or stopping any medication.",

    enterMedicineWarning:
      "Please enter a medicine name.",

    medicineLoaded:
      "Medicine information loaded!",

    medicineFailed:
      "Failed to fetch medicine information.",

    // ------------------------------------------------------------
    // AI Chat
    // ------------------------------------------------------------

    aiHealthChat: "AI Health Chat",

    typeMessage:
      "Type your health question...",

    send: "Send",

    // ------------------------------------------------------------
    // Dashboard
    // ------------------------------------------------------------

    aiHealthcareDashboard:
      "AI HEALTHCARE DASHBOARD",

    welcomeTo: "Welcome to",

    dashboardDescription:
      "Access all your AI-powered healthcare tools from one modern dashboard. Analyze symptoms, understand reports, explore medicines and interact with AI anytime.",

    exploreAI: "Explore AI",

    dashboardAnalyzeReport:
      "Analyze Report",

    aiAccuracy: "AI Accuracy",

    reportsAnalyzed:
      "Reports Analyzed",

    activeUsers:
      "Active Users",

    availability:
      "Availability",

    todaysAIHealthInsight:
      "TODAY'S AI HEALTH INSIGHT",

    smallHabits:
      "Small Habits,",

    bigHealthBenefits:
      "Big Health Benefits",

    healthInsightDescription:
      "Staying hydrated, eating nutritious food, exercising regularly, and getting quality sleep are simple habits that improve long-term physical and mental health.",

    aiRecommendations:
      "AI Recommendations",

    drinkWater:
      "Drink 2–3 liters of water daily",

    balancedMeals:
      "Eat balanced and nutritious meals",

    exercise:
      "Exercise for at least 30 minutes",

    sleep:
      "Sleep for 7–8 hours every night",

    quickActions:
      "Quick Actions",

    quickActionsDescription:
      "Access your favorite AI healthcare tools instantly.",

    symptomCheckerDescription:
      "Analyze symptoms using AI and get possible health insights.",

    reportAnalyzerDescription:
      "Upload medical reports and receive AI explanations.",

    medicineInfo:
      "Medicine Info",

    medicineInfoDescription:
      "Search medicines and understand their uses and precautions.",

    aiHealthChatDescription:
      "Ask healthcare-related questions anytime using AI.",

    recentActivity:
      "Recent Activity",

    loadingActivity:
      "Loading activity...",

    fetchingActivity:
      "Fetching your recent MediMind AI activity.",

    unableLoadActivity:
      "Unable to load activity",

    pleaseLoginActivity:
      "Please login again to view your activity.",

    unableRecentActivity:
      "Unable to load your recent activity.",

    noActivityYet:
      "No activity yet",

    startUsingMediMind:
      "Start using MediMind AI to see your activity here.",

    medicalReportAnalyzed:
      "Medical Report Analyzed",

    reportAnalyzedDescription:
      "A medical report was analyzed using MediMind AI.",

    medicineInformationActivity:
      "Medicine Information",

    symptomCheckerActivity:
      "Symptom Checker",

    aiHealthAssistant:
      "AI Health Assistant",

    healthcareQuestion:
      "Healthcare question",

    healthOverview:
      "Health Overview",

    overallWellness:
      "Overall Wellness",

    aiRecommendationScore:
      "AI Recommendation Score",

    dailyGoals:
      "Daily Goals",

    greatProgress:
      "🎉 Great Progress!",

    healthStatusDescription:
      "Your AI health indicators suggest you're maintaining a healthy lifestyle. Keep following your personalized recommendations every day.",

    aiHealthcareServices:
      "AI Healthcare Services",

    aiHealthcareServicesDescription:
      "Explore powerful AI tools designed to make healthcare easier and smarter.",

    serviceSymptomDescription:
      "Describe your symptoms and receive AI-powered health insights.",

    serviceReportDescription:
      "Upload medical reports and understand them in simple language.",

    serviceMedicineDescription:
      "Learn about medicine usage, precautions, and side effects.",

    serviceAssistantDescription:
      "Chat with your personal AI assistant for healthcare guidance.",

    yourAIHealthAssistant:
      "Your AI Health Assistant",

    yourAIHealthAssistantDescription:
      "I'm here to help you understand symptoms, explain reports, answer healthcare questions, and provide personalized wellness recommendations.",

    startChat:
      "Start Chat",

    dailyHealthTip:
      "🌿 Daily Health Tip",

    dailyHealthTipDescription:
      "A 30-minute walk every day can improve heart health, reduce stress, boost immunity, and increase energy levels. Small healthy habits lead to long-term wellness.",

    // ------------------------------------------------------------
    // Disclaimer
    // ------------------------------------------------------------

    disclaimer:
      "Disclaimer",

    disclaimerText:
      "This application provides educational health information only. Always consult a qualified healthcare professional for medical advice, diagnosis, or treatment.",
  },

  // ============================================================
  // TELUGU
  // ============================================================

  te: {
    // ------------------------------------------------------------
    // Navbar
    // ------------------------------------------------------------

    home: "హోమ్",
    symptoms: "లక్షణాలు",
    reports: "రిపోర్టులు",
    medicines: "మందులు",
    aiChat: "AI చాట్",
    about: "మా గురించి",
    dashboard: "డ్యాష్‌బోర్డ్",

    // ------------------------------------------------------------
    // Language
    // ------------------------------------------------------------

    language: "భాష",
    english: "English",
    telugu: "తెలుగు",

    // ------------------------------------------------------------
    // Common
    // ------------------------------------------------------------

    selectLanguage: "భాషను ఎంచుకోండి",
    loading: "లోడ్ అవుతోంది...",
    submit: "సమర్పించండి",
    cancel: "రద్దు చేయండి",
    back: "వెనుకకు",

    // ------------------------------------------------------------
    // Symptom Checker
    // ------------------------------------------------------------

    symptomChecker:
      "AI లక్షణాల పరిశీలన",

    describeSymptoms:
      "మీ లక్షణాలను వివరించండి",

    enterSymptoms:
      "మీ లక్షణాలను వివరించి AI ఆధారిత ఆరోగ్య సమాచారాన్ని పొందండి.",

    symptomPlaceholder:
      "ఉదాహరణ: నాకు నిన్నటి నుండి జ్వరం, దగ్గు, గొంతు నొప్పి మరియు ఒంటినొప్పి ఉంది...",

    checkSymptoms:
      "లక్షణాలను పరిశీలించండి",

    aiAnalyzing:
      "AI విశ్లేషిస్తోంది...",

    checkingSymptoms:
      "లక్షణాలను పరిశీలిస్తోంది...",

    analyzingMessage:
      "MediMind AI మీ లక్షణాలను విశ్లేషిస్తోంది.",

    aiHealthAnalysis:
      "AI ఆరోగ్య విశ్లేషణ",

    riskLevel:
      "ప్రమాద స్థాయి",

    educationalAssessment:
      "విద్యాపరమైన అంచనా",

    informationalOnly:
      "ఈ AI ఫలితం కేవలం సమాచార ప్రయోజనాల కోసం మాత్రమే. దీనిని వైద్య నిర్ధారణగా పరిగణించకండి.",

    recommendation:
      "సూచనలు",

    stayHydrated:
      "తగినంత నీరు తాగండి.",

    monitorSymptoms:
      "మీ లక్షణాలను క్రమం తప్పకుండా గమనించండి.",

    adequateRest:
      "తగినంత విశ్రాంతి తీసుకోండి.",

    consultProfessional:
      "లక్షణాలు తీవ్రమైతే లేదా కొనసాగితే అర్హత కలిగిన వైద్య నిపుణుడిని సంప్రదించండి.",

    emergencyWarning:
      "అత్యవసర హెచ్చరిక",

    emergencyText:
      "తీవ్రమైన ఛాతి నొప్పి, శ్వాస తీసుకోవడంలో ఇబ్బంది, స్పృహ కోల్పోవడం, మూర్ఛలు, అధిక రక్తస్రావం లేదా ఇతర ప్రాణాపాయ లక్షణాలు కనిపిస్తే వెంటనే వైద్య సహాయం పొందండి.",

    medicalDisclaimer:
      "వైద్య నిరాకరణ ప్రకటన",

    medicalDisclaimerText:
      "MediMind AI విద్యాపరమైన ఆరోగ్య సమాచారాన్ని మాత్రమే అందిస్తుంది. ఇది వైద్య సలహా, నిర్ధారణ లేదా చికిత్సకు ప్రత్యామ్నాయం కాదు. మీ ఆరోగ్య సమస్యల గురించి ఎల్లప్పుడూ లైసెన్స్ పొందిన వైద్య నిపుణుడిని సంప్రదించండి.",

    enterSymptomsWarning:
      "దయచేసి మీ లక్షణాలను నమోదు చేయండి.",

    analysisCompleted:
      "AI విశ్లేషణ పూర్తయింది!",

    analysisFailed:
      "లక్షణాలను విశ్లేషించడం విఫలమైంది.",

    // ------------------------------------------------------------
    // Report Analyzer
    // ------------------------------------------------------------

    reportAnalyzer:
      "వైద్య రిపోర్ట్ విశ్లేషణ",

    uploadReport:
      "మీ వైద్య రిపోర్ట్ (PDF)ను అప్‌లోడ్ చేసి AI ఆధారిత సులభమైన వివరణను పొందండి.",

    uploadPdf:
      "PDF రిపోర్ట్‌ను అప్‌లోడ్ చేయండి",

    chooseReport:
      "మీ వైద్య రిపోర్ట్‌ను ఎంచుకోవడానికి ఇక్కడ క్లిక్ చేయండి.",

    analyzeReport:
      "రిపోర్ట్‌ను విశ్లేషించండి",

    // ------------------------------------------------------------
    // Medicine
    // ------------------------------------------------------------

    medicineInformation:
      "మందుల సమాచారం",

    enterMedicine:
      "మందు పేరును నమోదు చేయండి",

    getInformation:
      "సమాచారం పొందండి",

    medicineAssistant:
      "AI మందుల సహాయకుడు",

    medicineDescription:
      "మందుల ఉపయోగాలు, జాగ్రత్తలు, భద్రత మరియు సాధారణ సమాచారాన్ని తెలుసుకోండి.",

    medicineName:
      "మందు పేరు",

    medicinePlaceholder:
      "ఉదాహరణ: Paracetamol 650",

    searching:
      "వెతుకుతోంది...",

    search:
      "వెతకండి",

    searchingMedicine:
      "మందు సమాచారం వెతుకుతోంది...",

    collectingMedicine:
      "MediMind AI మందు సమాచారాన్ని సేకరిస్తోంది.",

    aiMedicineInformation:
      "AI మందుల సమాచారం",

    safetyTips:
      "భద్రతా సూచనలు",

    prescribedOnly:
      "అర్హత కలిగిన వైద్య నిపుణుడు సూచించిన విధంగానే మందులను తీసుకోండి.",

    doNotExceed:
      "మీకు సూచించిన పరిమాణాన్ని మించకండి.",

    storeSafely:
      "మందులను చల్లని, పొడి ప్రదేశంలో భద్రంగా ఉంచండి.",

    keepAwayChildren:
      "మందులను పిల్లలకు దూరంగా ఉంచండి.",

    consultDoctor:
      "మందును ప్రారంభించే ముందు, మార్చే ముందు లేదా ఆపే ముందు మీ వైద్యుడిని సంప్రదించండి.",

    medicineDisclaimer:
      "AI రూపొందించిన మందుల సమాచారం విద్యాపరమైన ప్రయోజనాల కోసం మాత్రమే. ఏదైనా మందు తీసుకునే ముందు, మార్చే ముందు లేదా ఆపే ముందు అర్హత కలిగిన వైద్య నిపుణుడిని సంప్రదించండి.",

    enterMedicineWarning:
      "దయచేసి మందు పేరును నమోదు చేయండి.",

    medicineLoaded:
      "మందు సమాచారం అందుబాటులో ఉంది!",

    medicineFailed:
      "మందు సమాచారాన్ని పొందడం విఫలమైంది.",

    // ------------------------------------------------------------
    // AI Chat
    // ------------------------------------------------------------

    aiHealthChat:
      "AI ఆరోగ్య చాట్",

    typeMessage:
      "మీ ఆరోగ్య ప్రశ్నను టైప్ చేయండి...",

    send:
      "పంపండి",

    // ------------------------------------------------------------
    // Dashboard
    // ------------------------------------------------------------

    aiHealthcareDashboard:
      "AI ఆరోగ్య డ్యాష్‌బోర్డ్",

    welcomeTo:
      "స్వాగతం",

    dashboardDescription:
      "ఒకే ఆధునిక డ్యాష్‌బోర్డ్ నుండి మీ AI ఆధారిత ఆరోగ్య సాధనాలన్నింటినీ ఉపయోగించండి. లక్షణాలను విశ్లేషించండి, రిపోర్టులను అర్థం చేసుకోండి, మందుల గురించి తెలుసుకోండి మరియు ఎప్పుడైనా AIతో మాట్లాడండి.",

    exploreAI:
      "AIని అన్వేషించండి",

    dashboardAnalyzeReport:
      "రిపోర్ట్‌ను విశ్లేషించండి",

    aiAccuracy:
      "AI ఖచ్చితత్వం",

    reportsAnalyzed:
      "విశ్లేషించిన రిపోర్టులు",

    activeUsers:
      "యాక్టివ్ వినియోగదారులు",

    availability:
      "అందుబాటు",

    todaysAIHealthInsight:
      "ఈరోజు AI ఆరోగ్య సూచన",

    smallHabits:
      "చిన్న అలవాట్లు,",

    bigHealthBenefits:
      "పెద్ద ఆరోగ్య ప్రయోజనాలు",

    healthInsightDescription:
      "తగినంత నీరు తాగడం, పోషకాహారం తీసుకోవడం, క్రమం తప్పకుండా వ్యాయామం చేయడం మరియు నాణ్యమైన నిద్ర పొందడం దీర్ఘకాలిక ఆరోగ్యాన్ని మెరుగుపరిచే సులభమైన అలవాట్లు.",

    aiRecommendations:
      "AI సూచనలు",

    drinkWater:
      "రోజూ 2–3 లీటర్ల నీరు తాగండి",

    balancedMeals:
      "సమతుల్యమైన మరియు పోషకాహార భోజనం తీసుకోండి",

    exercise:
      "కనీసం 30 నిమిషాలు వ్యాయామం చేయండి",

    sleep:
      "ప్రతి రాత్రి 7–8 గంటలు నిద్రపోండి",

    quickActions:
      "త్వరిత చర్యలు",

    quickActionsDescription:
      "మీకు ఇష్టమైన AI ఆరోగ్య సాధనాలను వెంటనే ఉపయోగించండి.",

    symptomCheckerDescription:
      "AIని ఉపయోగించి లక్షణాలను విశ్లేషించి ఆరోగ్య సమాచారాన్ని పొందండి.",

    reportAnalyzerDescription:
      "వైద్య రిపోర్టులను అప్‌లోడ్ చేసి AI వివరణలను పొందండి.",

    medicineInfo:
      "మందుల సమాచారం",

    medicineInfoDescription:
      "మందులను వెతికి వాటి ఉపయోగాలు మరియు జాగ్రత్తలను తెలుసుకోండి.",

    aiHealthChatDescription:
      "AIని ఉపయోగించి ఎప్పుడైనా ఆరోగ్య సంబంధిత ప్రశ్నలు అడగండి.",

    recentActivity:
      "ఇటీవలి కార్యకలాపాలు",

    loadingActivity:
      "కార్యకలాపాలు లోడ్ అవుతున్నాయి...",

    fetchingActivity:
      "మీ ఇటీవలి MediMind AI కార్యకలాపాలను పొందుతోంది.",

    unableLoadActivity:
      "కార్యకలాపాలను లోడ్ చేయడం సాధ్యం కాలేదు",

    pleaseLoginActivity:
      "మీ కార్యకలాపాలను చూడటానికి మళ్లీ లాగిన్ చేయండి.",

    unableRecentActivity:
      "మీ ఇటీవలి కార్యకలాపాలను లోడ్ చేయడం సాధ్యం కాలేదు.",

    noActivityYet:
      "ఇంకా కార్యకలాపాలు లేవు",

    startUsingMediMind:
      "మీ కార్యకలాపాలను ఇక్కడ చూడటానికి MediMind AIని ఉపయోగించడం ప్రారంభించండి.",

    medicalReportAnalyzed:
      "వైద్య రిపోర్ట్ విశ్లేషించబడింది",

    reportAnalyzedDescription:
      "MediMind AI ఉపయోగించి వైద్య రిపోర్ట్ విశ్లేషించబడింది.",

    medicineInformationActivity:
      "మందుల సమాచారం",

    symptomCheckerActivity:
      "లక్షణాల పరిశీలన",

    aiHealthAssistant:
      "AI ఆరోగ్య సహాయకుడు",

    healthcareQuestion:
      "ఆరోగ్య ప్రశ్న",

    healthOverview:
      "ఆరోగ్య అవలోకనం",

    overallWellness:
      "మొత్తం ఆరోగ్యం",

    aiRecommendationScore:
      "AI సూచన స్కోర్",

    dailyGoals:
      "రోజువారీ లక్ష్యాలు",

    greatProgress:
      "🎉 మంచి పురోగతి!",

    healthStatusDescription:
      "మీ AI ఆరోగ్య సూచికలు మీరు ఆరోగ్యకరమైన జీవనశైలిని కొనసాగిస్తున్నట్లు సూచిస్తున్నాయి. ప్రతిరోజూ మీ వ్యక్తిగత ఆరోగ్య సూచనలను పాటించండి.",

    aiHealthcareServices:
      "AI ఆరోగ్య సేవలు",

    aiHealthcareServicesDescription:
      "ఆరోగ్యాన్ని సులభంగా మరియు మెరుగ్గా అర్థం చేసుకోవడానికి రూపొందించిన శక్తివంతమైన AI సాధనాలను అన్వేషించండి.",

    serviceSymptomDescription:
      "మీ లక్షణాలను వివరించి AI ఆధారిత ఆరోగ్య సమాచారాన్ని పొందండి.",

    serviceReportDescription:
      "వైద్య రిపోర్టులను అప్‌లోడ్ చేసి వాటిని సులభమైన భాషలో అర్థం చేసుకోండి.",

    serviceMedicineDescription:
      "మందుల ఉపయోగాలు, జాగ్రత్తలు మరియు దుష్ప్రభావాల గురించి తెలుసుకోండి.",

    serviceAssistantDescription:
      "ఆరోగ్య మార్గదర్శకత్వం కోసం మీ వ్యక్తిగత AI సహాయకుడితో చాట్ చేయండి.",

    yourAIHealthAssistant:
      "మీ AI ఆరోగ్య సహాయకుడు",

    yourAIHealthAssistantDescription:
      "లక్షణాలను అర్థం చేసుకోవడంలో, రిపోర్టులను వివరించడంలో, ఆరోగ్య ప్రశ్నలకు సమాధానాలు ఇవ్వడంలో మరియు ఆరోగ్యకరమైన జీవనశైలికి సూచనలు ఇవ్వడంలో నేను మీకు సహాయం చేస్తాను.",

    startChat:
      "చాట్ ప్రారంభించండి",

    dailyHealthTip:
      "🌿 రోజువారీ ఆరోగ్య చిట్కా",

    dailyHealthTipDescription:
      "ప్రతిరోజూ 30 నిమిషాలు నడవడం గుండె ఆరోగ్యాన్ని మెరుగుపరచి, ఒత్తిడిని తగ్గించి, రోగనిరోధక శక్తిని పెంచుతుంది. చిన్న ఆరోగ్యకరమైన అలవాట్లు దీర్ఘకాలిక ఆరోగ్యానికి సహాయపడతాయి.",

    // ------------------------------------------------------------
    // Disclaimer
    // ------------------------------------------------------------

    disclaimer:
      "గమనిక",

    disclaimerText:
      "ఈ అప్లికేషన్ విద్యాపరమైన ఆరోగ్య సమాచారాన్ని మాత్రమే అందిస్తుంది. వైద్య సలహా, నిర్ధారణ లేదా చికిత్స కోసం అర్హత కలిగిన వైద్య నిపుణుడిని సంప్రదించండి.",
  },
};

// ============================================================
// LANGUAGE PROVIDER
// ============================================================

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("medimind-language") || "en";
  });

  useEffect(() => {
    localStorage.setItem(
      "medimind-language",
      language
    );
  }, [language]);

  const t = (key) => {
    return (
      translations[language]?.[key] ||
      translations.en?.[key] ||
      key
    );
  };

  const changeLanguage = (newLanguage) => {
    if (!translations[newLanguage]) {
      return;
    }

    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// ============================================================
// LANGUAGE HOOK
// ============================================================

export const useLanguage = () => {
  return useContext(LanguageContext);
};