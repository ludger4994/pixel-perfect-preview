
## Phase 1: Database Schema + Seed Data
Create 6 new tables via migration:
- `business_settings` — editable business config
- `booths` — booth offerings with pricing
- `packages` — multi-hour package tiers
- `backdrops` (chatbot version) — backdrop catalog for AI knowledge
- `faq_items` — FAQ knowledge base
- `leads` — captured lead data
- `sms_templates` — SMS message templates

Seed all tables with the provided data.

## Phase 2: Chat Widget UI Components
Build ~7 new components (no existing pages touched):
- `ChatWidget.tsx` — floating button + chat window container
- `ChatHeader.tsx` — header with avatar + close button
- `ChatMessage.tsx` — message bubbles (bot + user)
- `ChatInput.tsx` — input bar + send button
- `QuickReplies.tsx` — quick reply chip buttons
- `PromptBubble.tsx` — re-engagement speech bubble
- `LeadSuccessCard.tsx` — post-capture success card

Add `<ChatWidget />` to App.tsx so it appears on all pages.

## Phase 3: AI Chat Edge Function
- Create `chat-response` edge function using **Lovable AI Gateway** (no OpenAI key needed)
- Loads all business data from DB as context
- Uses GPT-5-mini for fast, quality responses
- System prompt matches the "Legend" concierge personality

## Phase 4: Lead Capture + SMS (Twilio deferred)
- Create `send-lead-sms` edge function (Twilio via connector gateway)
- Lead capture flow in chat widget
- SMS sending will be wired up once Twilio connector is set up

## Phase 5: Admin Panel
- Create `/admin` page with sections for managing all tables
- Password-protected or auth-gated
- Dark luxury styling matching the site

**Key optimizations vs. original prompt:**
- Using Lovable AI Gateway instead of OpenAI (no API key needed)
- Using Twilio connector gateway (when ready) instead of raw Twilio API
- Using existing Supabase client from `@/integrations/supabase/client`
