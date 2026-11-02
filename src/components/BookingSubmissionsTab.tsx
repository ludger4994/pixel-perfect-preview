import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { emptyEventStyle, eventStyleFields, type EventStyle } from '@/lib/event-style';
import { Button } from '@/components/ui/button';

type Submission = { id: string; fields: Record<string, string>; style: EventStyle; created: string; kind: string };
export default function BookingSubmissionsTab() {
  const [rows, setRows] = useState<Submission[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => { (async () => {
    const [inquiries, bookings] = await Promise.all([
      supabase.from('booking_inquiries').select('*').order('created_at', { ascending: false }),
      supabase.from('bookings').select('*').order('created_at', { ascending: false }),
    ]);
    if (inquiries.error || bookings.error) setError('Booking details could not be loaded.');
    setRows([
      ...(inquiries.data || []).map(r => ({ id: r.id, fields: r.fields as Record<string, string>, style: { ...emptyEventStyle, ...r.event_style as object } as EventStyle, created: r.created_at, kind: 'Inquiry' })),
      ...(bookings.data || []).map(r => ({ id: r.id, fields: { 'Full Name': `${r.first_name} ${r.last_name || ''}`, Email: r.email, Phone: r.phone, 'Event Date': r.event_date, 'Event Type': r.event_type, Package: r.package_name, Venue: r.venue || '', Notes: r.notes || '' }, style: { ...emptyEventStyle, ...r.event_style as object } as EventStyle, created: r.created_at, kind: 'Package booking' })),
    ].sort((a, b) => b.created.localeCompare(a.created)));
    setLoading(false);
  })(); }, []);
  return <div>
    <h2 className="font-heading text-xl mb-6">Booking inquiries & event style</h2>
    {loading && <p role="status">Loading bookings…</p>}
    {error && <p role="alert" className="text-destructive">{error}</p>}
    {!loading && !error && !rows.length && <p className="text-muted-foreground">No booking submissions yet.</p>}
    {rows.map(row => <details key={row.id} className="border-b border-border py-4">
      <summary className="cursor-pointer text-foreground">{row.fields['Full Name']} · {row.fields['Event Date']} · {row.kind}</summary>
      <dl className="grid sm:grid-cols-2 gap-4 py-5 text-sm">
        {Object.entries({ ...row.fields, ...eventStyleFields(row.style) }).filter(([, v]) => v).map(([key, value]) => <div key={key}><dt className="text-muted-foreground">{key}</dt><dd className="text-foreground break-words whitespace-pre-wrap">{value}</dd></div>)}
      </dl>
      <div className="flex flex-wrap gap-2 pb-4">{row.style.photos.map(photo => <Button key={photo.path} variant="outline" size="sm" onClick={async () => {
        const tab = window.open('about:blank', '_blank');
        if (tab) tab.opener = null;
        const { data, error } = await supabase.storage.from('booking-inspiration').createSignedUrl(photo.path, 300);
        if (error || !data) { tab?.close(); setError('The inspiration photo could not be opened.'); return; }
        if (tab) tab.location.href = data.signedUrl;
      }}>{photo.name}</Button>)}</div>
    </details>)}
  </div>;
}