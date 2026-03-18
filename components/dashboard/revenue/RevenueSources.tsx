import React from "react";

export default function RevenueSources() {
  const sources = [
    { name: "Donations", amount: "$5,602.50", percentage: "45%" },
    { name: "Subscriptions", amount: "$3,735.00", percentage: "30%" },
    { name: "Tips", amount: "$1,867.50", percentage: "15%" },
    { name: "Ad Share", amount: "$1,245.00", percentage: "10%" },
  ];

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h2 className="font-bold mb-4">Revenue Sources</h2>
      <div className="space-y-3">
        {sources.map((source, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg transition border border-transparent hover:border-gray-700"
          >
            <span className="font-medium">{source.name}</span>
            <span className="font-bold text-gray-300">
              {source.amount}{" "}
              <span className="text-gray-500 font-normal">
                ({source.percentage})
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
