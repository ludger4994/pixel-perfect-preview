import { useState, useEffect, useRef } from "react";
import { MessageCircle } from "lucide-react";
import ChatHeader from "./chat/ChatHeader";
import ChatMessage from "./chat/ChatMessage";
import ChatInput from "./chat/ChatInput";
import QuickReplies from "./chat/QuickReplies";
import PromptBubble from "./chat/PromptBubble";
import TypingIndicator from "./chat/TypingIndicator";
import LeadSuccessCard from "./chat/LeadSuccessCard";
import { useChat } from "@/hooks/useChat";
import { useEngagement } from "@/hooks/useEngagement";

const GREETING_MESSAGES = [
  "Welcome to Photo Booth Legends. I'm Legend, your personal event concierge. ✨",
  "I can help you find the perfect photo booth experience, answer any questions, and send you a direct booking link by text.",
  "What's the occasion? 🎉",
];

const GREETING_CHIPS = [
  "Birthday Party",
  "Wedding",
  "Corporate Event",
  "Quinceañera",
  "Something else",
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const [showChips, setShowChips] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, isLoading, stage, sendMessage, addMessage } = useChat();
  const { promptText, dismissPrompt, markEngaged } = useEngagement(isOpen);

  // Greeting sequence
  useEffect(() => {
    if (!isOpen || hasGreeted) return;
    setHasGreeted(true);

    GREETING_MESSAGES.forEach((msg, i) => {
      setTimeout(() => addMessage("assistant", msg), i * 800);
    });
    setTimeout(() => setShowChips(true), GREETING_MESSAGES.length * 800);
  }, [isOpen, hasGreeted, addMessage]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSend = (text: string) => {
    markEngaged();
    setShowChips(false);
    sendMessage(text);
  };

  const handleChip = (chip: string) => {
    handleSend(chip);
  };

  const handleOpen = () => {
    setIsOpen(true);
    markEngaged();
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]" style={{ fontFamily: "var(--font-body)" }}>
      {/* Prompt Bubble */}
      {!isOpen && promptText && (
        <PromptBubble
          text={promptText}
          onDismiss={dismissPrompt}
          onClick={handleOpen}
        />
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="mb-3 flex flex-col overflow-hidden animate-[slideUp_0.3s_ease]"
          style={{
            width: "min(380px, calc(100vw - 32px))",
            maxHeight: 600,
            borderRadius: 16,
            background: "#0a0a0a",
            border: "1px solid rgba(201,161,53,0.25)",
            boxShadow: "0 24px 60px rgba(0,0,0,0.5)",
          }}
        >
          <ChatHeader onClose={() => setIsOpen(false)} />

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto px-4 py-3"
            style={{ maxHeight: 380 }}
          >
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            {isLoading && <TypingIndicator />}
            {stage === "complete" && (
              <LeadSuccessCard
                firstName={messages[0]?.content?.split(" ")[0] || "there"}
              />
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {showChips && !isLoading && (
            <QuickReplies options={GREETING_CHIPS} onSelect={handleChip} />
          )}

          {/* Input */}
          <ChatInput
            onSend={handleSend}
            disabled={isLoading || stage === "complete"}
            onFocus={markEngaged}
          />
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          style={{
            background: "hsl(var(--primary))",
            animation: "pulse-gold 8s infinite",
          }}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 text-black" />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
