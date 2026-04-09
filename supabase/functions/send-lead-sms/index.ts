import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/twilio";

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadId, templateName } = await req.json();

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const TWILIO_API_KEY = Deno.env.get("TWILIO_API_KEY");
    if (!TWILIO_API_KEY) {
      console.warn("TWILIO_API_KEY not configured — SMS not sent");
      return new Response(
        JSON.stringify({ success: false, reason: "Twilio not configured" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Fetch lead
    const { data: lead } = await supabase
      .from("leads")
      .select("*")
      .eq("id", leadId)
      .single();

    // Fetch business settings
    const { data: settings } = await supabase
      .from("business_settings")
      .select("*")
      .limit(1)
      .single();

    // Fetch SMS template
    const { data: template } = await supabase
      .from("sms_templates")
      .select("*")
      .eq("template_name", templateName)
      .eq("active", true)
      .single();

    if (!lead || !template || !settings) {
      return new Response(
        JSON.stringify({ error: "Missing data" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    if (!lead.phone) {
      return new Response(
        JSON.stringify({ error: "No phone number for lead" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const firstName = lead.full_name?.split(" ")[0] || "there";
    let body = template.template_body
      .replace(/{{first_name}}/g, firstName)
      .replace(/{{recommended_booth}}/g, lead.preferred_booth || "our recommended package")
      .replace(/{{recommendation_reason}}/g, lead.recommendation || "it is the best fit for your event")
      .replace(/{{price}}/g, "")
      .replace(/{{booking_link}}/g, settings.booking_link);

    const fromNumber = settings.sms_from_number;
    if (!fromNumber) {
      console.warn("No SMS from number configured");
      return new Response(
        JSON.stringify({ success: false, reason: "No from number configured" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send via Twilio connector gateway
    const response = await fetch(`${GATEWAY_URL}/Messages.json`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": TWILIO_API_KEY,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        From: fromNumber,
        To: lead.phone,
        Body: body,
      }),
    });

    const result = await response.json();

    if (response.ok) {
      await supabase.from("leads").update({ sms_sent: true }).eq("id", leadId);
      return new Response(
        JSON.stringify({ success: true, sid: result.sid }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    throw new Error(`Twilio API error [${response.status}]: ${JSON.stringify(result)}`);
  } catch (e) {
    console.error("send-lead-sms error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
