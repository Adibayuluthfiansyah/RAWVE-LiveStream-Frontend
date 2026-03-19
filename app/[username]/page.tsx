import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import VideoPlayer from "@/components/watch/VideoPlayer";
import StreamInfo from "@/components/watch/StreamInfo";
import StreamerProfile from "@/components/watch/StreamerProfile";
import LiveChatBox from "@/components/watch/LiveChatBox";

const getStreamData = (username: string) => {
  return {
    streamer: {
      username: username,
      avatarUrl: "",
      followerCount: 12400,
    },
    stream: {
      id: "stream-123",
      title:
        "Building a Modern LiveStream Platform with Next.js 16 & Golang 🚀",
      category: "Software and Game Development",
      viewerCount: 1247,
      isLive: true,
      tags: ["Indonesian", "Coding", "Next.js", "Golang"],
      streamUrl: "",
    },
  };
};

export default async function WatchStreamPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { streamer, stream } = getStreamData((await params).username);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 lg:pl-64 pt-16">
        <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)]">
          {/* Left Section: Video + Info */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            <div className="p-4 lg:p-6 space-y-4">
              {/* Video Player */}
              <VideoPlayer
                streamUrl={stream.streamUrl}
                isLive={stream.isLive}
              />

              {/* Stream Info */}
              <StreamInfo
                title={stream.title}
                category={stream.category}
                viewerCount={stream.viewerCount}
                isLive={stream.isLive}
                tags={stream.tags}
              />

              {/* Streamer Profile */}
              <StreamerProfile
                username={streamer.username}
                avatarUrl={streamer.avatarUrl}
                followerCount={streamer.followerCount}
                isFollowing={false}
                isSubscribed={false}
              />

              {/* About Section */}
              <div className="bg-card border border-border rounded-lg p-4 hidden lg:block">
                <h3 className="text-foreground font-bold mb-2">
                  About {streamer.username}
                </h3>
                <p className="text-muted-foreground text-sm">
                  Welcome to my stream! I build cool stuff with code and share
                  my journey. Follow for more content! 🚀
                </p>
              </div>
            </div>
          </div>

          {/*Live Chat*/}
          <div className="hidden lg:block w-80 xl:w-96 shrink-0">
            <div className="h-full">
              <LiveChatBox streamId={stream.id} isLive={stream.isLive} />
            </div>
          </div>

          {/* Mobile Chat Toggle mobile */}
          <div className="lg:hidden border-t border-border">
            <div className="h-96">
              <LiveChatBox streamId={stream.id} isLive={stream.isLive} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { streamer, stream } = getStreamData((await params).username);

  return {
    title: `${streamer.username} - ${stream.title} | RAWVE`,
    description: `Watch ${streamer.username} live on RAWVE. ${stream.category} with ${stream.viewerCount} viewers.`,
  };
}
