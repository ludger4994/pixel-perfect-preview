import { useRef, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Camera, KeyRound, Sparkles, Flower2, Phone, Video, Search, X, ShieldCheck, Loader2 } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import BookingNavigation from '@/components/BookingNavigation';
import BookingPersonalize from '@/components/BookingPersonalize';
import EventStyleSection from '@/components/EventStyleSection';
import { emptyEventStyle, eventStyleFields, normalizeEventStyle } from '@/lib/event-style';
import { experiences, serviceFields } from '@/lib/booking-experiences';
import { supabase } from '@/integrations/supabase/client';
import './booking-form.css';

const steps = ['Your Event', 'Your Experiences', 'Personalize', 'Special Touches', 'Review & Submit'];
const icons = { camera: Camera, key: KeyRound, sparkles: Sparkles, flower: Flower2, phone: Phone, video: Video };
const initialEvent: Record<string, string> = { 'Full Name': '', Phone: '', Email: '', 'Event Type': '', 'Event Date': '', 'Start Time': '', 'End Time': '', 'Hours of Coverage': '', 'Venue / Location': '', 'Venue Address': '', 'Indoor or Outdoor Event': '', 'Estimated Guest Count': '', 'Venue Access': '' };
const addOns = [{ name: 'Backdrop Upgrade', description: 'An elevated setting for your portraits.', compatible: true, icon: Flower2 }, { name: 'Props', description: 'Playful details for memorable photos.', compatible: true, icon: Sparkles }, { name: 'Guest Book', description: 'A collection of photos and handwritten wishes.', compatible: true, icon: KeyRound }, { name: 'Unlimited Prints', description: 'A printed memory for every guest.', compatible: true, icon: Camera }];

export default function BookingFormPage() {
  const [step, setStep] = useState(0);
  const [event, setEvent] = useState({ ...initialEvent });
  const [selected, setSelected] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, Record<string, string>>>({});
  const [extras, setExtras] = useState<string[]>([]);
  const [design, setDesign] = useState<Record<string, string>>({ 'Design Title': '', 'Design Theme': '', Notes: '' });
  const [eventStyle, setEventStyle] = useState({ ...emptyEventStyle });
  const [uploading, setUploading] = useState(false);
  const [inquiryId, setInquiryId] = useState(() => crypto.randomUUID());
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; msg: string } | null>(null);
  const [validation, setValidation] = useState('');
  const [search, setSearch] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const selectedExperiences = experiences.filter(item => selected.includes(item.id));
  const hasPhotoBooth = selectedExperiences.some(item => item.backdrop);
  const toggleService = (id: string) => { setSelected(prev => prev.includes(id) ? prev.filter(value => value !== id) : [...prev, id]); setValidation(''); };
  const changeAnswer = (id: string, key: string, value: string) => setAnswers(prev => ({ ...prev, [id]: { ...prev[id], [key]: value } }));
  const goTo = (next: number) => { setStep(next); setValidation(''); setResult(null); requestAnimationFrame(() => sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })); };
  const next = () => {
    if (step === 0 && !formRef.current?.reportValidity()) return;
    if (step === 0 && event['End Time'] && event['End Time'] === event['Start Time']) { setValidation('Please choose different start and end times.'); return; }
    if (step === 1 && !selected.length) { setValidation('Please select at least one experience.'); return; }
    goTo(Math.min(step + 1, 4));
  };
  const getFields = () => {
    const fields: Record<string, string> = { ...event, ...design, 'Selected Services': selectedExperiences.map(item => item.name).join(', '), ...serviceFields(selected, answers), ...eventStyleFields(eventStyle) };
    if (selected.includes('photo-keychain') || selected.includes('standalone-keychain')) fields['Add-On: Keychain Station'] = 'Yes, add the Keychain Station';
    if (hasPhotoBooth) extras.forEach(extra => { fields[`Add-On: ${extra}`] = 'Yes'; });
    return fields;
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (step !== 4) { next(); return; }
    if (uploading || sending) return;
    if (!selected.length) { goTo(1); setValidation('Please select at least one experience.'); return; }
    const bot = e.currentTarget.elements.namedItem('botcheck');
    const botcheck = bot instanceof HTMLInputElement && bot.checked;
    setSending(true); setResult(null);
    const fields = getFields();
    try {
      const { data: saved, error: saveError } = await supabase.functions.invoke('booking-inquiry', { body: { id: inquiryId, fields, eventStyle: normalizeEventStyle(eventStyle), botcheck } });
      if (saveError || !saved?.success) throw new Error('Unable to save inquiry');
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify({ access_key: 'b723116d-9c4c-4b2c-b438-3f8b9e045c37', subject: 'New Photo Booth Legends Booking Inquiry', from_name: 'Photo Booth Legends Website', ...fields, 'Inspiration Photo Uploads': (saved.photoLinks || []).join('\n'), botcheck }) });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) throw new Error('Email notification failed');
      setResult({ ok: true, msg: "Thank you! Your booking request was received. We'll contact you within 24 hours." });
      setEvent({ ...initialEvent }); setSelected([]); setAnswers({}); setExtras([]); setDesign({ 'Design Title': '', 'Design Theme': '', Notes: '' }); setEventStyle({ ...emptyEventStyle }); setInquiryId(crypto.randomUUID());
      formRef.current?.reset();
      sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    } catch {
      setResult({ ok: false, msg: "Something went wrong sending your request. Please text or call us at 954-548-5809 and we'll get you booked." });
    } finally { setSending(false); }
  };
  const field = (name: string, label: string, type = 'text', required = false, options?: string[], placeholder?: string) => <div className="booking-field" key={name}><label htmlFor={`event-${name.replace(/ /g, '-')}`}>{label}{required && <span className="booking-required"> *</span>}</label>{options ? <select id={`event-${name.replace(/ /g, '-')}`} name={name} required={required} value={event[name]} onChange={e => setEvent(prev => ({ ...prev, [name]: e.target.value }))}><option value="">Select one</option>{options.map(option => <option key={option}>{option}</option>)}</select> : <input id={`event-${name.replace(/ /g, '-')}`} name={name} type={type} required={required} min={type === 'number' ? 1 : undefined} autoComplete={name === 'Full Name' ? 'name' : name === 'Email' ? 'email' : name === 'Phone' ? 'tel' : undefined} maxLength={500} placeholder={placeholder} value={event[name]} onChange={e => setEvent(prev => ({ ...prev, [name]: e.target.value }))} />}</div>;

  return <div className="pbl-booking">
    <SEOHead title="Plan Your Legendary Event | Photo Booth Legends" description="Create your custom South Florida event experience. Choose photo booths, special effects and keepsakes, and request a personalized quote." canonical="https://photoboothlegend.com/booking" />
    <BookingNavigation />
    <section className="booking-intro"><span className="booking-eyebrow">PHOTO BOOTH LEGENDS · SOUTH FLORIDA</span><h1>Let's Make Your Event <em>Legendary</em></h1><p>From photo booths to unforgettable special effects, let's create the perfect experience for your celebration.</p><div className="booking-intro-note"><span />Choose your experiences, personalize the details, and receive a custom quote.<span /></div></section>
    <main className="booking-main" ref={sectionRef}>
      <nav className="booking-progress" aria-label="Booking progress">{steps.map((label, index) => <Button type="button" key={label} variant="ghost" className={`booking-step${index === step ? ' is-active' : ''}${index < step ? ' is-complete' : ''}`} disabled={index > step || sending || Boolean(result?.ok)} aria-current={index === step ? 'step' : undefined} onClick={() => goTo(index)}><span className="booking-step-number">{index < step ? <Check size={16} /> : String(index + 1).padStart(2, '0')}</span><span>{label}</span></Button>)}</nav>
      {result?.ok ? <section className="booking-confirmation" aria-live="polite"><span className="booking-confirmation-mark"><Check size={32} /></span><span className="booking-eyebrow">A LEGENDARY EVENT STARTS HERE</span><h2>Your celebration is one step closer.</h2><p role="status">{result.msg}</p><Button type="button" className="booking-primary" onClick={() => { setResult(null); goTo(0); }}>Plan another event<ArrowRight /></Button><Link to="/gallery">Explore the gallery</Link></section> : <form ref={formRef} onSubmit={handleSubmit}>
        <input type="checkbox" name="botcheck" className="booking-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <div className="booking-form-heading"><div><span className="booking-eyebrow">STEP {String(step + 1).padStart(2, '0')} / 05</span><h2>{steps[step]}</h2></div><span className="booking-heading-detail">{step === 0 ? 'A few details. Endless possibilities.' : step === 1 ? 'Make it uniquely yours.' : step === 2 ? 'The details make the difference.' : step === 3 ? 'A little extra magic.' : 'Your celebration, beautifully considered.'}</span></div>
        {step === 0 && <div className="booking-event-content"><section className="booking-section"><div className="booking-section-title"><span className="booking-small-number">01</span><div><h3>Your celebration</h3><p>Every legendary experience starts with your event.</p></div></div><div className="booking-fields">{field('Event Type', 'Event Type', 'text', true, ['Wedding', 'Quinceañera', 'Prom / School Dance', 'Corporate Event', 'Birthday', 'Sweet 16', 'Baby Shower', 'Other'])}{field('Event Date', 'Event Date', 'date', true)}{field('Start Time', 'Event Start Time', 'time')}{field('End Time', 'Event End Time', 'time')}{field('Venue / Location', 'Venue Name', 'text', true, undefined, 'Venue name and city')}{field('Venue Address', 'Venue Address', 'text', false, undefined, 'Street address, city, ZIP')}{field('Indoor or Outdoor Event', 'Indoor or Outdoor Event', 'text', false, ['Indoor', 'Outdoor', 'Both', 'Not sure yet'])}{field('Estimated Guest Count', 'Estimated Guest Count', 'number', false, undefined, 'e.g. 120')}{field('Venue Access', 'Venue Access', 'text', false, ['Ground floor / direct access', 'Elevator available', 'Stairs', 'Other / not sure yet'])}{field('Hours of Coverage', 'Hours of Coverage', 'text', false, ['2 hours', '3 hours', '4 hours', '5+ hours', 'Not sure yet'])}</div></section>
          <section className="booking-section"><div className="booking-section-title"><span className="booking-small-number">02</span><div><h3>Your contact details</h3><p>Where we can reach you with your custom quote.</p></div></div><div className="booking-fields">{field('Full Name', 'Full Name', 'text', true)}{field('Phone', 'Phone', 'tel', true)}{field('Email', 'Email', 'email', true)}</div></section>
          <EventStyleSection value={eventStyle} onChange={setEventStyle} onUploading={setUploading} />
        </div>}
        {step === 1 && <section className="booking-experiences"><div className="booking-search"><Search size={18} /><input aria-label="Search experiences" placeholder="Find your perfect experience…" value={search} onChange={e => setSearch(e.target.value)} />{search && <Button type="button" variant="ghost" size="icon" aria-label="Clear search" onClick={() => setSearch('')}><X /></Button>}</div>
          {['Photo experiences', 'Special effects', 'Keepsakes & guest books'].map(category => { const items = experiences.filter(item => item.category === category && `${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase())); return items.length ? <div className="booking-category" key={category}><h3>{category}</h3><div className="booking-service-grid">{items.map(item => { const Icon = icons[item.icon]; const active = selected.includes(item.id); return <Button key={item.id} type="button" variant="outline" aria-pressed={active} className={`booking-service-card${active ? ' is-selected' : ''}`} onClick={() => toggleService(item.id)}>{item.image ? <img src={item.image} alt={item.name} loading="lazy" /> : <div className="booking-service-symbol"><Icon size={36} strokeWidth={1} /></div>}<span className="booking-service-text"><strong>{item.name}</strong><span>{item.description}</span></span><span className="booking-service-checkbox">{active && <Check size={14} />}</span></Button>; })}</div></div> : null; })}
          {!experiences.some(item => `${item.name} ${item.description}`.toLowerCase().includes(search.toLowerCase())) && <p role="status">No experiences match your search.</p>}
        </section>}
        {step === 2 && <BookingPersonalize selected={selected} answers={answers} onChange={changeAnswer} />}
        {step === 3 && <><section className="booking-section"><div className="booking-section-title"><h3>The finishing touches</h3></div>{hasPhotoBooth && <div className="booking-addon-grid">{addOns.map(extra => { const Icon = extra.icon; return <Button type="button" variant="outline" key={extra.name} aria-pressed={extras.includes(extra.name)} className={`booking-addon${extras.includes(extra.name) ? ' is-selected' : ''}`} onClick={() => setExtras(prev => prev.includes(extra.name) ? prev.filter(item => item !== extra.name) : [...prev, extra.name])}><Icon size={24} /><span><strong>{extra.name}</strong><span>{extra.description}</span></span>{extras.includes(extra.name) && <Check />}</Button>; })}</div>}<div className="booking-fields">{['Design Title', 'Design Theme', 'Notes'].map(name => <div className={`booking-field${name !== 'Design Title' ? ' booking-field-wide' : ''}`} key={name}><label htmlFor={`design-${name}`}>{name === 'Notes' ? 'Anything else we should know?' : name}</label>{name === 'Design Title' ? <input id={`design-${name}`} name={name} maxLength={500} placeholder="e.g. Maria & James Wedding" value={design[name]} onChange={e => setDesign(prev => ({ ...prev, [name]: e.target.value }))} /> : <textarea id={`design-${name}`} name={name} maxLength={2000} value={design[name]} onChange={e => setDesign(prev => ({ ...prev, [name]: e.target.value }))} />}</div>)}</div></section></>}
        {step === 4 && <section className="booking-review"><div className="booking-review-title"><h3>Your event at a glance</h3><Button type="button" variant="link" onClick={() => goTo(0)}>Edit event</Button></div><dl>{Object.entries(event).filter(([, value]) => value).map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}</dl><div className="booking-review-title"><h3>Your experiences</h3><Button type="button" variant="link" onClick={() => goTo(1)}>Edit experiences</Button></div><div className="booking-review-services">{selectedExperiences.map(item => <span key={item.id}><Check size={14} />{item.name}</span>)}</div><div className="booking-review-title"><h3>Personal details & special touches</h3><Button type="button" variant="link" onClick={() => goTo(2)}>Edit details</Button></div><dl>{Object.entries({ ...serviceFields(selected, answers), ...eventStyleFields(eventStyle), ...design, ...(hasPhotoBooth && extras.length ? { 'Special Touches': extras.join(', ') } : {}) }).filter(([, value]) => value).map(([key, value]) => <div key={key}><dt>{key}</dt><dd>{value}</dd></div>)}{eventStyle.photos.length > 0 && <div><dt>Inspiration photos</dt><dd>{eventStyle.photos.map(photo => photo.name).join(', ')}</dd></div>}</dl><p className="booking-quote-note"><ShieldCheck size={18} />A custom quote request — no payment required.</p></section>}
        {selected.length > 0 && step > 0 && step < 4 && <aside className="booking-selected-summary" aria-label="Selected services"><span>{selected.length} {selected.length === 1 ? 'experience' : 'experiences'} selected</span><div>{selectedExperiences.map(item => <Button type="button" variant="outline" key={item.id} onClick={() => toggleService(item.id)} aria-label={`Remove ${item.name}`}>{item.name}<X size={12} /></Button>)}</div></aside>}
        {validation && <p className="booking-error" role="alert">{validation}</p>}{result && !result.ok && <p className="booking-error" role="alert">{result.msg}</p>}
        <div className="booking-form-actions"><div>{step > 0 && <Button type="button" variant="ghost" disabled={sending} onClick={() => goTo(step - 1)}><ArrowLeft />Back</Button>}</div><span className="booking-action-note">{step === 0 ? '* Required event details' : 'Your event. Your vision.'}</span>{step < 4 ? <Button type="button" className="booking-primary" disabled={uploading} onClick={next}>Continue<ArrowRight /></Button> : <Button type="submit" className="booking-primary" disabled={sending || uploading}>{sending ? <><Loader2 className="animate-spin" />Sending…</> : <>Submit Booking Request<ArrowRight /></>}</Button>}</div>
      </form>}
      <div className="booking-assistance"><span>Something special in mind?</span><a href="tel:9545485809">Let's talk <ArrowRight size={14} /> 954-548-5809</a></div>
    </main>
    <footer className="booking-footer"><Link to="/" className="booking-wordmark">Photo Booth<span>LEGENDS</span></Link><p>Extraordinary moments. Beautifully remembered.</p><nav aria-label="Booking footer"><Link to="/about">Our story</Link><Link to="/faq">FAQ</Link><Link to="/contact">Contact</Link><a href="https://www.instagram.com/photoboothlegends/" target="_blank" rel="noreferrer">Instagram</a></nav><span>Photo Booth Legends · South Florida</span></footer>
  </div>;
}
