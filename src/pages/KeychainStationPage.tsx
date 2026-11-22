import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Plus, RotateCcw, ArrowRight, Heart, Star, Flower2, Crown, Music, KeyRound, Camera, Gem, Sun, Moon, Clover, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReferenceNavigation from '@/components/ReferenceNavigation';
import ReferenceFooter from '@/components/ReferenceFooter';
import SEOHead from '@/components/SEOHead';
import { experiences, premiumBackdrops } from '@/lib/booking-experiences';
import { togglePreviewCharm } from '@/lib/keychain-preview';
import './reference-site.css';

const charmIcons = [Heart, Star, Flower2, Crown, Music, KeyRound, Camera, Gem, Sun, Moon, Clover, Circle];
const tiers = [{ title: 'The Keepsake Experience', text: 'An intimate keychain experience.' }, { title: 'The Signature Experience', text: 'Photo booth plus personalized keepsakes.' }, { title: 'The Grand Keepsake Experience', text: 'An extended experience for larger events.' }];
const keychainBooking = '/booking?experiences=photo-keychain';

function SectionTitle({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="keychain-section-heading"><span className="reference-eyebrow">{label}</span><h2>{children}</h2></div>;
}

export default function KeychainStationPage() {
  const [wristlet, setWristlet] = useState<number | null>(null);
  const [charms, setCharms] = useState<number[]>([]);
  const [photo, setPhoto] = useState('');
  const [photoError, setPhotoError] = useState('');
  const photoRef = useRef('');
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => () => { if (photoRef.current) URL.revokeObjectURL(photoRef.current); }, []);
  const effects = experiences.filter(item => ['sparks', 'clouds'].includes(item.id));
  const phone = experiences.find(item => item.id === 'telephone');
  return <div className="reference-site keychain-page">
    <SEOHead title="Keychain Station | Photo Booth Legends" description="Personalize a photo keychain with wristlets and charms, and explore Photo Booth Legends keepsake experiences for South Florida events." canonical="https://photoboothlegend.com/keychain-station" />
    <ReferenceNavigation keychain />
    <main><section className="keychain-intro" id="keychain"><span className="reference-eyebrow">The Signature Experience</span><h1>The Keychain<br /><em>Station.</em></h1><p>Your photo, your charms, your wristlet. Design a keepsake below and see it come together.</p></section>
      <section className="keychain-builder-section reference-container" aria-label="Build your keychain"><div className="keychain-builder">
        <div className="keychain-live-preview"><div className="keychain-preview-top"><span className="reference-eyebrow">Live Preview</span><Button type="button" variant="ghost" className="reference-light" onClick={() => { setWristlet(null); setCharms([]); }}><RotateCcw size={14} />Reset</Button></div>
          <div className="keychain-object"><div className="keychain-ring" /><div className={`keychain-wristlet${wristlet !== null ? ` wristlet-${wristlet}` : ''}`}><span>{wristlet === null ? 'Wristlet' : `Wristlet ${wristlet + 1}`}</span></div><div className="keychain-connector" /><div className="keychain-photo-frame">{photo ? <img src={photo} alt="Your uploaded photo" onError={() => { setPhotoError('This photo cannot be previewed. Please choose a JPG, PNG or WebP photo.'); setPhoto(''); }} /> : <div className="keychain-empty-photo"><Camera size={34} strokeWidth={1} /><strong>Your photo</strong></div>}</div><div className="keychain-hanging-charms">{charms.map(index => { const Icon = charmIcons[index]; return <div key={index}><span className="keychain-connector" /><span className="keychain-charm">{Icon && <Icon size={23} strokeWidth={1.4} />}</span></div>; })}</div></div>
          <div className="keychain-preview-summary" aria-live="polite"><span>Photo: <strong>{photo ? 'Added' : 'Not yet'}</strong></span><span>Wristlet: <strong>{wristlet === null ? 'None' : `Wristlet ${wristlet + 1}`}</strong></span><span>Charms: <strong>{charms.length} / 5</strong></span></div>
        </div>
        <div className="keychain-builder-controls"><section><div className="keychain-control-heading"><span>01</span><h2>Add your photo</h2></div><label className="keychain-upload"><input ref={inputRef} type="file" accept="image/*" aria-label="Upload a photo to preview" onChange={event => { const file = event.currentTarget.files?.[0]; if (!file) return; if (!file.type.startsWith('image/')) { setPhotoError('Please choose an image file.'); return; } if (photoRef.current) URL.revokeObjectURL(photoRef.current); const url = URL.createObjectURL(file); photoRef.current = url; setPhoto(url); setPhotoError(''); }} /><span><Plus size={22} /></span><div>Upload a photo to preview<small>Stays on your device, never uploaded</small></div></label>{photoError && <p role="alert">{photoError}</p>}</section>
          <section><div className="keychain-control-heading"><span>02</span><h2>Choose a wristlet</h2><small>Pick 1</small></div><div className="keychain-wristlet-options">{Array.from({ length: 6 }, (_, i) => <Button type="button" variant="outline" key={i} aria-pressed={wristlet === i} onClick={() => setWristlet(i)} className={`keychain-option${wristlet === i ? ' is-selected' : ''}`}><span aria-hidden="true" className={`keychain-wristlet-sample wristlet-${i}`} /><span>Wristlet {i + 1}</span>{wristlet === i && <Check className="keychain-option-check" size={14} />}</Button>)}</div></section>
          <section><div className="keychain-control-heading"><span>03</span><h2>Add charms</h2><small>Up to 5</small></div><div className="keychain-charm-options">{charmIcons.map((Icon, i) => <Button type="button" variant="outline" key={i} aria-pressed={charms.includes(i)} disabled={charms.length === 5 && !charms.includes(i)} onClick={() => setCharms(prev => togglePreviewCharm(prev, i))} className={`keychain-option${charms.includes(i) ? ' is-selected' : ''}`}><Icon size={28} strokeWidth={1.2} /><span>Charm {i + 1}</span>{charms.includes(i) && <Check className="keychain-option-check" size={14} />}</Button>)}</div></section>
          <Button asChild className="reference-dark keychain-book"><Link to={keychainBooking}>Book the Keychain Station<ArrowRight size={18} /></Link></Button>
        </div>
      </div></section>
      <section className="reference-container keychain-content-section" id="packages"><SectionTitle label="Packages">Choose your <em>experience.</em></SectionTitle><div className="keychain-tier-grid">{tiers.map((tier, i) => <article className={`keychain-tier${i === 1 ? ' keychain-tier-featured' : ''}`} key={tier.title}><span>{['I', 'II', 'III'][i]}</span><h3>{tier.title}</h3><p>{tier.text}</p><Button asChild className={i === 1 ? 'reference-light' : 'reference-light'}><Link to={keychainBooking}>Request a Quote</Link></Button></article>)}</div></section>
      <section className="reference-container keychain-content-section" id="backdrops"><div className="keychain-heading-row"><SectionTitle label="Backdrops">Set the <em>scene.</em></SectionTitle><p>Flower walls, shimmer walls and more.</p></div><div className="keychain-backdrop-grid">{[premiumBackdrops[0], premiumBackdrops[5], premiumBackdrops[6]].map(item => item && <figure key={item.name}><img src={item.image} alt={item.name} loading="lazy" /><figcaption>{item.name}</figcaption></figure>)}</div></section>
      <section className="reference-container keychain-content-section" id="sparks"><SectionTitle label="Special Effects">Cold sparks <em>&amp; clouds.</em></SectionTitle><div className="keychain-effect-grid">{effects.map(item => <article key={item.id}><img src={item.image} alt={item.name} loading="lazy" /><div><h3>{item.id === 'clouds' ? 'Clouds' : item.name}</h3><p>{item.id === 'sparks' ? 'A show-stopping moment for entrances and first dances.' : 'A dreamy cloud effect across the dance floor.'}</p></div></article>)}</div></section>
      <section className="reference-container keychain-content-section" id="phone"><div className="keychain-phone-section">{phone && <img src={phone.image} alt={phone.name} loading="lazy" />}<div><span className="reference-eyebrow">Audio &amp; Video</span><h2>The phone <em>booth.</em></h2><p>Guests pick up the phone and leave heartfelt messages you can replay for years.</p><Button asChild className="reference-dark"><Link to="/booking?experiences=telephone">Book Now<ArrowRight size={18} /></Link></Button></div></div></section>
      <section className="reference-container keychain-final"><Button asChild className="reference-light"><Link to="/packages">View Packages<ArrowRight size={20} /></Link></Button><Button asChild className="reference-dark"><Link to={keychainBooking}>Book Now<ArrowRight size={20} /></Link></Button></section>
    </main><ReferenceFooter keychain />
  </div>;
}