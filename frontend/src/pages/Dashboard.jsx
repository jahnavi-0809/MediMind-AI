import { useEffect, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

import {
  HeartPulse,
  Activity,
  FileText,
  Users,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Stethoscope,
  Pill,
  MessageCircle,
  Brain,
  ChevronRight,
} from "lucide-react";

import api from "../services/api";
import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { language, t } = useLanguage();
  const { user } = useAuth();

  const [activities, setActivities] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(true);
  const [historyError, setHistoryError] = useState("");

  /* ============================================================
     FETCH RECENT ACTIVITY
  ============================================================ */

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setHistoryLoading(true);
        setHistoryError("");

        const response = await api.get("/history");

        setActivities(response.data.activities || []);
      } catch (error) {
        console.error("History fetch error:", error);

        if (error.response?.status === 401) {
          setHistoryError(
            language === "te"
              ? "మీ కార్యకలాపాలను చూడటానికి మళ్లీ లాగిన్ చేయండి."
              : "Please login again to view your activity."
          );
        } else {
          setHistoryError(
            language === "te"
              ? "మీ ఇటీవలి కార్యకలాపాలను లోడ్ చేయలేకపోయాము."
              : "Unable to load your recent activity."
          );
        }
      } finally {
        setHistoryLoading(false);
      }
    };

    fetchHistory();
  }, [language]);

  /* ============================================================
     TIME AGO
  ============================================================ */

  const getTimeAgo = (dateString) => {
    if (!dateString) return "";

    const activityDate = new Date(dateString);
    const now = new Date();

    const differenceInSeconds = Math.floor(
      (now - activityDate) / 1000
    );

    if (differenceInSeconds < 60) {
      return language === "te"
        ? "ఇప్పుడే"
        : "Just now";
    }

    const minutes = Math.floor(
      differenceInSeconds / 60
    );

    if (minutes < 60) {
      return language === "te"
        ? `${minutes} నిమిషాల క్రితం`
        : `${minutes} ${
            minutes === 1 ? "minute" : "minutes"
          } ago`;
    }

    const hours = Math.floor(minutes / 60);

    if (hours < 24) {
      return language === "te"
        ? `${hours} గంటల క్రితం`
        : `${hours} ${
            hours === 1 ? "hour" : "hours"
          } ago`;
    }

    const days = Math.floor(hours / 24);

    if (days < 7) {
      return language === "te"
        ? `${days} రోజుల క్రితం`
        : `${days} ${
            days === 1 ? "day" : "days"
          } ago`;
    }

    return activityDate.toLocaleDateString();
  };

  /* ============================================================
     ACTIVITY DETAILS
  ============================================================ */

  const getActivityDetails = (activity) => {
    const feature = activity.feature || "";

    if (feature === "Report Analyzer") {
      return {
        title:
          language === "te"
            ? "మెడికల్ రిపోర్ట్ విశ్లేషించబడింది"
            : "Medical Report Analyzed",
        icon: FileText,
        className: "activity-green",
      };
    }

    if (feature === "Medicine Information") {
      return {
        title:
          language === "te"
            ? "మందు సమాచారం"
            : "Medicine Information",
        icon: Pill,
        className: "activity-gold",
      };
    }

    if (feature === "Symptom Checker") {
      return {
        title:
          language === "te"
            ? "లక్షణాల పరిశీలన"
            : "Symptom Checker",
        icon: Stethoscope,
        className: "activity-sage",
      };
    }

    if (feature === "AI Health Chat") {
      return {
        title:
          language === "te"
            ? "AI ఆరోగ్య సహాయకుడు"
            : "AI Health Assistant",
        icon: MessageCircle,
        className: "activity-dark",
      };
    }

    return {
      title:
        language === "te"
          ? "AI ఆరోగ్య సహాయకుడు"
          : "AI Health Assistant",
      icon: Brain,
      className: "activity-dark",
    };
  };

  /* ============================================================
     STATS
  ============================================================ */

  const stats = [
    {
      value: "98%",
      label:
        language === "te"
          ? "AI ఖచ్చితత్వం"
          : "AI Accuracy",
      icon: Activity,
      className: "stat-teal",
    },
    {
      value: "10K+",
      label:
        language === "te"
          ? "విశ్లేషించిన రిపోర్ట్లు"
          : "Reports Analyzed",
      icon: FileText,
      className: "stat-gold",
    },
    {
      value: "5K+",
      label:
        language === "te"
          ? "యాక్టివ్ యూజర్లు"
          : "Active Users",
      icon: Users,
      className: "stat-green",
    },
    {
      value: "24/7",
      label:
        language === "te"
          ? "అందుబాటు"
          : "Availability",
      icon: ShieldCheck,
      className: "stat-purple",
    },
  ];

  /* ============================================================
     RETURN
  ============================================================ */

  return (
    <main className="dashboard">

      {/* ========================================================
          HERO
      ======================================================== */}

      <section className="dashboard-hero">

        <div className="hero-card">

          <div className="hero-content">

            {/* LEFT */}

            <div>

              <div className="hero-badge">

                <Sparkles size={15} />

                <span>
                  {language === "te"
                    ? "AI ఆరోగ్య సహాయకుడు"
                    : "AI HEALTHCARE ASSISTANT"}
                </span>

              </div>

              <h1>

                {language === "te"
                  ? "మీ ఆరోగ్యాన్ని"
                  : "Your Health,"}

                <span>
                  {language === "te"
                    ? "తెలివిగా అర్థం చేసుకోండి."
                    : " Smarter Insights."}
                </span>

              </h1>

              <p>
                {language === "te"
                  ? "లక్షణాలను అర్థం చేసుకోండి, మెడికల్ రిపోర్ట్లను విశ్లేషించండి మరియు AI సహాయంతో ఆరోగ్య సమాచారాన్ని సులభంగా పొందండి."
                  : "Understand symptoms, explore medical reports, learn about medicines and get AI-powered healthcare guidance — all in one place."}
              </p>

              <div className="hero-buttons">

                <Link
                  to="/symptoms"
                  className="primary-btn"
                >
                  {language === "te"
                    ? "ఆరోగ్య తనిఖీ ప్రారంభించండి"
                    : "Start Health Check"}

                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/report"
                  className="hero-outline-btn"
                >
                  {language === "te"
                    ? "రిపోర్ట్ విశ్లేషించండి"
                    : "Analyze Report"}
                </Link>

              </div>

              <div className="hero-trust">

                <div>
                  <ShieldCheck size={15} />
                  <span>
                    {language === "te"
                      ? "సురక్షితమైన AI"
                      : "Safe AI"}
                  </span>
                </div>

                <div>
                  <HeartPulse size={15} />
                  <span>
                    {language === "te"
                      ? "24/7 అందుబాటు"
                      : "Available 24/7"}
                  </span>
                </div>

                <div>
                  <Brain size={15} />
                  <span>
                    {language === "te"
                      ? "సులభమైన వివరణలు"
                      : "Simple explanations"}
                  </span>
                </div>

              </div>

            </div>

            {/* RIGHT VISUAL */}

            <div className="hero-visual">

              <div className="visual-glow" />

              <div className="ai-orbit orbit-one" />
              <div className="ai-orbit orbit-two" />

              <div className="medical-core">

                <HeartPulse
                  size={74}
                  strokeWidth={1.6}
                />

                <span>AI</span>

              </div>

              {/* TOP FLOATING CARD */}

              <div className="floating-card floating-top">

                <div className="floating-icon">
                  <Activity size={17} />
                </div>

                <div>

                  <small>
                    {language === "te"
                      ? "ఆరోగ్య స్థితి"
                      : "Health Status"}
                  </small>

                  <strong>
                    {language === "te"
                      ? "మంచిది"
                      : "Good"}
                  </strong>

                </div>

              </div>

              {/* BOTTOM FLOATING CARD */}

              <div className="floating-card floating-bottom">

                <div className="floating-icon">
                  <Sparkles size={17} />
                </div>

                <div>

                  <small>AI Insights</small>

                  <strong>
                    {language === "te"
                      ? "సిద్ధంగా ఉంది"
                      : "Ready"}
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================
          STATS
      ======================================================== */}

      <section className="stats-panel">

        <div className="stats-intro">

          <span>MEDIMIND AI</span>

          <strong>
            {language === "te"
              ? "ఒకే చోట స్మార్ట్ హెల్త్ టూల్స్"
              : "Smart healthcare, all in one place"}
          </strong>

        </div>

        <div className="stats-grid">

          {stats.map((item) => {

            const Icon = item.icon;

            return (
              <div
                className={`stat-card ${item.className}`}
                key={item.label}
              >

                <div className="stat-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <h2>{item.value}</h2>
                  <p>{item.label}</p>
                </div>

              </div>
            );
          })}

        </div>

      </section>

      {/* ========================================================
          QUICK ACTIONS
      ======================================================== */}

      <section className="dashboard-section">

        <div className="section-heading">

          <div>

            <span className="section-label">
              AI TOOLS
            </span>

            <h2>
              {language === "te"
                ? "మీ ఆరోగ్యానికి కావాల్సిన సాధనాలు"
                : "Everything you need for your health"}
            </h2>

          </div>

          <p>
            {language === "te"
              ? "మీకు అవసరమైన AI ఆరోగ్య సేవను ఎంచుకోండి."
              : "Choose the AI healthcare service you need."}
          </p>

        </div>

        <div className="quick-actions">

          {/* SYMPTOMS */}

          <Link
            to="/symptoms"
            className="feature-card feature-teal"
          >

            <div className="feature-top">

              <div className="feature-icon">
                <Stethoscope size={23} />
              </div>

              <ChevronRight size={19} />

            </div>

            <h3>
              {language === "te"
                ? "లక్షణాల పరిశీలన"
                : "Symptom Checker"}
            </h3>

            <p>
              {language === "te"
                ? "మీ లక్షణాలను వివరించి సాధ్యమైన ఆరోగ్య కారణాలను అర్థం చేసుకోండి."
                : "Describe your symptoms and understand possible health causes."}
            </p>

            <span className="feature-link">
              {language === "te"
                ? "ప్రారంభించండి"
                : "Explore"}
              <ArrowRight size={14} />
            </span>

          </Link>

          {/* REPORT */}

          <Link
            to="/report"
            className="feature-card feature-gold"
          >

            <div className="feature-top">

              <div className="feature-icon">
                <FileText size={23} />
              </div>

              <ChevronRight size={19} />

            </div>

            <h3>
              {language === "te"
                ? "రిపోర్ట్ విశ్లేషణ"
                : "Report Analyzer"}
            </h3>

            <p>
              {language === "te"
                ? "మెడికల్ PDF రిపోర్ట్లను అప్‌లోడ్ చేసి సులభమైన వివరణ పొందండి."
                : "Upload medical PDF reports and get easy-to-understand explanations."}
            </p>

            <span className="feature-link">
              {language === "te"
                ? "విశ్లేషించండి"
                : "Analyze"}
              <ArrowRight size={14} />
            </span>

          </Link>

          {/* MEDICINE */}

          <Link
            to="/medicine"
            className="feature-card feature-green"
          >

            <div className="feature-top">

              <div className="feature-icon">
                <Pill size={23} />
              </div>

              <ChevronRight size={19} />

            </div>

            <h3>
              {language === "te"
                ? "మందుల సమాచారం"
                : "Medicine Information"}
            </h3>

            <p>
              {language === "te"
                ? "మందుల ఉపయోగాలు, జాగ్రత్తలు మరియు సాధారణ దుష్ప్రభావాల గురించి తెలుసుకోండి."
                : "Learn about medicine uses, precautions and common side effects."}
            </p>

            <span className="feature-link">
              {language === "te"
                ? "తెలుసుకోండి"
                : "Learn More"}
              <ArrowRight size={14} />
            </span>

          </Link>

          {/* AI CHAT */}

          <Link
            to="/chat"
            className="feature-card feature-purple featured"
          >

            <div className="feature-top">

              <div className="feature-icon">
                <MessageCircle size={23} />
              </div>

              <ChevronRight size={19} />

            </div>

            <h3>
              {language === "te"
                ? "AI ఆరోగ్య చాట్"
                : "AI Health Chat"}
            </h3>

            <p>
              {language === "te"
                ? "మీ ఆరోగ్య ప్రశ్నలను AI సహాయకుడిని అడగండి."
                : "Ask healthcare-related questions and get AI guidance."}
            </p>

            <span className="feature-link">
              {language === "te"
                ? "చాట్ ప్రారంభించండి"
                : "Start Chat"}
              <ArrowRight size={14} />
            </span>

          </Link>

        </div>

      </section>

      {/* ========================================================
          ACTIVITY + OVERVIEW
      ======================================================== */}

      <section className="dashboard-section">

        <div className="main-dashboard-grid">

          {/* RECENT ACTIVITY */}

          <div className="dashboard-card activity-card">

            <div className="card-heading">

              <div>

                <span className="section-label">
                  {language === "te"
                    ? "ఇటీవలి"
                    : "RECENT"}
                </span>

                <h2>
                  {language === "te"
                    ? "కార్యకలాపాలు"
                    : "Activity"}
                </h2>

              </div>

              <Link to="/history">
                {language === "te"
                  ? "అన్నీ చూడండి"
                  : "View all"}

                <ArrowRight size={14} />
              </Link>

            </div>

            <div className="activity-list">

              {historyLoading && (
                <div className="empty-activity">

                  <Activity size={20} />

                  <span>
                    {language === "te"
                      ? "కార్యకలాపాలను లోడ్ చేస్తోంది..."
                      : "Loading your activity..."}
                  </span>

                </div>
              )}

              {!historyLoading && historyError && (
                <div className="empty-activity error">

                  <ShieldCheck size={20} />

                  <span>{historyError}</span>

                </div>
              )}

              {!historyLoading &&
                !historyError &&
                activities.length === 0 && (
                  <div className="empty-activity">

                    <Sparkles size={20} />

                    <span>
                      {language === "te"
                        ? "ఇంకా కార్యకలాపాలు లేవు."
                        : "No activity yet."}
                    </span>

                  </div>
                )}

              {!historyLoading &&
                !historyError &&
                activities
                  .slice(0, 5)
                  .map((activity) => {

                    const details =
                      getActivityDetails(activity);

                    const Icon = details.icon;

                    return (
                      <div
                        className="activity-row"
                        key={activity.id}
                      >

                        <div
                          className={`activity-icon ${details.className}`}
                        >
                          <Icon size={18} />
                        </div>

                        <div className="activity-content">

                          <h4>
                            {details.title}
                          </h4>

                          <p>
                            {activity.question ||
                              (language === "te"
                                ? "ఆరోగ్య ప్రశ్న"
                                : "Healthcare question")}
                          </p>

                          <span>
                            {getTimeAgo(
                              activity.created_at
                            )}
                          </span>

                        </div>

                      </div>
                    );
                  })}

            </div>

          </div>

          {/* HEALTH OVERVIEW */}

          <div className="dashboard-card overview-card">

            <div className="card-heading">

              <div>

                <span className="section-label">
                  {language === "te"
                    ? "అవలోకనం"
                    : "OVERVIEW"}
                </span>

                <h2>
                  {language === "te"
                    ? "ఆరోగ్య స్థితి"
                    : "Health Overview"}
                </h2>

              </div>

              <div className="overview-heart">
                <HeartPulse size={18} />
              </div>

            </div>

            <div className="wellness-score">

              <div className="score-circle">

                <strong>80%</strong>

                <span>
                  {language === "te"
                    ? "వెల్‌నెస్"
                    : "Wellness"}
                </span>

              </div>

              <div className="score-text">

                <h3>
                  {language === "te"
                    ? "మంచి పురోగతి"
                    : "Great progress"}
                </h3>

                <p>
                  {language === "te"
                    ? "ఆరోగ్యకరమైన అలవాట్లను కొనసాగించండి."
                    : "Keep building healthy habits and staying consistent."}
                </p>

              </div>

            </div>

            <div className="progress-item">

              <div>

                <span>
                  {language === "te"
                    ? "వెల్‌నెస్"
                    : "Overall Wellness"}
                </span>

                <strong>80%</strong>

              </div>

              <div className="progress">
                <span style={{ width: "80%" }} />
              </div>

            </div>

            <div className="progress-item">

              <div>

                <span>
                  {language === "te"
                    ? "AI సిఫార్సులు"
                    : "AI Recommendation Score"}
                </span>

                <strong>90%</strong>

              </div>

              <div className="progress">
                <span style={{ width: "90%" }} />
              </div>

            </div>

            <div className="progress-item">

              <div>

                <span>
                  {language === "te"
                    ? "రోజువారీ లక్ష్యాలు"
                    : "Daily Goals"}
                </span>

                <strong>65%</strong>

              </div>

              <div className="progress">
                <span style={{ width: "65%" }} />
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================
          AI ASSISTANT
      ======================================================== */}

      <section className="dashboard-section">

        <div className="assistant-card">

          <div className="assistant-visual">

            <div>
              <Brain size={28} />
            </div>

          </div>

          <div className="assistant-content">

            <span>
              {language === "te"
                ? "మీ AI సహాయకుడు"
                : "YOUR AI ASSISTANT"}
            </span>

            <h2>
              {language === "te"
                ? "ఆరోగ్యం గురించి ప్రశ్న ఉందా?"
                : "Have a health question?"}
            </h2>

            <p>
              {language === "te"
                ? "లక్షణాలు, రిపోర్ట్లు, మందులు లేదా సాధారణ ఆరోగ్య విషయాల గురించి అడగండి."
                : "Ask about symptoms, reports, medicines or general wellness and get simple AI guidance."}
            </p>

          </div>

          <Link
            to="/chat"
            className="assistant-button"
          >

            {language === "te"
              ? "చాట్ ప్రారంభించండి"
              : "Start Chat"}

            <ArrowRight size={17} />

          </Link>

        </div>

      </section>

      {/* ========================================================
          DAILY TIP
      ======================================================== */}

      <section className="dashboard-section">

        <div className="daily-tip">

          <div className="tip-icon">
            🌿
          </div>

          <div>

            <span>
              {language === "te"
                ? "ఈరోజు ఆరోగ్య చిట్కా"
                : "TODAY'S HEALTH TIP"}
            </span>

            <p>
              {language === "te"
                ? "రోజుకు 30 నిమిషాలు నడక గుండె ఆరోగ్యాన్ని మెరుగుపరచడంలో, ఒత్తిడిని తగ్గించడంలో మరియు శక్తిని పెంచడంలో సహాయపడుతుంది."
                : "A 30-minute walk every day can support heart health, reduce stress and improve energy. Small habits lead to long-term wellness."}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Dashboard;