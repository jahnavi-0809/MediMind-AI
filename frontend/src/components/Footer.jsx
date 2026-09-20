function Footer() {
  return (
    <footer className="bg-[#083E44] text-[#D9ECEE] mt-16">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* ==================================================
              BRAND
          ================================================== */}

          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-11 h-11 rounded-[13px] bg-[#0E6F78] flex items-center justify-center shadow-lg">
                <span className="text-xl">
                  🏥
                </span>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-white">
                  MediMind AI
                </h2>

                <p className="text-[9px] text-[#9FC9CC] tracking-[1px] font-semibold">
                  AI HEALTHCARE
                </p>
              </div>

            </div>

            <p className="max-w-md text-[12px] leading-7 text-[#B9D5D7]">
              AI-powered healthcare assistant that helps users understand
              symptoms, analyze medical reports, learn about medicines,
              and get educational health information.
            </p>

          </div>

          {/* ==================================================
              FEATURES
          ================================================== */}

          <div>

            <h3 className="text-sm font-extrabold text-white mb-5 uppercase tracking-[1px]">
              Features
            </h3>

            <ul className="space-y-3">

              <li className="flex items-center gap-3 text-[12px] text-[#B9D5D7]">
                <span className="w-8 h-8 rounded-lg bg-[#D9F2F4] flex items-center justify-center">
                  🩺
                </span>
                Symptom Checker
              </li>

              <li className="flex items-center gap-3 text-[12px] text-[#B9D5D7]">
                <span className="w-8 h-8 rounded-lg bg-[#F8E9B9] flex items-center justify-center">
                  📄
                </span>
                Report Analyzer
              </li>

              <li className="flex items-center gap-3 text-[12px] text-[#B9D5D7]">
                <span className="w-8 h-8 rounded-lg bg-[#D8EEE7] flex items-center justify-center">
                  💊
                </span>
                Medicine Information
              </li>

              <li className="flex items-center gap-3 text-[12px] text-[#B9D5D7]">
                <span className="w-8 h-8 rounded-lg bg-[#E1E0FF] flex items-center justify-center">
                  💬
                </span>
                AI Health Chat
              </li>

            </ul>

          </div>

          {/* ==================================================
              DISCLAIMER
          ================================================== */}

          <div>

            <div className="flex items-center gap-2 mb-5">

              <span className="w-8 h-8 rounded-lg bg-[#F6EFD2] flex items-center justify-center">
                ⚠️
              </span>

              <h3 className="text-sm font-extrabold text-white uppercase tracking-[1px]">
                Disclaimer
              </h3>

            </div>

            <div className="border border-[#2B6970] bg-[#0A5057] rounded-xl p-4">

              <p className="text-[11px] leading-6 text-[#C4DCDD]">
                This application provides educational health information
                only. Always consult a qualified healthcare professional
                for medical advice, diagnosis, or treatment.
              </p>

            </div>

          </div>

        </div>

        {/* ==================================================
            DIVIDER
        ================================================== */}

        <div className="my-9 h-px bg-[#2B6970]" />

        {/* ==================================================
            BOTTOM
        ================================================== */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

          <p className="text-[10px] text-[#8FBABD]">
            © {new Date().getFullYear()} MediMind AI. All rights reserved.
          </p>

          <p className="text-[10px] text-[#8FBABD]">
            Built with
            <span className="text-[#F2D76B] font-semibold">
              {" "}React
            </span>
            , FastAPI, Tailwind CSS & Groq AI.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;