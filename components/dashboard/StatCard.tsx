import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isUp: boolean;
}

export default function StatCard({
  title,
  value,
  change,
  isUp,
}: StatCardProps) {
  return (
    <div className="bg-[#0B0B0F]  border border-gray-800 p-5 rounded-xl">
      <h3 className="text-xs font-bold text-gray-500 mb-2">{title}</h3>
      <div className="flex items-end gap-3">
        <span className="text-2xl font-bold">{value}</span>
        <span
          className={`text-sm font-medium mb-1 ${isUp ? "text-green-500" : "text-red-500"}`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
