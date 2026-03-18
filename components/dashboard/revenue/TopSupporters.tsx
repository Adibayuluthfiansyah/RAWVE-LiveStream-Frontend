import React from "react";

export default function TopSupporters() {
  const supporters = [
    { name: "PixelMaster_99", total: "$2,450.00", last: "2 hours ago" },
    { name: "NebulaQueen", total: "$1,820.00", last: "Yesterday" },
    { name: "GhostFrame", total: "$950.00", last: "3 days ago" },
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="font-bold mb-4">Top Supporters</h2> {/* */}
      <div className="space-y-4">
        <div className="flex justify-between text-xs font-bold text-gray-500 pb-2 border-b border-gray-800">
          <span>CREATOR</span> {/* */}
          <div className="flex gap-8 text-right">
            <span className="w-20">TOTAL</span>
            <span className="w-20">LAST DONATION</span>
          </div>
        </div>
        {supporters.map((user, idx) => (
          <div key={idx} className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center font-bold">
                {user.name.charAt(0)}
              </div>
              <span className="font-medium text-gray-300">{user.name}</span>
            </div>
            <div className="flex gap-8 text-right">
              <span className="w-20 font-bold text-green-400">
                {user.total}
              </span>
              <span className="w-20 text-gray-500">{user.last}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
