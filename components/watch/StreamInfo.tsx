import React from "react";
import { Eye, Gamepad2 } from "lucide-react";

interface StreamInfoProps {
  title: string;
  category: string;
  viewerCount: number;
  isLive?: boolean;
  tags?: string[];
}

export default function StreamInfo({
  title,
  category,
  viewerCount,
  isLive = true,
  tags = [],
}: StreamInfoProps) {
  const formatViewers = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-foreground text-xl font-bold mb-2 line-clamp-2">
            {title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm">
            {/* Category */}
            <div className="flex items-center gap-1.5 text-foreground hover:text-[#FF2D4E] transition-colors cursor-pointer">
              <Gamepad2 className="w-4 h-4" />
              <span className="font-medium">{category}</span>
            </div>

            {/* Viewer Count */}
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <Eye className="w-4 h-4" />
              <span className="font-medium">{formatViewers(viewerCount)} viewers</span>
            </div>

            {/* Live Badge */}
            {isLive && (
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1 bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold uppercase">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  Live
                </div>
              </div>
            )}
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-secondary hover:bg-secondary/80 text-secondary-foreground text-xs px-2.5 py-1 rounded-full font-medium transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
