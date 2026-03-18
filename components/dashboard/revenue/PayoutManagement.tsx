import React from "react";

export default function PayoutManagement() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="font-bold mb-4">Payout Management</h2>
      <div className="p-4 border border-gray-700 rounded-lg bg-gray-800/50 mb-4 flex justify-between items-center">
        <div>
          <div className="font-bold text-sm">Stripe Connected</div> {/* */}
          <div className="text-xs text-gray-400">
            Bank Account **** 4242
          </div>{" "}
        </div>
        <span className="text-green-500 text-xl">✓</span>
      </div>
      <button className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition mb-6">
        Request Payout
      </button>
      <div>
        <h3 className="text-xs font-bold text-gray-500 mb-3">RECENT HISTORY</h3>{" "}
        <div className="flex justify-between text-sm">
          <div>
            <div className="font-medium text-gray-300">Sept 15, 2023</div>{" "}
            <div className="text-xs text-gray-500">
              Reference #RAW-492...
            </div>{" "}
          </div>
          <div className="font-bold text-green-400">$142,800.00</div>
        </div>
      </div>
    </div>
  );
}
