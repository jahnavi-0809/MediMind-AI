import {
  Droplets,
  Apple,
  Dumbbell,
  Moon,
  Sparkles,
} from "lucide-react";

function HealthTips() {
  const tips = [
    {
      icon: Droplets,
      title: "Stay Hydrated",
      description:
        "Drink 2–3 liters of water every day to keep your body hydrated, improve concentration, and support overall health.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Apple,
      title: "Eat Nutritious Food",
      description:
        "Include fresh fruits, vegetables, whole grains, and protein-rich foods to maintain a balanced diet.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Dumbbell,
      title: "Exercise Regularly",
      description:
        "Spend at least 30 minutes each day walking, stretching, or exercising to improve physical and mental wellness.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Moon,
      title: "Sleep Better",
      description:
        "Aim for 7–8 hours of quality sleep every night to help your body recover and stay energized.",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      data-aos="fade-up"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-5">
            <Sparkles size={18} />
            HEALTHY LIFESTYLE
          </span>

          <h2 className="text-5xl font-extrabold text-slate-800">
            Daily Health Tips
            <span className="block text-green-600">
              for a Better Life
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Healthy habits don't have to be complicated. Small daily improvements
            can make a big difference to your physical and mental well-being.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-20">

          {tips.map((tip, index) => {
            const Icon = tip.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
              >

                {/* Hover Background */}

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tip.color} opacity-0 group-hover:opacity-10 transition duration-500`}
                />

                <div className="relative z-10">

                  {/* Icon */}

                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${tip.color} flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <Icon
                      size={38}
                      className="text-white"
                    />
                  </div>

                  {/* Title */}

                  <h3 className="mt-8 text-2xl font-bold text-slate-800">
                    {tip.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-slate-600 leading-8">
                    {tip.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default HealthTips;