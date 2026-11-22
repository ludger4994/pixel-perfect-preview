import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BookingNavigation from '@/components/BookingNavigation';
import SEOHead from '@/components/SEOHead';
import { experiences, bookingBackdrops, premiumBackdrops, compatibleAddons, type Experience } from '@/lib/booking-experiences';
import { bookingSelectionUrl, personalizationChips } from '@/lib/package-selection';
import './booking-form.css';
import './packages.css';

const groups = [
  { number: '01', title: 'Photo Experiences', subtitle: 'The heart of the party. Every guest leaves with a memory.', ids: ['photo-keychain', 'selfie', 'lux', '360', 'retro'] },
  { number: '02', title: 'Special Effects', subtitle: 'Moments that make the whole room stop and watch.', ids: ['sparks', 'clouds'] },
  { number: '03', title: 'Audio & Video Guest Books', subtitle: 'Voices and wishes you can replay for years.', ids: ['telephone', 'video-guestbook'] },
];

function ServiceCard({ experience, selected, onToggle }: { experience: Experience; selected: boolean; onToggle: () => void }) {
  const signature = experience.id === 'photo-keychain';
  const addons = compatibleAddons([experience.id]);
  return <article className={`package-service${signature ? ' package-signature' : ''}${selected ? ' is-selected' : ''}`}>
    <div className="package-photo">{experience.image && <img src={experience.image} alt={experience.name} loading={signature ? 'eager' : 'lazy'} />}{signature && <span className="package-signature-badge">Signature</span>}{selected && <span className="package-photo-check"><Check size={17} /></span>}</div>
    <div className="package-service-body"><h3>{experience.name}</h3><p>{experience.description}</p><span className="package-detail-label">You'll personalize</span><div className="package-chips">{personalizationChips(experience).map(chip => <span key={chip}>{chip}</span>)}</div><p className="package-addons"><strong>Add-ons</strong> {addons.map(addon => addon.name).join(' · ')}</p><Button type="button" variant={selected ? 'default' : 'outline'} aria-label={`${selected ? 'Deselect' : 'Select'} ${experience.name}`} aria-pressed={selected} className="package-select" onClick={onToggle}>{selected ? <>Selected <Check size={16} /></> : <>Select Experience <Plus size={16} /></>}</Button></div>
  </article>;
}

function CategoryHeading({ number, title, subtitle }: { number: string; title: string; subtitle: string }) {
  return <div className="package-category-heading"><span className="booking-small-number">{number}</span><div><h2>{title}</h2><p>{subtitle}</p></div></div>;
}

export default function PackagesPage() {
  const [selected, setSelected] = useState<string[]>([]);
  const selectedNames = experiences.filter(item => selected.includes(item.id)).map(item => item.name);
  const toggle = (id: string) => setSelected(prev => prev.includes(id) ? prev.filter(value => value !== id) : [...prev, id]);
  return <div className="pbl-booking pbl-packages">
    <SEOHead title="Photo Booth Experiences & Packages | Photo Booth Legends" description="Choose South Florida photo booths, keychain keepsakes, special effects, audio and video guest books, and beautiful backdrops for your custom event quote." canonical="https://photoboothlegend.com/packages" />
    <BookingNavigation />
    <section className="booking-intro package-intro"><span className="booking-eyebrow">PHOTO BOOTH LEGENDS · SOUTH FLORIDA</span><h1>Choose Your <em>Experiences</em></h1><p>From photo booths to unforgettable special effects, pick everything you'd love at your celebration. We'll send a custom quote.</p><div className="booking-intro-note"><span />Select one or more · personalize the details · receive a custom quote<span /></div></section>
    <main className="packages-main" id="experiences">{groups.map(group => <section className="package-category" key={group.number}><CategoryHeading {...group} /><div className={`package-service-grid${group.number === '01' ? ' package-photo-grid' : ''}`}>{group.ids.map(id => { const experience = experiences.find(item => item.id === id); return experience ? <ServiceCard key={id} experience={experience} selected={selected.includes(id)} onToggle={() => toggle(id)} /> : null; })}</div></section>)}
      <section className="package-category package-backdrop-collection"><CategoryHeading number="04" title="Backdrop Collection" subtitle="Pair your photo experience with a beautiful backdrop, or let us choose one for you." /><h3 className="package-backdrop-group">Standard Backdrops</h3><div className="package-backdrop-grid">{bookingBackdrops.map(backdrop => <figure key={backdrop.name}><img src={backdrop.image} alt={backdrop.name} loading="lazy" /><figcaption>{backdrop.name}</figcaption></figure>)}</div><div className="package-premium-heading"><h3 className="package-backdrop-group">Flower & Shimmer Walls</h3><span>Premium Backdrops</span></div><div className="package-backdrop-grid">{premiumBackdrops.map(backdrop => <figure className="package-premium-backdrop" key={backdrop.name}><div><img src={backdrop.image} alt={backdrop.name} loading="lazy" /><span className="package-premium-badge">Premium</span></div><figcaption>{backdrop.name}</figcaption></figure>)}</div></section>
      <div className="booking-assistance"><span>Something special in mind?</span><a href="tel:9545485809">Let's talk <ArrowRight size={14} /> 954-548-5809</a></div>
    </main>
    <aside className="package-selection-bar" aria-label="Selected experiences"><div className="package-selection-inner"><div className="package-selection-summary" aria-live="polite"><span className="package-selection-count">{selected.length}</span><div><strong>{selected.length === 0 ? 'No experiences selected yet' : `${selected.length} ${selected.length === 1 ? 'experience' : 'experiences'} selected`}</strong><p>{selectedNames.length ? selectedNames.join(' · ') : 'Your celebration starts here.'}</p></div></div><Button asChild className="booking-primary package-continue"><Link to={bookingSelectionUrl(selected)}>Continue to Booking <ArrowRight size={16} /></Link></Button></div></aside>
  </div>;
}