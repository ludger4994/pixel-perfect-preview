import { X } from "lucide-react";

interface Props {
  text: string;
  onDismiss: () => void;
  onClick: () => void;
}

const PromptBubble = ({ text, onDismiss, onClick }: Props) => (
  <div
    className="absolute bottom-[68px] right-0 animate-[slideUp_0.3s_ease] cursor-pointer"
    style={{ maxWidth: 220 }}
  >
    <div
      className="relative px-3.5 py-2.5 rounded-xl text-[13px]"
      style={{
        background: "#1a1a1a",
        border: "1px solid rgba(201,161,53,0.3)",
        color: "#f0ece0",
      }}
      onClick={onClick}
    >
      {text}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDismiss();
        }}
        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full flex items-center justify-center bg-[#2a2a2a] hover:bg-[#3a3a3a] transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-3 h-3" style={{ color: "#b8aa8a" }} />
      </button>
      {/* Arrow */}
      <div
        className="absolute -bottom-1.5 right-5 w-3 h-3 rotate-45"
        style={{ background: "#1a1a1a", borderRight: "1px solid rgba(201,161,53,0.3)", borderBottom: "1px solid rgba(201,161,53,0.3)" }}
      />
    </div>
  </div>
);

export default PromptBubble;
