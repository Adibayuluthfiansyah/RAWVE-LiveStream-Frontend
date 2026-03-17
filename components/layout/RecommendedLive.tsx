import Image from "next/image";
import Link from "next/link";

const liveStreams = [
  {
    id: 1,
    title: "Late Night",
    streamer: "Alpha_Gamer",
    category: "COMPETITIVE",
    viewers: "4.2K",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alpha",
  },
  {
    id: 2,
    title: "Digital Paradise",
    streamer: "VividLines",
    category: "CREATIVE",
    viewers: "1.3K",
    thumbnail:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vivid",
  },
  {
    id: 3,
    title: "Tokyo Nights",
    streamer: "ZenTravels",
    category: "IRL",
    viewers: "892",
    thumbnail:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zen",
  },
];

export default function RecommendedLive() {
  return (
    <section className="relative py-20 px-6 bg-[#0B0B0F]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">
              Recommended Live
            </h2>
            <p className="text-gray-400 text-sm">Trending content right now</p>
          </div>
          <Link
            href="/browse"
            className="text-[#FF3A3A] hover:text-[#FF5A3A] font-semibold text-sm uppercase tracking-wider transition"
          >
            View All
          </Link>
        </div>

        {/* Stream Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {liveStreams.map((stream) => (
            <Link
              key={stream.id}
              href={`/stream/${stream.id}`}
              className="group relative rounded-xl overflow-hidden bg-[#1A1A1F] hover:scale-[1.02] transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={stream.thumbnail}
                  alt={stream.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Live Badge */}
                <div className="absolute top-3 left-3 bg-[#FF3A3A] px-2 py-1 rounded text-white text-xs font-bold uppercase">
                  Live
                </div>
                {/* Viewers Count */}
                <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-semibold">
                  {stream.viewers} Viewers
                </div>
              </div>

              {/* Stream Info */}
              <div className="p-4 flex gap-3">
                {/* Avatar */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={stream.avatar}
                    alt={stream.streamer}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm truncate group-hover:text-[#FF3A3A] transition">
                    {stream.title}
                  </h3>
                  <p className="text-gray-400 text-sm truncate">
                    {stream.streamer}
                  </p>
                  <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-400 font-semibold uppercase tracking-wider">
                    {stream.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
