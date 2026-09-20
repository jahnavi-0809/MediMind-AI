import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
  link,
}) {
  return (
    <Link to={link} className="group block h-full">

      <div
        className="
          relative
          h-full
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-lg
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
          hover:border-blue-200
        "
      >

        {/* Gradient Background */}

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-blue-50
            via-white
            to-cyan-50
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
          "
        />

        <div className="relative z-10">

          {/* Icon */}

          <div
            className="
              w-20
              h-20
              rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              flex
              items-center
              justify-center
              shadow-xl
              group-hover:scale-110
              group-hover:rotate-6
              transition-all
              duration-500
            "
          >
            <Icon
              size={38}
              className="text-white"
            />
          </div>

          {/* Title */}

          <h2 className="mt-8 text-2xl font-bold text-slate-800 group-hover:text-blue-700 transition">

            {title}

          </h2>

          {/* Description */}

          <p className="mt-4 text-slate-600 leading-8">

            {description}

          </p>

          {/* Footer */}

          <div className="mt-8 flex items-center text-blue-600 font-semibold">

            Explore Feature

            <ArrowRight
              size={20}
              className="
                ml-2
                group-hover:translate-x-2
                transition
              "
            />

          </div>

        </div>

      </div>

    </Link>
  );
}

export default FeatureCard;