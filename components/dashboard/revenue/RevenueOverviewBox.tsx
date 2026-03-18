import React from "react";

export default function RevenueOverviewBox() {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-[#1a1025] border border-gray-800 p-6 rounded-xl col-span-1 lg:col-span-2 flex flex-col justify-center">
      <h2 className="text-gray-400 text-sm font-bold mb-2">
        {`This Month's Earnings`}
      </h2>{" "}
      <div className="text-5xl font-bold mb-4">$12,450.00</div> {/* */}
      <div className="flex gap-6">
        <div>
          <span className="text-xs text-gray-500 block mb-1">THIS MONTH</span>{" "}
          <span className="text-green-500 font-bold text-sm">+12.5%</span>{" "}
        </div>
        <div>
          <span className="text-xs text-gray-500 block mb-1">ALL TIME</span>{" "}
          <span className="text-green-500 font-bold text-sm">+8.2%</span>{" "}
        </div>
      </div>
    </div>
  );
}
