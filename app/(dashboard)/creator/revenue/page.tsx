import React from "react";
import CreatorSidebar from "@/components/dashboard/CreatorSidebar";
import RevenueOverviewBox from "@/components/dashboard/revenue/RevenueOverviewBox";
import PayoutSummary from "@/components/dashboard/revenue/PayoutSummary";
import RevenueChart from "@/components/dashboard/revenue/RevenueChart";
import RevenueSources from "@/components/dashboard/revenue/RevenueSources";
import TopSupporters from "@/components/dashboard/revenue/TopSupporters";
import PayoutManagement from "@/components/dashboard/revenue/PayoutManagement";

export default function RevenuePage() {
  return (
    <div className="flex h-screen bg-[#0B0B0F] text-white overflow-hidden">
      <CreatorSidebar />

      <main className="flex-1 overflow-y-auto p-4 md:p-8">
        <h1 className="text-2xl font-bold mb-8">OVERVIEW Your Revenue</h1>{" "}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <RevenueOverviewBox />
          <PayoutSummary />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <RevenueChart />
            <RevenueSources />
          </div>

          <div className="space-y-6">
            <TopSupporters />
            <PayoutManagement />
          </div>
        </div>
      </main>
    </div>
  );
}
