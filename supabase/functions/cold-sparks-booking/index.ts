import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { z } from 'https://esm.sh/zod@3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const Schema = z.object({
  fullName: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(1).max(40),
  email: z.string().trim().email().max(255),
  eventType: z.string().trim().min(1).max(80),
  eventDate: z.string().trim().min(1).max(20),
  venueName: z.string().trim().min(1).max(200),
  venueAddress: z.string().trim().min(1).max(300),
  eventStart: z.string().trim().min(1).max(20),
  sparkTime: z.string().trim().min(1).max(20),
  machines: z.string().trim().min(1).max(60),
  machinesOther: z.string().trim().max(120).optional().default(''),
  moments: z.array(z.string().max(80)).min(1).max(12),
  momentOther: z.string().trim().max(200).optional().default(''),
  approval: z.string().trim().min(1).max(60),
  venueContactName: z.string().trim().max(150).optional().default(''),
  venueContactInfo: z.string().trim().max(200).optional().default(''),
  agree1: z.boolean(),
  agree2: z.boolean(),
  agree3: z.boolean(),
  signature: z.string().trim().min(1).max(150),
  signDate: z.string().trim().min(1).max(20),
  reference: z.string().trim().min(1).max(40),
})

const esc = (s: string) =>
  String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const parsed = Schema.safeParse(await req.json())
    if (!parsed.success) {
      return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }
    const d = parsed.data

    if (!d.agree1 || !d.agree2 || !d.agree3) {
      return new Response(JSON.stringify({ error: 'All three agreements are required.' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    )

    const { error } = await supabase.from('cold_sparks_bookings').insert({
      reference: d.reference,
      full_name: d.fullName,
      phone: d.phone,
      email: d.email,
      event_type: d.eventType,
      event_date: d.eventDate,
      venue_name: d.venueName,
      venue_address: d.venueAddress,
      event_start: d.eventStart,
      spark_time: d.sparkTime,
      machines: d.machines,
      machines_other: d.machinesOther || null,
      moments: d.moments,
      moment_other: d.momentOther || null,
      approval: d.approval,
      venue_contact_name: d.venueContactName || null,
      venue_contact_info: d.venueContactInfo || null,
      agree_accurate: d.agree1,
      agree_venue_approval: d.agree2,
      agree_safety: d.agree3,
      signature: d.signature,
      sign_date: d.signDate,
    })

    if (error) {
      console.error('Insert error:', error)
      return new Response(JSON.stringify({ error: 'Failed to save submission' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      })
    }

    const rows: [string, string][] = [
      ['Reference', d.reference],
      ['Full name', d.fullName],
      ['Phone', d.phone],
      ['Email', d.email],
      ['Event type', d.eventType],
      ['Event date', d.eventDate],
      ['Venue name', d.venueName],
      ['Venue address', d.venueAddress],
      ['Event start time', d.eventStart],
      ['Cold spark requested time', d.sparkTime],
      ['Machines', d.machines + (d.machinesOther ? ` (${d.machinesOther})` : '')],
      ['Moments', d.moments.join(', ') + (d.momentOther ? ` (${d.momentOther})` : '')],
      ['Venue approved', d.approval],
      ['Venue contact name', d.venueContactName || '—'],
      ['Venue contact phone / email', d.venueContactInfo || '—'],
      ['Confirms info is accurate', d.agree1 ? 'Yes' : 'No'],
      ['Understands venue approval required', d.agree2 ? 'Yes' : 'No'],
      ['Agrees to safety instructions', d.agree3 ? 'Yes' : 'No'],
      ['Signature', d.signature],
      ['Sign date', d.signDate],
    ]

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;">
        <h1 style="color:#c9a24b;font-size:22px;margin:0 0 4px;">New Cold Sparks Rental Form</h1>
        <p style="color:#666;font-size:13px;margin:0 0 18px;">Photo Booth Legends</p>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 10px;border-bottom:1px solid #eee;color:#666;width:44%;">${esc(k)}</td><td style="padding:8px 10px;border-bottom:1px solid #eee;color:#111;"><strong>${esc(v)}</strong></td></tr>`,
            )
            .join('')}
        </table>
      </div>`

    const resendKey = Deno.env.get('RESEND_API_KEY')
    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: Deno.env.get('RESEND_FROM') || 'Photo Booth Legends <onboarding@resend.dev>',
          to: ['photoboothlegends@gmail.com'],
          reply_to: d.email,
          subject: `Cold Sparks Form — ${d.fullName} — ${d.eventDate}`,
          html,
        }),
      })
      if (!res.ok) console.error('Resend error:', res.status, await res.text())
    } else {
      console.warn('RESEND_API_KEY not set — email not sent for', d.reference)
    }

    return new Response(JSON.stringify({ success: true, reference: d.reference }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  } catch (e) {
    console.error('cold-sparks-booking error:', e)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    })
  }
})
