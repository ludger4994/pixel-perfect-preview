import { useState, useEffect, useCallback } from "react";

const PROMPTS = [
  "How can I help you? 👋",
  "I'm here to help.",
  "How can I make this experience special for you?",
  "Ask me any question you'd like.",
  "Ready to make your event unforgettable?",
];

export function useEngagement(isChatOpen: boolean) {
  const [promptText, setPromptText] = useState<string | null>(null);

  const dismissPrompt = useCallback(() => {
    setPromptText(null);
    sessionStorage.setItem("pbl_chat_closed", "true");
  }, []);

  const markEngaged = useCallback(() => {
    sessionStorage.setItem("pbl_chat_engaged", "true");
    setPromptText(null);
  }, []);

  useEffect(() => {
    const hasEngaged = sessionStorage.getItem("pbl_chat_engaged");
    const userClosed = sessionStorage.getItem("pbl_chat_closed");
    const promptCount = parseInt(sessionStorage.getItem("pbl_prompt_count") || "0");

    if (hasEngaged || userClosed || promptCount >= 2) return;

    const pick = () => PROMPTS[Math.floor(Math.random() * PROMPTS.length)];

    const first = setTimeout(() => {
      if (!isChatOpen && !sessionStorage.getItem("pbl_chat_engaged")) {
        setPromptText(pick());
        sessionStorage.setItem("pbl_prompt_count", "1");
      }
    }, 25000);

    const second = setTimeout(() => {
      const still = !sessionStorage.getItem("pbl_chat_engaged");
      const notClosed = !sessionStorage.getItem("pbl_chat_closed");
      const cnt = parseInt(sessionStorage.getItem("pbl_prompt_count") || "0");
      if (still && notClosed && cnt < 2) {
        setPromptText(pick());
        sessionStorage.setItem("pbl_prompt_count", "2");
      }
    }, 85000);

    return () => {
      clearTimeout(first);
      clearTimeout(second);
    };
  }, [isChatOpen]);

  // Hide prompt when chat is opened
  useEffect(() => {
    if (isChatOpen) setPromptText(null);
  }, [isChatOpen]);

  return { promptText, dismissPrompt, markEngaged };
}
