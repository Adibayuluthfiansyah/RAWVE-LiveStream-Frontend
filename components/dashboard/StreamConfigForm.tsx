import React from "react";

export default function StreamConfigForm() {
  return (
    <div className="bg-[#0B0B0F] border border-gray-800 rounded-xl p-6">
      <h2 className="font-bold text-sm mb-4">STREAM CONFIGURATION</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">
            STREAM TITLE
          </label>{" "}
          {/* */}
          <input
            type="text"
            defaultValue="RANKED CLIMB | 500 FPS UNLOCKED | SUB GOAL 10/50"
            className="w-full bg-[#0B0B0F] border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#FF3A3A]"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 mb-1">
            CATEGORY
          </label>{" "}
          {/* */}
          <select className="w-full bg-[#0B0B0F] border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#FF3A3A] appearance-none">
            <option>Cyber-Sports / Arena</option> {/* */}
            <option>Just Chatting</option>
          </select>
        </div>
      </div>
    </div>
  );
}
