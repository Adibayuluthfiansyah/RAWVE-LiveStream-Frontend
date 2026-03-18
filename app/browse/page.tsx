import Sidebar from "@/components/layout/Sidebar";
import StreamCard from "@/components/ui/StreamCard";

const dummyStreams = Array(8).fill({
  streamerName: "Adibayu",
  title: "Ngeding Backend RAWVE LiveStream pake Golang ",
  game: "Software and Game Development",
  viewers: "1.2K",
  thumbnailUrl: "",
  tags: ["Indonesian", "Coding", "Golang"],
});

export default function Browse() {
  return (
    <div className="flex min-h-screen bg-gray-950">
      <Sidebar />
      <main className="flex-1 lg:pl-64 pt-16">
        <div className="p-6 md:p-8 max-w-400 mx-auto">
          {/* hero Section */}
          <div className="w-full aspect-21/9 md:aspect-3/1 bg-gray-800 rounded-xl mb-10 flex items-center justify-center border border-gray-700">
            <h1 className="text-2xl text-gray-500 font-bold">
              [ Featured Stream Player Here ]
            </h1>
          </div>

          <h2 className="text-xl font-bold text-white mb-6">
            <span className="text-[#FF2D4E]">Live</span>{" "}
            {`channels we think
            you'll like`}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {dummyStreams.map((stream, idx) => (
              <StreamCard key={idx} {...stream} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
