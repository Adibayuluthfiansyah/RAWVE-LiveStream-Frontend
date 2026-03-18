import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-[#0B0B0F]/80 border-b border-gray-800/50 backdrop-blur-xl h-16">
      <div className="max-w-7xl mx-auto w-full h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-[#FF3A3A] tracking-tight z-10"
        >
          RAWVE
        </Link>

        {/* nav link */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
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

        {/* login and cta */}
        <div className="flex items-center gap-2 sm:gap-4 z-10">
          <Link
            href="/login"
            className="text-gray-300 hover:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition hidden sm:block"
          >
            Log In
          </Link>

          {/* login start stream */}
          <Link
            href="/login"
            className="bg-linear-to-r from-[#FF2D4E] to-[#FF4A3A] hover:brightness-110 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-semibold transition shadow-lg shadow-[#FF3A3A]/20"
          >
            Start Streaming
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
