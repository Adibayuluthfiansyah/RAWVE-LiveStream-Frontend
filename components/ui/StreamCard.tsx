import React from "react";
import Link from "next/link";
import Image from "next/image";

interface StreamCardProps {
  streamerName: string;
  title: string;
  game: string;
  viewers: string;
  thumbnailUrl: string;
  tags: string[];
}

export default function StreamCard({
  streamerName,
  title,
  game,
  viewers,
  thumbnailUrl,
  tags,
}: StreamCardProps) {
  return (
    <div className="flex flex-col gap-2 group cursor-pointer">
      {/* thumbnail container */}
      <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
        {/* placeholder thumbnail image */}
        <div className="absolute inset-0 bg-gray-700 group-hover:scale-105 transition-transform duration-300" />

        <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
          LIVE
        </div>
        <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-0.5 rounded">
          {viewers} viewers
        </div>
      </div>

      {/* Info Container */}
      <div className="flex gap-3 mt-1">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-[#FF2D4E] shrink-0 mt-1" />

        <div className="flex flex-col overflow-hidden">
          <h3 className="text-white font-bold text-sm truncate group-hover:text-[#FF2D4E] transition">
            {title}
          </h3>
          <p className="text-gray-400 text-sm hover:underline">
            {streamerName}
          </p>
          <p className="text-gray-500 text-sm hover:underline">{game}</p>

          {/* tags */}
          <div className="flex flex-wrap gap-1 mt-1">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-gray-800 text-gray-300 text-xs px-2 py-0.5 rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
