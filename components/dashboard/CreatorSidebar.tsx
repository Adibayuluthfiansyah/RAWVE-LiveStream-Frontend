import React from "react";
import Link from "next/link";

export default function CreatorSidebar() {
  return (
    <aside className="w-64 bg-[#0B0B0F] border-r border-[#FF3A3A]/20 flex pt-18 flex-col lg:flex">
      <div className="p-6 border-b border-gray-800">
        <Link
          href="/"
          className="text-2xl font-bold text-[#FF3A3A] tracking-tight"
        >
          RAWVE
        </Link>
      </div>

      <div className="flex-1 py-6 px-4 space-y-2">
        <div className="text-xs font-bold text-gray-500 mb-4 px-2">
          CREATOR STUDIO
        </div>
        <Link
          href="/creator"
          className="flex items-center gap-3 px-3 py-2 bg-gray-800 text-white rounded-lg font-medium transition"
        >
          Home
        </Link>
        <Link
          href="/creator/stream"
          className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg font-medium transition"
        >
          Go Live
        </Link>
        <Link
          href="/creator/analytics"
          className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg font-medium transition"
        >
          Analytics
        </Link>
        <Link
          href="/creator/revenue"
          className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg font-medium transition"
        >
          Revenue
        </Link>
        <Link
          href="/creator/settings"
          className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg font-medium transition"
        >
          Settings
        </Link>
      </div>

      <div className="p-4 border-t border-gray-800 flex items-center gap-3">
        <div className="w-10 h-10 bg-[#FF3A3A] rounded-full"></div>
        <div>
          <div className="text-sm font-bold">Alpha_Gamer</div> {/* */}
          <div className="text-xs text-[#FF3A3A] font-semibold">
            PRO CREATOR
          </div>{" "}
          {/* */}
        </div>
      </div>
    </aside>
  );
}
