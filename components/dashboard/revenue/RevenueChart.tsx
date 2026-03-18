import React from "react";

export default function RevenueChart() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-bold">Daily Earnings Breakdown</h2>
        <div className="flex bg-gray-800 rounded-lg p-1">
          <button className="px-3 py-1 text-xs font-medium rounded text-white bg-gray-700">
            30 Days
          </button>{" "}
          <button className="px-3 py-1 text-xs font-medium rounded text-gray-400 hover:text-white">
            90 Days
          </button>{" "}
        </div>
      </div>
      <div className="h-64 flex items-center justify-center border-b border-l border-gray-800 relative">
        <p className="text-gray-600 font-medium">[ Area Chart Placeholder ]</p>
        <div className="absolute bottom-[-30px] w-full flex justify-between text-xs text-gray-500 px-4">
          <span>SEPT 01</span>
          <span>SEPT 10</span>
          <span>SEPT 20</span>
          <span>SEPT 30</span>
        </div>
      </div>
    </div>
  );
}
