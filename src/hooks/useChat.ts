import { useState, useCallback } from "react";
import type { ChatMessage, ConversationStage, LeadData } from "@/types/chat";

const CHATBOT_URL = "https://nkshqauktheawfquibto.supabase.co/functions/v1/website-chatbot";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rc2hxYXVrdGhlYXdmcXVpYnRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMjA3MzAsImV4cCI6MjA5MTY5NjczMH0.LhqtzHdCm8g0sstg6ZMLkzwE58ipUOGKz1i6QrFJip4";

const HEADERS: Record<string, string> = {
  "Content-Type": "application/json",
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

const LEAD_FIELDS: { key: keyof LeadData; label: string; prompt: string }[] = [
  { key: "full_name", label: "name", prompt: "What's your name?" },
  { key: "email", label: "email", prompt: "What's your email address?" },
  { key: "phone", label: "phone", prompt: "What's the best phone number to reach you?" },
  { key: "event_type", label: "event type", prompt: "What type of event are you planning? (Wedding, Birthday, Corporate, Quinceañera, etc.)" },
  { key: "event_date", label: "event date", prompt: "When is your event? (Date)" },
  { key: "location", label: "city", prompt: "What city is your event in?" },
  { key: "preferred_booth", label: "venue", prompt: "Do you have a venue picked out yet? If so, what's the name?" },
  { key: "guest_count", label: "package interest", prompt: "Which booth or package are you interested in? (Selfie Booth, 360 Booth, TXR20 Luxury Booth, or not sure yet)" },
  { key: "requested_hours", label: "guest count", prompt: "Approximately how many guests are you expecting?" },
  { key: "vibe_preference", label: "add-ons", prompt: "Any add-ons you're interested in? (Cold Sparks, Dancing on Clouds, Flower Wall, Shimmer Wall, or none)" },
  { key: "notes", label: "notes", prompt: "Anything else you'd like us to know? (Or type 'no' to skip)" },
];

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState<ConversationStage>("greeting");
  const [lead, setLead] = useState<LeadData>({});
  const [leadStep, setLeadStep] = useState(-1); // -1 = not capturing

  const addMessage = useCallback(
    (role: "user" | "assistant", content: string): ChatMessage => {
      const msg: ChatMessage = {
        id: crypto.randomUUID(),
        role,
        content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, msg]);
      return msg;
    },
    []
  );

  const submitLead = useCallback(async (finalLead: LeadData) => {
    const payload = {
      action: "save_lead",
      lead: {
        name: finalLead.full_name || "",
        email: finalLead.email || "",
        phone: finalLead.phone || "",
        event_date: finalLead.event_date || "",
        city: finalLead.location || "",
        venue: finalLead.preferred_booth || "",
        event_type: finalLead.event_type || "",
        package_interest: finalLead.guest_count || "",
        guest_count: parseInt(finalLead.requested_hours || "0") || 0,
        add_ons: finalLead.vibe_preference || "",
        notes: finalLead.notes || "",
        source: "website_chatbot",
      },
    };

    try {
      const resp = await fetch(CHATBOT_URL, {
        method: "POST",
        headers: HEADERS,
        body: JSON.stringify(payload),
      });
      if (!resp.ok) throw new Error("Failed to save lead");
      setStage("complete");
      return true;
    } catch (err) {
      console.error("Lead save error:", err);
      throw err;
    }
  }, []);

  const sendMessage = useCallback(
    async (text: string) => {
      // Add user message
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "user", content: text, timestamp: new Date() },
      ]);

      // If we're in lead capture mode, store the answer and advance
      if (leadStep >= 0) {
        const field = LEAD_FIELDS[leadStep];
        const value = text.toLowerCase() === "no" && field.key === "notes" ? "" : text;

        const updatedLead = { ...lead, [field.key]: value };
        setLead(updatedLead);

        const nextStep = leadStep + 1;

        if (nextStep < LEAD_FIELDS.length) {
          setLeadStep(nextStep);
          setTimeout(() => {
            addMessage("assistant", LEAD_FIELDS[nextStep].prompt);
          }, 400);
        } else {
          // All fields collected — submit
          setIsLoading(true);
          setLeadStep(-1);
          try {
            await submitLead(updatedLead);
            addMessage(
              "assistant",
              "Thank you! ✨ Your request has been submitted. A member of our team will be in touch shortly to help plan your event. We can't wait to make it legendary! 🎉"
            );
          } catch {
            addMessage(
              "assistant",
              "I'm sorry, there was a problem submitting your request. Please call us at 954-548-5809 and we'll take care of you!"
            );
          } finally {
            setIsLoading(false);
          }
        }
        return;
      }

      // Normal ask flow
      setIsLoading(true);

      try {
        const resp = await fetch(CHATBOT_URL, {
          method: "POST",
          headers: HEADERS,
          body: JSON.stringify({ action: "ask", message: text }),
        });

        if (!resp.ok) throw new Error(`Chat error: ${resp.status}`);

        const data = await resp.json();
        const answer = data.answer || data.response || "I'm sorry, I didn't catch that. Could you rephrase?";

        addMessage("assistant", answer);
      } catch (e: any) {
        console.error("Chat error:", e);
        addMessage(
          "assistant",
          "I'm sorry, I had trouble with that. Please call us at 954-548-5809 and we'll be happy to help!"
        );
      } finally {
        setIsLoading(false);
      }
    },
    [messages, lead, leadStep, addMessage, submitLead]
  );

  // Allow starting lead capture externally (e.g. from a "Get a Quote" button)
  const startLeadCapture = useCallback(() => {
    setStage("capturing_name");
    setLeadStep(0);
    addMessage(
      "assistant",
      "Let's get you a personalized quote! I just need a few details. 🎉\n\n" + LEAD_FIELDS[0].prompt
    );
  }, [addMessage]);

  return {
    messages,
    isLoading,
    stage,
    setStage,
    lead,
    setLead,
    sendMessage,
    addMessage,
    submitLead,
    startLeadCapture,
  };
}
