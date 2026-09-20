import {
  UploadCloud,
  BrainCircuit,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UploadCloud,
      title: "Upload Your Information",
      description:
        "Upload your medical report or describe your symptoms securely. Your data is processed with privacy in mind.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      number: "02",
      icon: BrainCircuit,
      title: "AI Analysis",
      description:
        "MediMind AI analyzes your input using advanced AI models and converts complex medical information into simple explanations.",
      color: "from-purple-600 to-pink-500",
    },
    {
      number: "03",
      icon: BadgeCheck,
      title: "Receive Easy-to-Understand Results",
      description:
        "View clear healthcare insights that help you better understand symptoms, reports, and medicines.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold mb-5">
            HOW IT WORKS
          </span>

          <h2 className="text-5xl font-extrabold text-slate-800">
            Get AI Healthcare
            <span className="block text-blue-600">
              in Three Simple Steps
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            MediMind AI makes understanding healthcare simple, fast, and
            accessible. Just follow these three easy steps.
          </p>

        </div>

        {/* Steps */}

        <div className="relative mt-20">

          {/* Desktop Connecting Line */}

          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200"></div>

          <div className="grid gap-10 lg:grid-cols-3 relative">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-3xl border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8"
                >

                  {/* Step Number */}

                  <div className="absolute top-6 right-6 text-5xl font-black text-slate-100 group-hover:text-blue-100 transition">
                    {step.number}
                  </div>

                  {/* Icon */}

                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon size={38} className="text-white" />
                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-bold text-slate-800">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-slate-600 leading-8">
                    {step.description}
                  </p>

                  {/* Footer */}

                  <div className="mt-8 flex items-center text-blue-600 font-semibold">

                    Continue

                    <ArrowRight
                      size={18}
                      className="ml-2 group-hover:translate-x-2 transition"
                    />

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;