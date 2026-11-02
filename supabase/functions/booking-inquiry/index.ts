import { createClient } from 'npm:@supabase/supabase-js@2';
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { z } from 'npm:zod@3';
import { EventStyleSchema } from '../_shared/event-style.ts';

const ServiceSchema = z.object({ id: z.string().max(50), name: z.string().max(100), answers: z.record(z.string().max(100), z.string().max(2000)) });
const Schema = z.object({ id: z.string().uuid(), fields: z.record(z.string().max(100), z.string().max(5000)), services: z.array(ServiceSchema).max(11).optional(), addons: z.array(z.string().max(100)).max(30).optional(), eventStyle: EventStyleSchema, botcheck: z.boolean().default(false) }).refine(d => !d.botcheck);
const reply = (body: unknown, status = 200) => new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
Deno.serve(async req => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  if (req.method !== 'POST') return reply({ error: 'Method not allowed' }, 405);
  const url = Deno.env.get('SUPABASE_URL'); const key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
  if (!url || !key) return reply({ error: 'Service unavailable' }, 503);
  const db = createClient(url, key);
  try {
    if (Number(req.headers.get('content-length') || 0) > 27 * 1024 * 1024) return reply({ error: 'Request too large' }, 413);
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(ip));
    const ipHash = Array.from(new Uint8Array(digest), x => x.toString(16).padStart(2, '0')).join('');
    const { data: allowed, error: rateError } = await db.rpc('allow_booking_request', { ip_hash: ipHash });
    if (rateError || !allowed) return reply({ error: 'Too many requests. Please try later.' }, 429);
    if (req.headers.get('content-type')?.includes('multipart/form-data')) {
      const fd = await req.formData(); const files = fd.getAll('photos');
      if (!files.length || files.length > 5) return reply({ error: 'Choose up to 5 photos' }, 400);
      const folder = crypto.randomUUID(); const uploaded: { path: string; name: string }[] = [];
      for (const file of files) {
        if (!(file instanceof File) || file.size > 5 * 1024 * 1024 || !['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) return reply({ error: 'Invalid photo' }, 400);
        const bytes = new Uint8Array(await file.arrayBuffer());
        const jpg = bytes[0] === 255 && bytes[1] === 216 && bytes[2] === 255;
        const png = bytes[0] === 137 && bytes[1] === 80 && bytes[2] === 78 && bytes[3] === 71;
        const webp = new TextDecoder().decode(bytes.slice(0, 4)) === 'RIFF' && new TextDecoder().decode(bytes.slice(8, 12)) === 'WEBP';
        if (!(file.type === 'image/jpeg' && jpg || file.type === 'image/png' && png || file.type === 'image/webp' && webp)) return reply({ error: 'Invalid photo content' }, 400);
        const ext = file.type === 'image/jpeg' ? 'jpg' : file.type === 'image/png' ? 'png' : 'webp';
        const path = `${folder}/${crypto.randomUUID()}.${ext}`;
        const { error } = await db.storage.from('booking-inspiration').upload(path, bytes, { contentType: file.type });
        if (error) throw error;
        uploaded.push({ path, name: file.name.slice(0, 255) });
      }
      return reply({ photos: uploaded });
    }
    const parsed = Schema.safeParse(await req.json());
    if (!parsed.success) return reply({ error: 'Invalid inquiry details' }, 400);
    const d = parsed.data;
    if (!d.fields['Full Name']?.trim() || !z.string().email().safeParse(d.fields.Email).success || !d.fields.Phone?.trim() || !d.fields['Event Type'] || !/^\d{4}-\d{2}-\d{2}$/.test(d.fields['Event Date'] || '') || !d.fields['Venue / Location']?.trim()) return reply({ error: 'Missing event details' }, 400);
    const { error } = await db.from('booking_inquiries').upsert({ id: d.id, fields: { ...d.fields, ...(d.services ? { Services: d.services, Addons: d.addons || [] } : {}) }, event_style: d.eventStyle });
    if (error) throw error;
    const photoLinks: string[] = [];
    for (const photo of d.eventStyle.photos) {
      const { data } = await db.storage.from('booking-inspiration').createSignedUrl(photo.path, 604800);
      if (data) photoLinks.push(`${photo.name}: ${data.signedUrl}`);
    }
    return reply({ success: true, photoLinks });
  } catch { return reply({ error: 'Unable to save inquiry' }, 500); }
});