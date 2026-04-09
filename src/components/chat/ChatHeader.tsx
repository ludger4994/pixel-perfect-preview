import { X } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
}

const ChatHeader = ({ onClose }: ChatHeaderProps) => (
  <div
    className="flex items-center gap-3 px-4 py-3 border-b"
    style={{
      background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
      borderColor: "rgba(201,161,53,0.2)",
    }}
  >
    {/* Avatar */}
    <div
      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
      style={{ background: "hsl(var(--primary))", color: "#000" }}
    >
      L
    </div>
    <div className="flex-1 min-w-0">
      <p
        className="text-sm font-semibold"
        style={{ fontFamily: "var(--font-heading)", color: "hsl(var(--primary))" }}
      >
        Legend
      </p>
      <p className="text-[11px]" style={{ color: "var(--chat-text-muted, #b8aa8a)" }}>
        Photo Booth Legends · Online Now
      </p>
    </div>
    <button
      onClick={onClose}
      className="p-1.5 rounded-full transition-colors hover:bg-white/10"
      aria-label="Close chat"
    >
      <X className="w-4 h-4" style={{ color: "var(--chat-text-muted, #b8aa8a)" }} />
    </button>
  </div>
);

export default ChatHeader;
