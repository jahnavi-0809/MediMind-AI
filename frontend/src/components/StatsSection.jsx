import {
  Activity,
  FileText,
  Users,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

function StatsSection() {
  const stats = [
    {
      icon: Activity,
      value: "98%",
      title: "AI Accuracy",
      description: "Reliable AI-powered healthcare assistance.",
      color: "from-blue-600 to-cyan-500",
    },
    {
      icon: FileText,
      value: "10K+",
      title: "Reports Analyzed",
      description: "Medical reports explained in simple language.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      value: "5K+",
      title: "Active Users",
      description: "People using MediMind AI every month.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: ShieldCheck,
      value: "24/7",
      title: "AI Assistance",
      description: "Healthcare guidance whenever you need it.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-4">

            TRUSTED PLATFORM

          </span>

          <h2 className="text-5xl font-extrabold text-slate-800">

            Healthcare Powered by

            <span className="block text-blue-600">
              Artificial Intelligence
            </span>

          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">

            MediMind AI helps users understand their health using
            advanced artificial intelligence with a fast, secure,
            and easy-to-use experience.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >

                {/* Background */}

                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition duration-500`} />

                <div className="relative z-10">

                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-xl group-hover:rotate-6 group-hover:scale-110 transition duration-500`}
                  >
                    <Icon
                      size={38}
                      className="text-white"
                    />
                  </div>

                  <h3 className="mt-8 text-5xl font-extrabold text-slate-800">

                    {item.value}

                  </h3>

                  <h4 className="mt-4 text-xl font-bold text-slate-700">

                    {item.title}

                  </h4>

                  <p className="mt-3 text-slate-600 leading-7">

                    {item.description}

                  </p>

                  <div className="mt-6 flex items-center text-blue-600 font-semibold">

                    <TrendingUp
                      size={18}
                      className="mr-2"
                    />

                    Growing Every Day

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

export default StatsSection;