import React from "react";

export default function PayoutSummary() {
  return (
    <div className="space-y-4">
      <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400 font-bold">
            PENDING PAYOUT
          </span>{" "}
          <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-0.5 rounded">
            On Hold
          </span>{" "}
        </div>
        <div className="text-2xl font-bold">$12,450.00</div> {/* */}
      </div>
      <div className="bg-gray-900 border border-gray-800 p-5 rounded-xl">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-400 font-bold">LAST PAYOUT</span>{" "}
          <span className="text-xs text-gray-500">Sept 15</span> {/* */}
        </div>
        <div className="text-2xl font-bold">$142,800.00</div> {/* */}
      </div>
    </div>
  );
}
