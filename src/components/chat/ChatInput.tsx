import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";

interface Props {
  onSend: (text: string) => void;
  disabled?: boolean;
  onFocus?: () => void;
}

const ChatInput = ({ onSend, disabled, onFocus }: Props) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  return (
    <div
      className="flex items-center gap-2 px-3 py-2.5 border-t"
      style={{
        background: "#111",
        borderColor: "rgba(201,161,53,0.15)",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        onFocus={onFocus}
        placeholder="Ask me anything..."
        disabled={disabled}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#6e6354]"
        style={{ color: "#f0ece0" }}
      />
      <button
        onClick={handleSubmit}
        disabled={disabled || !value.trim()}
        className="p-2 rounded-lg transition-opacity disabled:opacity-30"
        style={{ background: "hsl(var(--primary))" }}
        aria-label="Send message"
      >
        <Send className="w-3.5 h-3.5 text-black" />
      </button>
    </div>
  );
};

export default ChatInput;
