const TypingIndicator = () => (
  <div className="flex justify-start mb-3">
    <div
      className="px-4 py-3 flex gap-1.5"
      style={{
        background: "#1a1a1a",
        border: "1px solid rgba(201,161,53,0.15)",
        borderRadius: "12px 12px 12px 4px",
      }}
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full inline-block"
          style={{
            background: "#b8aa8a",
            animation: `typingDot 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  </div>
);

export default TypingIndicator;
