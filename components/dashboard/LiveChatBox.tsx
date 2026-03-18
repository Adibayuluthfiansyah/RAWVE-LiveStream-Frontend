import React from "react";

export default function LiveChatBox() {
  return (
    <div className="bg-[#0B0B0F] border border-gray-700 rounded-xl flex flex-col flex-1 min-h-100">
      <div className="p-4 border-b border-gray-800">
        <h2 className="font-bold text-sm">LIVE CHAT</h2>
      </div>

      {/* messages area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
        <div className="text-gray-400">
          <span className="text-green-500 font-bold">MOD StreamGuard:</span>{" "}
          Welcome to the stream! Keep it civil in the chat.
        </div>{" "}
        <div>
          <span className="text-blue-400 font-bold">Vortex Gamer:</span> That
          play was insane! LETS GOOOO
        </div>{" "}
        <div>
          <span className="text-purple-400 font-bold">LuckyStrike:</span> Gifted
          5 subs! 🎁
        </div>{" "}
        <div>
          <span className="text-pink-400 font-bold">Neon Knight:</span> How do
          you get that frame rate? My PC struggles lol
        </div>{" "}
        <div>
          <span className="text-yellow-400 font-bold">Synthwave_Panda:</span>{" "}
          Hype train starting! 🚂
        </div>{" "}
      </div>

      {/* chat input */}
      <div className="p-4 border-t border-gray-800 bg-[#0B0B0F]/70">
        <div className="relative">
          <input
            type="text"
            placeholder="Send a message..."
            className="w-full bg-[#0B0B0F]/70 border border-gray-700 rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:border-[#FF3A3A] transition"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white">
            🚀
          </button>
        </div>
      </div>
    </div>
  );
}
