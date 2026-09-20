import { HeartPulse, Sparkles, ShieldCheck } from "lucide-react";

function SplashScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden bg-[#083E44] text-white">

      {/* Background decoration */}

      <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5 -top-56 -right-40" />

      <div className="absolute w-[420px] h-[420px] rounded-full border border-[#C9A227]/10 -bottom-48 -left-32" />

      <div className="absolute w-[260px] h-[260px] rounded-full bg-[#0E6F78]/30 blur-3xl" />

      {/* Logo */}

      <div className="relative flex items-center justify-center">

        <div className="absolute w-32 h-32 rounded-full bg-[#C9A227]/10 blur-xl" />

        <div className="relative w-24 h-24 rounded-[28px] bg-gradient-to-br from-[#0E6F78] to-[#0A5961] border border-white/10 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.25)]">

          <HeartPulse
            size={54}
            strokeWidth={1.7}
            className="text-white animate-pulse"
          />

        </div>

      </div>

      {/* Brand */}

      <div className="relative text-center mt-7">

        <div className="flex items-center justify-center gap-2 mb-2">

          <Sparkles
            size={14}
            className="text-[#F2D76B]"
          />

          <span className="text-[10px] font-bold tracking-[2px] text-[#B9DFE2]">
            AI HEALTHCARE
          </span>

          <Sparkles
            size={14}
            className="text-[#F2D76B]"
          />

        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          MediMind <span className="text-[#F2D76B]">AI</span>
        </h1>

        <p className="mt-3 text-sm text-[#B9D5D7]">
          Loading your intelligent healthcare assistant...
        </p>

      </div>

      {/* Loading */}

      <div className="relative mt-9 w-60 sm:w-72">

        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">

          <div className="h-full rounded-full bg-gradient-to-r from-[#0E6F78] via-[#D9ECEE] to-[#C9A227] animate-[loading_2s_linear_forwards]" />

        </div>

        <div className="flex items-center justify-center gap-2 mt-4">

          <ShieldCheck
            size={13}
            className="text-[#8FC7CC]"
          />

          <span className="text-[9px] font-semibold tracking-wide text-[#8FBABD]">
            Secure • Intelligent • Educational
          </span>

        </div>

      </div>

    </div>
  );
}

export default SplashScreen;