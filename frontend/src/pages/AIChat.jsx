import { useEffect, useRef, useState } from "react";
import {
  Send,
  Bot,
  User,
  Trash2,
  Copy,
  Loader2,
  Keyboard,
  Sparkles,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { toast } from "react-toastify";
import api from "../services/api";
import { useLanguage } from "../context/LanguageContext";
import TeluguKeyboard from "../components/TeluguKeyboard";

function AIChat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);

  const bottomRef = useRef(null);

  const { language } = useLanguage();

  const content = {
    en: {
      title: "MediMind AI Chat",
      subtitle: "Your intelligent healthcare assistant",
      clear: "Clear",
      welcome: "Welcome to MediMind AI",
      welcomeText:
        "Ask a healthcare-related question and get clear, educational information.",
      you: "You",
      ai: "MediMind AI",
      thinking: "MediMind AI is thinking...",
      placeholder: "Ask anything about healthcare...",
      send: "Send",
      keyboardOpen: "Open Telugu Keyboard",
      keyboardClose: "Close Telugu Keyboard",
      enterText: "Press",
      enter: "Enter",
      sendText: "to send",
      shiftEnter: "Shift + Enter",
      newLine: "for a new line",
      questionWarning: "Please enter a healthcare question.",
      failed: "Failed to get AI response.",
      errorMessage:
        "Sorry, something went wrong. Please try again.",
      cleared: "Chat cleared.",
      copied: "Copied!",
    },

    te: {
      title: "MediMind AI చాట్",
      subtitle: "మీ తెలివైన ఆరోగ్య సహాయకుడు",
      clear: "క్లియర్",
      welcome: "MediMind AI కి స్వాగతం",
      welcomeText:
        "మీ ఆరోగ్యానికి సంబంధించిన ప్రశ్నను అడిగి సులభమైన సమాచారాన్ని పొందండి.",
      you: "మీరు",
      ai: "MediMind AI",
      thinking: "MediMind AI ఆలోచిస్తోంది...",
      placeholder: "మీ ఆరోగ్య ప్రశ్నను ఇక్కడ టైప్ చేయండి...",
      send: "పంపండి",
      keyboardOpen: "తెలుగు కీబోర్డ్ తెరవండి",
      keyboardClose: "తెలుగు కీబోర్డ్ మూసివేయండి",
      enterText: "పంపడానికి",
      enter: "Enter",
      sendText: "నొక్కండి",
      shiftEnter: "Shift + Enter",
      newLine: "కొత్త లైన్ కోసం",
      questionWarning:
        "దయచేసి ఆరోగ్యానికి సంబంధించిన ప్రశ్నను నమోదు చేయండి.",
      failed: "AI సమాధానం పొందడం విఫలమైంది.",
      errorMessage:
        "క్షమించండి, ఏదో సమస్య ఏర్పడింది. దయచేసి మళ్లీ ప్రయత్నించండి.",
      cleared: "చాట్ క్లియర్ చేయబడింది.",
      copied: "కాపీ చేయబడింది!",
    },
  };

  const text = content[language];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleKeyboardInput = (character) => {
    setMessage((previous) => previous + character);
  };

  const handleBackspace = () => {
    setMessage((previous) => previous.slice(0, -1));
  };

  const handleSpace = () => {
    setMessage((previous) => previous + " ");
  };

  const handleClearInput = () => {
    setMessage("");
  };

  const sendMessage = async () => {
    if (!message.trim()) {
      toast.warning(text.questionWarning);
      return;
    }

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    const question = message;
    setMessage("");
    setLoading(true);

    try {
      const languageInstruction =
        language === "te"
          ? `
Respond completely in Telugu language.
Use simple Telugu that elderly users can easily understand.
Keep medical terms understandable.
`
          : `
Respond completely in English.
Use simple and easy-to-understand language.
`;

      const response = await api.get("/ask", {
        params: {
          question: `
User's healthcare question:
${question}

${languageInstruction}

Provide educational health information only.
Do not provide a final diagnosis.
Do not prescribe medicines or dosages.
If emergency symptoms are mentioned, advise the user
to seek immediate medical attention.
          `,
        },
      });

      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: response.data.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      toast.error(text.failed);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: text.errorMessage,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setMessage("");
    toast.info(text.cleared);
  };

  const copyMessage = async (messageText) => {
    try {
      await navigator.clipboard.writeText(messageText);
      toast.success(text.copied);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F1] py-6 px-4 sm:py-8">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden border border-[#E2DED4] shadow-[0_18px_45px_rgba(28,26,22,0.09)]">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="relative overflow-hidden bg-gradient-to-r from-[#083E44] via-[#0E6F78] to-[#2B858C] text-white px-6 py-6 sm:px-8">

          <div className="absolute -right-16 -top-24 w-64 h-64 rounded-full border border-white/10" />

          <div className="relative z-10 flex items-center justify-between gap-4">

            <div className="flex items-center gap-4">

              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">

                <Bot size={32} />

              </div>

              <div>

                <div className="flex items-center gap-2">

                  <h1 className="text-xl sm:text-2xl font-extrabold">
                    {text.title}
                  </h1>

                  <Sparkles
                    size={16}
                    className="text-[#C9A227]"
                  />

                </div>

                <p className="text-sm text-[#D9ECEE] mt-1">
                  {text.subtitle}
                </p>

              </div>

            </div>

            <button
              onClick={clearChat}
              className="shrink-0 bg-white/10 hover:bg-[#B42318] border border-white/20 px-3 sm:px-4 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold transition"
            >

              <Trash2 size={17} />

              <span className="hidden sm:inline">
                {text.clear}
              </span>

            </button>

          </div>

        </div>

        {/* =====================================================
            CHAT AREA
        ===================================================== */}

        <div className="h-[520px] overflow-y-auto bg-[#F7F8F6] p-5 sm:p-7 space-y-6">

          {/* Welcome */}

          {messages.length === 0 && !loading && (

            <div className="text-center mt-20 sm:mt-24">

              <div className="mx-auto w-20 h-20 rounded-3xl bg-[#E5F2F3] text-[#0E6F78] flex items-center justify-center shadow-sm">

                <MessageCircle size={38} />

              </div>

              <h2 className="text-2xl font-extrabold text-[#083E44] mt-5 mb-2">
                {text.welcome}
              </h2>

              <p className="text-sm text-[#706A64] max-w-md mx-auto leading-6">
                {text.welcomeText}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D8E7E5] bg-white px-4 py-2 text-xs font-semibold text-[#55706E]">

                <ShieldCheck
                  size={15}
                  className="text-[#1F7A4C]"
                />

                Educational information only

              </div>

            </div>

          )}

          {/* Messages */}

          {messages.map((msg) => (

            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "user"
                  ? "justify-end"
                  : "justify-start"
              }`}
            >

              {/* AI Icon */}

              {msg.sender === "ai" && (

                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#0E6F78] text-white flex items-center justify-center mr-3 shadow-sm">

                  <Bot size={20} />

                </div>

              )}

              {/* Message */}

              <div
                className={`max-w-[85%] sm:max-w-3xl rounded-2xl px-5 py-4 shadow-sm ${
                  msg.sender === "user"
                    ? "bg-[#0E6F78] text-white rounded-br-md"
                    : "bg-white text-[#55504A] border border-[#E2DED4] rounded-bl-md"
                }`}
              >

                <div className="flex justify-between items-center gap-5 mb-2">

                  <strong
                    className={`text-xs ${
                      msg.sender === "user"
                        ? "text-[#D9ECEE]"
                        : "text-[#0E6F78]"
                    }`}
                  >
                    {msg.sender === "user"
                      ? text.you
                      : text.ai}
                  </strong>

                  {msg.sender === "ai" && (

                    <button
                      onClick={() => copyMessage(msg.text)}
                      className="text-[#7A736B] hover:text-[#0E6F78] transition"
                      title={text.copied}
                    >
                      <Copy size={16} />
                    </button>

                  )}

                </div>

                <p className="whitespace-pre-wrap leading-7 text-sm">
                  {msg.text}
                </p>

              </div>

              {/* User Icon */}

              {msg.sender === "user" && (

                <div className="w-10 h-10 shrink-0 rounded-xl bg-[#C9A227] text-white flex items-center justify-center ml-3 shadow-sm">

                  <User size={20} />

                </div>

              )}

            </div>

          ))}

          {/* Loading */}

          {loading && (

            <div className="flex items-center">

              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#0E6F78] text-white flex items-center justify-center mr-3">

                <Bot size={20} />

              </div>

              <div className="bg-white border border-[#E2DED4] rounded-2xl rounded-bl-md px-5 py-4 shadow-sm flex items-center gap-3">

                <Loader2
                  size={20}
                  className="animate-spin text-[#0E6F78]"
                />

                <span className="text-sm font-semibold text-[#55504A]">
                  {text.thinking}
                </span>

              </div>

            </div>

          )}

          <div ref={bottomRef} />

        </div>

        {/* =====================================================
            INPUT SECTION
        ===================================================== */}

        <div className="border-t border-[#E2DED4] bg-white p-5 sm:p-6">

          <div className="flex gap-3">

            <textarea
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={text.placeholder}
              className="flex-1 border border-[#D3CEC2] bg-[#FCFBF8] rounded-2xl p-4 resize-none text-[#1C1A16] placeholder:text-[#8A837B] focus:border-[#0E6F78] focus:ring-2 focus:ring-[#0E6F78]/15 outline-none transition"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-[#0E6F78] hover:bg-[#083E44] disabled:bg-[#A8B5B5] text-white rounded-2xl px-5 sm:px-7 flex flex-col items-center justify-center gap-2 font-bold transition shadow-sm hover:shadow-md"
            >

              <Send size={21} />

              <span className="hidden sm:inline text-sm">
                {text.send}
              </span>

            </button>

          </div>

          {/* Telugu Keyboard */}

          {language === "te" && (

            <button
              type="button"
              onClick={() => setShowKeyboard(!showKeyboard)}
              className="mt-3 flex items-center gap-2 px-4 py-2.5 bg-[#E5F2F3] text-[#083E44] border border-[#BFDDE0] rounded-xl font-semibold hover:bg-[#D9ECEE] transition"
            >

              <Keyboard size={18} />

              {showKeyboard
                ? text.keyboardClose
                : text.keyboardOpen}

            </button>

          )}

          {language === "te" && showKeyboard && (

            <div className="mt-3">

              <TeluguKeyboard
                onKeyPress={handleKeyboardInput}
                onBackspace={handleBackspace}
                onSpace={handleSpace}
                onClear={handleClearInput}
              />

            </div>

          )}

          <div className="mt-3 flex items-center gap-2 text-xs text-[#8A837B]">

            <span>
              {text.enterText}{" "}
              <b className="text-[#55504A]">
                {text.enter}
              </b>{" "}
              {text.sendText}
            </span>

            <span>•</span>

            <span>
              <b className="text-[#55504A]">
                {text.shiftEnter}
              </b>{" "}
              {text.newLine}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AIChat;