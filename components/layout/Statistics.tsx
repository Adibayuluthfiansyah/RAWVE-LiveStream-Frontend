export default function Statistics() {
  return (
    <section className="relative py-20 px-6 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Active Streamers */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
              12,842
            </h3>
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
              Active Streamers
            </p>
          </div>

          {/* Live Viewers */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">
              1.2M+
            </h3>
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
              Live Viewers
            </p>
          </div>

          {/* Creator Earnings */}
          <div className="text-center">
            <h3 className="text-5xl md:text-6xl font-bold text-[#FF3A3A] mb-2">
              $4.2M
            </h3>
            <p className="text-sm uppercase tracking-wider text-gray-500 font-semibold">
              Creator Earnings
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
