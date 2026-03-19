"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/browse", label: "Discover Live" },
    { href: "/features", label: "Why RAWVE" },
    { href: "/creators", label: "For Creators" },
    { href: "/support", label: "Help Center" },
  ];

  return (
    <>
      {/* Skip Link for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#FF3A3A] focus:text-white focus:rounded-lg focus:font-semibold transition-all duration-200"
      >
        Skip to main content
      </a>

      <nav className="fixed top-0 z-50 w-full bg-[#0B0B0F]/80 border-b border-gray-800/50 backdrop-blur-xl h-16">
        <div className="max-w-7xl mx-auto w-full h-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-[#FF3A3A] tracking-tight z-10 drop-shadow-[0_0_10px_rgba(255,58,58,0.3)] hover:drop-shadow-[0_0_15px_rgba(255,58,58,0.5)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#FF3A3A] focus:ring-offset-2 focus:ring-offset-[#0B0B0F] focus:rounded-md cursor-pointer"
          >
            RAWVE
          </Link>

          {/* Desktop Nav Links */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] focus:rounded-md px-2 py-1 ${
                  pathname === link.href
                    ? "text-white font-bold"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {link.label}
                {/* Hover Underline Animation */}
                <span
                  className={`absolute bottom-[-8px] left-0 h-[2px] bg-[#FF3A3A] transition-all duration-200 ${
                    pathname === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                  style={{
                    transform:
                      pathname === link.href ? "scaleX(1)" : "scaleX(0)",
                  }}
                />
                {/* Active Page Indicator */}
                {pathname === link.href && (
                  <span className="absolute bottom-[-8px] left-0 w-full h-[2px] bg-[#FF3A3A]" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-10 p-2 text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] focus:rounded-md cursor-pointer"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Auth & CTA Buttons */}
          <div className="flex items-center gap-2 sm:gap-4 z-10">
            <Link
              href="/login"
              className="text-gray-200 hover:text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hidden sm:block focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] cursor-pointer"
            >
              Sign In
            </Link>

            {/* Primary CTA */}
            <Link
              href="/login"
              className="bg-gradient-to-r from-[#FF2D4E] to-[#FF4A3A] hover:brightness-110 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-[#FF3A3A]/30 hover:shadow-xl hover:shadow-[#FF3A3A]/50 hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#FF3A3A] focus:ring-offset-2 focus:ring-offset-[#0B0B0F] cursor-pointer"
            >
              Go Live Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0B0B0F]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className="flex flex-col items-center justify-center h-full gap-8 px-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Nav Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] focus:rounded-md px-4 py-3 ${
                pathname === link.href
                  ? "text-[#FF3A3A] drop-shadow-[0_0_15px_rgba(255,58,58,0.5)]"
                  : "text-gray-200 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Auth Link */}
          <Link
            href="/login"
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-semibold text-gray-200 hover:text-white transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-[#0B0B0F] focus:rounded-md px-4 py-3 mt-4"
          >
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
