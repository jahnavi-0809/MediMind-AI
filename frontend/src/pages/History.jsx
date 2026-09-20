import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Clock,
  FileText,
  Pill,
  Stethoscope,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  AlertCircle,
  History as HistoryIcon,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import api from "../services/api";
import { useLanguage } from "../context/LanguageContext";
import "./History.css";

function History() {
  const { language } = useLanguage();

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  const content = {
    en: {
      title: "Activity History",
      subtitle:
        "View your complete MediMind AI healthcare activity history.",
      backDashboard: "Back to Dashboard",
      refresh: "Refresh",
      loading: "Loading your history...",
      noHistory: "No activity history yet.",
      noHistoryText:
        "Use Symptom Checker, Medicine Information, Report Analyzer, or AI Chat to create activity.",
      errorTitle: "Unable to load history",
      loginAgain:
        "Your session may have expired. Please login again.",
      tryAgain: "Try Again",

      symptom: "Symptom Checker",
      medicine: "Medicine Information",
      report: "Medical Report Analyzer",
      chat: "AI Health Assistant",

      question: "Question / Request",
      aiResponse: "AI Response",
      viewResponse: "View AI Response",
      hideResponse: "Hide AI Response",

      justNow: "Just now",
      minute: "minute",
      minutes: "minutes",
      hour: "hour",
      hours: "hours",
      day: "day",
      days: "days",

      secureHistory: "Private activity history",
      secureText:
        "Your MediMind AI activity is linked to your account and displayed securely.",
      activityCount: "Activities",
    },

    te: {
      title: "కార్యకలాపాల చరిత్ర",
      subtitle:
        "మీ MediMind AI ఆరోగ్య కార్యకలాపాల పూర్తి చరిత్రను చూడండి.",
      backDashboard: "డ్యాష్‌బోర్డ్‌కు తిరిగి వెళ్లండి",
      refresh: "రిఫ్రెష్",
      loading: "మీ చరిత్రను లోడ్ చేస్తోంది...",
      noHistory: "ఇంకా కార్యకలాపాల చరిత్ర లేదు.",
      noHistoryText:
        "లక్షణాల పరిశీలన, మందుల సమాచారం, రిపోర్ట్ విశ్లేషణ లేదా AI చాట్ ఉపయోగించండి.",
      errorTitle: "చరిత్రను లోడ్ చేయలేకపోయాము",
      loginAgain:
        "మీ సెషన్ ముగిసి ఉండవచ్చు. దయచేసి మళ్లీ లాగిన్ చేయండి.",
      tryAgain: "మళ్లీ ప్రయత్నించండి",

      symptom: "లక్షణాల పరిశీలన",
      medicine: "మందుల సమాచారం",
      report: "వైద్య రిపోర్ట్ విశ్లేషణ",
      chat: "AI ఆరోగ్య సహాయకుడు",

      question: "ప్రశ్న / అభ్యర్థన",
      aiResponse: "AI సమాధానం",
      viewResponse: "AI సమాధానం చూడండి",
      hideResponse: "AI సమాధానం దాచండి",

      justNow: "ఇప్పుడే",
      minute: "నిమిషం",
      minutes: "నిమిషాలు",
      hour: "గంట",
      hours: "గంటలు",
      day: "రోజు",
      days: "రోజులు",

      secureHistory: "ప్రైవేట్ కార్యకలాపాల చరిత్ర",
      secureText:
        "మీ MediMind AI కార్యకలాపాలు మీ ఖాతాతో అనుసంధానించబడి సురక్షితంగా చూపబడతాయి.",
      activityCount: "కార్యకలాపాలు",
    },
  };

  const text = content[language] || content.en;

  const fetchHistory = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await api.get("/history");

      setActivities(response.data.activities || []);
    } catch (err) {
      console.error("History error:", err);

      if (err.response?.status === 401) {
        setError(text.loginAgain);
      } else {
        setError(
          language === "te"
            ? "మీ కార్యకలాపాల చరిత్రను లోడ్ చేయలేకపోయాము."
            : "Unable to load your activity history."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [language]);

  const getTimeAgo = (dateString) => {
    if (!dateString) {
      return "";
    }

    const activityDate = new Date(dateString);
    const now = new Date();

    if (Number.isNaN(activityDate.getTime())) {
      return "";
    }

    const differenceInSeconds = Math.floor(
      (now - activityDate) / 1000
    );

    if (differenceInSeconds < 60) {
      return text.justNow;
    }

    const differenceInMinutes = Math.floor(
      differenceInSeconds / 60
    );

    if (differenceInMinutes < 60) {
      if (language === "te") {
        return `${differenceInMinutes} ${
          differenceInMinutes === 1
            ? text.minute
            : text.minutes
        } క్రితం`;
      }

      return `${differenceInMinutes} ${
        differenceInMinutes === 1
          ? text.minute
          : text.minutes
      } ago`;
    }

    const differenceInHours = Math.floor(
      differenceInMinutes / 60
    );

    if (differenceInHours < 24) {
      if (language === "te") {
        return `${differenceInHours} ${
          differenceInHours === 1
            ? text.hour
            : text.hours
        } క్రితం`;
      }

      return `${differenceInHours} ${
        differenceInHours === 1
          ? text.hour
          : text.hours
      } ago`;
    }

    const differenceInDays = Math.floor(
      differenceInHours / 24
    );

    if (differenceInDays < 7) {
      if (language === "te") {
        return `${differenceInDays} ${
          differenceInDays === 1
            ? text.day
            : text.days
        } క్రితం`;
      }

      return `${differenceInDays} ${
        differenceInDays === 1
          ? text.day
          : text.days
      } ago`;
    }

    return activityDate.toLocaleString(
      language === "te" ? "te-IN" : "en-IN",
      {
        dateStyle: "medium",
        timeStyle: "short",
      }
    );
  };

  const getActivityInfo = (feature) => {
    if (feature === "Symptom Checker") {
      return {
        title: text.symptom,
        icon: <Stethoscope size={23} />,
        iconClass: "history-icon-teal",
        cardClass: "history-card-teal",
      };
    }

    if (feature === "Medicine Information") {
      return {
        title: text.medicine,
        icon: <Pill size={23} />,
        iconClass: "history-icon-gold",
        cardClass: "history-card-gold",
      };
    }

    if (feature === "Report Analyzer") {
      return {
        title: text.report,
        icon: <FileText size={23} />,
        iconClass: "history-icon-green",
        cardClass: "history-card-green",
      };
    }

    return {
      title: text.chat,
      icon: <MessageCircle size={23} />,
      iconClass: "history-icon-purple",
      cardClass: "history-card-purple",
    };
  };

  const toggleResponse = (id) => {
    setExpandedId((previous) =>
      previous === id ? null : id
    );
  };

  return (
    <div className="history-page">

      <div className="history-container">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="history-header">

          <div className="history-header-main">

            <div className="history-title-icon">
              <HistoryIcon size={29} />
            </div>

            <div>
              <div className="history-eyebrow">
                <Sparkles size={12} />
                MEDIMIND AI
              </div>

              <h1>{text.title}</h1>

              <p>{text.subtitle}</p>
            </div>

          </div>

          <button
            onClick={fetchHistory}
            disabled={loading}
            className="history-refresh-button"
          >
            <RefreshCw
              size={17}
              className={loading ? "history-spin" : ""}
            />

            {text.refresh}
          </button>

        </div>

        {/* ====================================================
            BACK + SECURITY
        ==================================================== */}

        <div className="history-toolbar">

          <Link
            to="/dashboard"
            className="history-back-link"
          >
            <ArrowLeft size={17} />

            {text.backDashboard}
          </Link>

          <div className="history-security">

            <ShieldCheck size={15} />

            <div>
              <strong>{text.secureHistory}</strong>
              <span>{text.secureText}</span>
            </div>

          </div>

        </div>

        {/* ====================================================
            LOADING
        ==================================================== */}

        {loading && (
          <div className="history-state-card">

            <div className="history-loading-icon">
              <RefreshCw
                size={35}
                className="history-spin"
              />
            </div>

            <h2>{text.loading}</h2>

          </div>
        )}

        {/* ====================================================
            ERROR
        ==================================================== */}

        {!loading && error && (
          <div className="history-state-card">

            <div className="history-error-icon">
              <AlertCircle size={31} />
            </div>

            <h2>{text.errorTitle}</h2>

            <p>{error}</p>

            <button
              onClick={fetchHistory}
              className="history-retry-button"
            >
              <RefreshCw size={16} />

              {text.tryAgain}
            </button>

          </div>
        )}

        {/* ====================================================
            EMPTY
        ==================================================== */}

        {!loading &&
          !error &&
          activities.length === 0 && (
            <div className="history-state-card">

              <div className="history-empty-icon">
                <HistoryIcon size={31} />
              </div>

              <h2>{text.noHistory}</h2>

              <p>{text.noHistoryText}</p>

            </div>
          )}

        {/* ====================================================
            ACTIVITY LIST
        ==================================================== */}

        {!loading &&
          !error &&
          activities.length > 0 && (

            <div className="history-list">

              <div className="history-list-header">

                <div>
                  <span>{text.activityCount}</span>
                  <strong>{activities.length}</strong>
                </div>

              </div>

              {activities.map((activity) => {

                const info = getActivityInfo(
                  activity.feature
                );

                const isExpanded =
                  expandedId === activity.id;

                return (
                  <div
                    key={activity.id}
                    className={`history-activity-card ${info.cardClass}`}
                  >

                    <div className="history-activity-inner">

                      {/* ICON */}

                      <div
                        className={`history-activity-icon ${info.iconClass}`}
                      >
                        {info.icon}
                      </div>

                      {/* CONTENT */}

                      <div className="history-activity-content">

                        <div className="history-activity-heading">

                          <div>
                            <span className="history-feature-label">
                              MEDIMIND AI
                            </span>

                            <h2>{info.title}</h2>
                          </div>

                          <div className="history-time">
                            <Clock size={14} />

                            {getTimeAgo(
                              activity.created_at
                            )}
                          </div>

                        </div>

                        {/* QUESTION */}

                        <div className="history-question">

                          <p className="history-field-label">
                            {text.question}
                          </p>

                          <p className="history-question-text">
                            {activity.question}
                          </p>

                        </div>

                        {/* RESPONSE BUTTON */}

                        {activity.response && (
                          <button
                            onClick={() =>
                              toggleResponse(activity.id)
                            }
                            className="history-response-button"
                          >

                            {isExpanded ? (
                              <>
                                <ChevronUp size={17} />
                                {text.hideResponse}
                              </>
                            ) : (
                              <>
                                <ChevronDown size={17} />
                                {text.viewResponse}
                              </>
                            )}

                          </button>
                        )}

                        {/* RESPONSE */}

                        {isExpanded &&
                          activity.response && (
                            <div className="history-response-box">

                              <div className="history-response-heading">

                                <div className="history-response-icon">
                                  <Sparkles size={15} />
                                </div>

                                <p>
                                  {text.aiResponse}
                                </p>

                              </div>

                              <div className="history-response-text">
                                {activity.response}
                              </div>

                            </div>
                          )}

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>
          )}

      </div>

    </div>
  );
}

export default History;