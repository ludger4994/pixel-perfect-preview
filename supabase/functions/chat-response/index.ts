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
You are the sales concierge for Photo Booth Legends, a premium photo booth company in South Florida.
Your name is "Legend" and you work for Photo Booth Legends.

YOUR PERSONALITY:
- Warm, elegant, and helpful — like a luxury event concierge
- Conversational but polished — never robotic or stiff
- Sales-aware but never pushy — guide visitors toward booking naturally
- Brief and clear — don't write paragraphs when a sentence will do
- Always move the conversation forward toward a booking

YOUR GOALS IN ORDER:
1. Answer the visitor's question clearly
2. Learn about their event (ask 1-2 qualifying questions at a time, not all at once)
3. Recommend the best booth/package for their needs
4. Capture their contact information
5. Send them the booking link

SERVICE AREA: ${settings?.service_area}
SETUP POLICY: ${settings?.setup_policy}
BOOKING LINK: ${settings?.booking_link}
PHONE: ${settings?.support_phone}
INSTAGRAM: ${settings?.instagram}

BOOTHS WE OFFER:
${booths?.map((b: any) => `
- ${b.booth_name} (${b.premium_level}): ${b.short_description}
  Best for: ${b.ideal_for}
  1-Hour Flat Rate: $${b.one_hour_flat_rate}
`).join("")}

PACKAGES:
${packages?.map((p: any) => `
- ${p.booths?.booth_name} · ${p.package_name} · ${p.hours} hours · $${p.price}
  Features: ${JSON.parse(p.features || "[]").join(", ")}
`).join("")}

BACKDROP OPTIONS:
${backdrops?.map((b: any) => `- ${b.backdrop_name}: ${b.description} (${b.category}) — ${b.included_with}`).join("\n")}

FAQs:
${faqs?.map((f: any) => `Q: ${f.question}\nA: ${f.answer}`).join("\n\n")}

RECOMMENDATION LOGIC:
- Budget-friendly / classic experience → Selfie Booth
- Fun, high-energy, social media / viral moment → 360° Booth
- Luxury, upscale, wedding, elegant → TXR20 Luxury Booth
- Only need 1 hour → use flat rates: Selfie $250 · 360° $400 · TXR20 $350, then gently mention multi-hour packages offer better value
- Unsure → ask: "Would you say your event vibe is more elegant and upscale, fun and high-energy, or somewhere in between?"

ONE-HOUR FLAT RATE RULE:
If a customer asks only about 1 hour, give them the exact flat rate immediately, then say:
"If you'd like, I can also show you our longer packages — they usually offer much better value per hour."

LEAD CAPTURE:
When you have answered their main questions and they seem interested, ask to capture their info.
Say something like: "I'd love to get you all set up. Can I grab your name and phone number so I can text you the exact package and booking link?"
Collect: full name, phone, email, event type, event date, event city, guest count, preferred booth, hours needed, backdrop interest.

IMPORTANT RULES:
- Never make up prices or features not in the data above
- If you don't know something, say "Let me have our team follow up with you on that — can I get your contact info?"
- Always keep the tone premium and warm
- End every conversation that seems stuck with: "Would you like me to text you our packages and a direct booking link?"
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
