import { useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { ChatMessage, SessionData, LeadData, ConversationStage } from "@/types/chat";

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat-response`;

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState<ConversationStage>("greeting");
  const [lead, setLead] = useState<LeadData>({});
  const abortRef = useRef<AbortController | null>(null);

  const sessionData: SessionData = { stage, lead, hasRecommended: false };

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

  const sendMessage = useCallback(
    async (text: string) => {
      const userMsg = { role: "user" as const, content: text };
      setMessages((prev) => [
        ...prev,
        { id: crypto.randomUUID(), role: "user", content: text, timestamp: new Date() },
      ]);
      setIsLoading(true);

      const apiMessages = [
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        userMsg,
      ];

      let assistantContent = "";

      try {
        const controller = new AbortController();
        abortRef.current = controller;

        const resp = await fetch(CHAT_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ messages: apiMessages, sessionData }),
          signal: controller.signal,
        });

        if (!resp.ok || !resp.body) {
          throw new Error(`Chat error: ${resp.status}`);
        }

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let assistantId = crypto.randomUUID();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          let newlineIdx: number;
          while ((newlineIdx = buffer.indexOf("\n")) !== -1) {
            let line = buffer.slice(0, newlineIdx);
            buffer = buffer.slice(newlineIdx + 1);
            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (!line.startsWith("data: ")) continue;
            const jsonStr = line.slice(6).trim();
            if (jsonStr === "[DONE]") break;
            try {
              const parsed = JSON.parse(jsonStr);
              const delta = parsed.choices?.[0]?.delta?.content;
              if (delta) {
                assistantContent += delta;
                setMessages((prev) => {
                  const last = prev[prev.length - 1];
                  if (last?.id === assistantId) {
                    return prev.map((m) =>
                      m.id === assistantId ? { ...m, content: assistantContent } : m
                    );
                  }
                  return [
                    ...prev,
                    { id: assistantId, role: "assistant", content: assistantContent, timestamp: new Date() },
                  ];
                });
              }
            } catch {
              // partial JSON, will be completed in next chunk
            }
          }
        }
      } catch (e: any) {
        if (e.name !== "AbortError") {
          console.error("Chat stream error:", e);
          addMessage(
            "assistant",
            "I'm sorry, I had trouble with that. Please call us at 954-548-5809."
          );
        }
      } finally {
        setIsLoading(false);
        abortRef.current = null;
      }
    },
    [messages, sessionData, addMessage]
  );

  const submitLead = useCallback(async (leadData: LeadData) => {
    const { data, error } = await supabase
      .from("leads")
      .insert([leadData as any])
      .select()
      .single();

    if (error) throw error;

    // Try to send SMS (will gracefully fail if Twilio not configured)
    try {
      await supabase.functions.invoke("send-lead-sms", {
        body: {
          leadId: data.id,
          templateName: "package_recommendation",
        },
      });
    } catch (smsErr) {
      console.warn("SMS send failed (Twilio may not be configured):", smsErr);
    }

    setStage("complete");
    return data;
  }, []);

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
  };
}
