import React from "react";
import Link from "next/link";

export default function ProfileSetupPage() {
  const categories = [
    "Gamer",
    "Musician",
    "Educator",
    "Just Watching",
    "Artist",
    "Lifestyle",
  ];

  return (
    <div className="min-h-screen bg-gray-950 flex justify-center py-22 px-4 sm:px-6">
      <div className="w-full max-w-2xl bg-gray-900 border border-[#EC5B13]/20 rounded-2xl p-8">
        {/* tracker */}
        <div className="mb-8">
          <div className="flex justify-between text-xs font-bold text-gray-400 mb-2">
            <span>STEP 1 OF 2</span> {/* */}
            <span className="text-[#EC5B13]">50% Complete</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-[#EC5B13] h-2 rounded-full w-1/2"></div>
          </div>
        </div>

        {/* header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Build Your Identity
          </h1>{" "}
          <p className="text-gray-400">
            Tell the RAWVE community who you are. This can be changed later.
          </p>{" "}
        </div>

        <form className="space-y-6">
          {/* avatar & username */}
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 bg-gray-800 rounded-full border border-dashed border-gray-600 flex flex-col items-center justify-center cursor-pointer hover:border-[#EC5B13] hover:bg-gray-750 transition">
                <span className="text-2xl">📸</span>
              </div>
              <span className="text-xs text-gray-400 font-medium">
                UPLOAD AVATAR
              </span>{" "}
            </div>

            <div className="flex-1 space-y-4 w-full">
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-1">
                  USERNAME
                </label>{" "}
                <input
                  type="text"
                  defaultValue="clerk_user_123" //
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#EC5B13]"
                />
                <p className="text-xs text-gray-500 mt-1">
                  @rawve.live/clerk_user_123
                </p>{" "}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-300 mb-1">
                  DISPLAY NAME
                </label>{" "}
                <input
                  type="text"
                  placeholder="e.g. Neon Striker"
                  className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#EC5B13]"
                />
              </div>
            </div>
          </div>

          {/* bio */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-1">
              BIO
            </label>{" "}
            <textarea
              rows={3}
              placeholder="Tell everyone what you are about..."
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-[#EC5B13] resize-none"
            ></textarea>
          </div>

          {/* categories */}
          <div>
            <label className="block text-sm font-bold text-gray-300 mb-2">
              {`Tell us what you'll be streaming...`}
            </label>{" "}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm hover:bg-[#EC5B13] hover:text-white hover:border-[#EC5B13] transition"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/home"
              className="w-full sm:w-auto text-center bg-linear-to-r from-[#FF2D4E] to-[#FF4A3A] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#d44a0f] transition"
            >
              Complete Setup & Enter RAWVE
            </Link>

            <Link
              href="/browse"
              className="text-sm font-medium text-gray-400 hover:text-[#EC5B13] transition"
            >
              Skip for now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
