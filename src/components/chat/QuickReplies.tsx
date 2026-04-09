interface Props {
  options: string[];
  onSelect: (option: string) => void;
}

const QuickReplies = ({ options, onSelect }: Props) => (
  <div className="flex flex-wrap gap-1.5 px-4 pb-2">
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onSelect(opt)}
        className="text-xs px-3 py-1.5 rounded-full transition-colors hover:bg-[hsl(var(--primary))]/10"
        style={{
          border: "1px solid hsl(var(--primary))",
          color: "hsl(var(--primary))",
          background: "transparent",
        }}
      >
        {opt}
      </button>
    ))}
  </div>
);

export default QuickReplies;
