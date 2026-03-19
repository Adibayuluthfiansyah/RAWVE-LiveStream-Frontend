"use client";

import React, { useState } from "react";
import { UserPlus, Bell, BellOff, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface StreamerProfileProps {
  username: string;
  avatarUrl?: string;
  followerCount: number;
  isFollowing?: boolean;
  isSubscribed?: boolean;
}

export default function StreamerProfile({
  username,
  avatarUrl,
  followerCount,
  isFollowing: initialFollowing = false,
  isSubscribed: initialSubscribed = false,
}: StreamerProfileProps) {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);
  const [isSubscribed, setIsSubscribed] = useState(initialSubscribed);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const formatFollowers = (count: number): string => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    // TODO: Call API to follow/unfollow
  };

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
    // TODO: Call API to subscribe/unsubscribe
  };

  const handleToggleNotifications = () => {
    setIsNotificationsEnabled(!isNotificationsEnabled);
    // TODO: Call API to toggle notifications
  };

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* avatar */}
          <div className="relative">
            {avatarUrl ? (
              <Image
                src={avatarUrl}
                alt={username}
                className="w-12 h-12 rounded-full object-cover border-2 border-border"
              />
            ) : (
              <div className="w-12 h-12 rounded-full bg-[#FF2D4E] flex items-center justify-center border-2 border-border">
                <span className="text-white font-bold text-lg">
                  {username.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            {isSubscribed && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-linear-to-r from-[#FF2D4E] to-[#FF5A3A] rounded-full flex items-center justify-center border-2 border-card">
                <Crown className="w-3 h-3 text-white" />
              </div>
            )}
          </div>

          {/* username & follower */}
          <div className="flex flex-col">
            <h2 className="text-foreground font-bold text-lg hover:text-[#FF2D4E] transition-colors cursor-pointer">
              {username}
            </h2>
            <span className="text-muted-foreground text-sm">
              {formatFollowers(followerCount)} followers
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Follow Button */}
          <Button
            variant={isFollowing ? "secondary" : "outline"}
            size="sm"
            onClick={handleFollow}
            className={`gap-1.5 ${
              isFollowing
                ? "bg-secondary text-foreground hover:bg-secondary/80"
                : "border border-gray-600 hover:border-gray-400 text-white hover:bg-white/5"
            }`}
          >
            <UserPlus className="w-4 h-4" />
            {isFollowing ? "Following" : "Follow"}
          </Button>

          {/* Notifications (only if following) */}
          {isFollowing && (
            <Button
              variant="outline"
              size="icon-sm"
              onClick={handleToggleNotifications}
              className={`${
                isNotificationsEnabled
                  ? "border-[#FF3A3A] bg-[#FF3A3A]/10 text-[#FF3A3A]"
                  : "border-gray-600 text-muted-foreground hover:border-gray-400"
              }`}
            >
              {isNotificationsEnabled ? (
                <Bell className="w-4 h-4" fill="currentColor" />
              ) : (
                <BellOff className="w-4 h-4" />
              )}
            </Button>
          )}

          {/* Subscribe Button */}
          <Button
            size="sm"
            onClick={handleSubscribe}
            className={`gap-1.5 ${
              isSubscribed
                ? "bg-linear-to-r from-[#FF2D4E] to-[#FF5A3A] hover:brightness-110 text-white shadow-[0_8px_24px_rgba(255,58,58,0.30)]"
                : "bg-linear-to-r from-[#FF2D4E] to-[#FF5A3A] hover:brightness-110 text-white shadow-[0_8px_24px_rgba(255,58,58,0.30)]"
            }`}
          >
            <Crown className="w-4 h-4" />
            {isSubscribed ? "Subscribed" : "Subscribe"}
          </Button>
        </div>
      </div>
    </div>
  );
}
