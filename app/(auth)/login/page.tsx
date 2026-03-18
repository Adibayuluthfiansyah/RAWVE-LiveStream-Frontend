import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4">
      <div className="w-full max-w-md bg-[#1C1C28] border border-[#FF2D4E]/20 rounded-2xl p-8 shadow-xl">
        {/* header */}
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-2">RAWVE</h1>
          <p className="text-gray-400 text-sm text-center">
            Your Stream. Your Rules. Your Revenue.
          </p>
        </div>

        {/* auth buttons */}
        <div className="space-y-3 mb-6">
          <Link
            href="/onboarding/profile"
            className="w-full flex items-center justify-center gap-3 bg-[#2D2D3D] text-white border-[#FFFFFF]/20 font-semibold py-2.5 rounded-lg hover:bg-[#2D2D3D]/50 transition"
          >
            <span className="text-xl">G</span>
            Continue with Google
          </Link>

          <Link
            href="/onboarding/profile"
            className="w-full flex items-center justify-center gap-3 bg-[#2D2D3D] text-white border-[#FFFFFF]/20 font-semibold py-2.5 rounded-lg hover:bg-[#2D2D3D]/50 transition"
          >
            <span className="text-xl">👾</span>
            Continue with Discord
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-gray-800"></div>
          <span className="text-gray-500 text-sm font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-800"></div>
        </div>

        {/* email form */}
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FF2D4E]/20 focus:border-transparent transition"
            />
          </div>
          <button
            type="button"
            className="w-full bg-linear-to-r from-[#FF2D4E] to-[#FF4A3A]  text-white font-bold py-3 rounded-lg cursor-pointer hover:bg-red-600 transition"
          >
            Continue with Email
          </button>
        </form>

        {/* footer */}
        <div className="mt-6 text-center text-sm text-gray-400 space-y-2">
          <p>
            {`Don't have an account? `}
            <Link
              href="/signup"
              className="text-[#FF2D4E] hover:text-purple-300 font-medium"
            >
              Sign up
            </Link>
          </p>
          <p className="text-xs text-gray-500">
            By continuing you agree to our{" "}
            <Link href="/terms" className="underline hover:text-gray-300">
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link href="/privacy" className="underline hover:text-gray-300">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
