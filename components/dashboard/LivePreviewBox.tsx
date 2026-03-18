import React from "react";

export default function LivePreviewBox() {
  return (
    <div className="bg-[#0B0B0F] border border-gray-700 rounded-xl overflow-hidden flex flex-col">
      <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-[#0B0B0F]/50">
        <h2 className="font-bold text-sm">PREVIEW MODE</h2>
        <span className="bg-red-500/10 text-red-500 text-xs font-bold px-2 py-1 rounded">
          1.4K WATCHING
        </span>{" "}
      </div>
      <div className="aspect-video bg-black relative flex items-center justify-center border-b border-gray-800">
        <p className="text-gray-600 font-medium">
          [ WebRTC / OBS Output Preview ]
        </p>
      </div>
      <div className="p-4 bg-[#0B0B0F] flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Stream Status:{" "}
          <span className="text-yellow-500 font-medium">Ready</span>
        </div>
        <button className="bg-[#FF3A3A] text-white font-bold px-6 py-2 rounded-lg cursor-pointer hover:bg-[#FF2D4E] transition">
          START STREAM {/* */}
        </button>
      </div>
    </div>
  );
}
