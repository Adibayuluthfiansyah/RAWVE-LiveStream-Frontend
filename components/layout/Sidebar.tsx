import Link from "next/link";

const recommendedChannels = [
  {
    id: 1,
    name: "Adibayu",
    game: "Just Chatting",
    viewers: "12.4K",
    isLive: true,
  },
  { id: 2, name: "GamerX", game: "Valorant", viewers: "8.2K", isLive: true },
  {
    id: 3,
    name: "CodeMancer",
    game: "Software Dev",
    viewers: "1.1K",
    isLive: true,
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] bg-[#0B0B0F]/80  border-r border-gray-800 overflow-y-auto hidden lg:block z-40">
      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Recommended Channels
        </h2>
        <div className="space-y-3">
          {recommendedChannels.map((channel) => (
            <Link
              href={`/${channel.name}`}
              key={channel.id}
              className="flex items-center justify-between group hover:bg-gray-800 p-2 rounded-md transition"
            >
              <div className="flex items-center gap-3">
                {/* Avatar Dummy */}
                <div className="w-8 h-8 rounded-full bg-[#FF2D4E] flex items-center justify-center text-white font-bold text-xs">
                  {channel.name.charAt(0)}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-200 group-hover:text-white truncate max-w-25">
                    {channel.name}
                  </span>
                  <span className="text-xs text-gray-400 truncate max-w-25">
                    {channel.game}
                  </span>
                </div>
              </div>
              {channel.isLive && (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <span className="text-xs font-semibold text-gray-300">
                    {channel.viewers}
                  </span>
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
