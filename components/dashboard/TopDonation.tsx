import React from "react";

export default function TopDonation() {
  const donors = [
    { name: "CyberKage_99", amount: "$450.00", rank: 1 },
    { name: "MidnightRider", amount: "$210.00", rank: 2 },
    { name: "PixelQueen", amount: "$185.00", rank: 3 },
  ];

  return (
    <div className="bg-[#0B0B0F] border border-gray-800 rounded-xl p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-sm">TOP DONATION (LAST 24H)</h2>
        <span className="text-xs text-green-400 font-bold flex items-center gap-1">
          LIVE UPDATES
        </span>{" "}
      </div>
      <div className="space-y-3">
        {donors.map((donor, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 font-bold w-4">{donor.rank}</span>
              <span className="font-medium">{donor.name}</span>
            </div>
            <span className="text-green-400 font-bold">{donor.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
