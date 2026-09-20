import { Star, BadgeCheck, Quote } from "lucide-react";

function Testimonials() {
  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Engineering Student",
      review:
        "The Medical Report Analyzer explained my blood test in simple language. It helped me understand my report without confusing medical terms.",
      avatar: "R",
    },
    {
      name: "Priya Reddy",
      role: "Software Engineer",
      review:
        "The Symptom Checker provided clear educational guidance within seconds. The interface is clean, fast, and very easy to use.",
      avatar: "P",
    },
    {
      name: "Anjali Patel",
      role: "College Student",
      review:
        "MediMind AI feels modern, professional, and easy to navigate. It makes healthcare information much easier to understand.",
      avatar: "A",
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

          <span className="inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold mb-5">
            TESTIMONIALS
          </span>

          <h2 className="text-5xl font-extrabold text-slate-800">
            Trusted by
            <span className="block text-blue-600">
              Our Users
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            See what students and professionals say about using MediMind AI
            to better understand healthcare information.
          </p>

        </div>

        {/* Testimonials */}

        <div className="grid gap-8 md:grid-cols-3 mt-20">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >

              {/* Hover Background */}

              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">

                {/* Quote Icon */}

                <Quote
                  size={42}
                  className="text-blue-200 mb-4"
                />

                {/* Stars */}

                <div className="flex gap-1 mb-6">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

                {/* Review */}

                <p className="italic text-slate-600 leading-8">

                  "{review.review}"

                </p>

                {/* User */}

                <div className="flex items-center mt-8">

                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">

                    {review.avatar}

                  </div>

                  <div className="ml-4">

                    <div className="flex items-center">

                      <h3 className="font-bold text-slate-800">

                        {review.name}

                      </h3>

                      <BadgeCheck
                        size={18}
                        className="ml-2 text-blue-600"
                      />

                    </div>

                    <p className="text-slate-500">

                      {review.role}

                    </p>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;