import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0B0B0F]/80 border-b border-gray-800/50 backdrop-blur-xl px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-12 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#FF3A3A] tracking-tight"
        >
          RAWVE
        </Link>

        {/* Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 text-sm font-medium  text-gray-300">
          <Link href="/browse" className="hover:text-white transition">
            Browse
          </Link>
          <Link href="/features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="/creators" className="hover:text-white transition">
            Creators
          </Link>
          <Link href="/support" className="hover:text-white transition">
            Support
          </Link>
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <Link
          href="/streaming"
          className="bg-linear-to-r from-[#FF2D4E] to-[#FF4A3A] hover:brightness-110 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition shadow-lg shadow-[#FF3A3A]/20"
        >
          Start Streaming
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
