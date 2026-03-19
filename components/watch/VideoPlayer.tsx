"use client";

import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import { Play, Volume2, VolumeX, Maximize, Settings } from "lucide-react";

interface VideoPlayerProps {
  streamUrl?: string;
  isLive?: boolean;
}

export default function VideoPlayer({
  streamUrl,
  isLive = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isLoading, setIsLoading] = useState(() => !!streamUrl);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!streamUrl || !videoRef.current) {
      return;
    }

    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });

      hls.loadSource(streamUrl);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setIsLoading(false);
        video.play().catch(() => {
          setIsPlaying(false);
        });
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          console.error("HLS error:", data);
          setIsLoading(false);
        }
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Safari native HLS
      video.src = streamUrl;

      const onLoaded = () => {
        setIsLoading(false);
        video.play().catch(() => {
          setIsPlaying(false);
        });
      };

      video.addEventListener("loadedmetadata", onLoaded);

      return () => {
        video.removeEventListener("loadedmetadata", onLoaded);
      };
    }
  }, [streamUrl]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;

    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);

    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }

    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlayingRef.current) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleMouseLeave = () => {
    if (!isPlayingRef.current) return;

    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 300);
  };

  return (
    <div
      className="relative w-full aspect-video bg-card rounded-lg overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {isLoading ? (
        <div className="absolute inset-0 bg-card animate-pulse flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-[#FF3A3A] border-t-transparent rounded-full animate-spin" />
            <p className="text-muted-foreground text-sm font-medium">
              Loading stream...
            </p>
          </div>
        </div>
      ) : !streamUrl ? (
        <div className="absolute inset-0 bg-card flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center">
              <Play className="w-10 h-10 text-muted-foreground" />
            </div>
            <p className="text-foreground text-lg font-semibold">
              Stream Offline
            </p>
            <p className="text-muted-foreground text-sm">
              This channel is currently not live
            </p>
          </div>
        </div>
      ) : (
        <>
          <video
            ref={videoRef}
            className="w-full h-full object-contain bg-black"
            autoPlay
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />

          <div
            className={`absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent transition-opacity duration-300 ${
              showControls || !isPlaying ? "opacity-100" : "opacity-0"
            }`}
          >
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={togglePlay}
                  className="w-20 h-20 rounded-full bg-linear-to-r from-[#FF2D4E] to-[#FF5A3A] hover:brightness-110 flex items-center justify-center transition-all hover:scale-110 shadow-[0_8px_24px_rgba(255,58,58,0.30)]"
                >
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </button>
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-[#FF2D4E] transition-colors"
                >
                  <Play
                    className="w-6 h-6"
                    fill={isPlaying ? "white" : "none"}
                  />
                </button>

                <button
                  onClick={toggleMute}
                  className="text-white hover:text-[#FF2D4E] transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6" />
                  ) : (
                    <Volume2 className="w-6 h-6" />
                  )}
                </button>

                {isLive && (
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                    Live
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <button className="text-white hover:text-[#FF2D4E] transition-colors">
                  <Settings className="w-6 h-6" />
                </button>

                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-[#FF2D4E] transition-colors"
                >
                  <Maximize className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
