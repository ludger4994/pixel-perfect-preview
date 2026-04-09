export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export type ConversationStage =
  | "greeting"
  | "qualifying"
  | "recommending"
  | "answering_faqs"
  | "capturing_name"
  | "capturing_phone"
  | "capturing_email"
  | "capturing_details"
  | "submitting"
  | "complete";

export interface LeadData {
  full_name?: string;
  phone?: string;
  email?: string;
  event_type?: string;
  event_date?: string;
  location?: string;
  guest_count?: string;
  preferred_booth?: string;
  requested_hours?: string;
  backdrop_interest?: boolean;
  vibe_preference?: string;
  recommendation?: string;
  notes?: string;
}

export interface SessionData {
  stage: ConversationStage;
  lead: LeadData;
  hasRecommended: boolean;
}
