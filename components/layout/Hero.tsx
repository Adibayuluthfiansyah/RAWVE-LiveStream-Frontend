import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden bg-[#0B0B0F]">
      {/* Enhanced radial gradient - more vibrant */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_55%_at_50%_30%,rgba(255,58,58,0.18)_0%,transparent_70%)]" />

      {/* Subtle animated grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:60px_60px] motion-reduce:opacity-[0.02]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-12">
        {/* Eyebrow */}
        <p className="text-[11px] font-semibold tracking-[0.25em] text-[#FF3A3A] uppercase animate-pulse motion-reduce:animate-none">
          Next Generation Streaming
        </p>

        {/* Headline - Enhanced with glow effect */}
        <h1 className="uppercase leading-none tracking-[0.02em] font-['inter'] text-5xl md:text-6xl lg:text-7xl font-extrabold">
          <span className="text-white">GO LIVE. </span>
          <span className="text-[#FF3A3A] drop-shadow-[0_0_30px_rgba(255,58,58,0.5)]">KEEP MORE. </span>
          <span className="text-white">GROW FASTER.</span>
        </h1>

        {/* Sub-headline - Improved contrast & specificity */}
        <p className="mt-8 text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
          Zero platform fees. Ultra-low latency streaming. Dark mode for late-night creators. Start earning from your first viewer.
        </p>

        {/* CTA buttons - Enhanced interaction states */}
        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Link
            href="/streaming"
            className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#FF2D4E] to-[#FF5A3A] text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-2xl shadow-[#FF3A3A]/30 hover:shadow-[#FF3A3A]/50 transition-all duration-200 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FF3A3A] focus:ring-offset-2 focus:ring-offset-[#0B0B0F] cursor-pointer"
          >
            Start Streaming Free
          </Link>
          <Link
            href="/browse"
            className="px-8 py-4 rounded-lg border-2 border-gray-600 hover:border-[#FF3A3A] text-white font-bold text-sm tracking-wide transition-all duration-200 hover:bg-white/10 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] cursor-pointer"
          >
            Watch Live Now
          </Link>
        </div>
      </div>
    </section>
  );
}
