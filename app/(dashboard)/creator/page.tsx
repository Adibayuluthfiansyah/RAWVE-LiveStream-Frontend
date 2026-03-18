import React from "react";
import CreatorSidebar from "@/components/dashboard/CreatorSidebar";
import StatCard from "@/components/dashboard/StatCard";
import LivePreviewBox from "@/components/dashboard/LivePreviewBox";
import StreamConfigForm from "@/components/dashboard/StreamConfigForm";
import LiveChatBox from "@/components/dashboard/LiveChatBox";
import TopDonation from "@/components/dashboard/TopDonation";

export default function CreatorDashboardPage() {
  const stats = [
    { title: "TODAY'S VIEWERS", value: "12,482", change: "+12.4%", isUp: true },
    { title: "TOTAL REVENUE", value: "$1,240.50", change: "+5.2%", isUp: true },
    { title: "NEW FOLLOWERS", value: "+850", change: "+18.1%", isUp: true },
    { title: "HOURS STREAMED", value: "5.5h", change: "-2.3%", isUp: false },
  ];

  return (
    <div className="flex h-screen bg-[#0B0B0F] text-white overflow-hidden">
      <CreatorSidebar />

      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        {/* header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-18 mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Alpha_Gamer</h1>{" "}
            <p className="text-gray-400 text-sm">
              Your studio is ready for broadcast
            </p>{" "}
          </div>
          <button className="bg-linear-to-r from-[#FF2D4E] to-[#FF4A3A] hover:brightness-110 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-[#FF3A3A]/20 transition flex items-center gap-2">
            ▶ Go Live {/* */}
          </button>
        </div>

        {/* stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, idx) => (
            <StatCard key={idx} {...stat} />
          ))}
        </div>

        {/* preview chat */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <LivePreviewBox />
            <StreamConfigForm />
          </div>

          {/* donation and chat */}
          <div className="space-y-6 flex flex-col">
            <TopDonation />
            <LiveChatBox />
          </div>
        </div>
      </main>
    </div>
  );
}
