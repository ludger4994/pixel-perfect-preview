import { useId, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { type EventStyle, recommendBackdrops } from '@/lib/event-style';
import './EventStyleSection.css';

type Props = { value: EventStyle; onChange: (s: EventStyle) => void; onUploading: (busy: boolean) => void };
export default function EventStyleSection({ value, onChange, onUploading }: Props) {
  const id = useId();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const update = (key: keyof EventStyle, text: string) => onChange({ ...value, [key]: text, ...(key === 'florals' && text !== 'Yes' ? { flowerColors: '', flowerTypes: '' } : {}) });
  const field = (key: 'linens' | 'decorations' | 'flowerColors' | 'flowerTypes' | 'theme' | 'inspirationLink', label: string, placeholder: string) => (
    <div className="style-field"><label htmlFor={`${id}-${key}`}>{label}</label><input id={`${id}-${key}`} name={key} type={key === 'inspirationLink' ? 'url' : 'text'} value={value[key]} onChange={e => update(key, e.target.value)} placeholder={placeholder} maxLength={key === 'theme' || key === 'inspirationLink' ? 2000 : 500} /></div>
  );
  const suggestions = recommendBackdrops(value);
  return <section className="event-style-section" aria-labelledby={`${id}-heading`}>
    <h2 id={`${id}-heading`}>Let's Match Your Event's Style</h2>
    <p>These details help us design your setup to beautifully complement your venue, decorations, and overall event theme.</p>
    {field('linens', 'What color linens will you be using?', 'Example: Ivory, champagne, white, black...')}
    {field('decorations', 'What colors are your event decorations?', 'Example: White, gold, sage green, blush pink...')}
    <div className="style-field" role="group" aria-labelledby={`${id}-floral-label`}>
      <span className="style-question" id={`${id}-floral-label`}>Will your event include floral decorations?</span>
      <div className="style-options">{(['Yes', 'No', 'Not Sure Yet'] as const).map(option => <label key={option}><input type="radio" name="Floral Decorations" value={option} checked={value.florals === option} onChange={() => update('florals', option)} />{option}</label>)}</div>
      {value.florals === 'Yes' && <div className="style-flowers">{field('flowerColors', 'What colors will your flowers be?', 'Example: White, blush pink, champagne...')}{field('flowerTypes', 'What types of flowers will you be using?', "Example: Roses, hydrangeas, orchids, baby's breath...")}</div>}
    </div>
    {field('theme', 'Do you have an event theme or inspiration photos?', 'Optional — share your event theme or inspiration...')}
    {field('inspirationLink', 'Link to inspiration photos (Instagram, Pinterest, etc.)', 'https://')}
    <div className="style-field"><label htmlFor={`${id}-photos`}>Inspiration photos (optional)</label>
      <input id={`${id}-photos`} type="file" accept="image/jpeg,image/png,image/webp" multiple disabled={busy} onChange={async e => {
        const input = e.currentTarget; const files = Array.from(input.files || []); if (!files.length) return;
        setError('');
        if (files.length > 5 || files.some(f => f.size > 5 * 1024 * 1024 || !['image/jpeg', 'image/png', 'image/webp'].includes(f.type))) { setError('Choose up to 5 JPG, PNG, or WebP photos, each under 5 MB.'); input.value = ''; return; }
        setBusy(true); onUploading(true);
        try { const body = new FormData(); files.forEach(f => body.append('photos', f));
          const { data, error: uploadError } = await supabase.functions.invoke('booking-inquiry', { body });
          if (uploadError || !data?.photos) throw new Error('Upload failed');
          onChange({ ...value, photos: data.photos });
        } catch { setError('Photos could not be uploaded. Try again or share an inspiration link.'); }
        finally { setBusy(false); onUploading(false); input.value = ''; }
      }} />
      {busy && <p role="status">Uploading photos…</p>}
      {error && <p role="alert" className="style-error">{error}</p>}
      <ul className="style-photo-list">{value.photos.map(photo => <li key={photo.path}>{photo.name}</li>)}</ul>
    </div>
    {suggestions.length > 0 && <p><strong>Coordinated backdrop options:</strong> {suggestions.join(' · ')}</p>}
    <p className="style-note">Your answers help us coordinate your photo booth, backdrop, and decorative setup with the look and feel of your celebration.</p>
  </section>;
}