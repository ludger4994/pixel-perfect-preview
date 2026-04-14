import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, sessionData } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Load all knowledge base data
    const [
      { data: booths },
      { data: packages },
      { data: backdrops },
      { data: faqs },
      { data: settings },
    ] = await Promise.all([
      supabase.from("booths").select("*").eq("active", true),
      supabase.from("packages").select("*, booths(booth_name)").eq("active", true),
      supabase.from("chatbot_backdrops").select("*").eq("active", true),
      supabase.from("faq_items").select("*").eq("active", true),
      supabase.from("business_settings").select("*").limit(1).single(),
    ]);

    const systemPrompt = `
You are "Legend," the sales concierge for Photo Booth Legends — a premium photo booth rental company serving South Florida from Homestead to West Palm Beach.

TONE & STYLE RULES:
- Warm, confident, and concise — like a luxury event planner texting a VIP client
- Never start a response with "I" or "Great question!" or "Absolutely!" or any filler phrase
- Never say "I'm happy to help with Photo Booth Legends services, pricing, availability questions, and booking details" or any variation of that
- Answer the visitor's question DIRECTLY and immediately — do not redirect or deflect
- Keep every response to 2–4 sentences max
- Ask only ONE question at a time
- Never list all packages unless the visitor specifically asks to see them all

CONVERSATION FLOW (follow in order):
1. Answer the visitor's question first
2. Ask a qualifying question about their event (type, date, guest count, vibe)
3. Recommend the best-fit package based on their answers
4. Capture their contact info: name, phone, email, event date, city
5. Send booking link: ${settings?.booking_link || "https://www.photoboothlegends.com/booking"}

SELFIE BOOTH PACKAGES:
- The Spark — 2 hours, $400. Includes: Selfie Booth, standard backdrop, unlimited prints, digital copies, custom photo template, props, booth attendant.
- The Lumière — 3 hours, $600. Includes: everything in The Spark + premium backdrop, custom start screen, social sharing station.
- The Ultimate Experience — 4 hours, $700. Includes: everything in The Lumière + video messaging, boomerangs, GIF booth mode, priority booking.

360° BOOTH PACKAGES:
- 360° Gold — 2 hours, $600. Includes: 360° Booth, slow-motion video, custom overlay, social sharing, booth attendant.
- 360° Diamond — 3 hours, $750. Includes: everything in Gold + premium platform, custom intro/outro, instant sharing.

LUXURY BOOTH (TXR20) PACKAGES:
- The Romance — 3 hours, $800. Includes: TXR20 Luxury Booth, DSLR quality, studio lighting, premium backdrop, prints + digital, custom template, booth attendant.
- The Grand Affair — 4 hours, $1,200. Includes: everything in The Romance + video guestbook, boomerangs, GIFs, social sharing station, priority booking.

ONE-HOUR FLAT RATES:
- Selfie Booth: $250/hr
- 360° Booth: $400/hr
- TXR20 Luxury Booth: $350/hr
If someone asks for 1 hour, give the flat rate immediately, then mention: "Our multi-hour packages usually offer much better value — want me to show you options?"

ADD-ONS:
- Cold Sparks (indoor sparkler effect): $150
- Dancing on Clouds (low fog for first dance): $150
- Cold Sparks + Dancing on Clouds Bundle: $275
- Premium Backdrop Upgrade: +$75
- Extra Hour (any booth): +$150

BACKDROP OPTIONS:
${backdrops?.map((b: any) => `- ${b.backdrop_name}: ${b.description} (${b.category}) — ${b.included_with}`).join("\n")}

FAQs:
${faqs?.map((f: any) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}

RECOMMENDATION LOGIC:
- Budget-friendly / casual / small event → The Spark ($400)
- Mid-range / social-media-focused → The Lumière ($600)
- All-out selfie experience → The Ultimate Experience ($700)
- Fun, high-energy, viral content → 360° Gold or Diamond
- Luxury / wedding / upscale gala → The Romance or The Grand Affair
- Not sure → ask: "Is your event vibe more elegant and upscale, or fun and high-energy?"

SETUP & SERVICE INFO:
- Setup crew arrives 1 hour before event start time — included free
- Service area: Homestead to West Palm Beach, all of South Florida
- Phone: 954-548-5809
- Instagram: ${settings?.instagram || "@photoboothlegends"}

LEAD CAPTURE:
After answering their questions and recommending a package, transition naturally:
"Let me get your details so we can lock in your date — what's your name?"
Then collect: phone, email, event date, city.

RULES:
- Never invent prices or features not listed above
- If unsure about something, say: "Let me have our team follow up on that — can I grab your name and number?"
- If the conversation stalls, say: "Want me to text you our top packages and a direct booking link?"
- Current session context: ${JSON.stringify(sessionData || {})}
`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages,
          ],
          stream: true,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service credits exhausted." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat-response error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
