import { useEffect, useId, useRef, useState } from 'react';
import { ChevronDown, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { experiences } from '@/lib/booking-experiences';
type Props = { selected: string[]; onToggle: (id: string) => void; disabled?: boolean };
export default function BookingProductSelect({ selected, onToggle, disabled }: Props) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const id = useId();
  const wrapper = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: PointerEvent) => { if (event.target instanceof Node && !wrapper.current?.contains(event.target)) setOpen(false); };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, []);
  return <div className="booking-product-picker" ref={wrapper} onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); } }}>
    <label id={`${id}-label`}>Which experiences are you interested in?</label>
    <p>Select as many experiences as you'd like. We'll customize the questions based on your selections.</p>
    <Button ref={trigger} variant="outline" type="button" className="booking-product-trigger" aria-labelledby={`${id}-label`} aria-expanded={open} aria-controls={`${id}-options`} disabled={disabled} onClick={() => setOpen(!open)}><span>{selected.length ? `${selected.length} experiences selected` : 'Select your experiences...'}</span><ChevronDown /></Button>
    {open && <div className="booking-product-options" id={`${id}-options`}><div className="booking-product-search"><Search size={18} /><input autoFocus aria-label="Search products" placeholder="Search experiences…" value={search} onChange={event => setSearch(event.target.value)} /></div><div className="booking-product-list" role="group" aria-label="Available experiences">{experiences.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item => <label key={item.id} className={selected.includes(item.id) ? 'is-selected' : ''}><input type="checkbox" checked={selected.includes(item.id)} onChange={() => onToggle(item.id)} /><span>{item.name}</span></label>)}{!experiences.some(item => item.name.toLowerCase().includes(search.toLowerCase())) && <p>No matching experiences.</p>}</div></div>}
    {selected.length > 0 && <div className="booking-product-tags"><strong>Your Experiences ({selected.length} Selected)</strong><div>{experiences.filter(item => selected.includes(item.id)).map(item => <Button type="button" variant="outline" key={item.id} disabled={disabled} aria-label={`Remove ${item.name}`} onClick={() => onToggle(item.id)}>{item.name}<X size={14} /></Button>)}</div></div>}
  </div>;
}