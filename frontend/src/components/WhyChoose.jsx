import {
  Brain,
  Clock3,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";

function WhyChoose() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description:
        "Advanced Generative AI explains symptoms, medical reports, and medicines in clear, easy-to-understand language.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: Clock3,
      title: "Instant Analysis",
      description:
        "Receive AI-generated healthcare insights within seconds without complicated medical terminology.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: ShieldCheck,
      title: "Privacy First",
      description:
        "Your medical information is handled securely with a strong focus on privacy and data protection.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HeartHandshake,
      title: "Easy for Everyone",
      description:
        "Designed for students, patients, and families with simple explanations anyone can understand.",
      color: "from-orange-500 to-red-500",
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

          <span className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-5">
            WHY CHOOSE US
          </span>

          <h2 className="text-5xl font-extrabold text-slate-800 leading-tight">
            Smart Healthcare
            <span className="block text-blue-600">
              Built for Everyone
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            MediMind AI combines modern artificial intelligence with an
            intuitive experience, making healthcare information more
            accessible, understandable, and available whenever you need it.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-20">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >

                {/* Hover Gradient */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition duration-500`}
                />

                <div className="relative z-10">

                  {/* Icon */}

                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon size={38} className="text-white" />
                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-bold text-slate-800">
                    {feature.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-slate-600 leading-8">
                    {feature.description}
                  </p>

                  {/* Footer */}

                  <div className="mt-8 flex items-center text-blue-600 font-semibold">

                    <CheckCircle2
                      size={20}
                      className="mr-2"
                    />

                    Trusted Healthcare AI

                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;