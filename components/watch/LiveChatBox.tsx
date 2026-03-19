"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Smile, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatMessage {
  id: string;
  username: string;
  message: string;
  timestamp: Date;
  isSubscriber?: boolean;
  isModerator?: boolean;
  avatarColor?: string;
}

interface LiveChatBoxProps {
  streamId?: string;
  isLive?: boolean;
}

const mockMessages: ChatMessage[] = [
  {
    id: "1",
    username: "GamerPro",
    message: "Great stream! 🔥",
    timestamp: new Date(Date.now() - 60000),
    avatarColor: "#FF2D4E",
  },
  {
    id: "2",
    username: "CodeMaster",
    message: "What framework are you using?",
    timestamp: new Date(Date.now() - 45000),
    isSubscriber: true,
    avatarColor: "#9D4EDD",
  },
  {
    id: "3",
    username: "StreamMod",
    message: "Welcome everyone! Remember to follow the rules 👋",
    timestamp: new Date(Date.now() - 30000),
    isModerator: true,
    avatarColor: "#06D6A0",
  },
  {
    id: "4",
    username: "DevFan",
    message: "This is awesome! How long have you been coding?",
    timestamp: new Date(Date.now() - 15000),
    avatarColor: "#FFB703",
  },
  {
    id: "5",
    username: "TechEnthusiast",
    message: "Can you explain that last part again?",
    timestamp: new Date(Date.now() - 5000),
    avatarColor: "#0077B6",
  },
];

export default function LiveChatBox({
  streamId,
  isLive = true,
}: LiveChatBoxProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [newMessage, setNewMessage] = useState("");
  const [isLoadingMessages, setIsLoadingMessages] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const [userCount, setUserCount] = useState(1247);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingMessages(false);
      scrollToBottom();
    }, 1000);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // TODO: WebSocket connection for real-time chat
  useEffect(() => {
    if (!streamId || !isLive) return;

    // Placeholder for WebSocket connection
    // const ws = new WebSocket(`wss://your-api.com/chat/${streamId}`);
    //
    // ws.onmessage = (event) => {
    //   const message = JSON.parse(event.data);
    //   setMessages((prev) => [...prev, message]);
    // };
    //
    // return () => ws.close();

    const interval = setInterval(() => {
      const demoMessages = [
        "This is so cool!",
        "Love the content!",
        "Can you do a tutorial on this?",
        "Amazing work!",
        "Keep it up! 💪",
      ];
      const randomMsg =
        demoMessages[Math.floor(Math.random() * demoMessages.length)];

      const newMsg: ChatMessage = {
        id: Date.now().toString(),
        username: `Viewer${Math.floor(Math.random() * 1000)}`,
        message: randomMsg,
        timestamp: new Date(),
        avatarColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      };

      setMessages((prev) => [...prev, newMsg]);
    }, 10000);

    return () => clearInterval(interval);
  }, [streamId, isLive]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      username: "You", // TODO: Get from auth
      message: newMessage,
      timestamp: new Date(),
      avatarColor: "#9D4EDD",
    };

    setMessages([...messages, message]);
    setNewMessage("");

    // TODO: Send message via WebSocket
    // ws.send(JSON.stringify(message));
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="flex flex-col h-full bg-card border-l border-border">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <h3 className="text-foreground font-bold text-sm uppercase">
            Live Chat
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Users className="w-3 h-3" />
            <span>{userCount.toLocaleString()}</span>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon-xs"
          className="text-muted-foreground hover:text-foreground"
        >
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      {/* Chat Messages */}
      <div
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin scrollbar-thumb-secondary scrollbar-track-transparent"
      >
        {isLoadingMessages ? (
          // Skeleton Loading
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary" />
                  <div className="flex-1 space-y-1">
                    <div className="h-3 bg-secondary rounded w-20" />
                    <div className="h-3 bg-secondary rounded w-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="flex items-start gap-2 group">
              {/* Avatar */}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{ backgroundColor: msg.avatarColor }}
              >
                {msg.username.charAt(0).toUpperCase()}
              </div>

              {/* Message Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span
                    className={`font-bold text-sm ${
                      msg.isModerator
                        ? "text-green-400"
                        : msg.isSubscriber
                          ? "text-[#FF3A3A]"
                          : "text-foreground"
                    }`}
                  >
                    {msg.username}
                  </span>
                  {msg.isModerator && (
                    <span className="bg-green-600 text-white text-xs px-1.5 py-0.5 rounded font-bold">
                      MOD
                    </span>
                  )}
                  {msg.isSubscriber && !msg.isModerator && (
                    <span className="bg-linear-to-r from-[#FF2D4E] to-[#FF5A3A] text-white text-xs px-1.5 py-0.5 rounded font-bold">
                      SUB
                    </span>
                  )}
                  <span className="text-muted-foreground text-xs">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                <p className="text-foreground text-sm wrap-break-words mt-0.5">
                  {msg.message}
                </p>
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <div className="p-3 border-t border-border">
        {isLive ? (
          <form
            onSubmit={handleSendMessage}
            className="flex items-center gap-2"
          >
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Send a message..."
                className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-[#FF3A3A] focus:ring-1 focus:ring-[#FF3A3A] transition-colors"
                maxLength={500}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Smile className="w-5 h-5" />
              </button>
            </div>
            <Button
              type="submit"
              size="icon"
              disabled={!newMessage.trim()}
              className="bg-linear-to-r from-[#FF2D4E] to-[#FF5A3A] hover:brightness-110 text-white disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_24px_rgba(255,58,58,0.30)]"
            >
              <Send className="w-4 h-4" />
            </Button>
          </form>
        ) : (
          <div className="text-center text-muted-foreground text-sm py-2">
            Chat is disabled when stream is offline
          </div>
        )}
      </div>
    </div>
  );
}
