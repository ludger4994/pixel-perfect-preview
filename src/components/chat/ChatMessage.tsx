import type { ChatMessage as ChatMessageType } from "@/types/chat";

interface Props {
  message: ChatMessageType;
}

const ChatMessage = ({ message }: Props) => {
  const isBot = message.role === "assistant";

  return (
    <div className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3`}>
      <div
        className="max-w-[85%] px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-wrap"
        style={
          isBot
            ? {
                background: "#1a1a1a",
                border: "1px solid rgba(201,161,53,0.15)",
                borderRadius: "12px 12px 12px 4px",
                color: "#f0ece0",
              }
            : {
                background: "hsl(var(--primary))",
                color: "#000",
                borderRadius: "12px 12px 4px 12px",
              }
        }
      >
        {message.content}
      </div>
    </div>
  );
};

export default ChatMessage;
