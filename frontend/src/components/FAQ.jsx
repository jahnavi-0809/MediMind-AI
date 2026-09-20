import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
} from "lucide-react";

function FAQ() {
  const faqs = [
    {
      question: "Is MediMind AI free to use?",
      answer:
        "Yes. MediMind AI is currently designed for educational, learning, and demonstration purposes. You can explore all major AI-powered healthcare features without cost.",
    },
    {
      question: "Can MediMind AI replace a doctor?",
      answer:
        "No. MediMind AI is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical concerns.",
    },
    {
      question: "Is my medical report secure?",
      answer:
        "Yes. Your uploaded reports are processed only for AI analysis. For privacy, avoid uploading highly sensitive personal information while using demo environments.",
    },
    {
      question: "What features does MediMind AI provide?",
      answer:
        "MediMind AI includes an AI Symptom Checker, Medical Report Analyzer, Medicine Information Assistant, and an AI Health Chat for educational healthcare guidance.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      data-aos="fade-up"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold mb-5">
            <HelpCircle size={18} />
            FAQ
          </span>

          <h2 className="text-5xl font-extrabold text-slate-800">
            Frequently Asked
            <span className="block text-blue-600">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Find answers to the most common questions about MediMind AI,
            its features, privacy, and how it can assist you.
          </p>

        </div>

        {/* FAQ List */}

        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >

                <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-blue-600 transition">
                  {faq.question}
                </h3>

                <div className="ml-6 flex-shrink-0">

                  {openIndex === index ? (
                    <ChevronUp
                      size={26}
                      className="text-blue-600"
                    />
                  ) : (
                    <ChevronDown
                      size={26}
                      className="text-slate-500"
                    />
                  )}

                </div>

              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 text-slate-600 leading-8">
                  {faq.answer}
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;