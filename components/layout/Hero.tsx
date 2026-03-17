import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden bg-[#0B0B0F]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_30%,rgba(255,58,58,0.12)_0%,transparent_70%)]" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-size[:60px_60px]" />

      <div className="relative z-10 w-full text-center">
        <p className="text-[11px] font-semibold tracking-[0.25em] text-[#FF3A3A] uppercase mb-6">
          Next Generation Streaming
        </p>

        <h1 className="uppercase leading-none tracking-[0.02em] font-['inter'] text-[7.5vw] font-extrabold">
          <span className="text-white">STREAM </span>
          <span className="text-[#FF3A3A]">WITHOUT </span>
          <span className="text-white">LIMITS</span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Your Stream. Your Rules. Your Revenue. Experience the next generation
          of live content.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <Link
            href="/streaming"
            className="px-8 py-3.5 rounded-lg bg-linear-to-r from-[#FF2D4E] to-[#FF5A3A] hover:brightness-110 text-white font-bold text-sm tracking-wide shadow-[0_8px_24px_rgba(255,58,58,0.30)] transition-all duration-300 hover:scale-[1.03]"
          >
            Go Live Now
          </Link>
          <Link
            href="/browse"
            className="px-8 py-3.5 rounded-lg border border-gray-600 hover:border-gray-400 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:bg-white/5 hover:scale-[1.03]"
          >
            Explore Streams
          </Link>
        </div>
      </div>
    </section>
  );
}
