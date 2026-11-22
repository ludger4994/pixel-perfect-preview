import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ReferenceNavigation from '@/components/ReferenceNavigation';
import ReferenceFooter from '@/components/ReferenceFooter';
import SEOHead from '@/components/SEOHead';
import { experiences, premiumBackdrops } from '@/lib/booking-experiences';
import eventPhoto from '@/assets/reference/event-celebration.jpg.asset.json';
import './reference-site.css';

const slides = [experiences.find(item => item.id === 'photo-keychain'), experiences.find(item => item.id === 'selfie'), experiences.find(item => item.id === 'lux'), premiumBackdrops[5], experiences.find(item => item.id === 'sparks')].filter(item => Boolean(item?.image)).map(item => ({ image: item?.image, name: item?.name || '' }));

export default function Index() {
  const [slide, setSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setSlide(i => (i + 1) % slides.length), 4500);
    return () => window.clearInterval(timer);
  }, [paused]);
  return <div className="reference-site reference-home"><SEOHead title="Photo Booth Legends | The Photobooth Experience You Need" description="Step in a guest. Walk out a legend. Explore South Florida photo booths, keychain keepsakes, special effects and guest books for your celebration." canonical="https://photoboothlegend.com/" /><ReferenceNavigation />
    <main><section className="reference-home-hero"><img className="reference-hero-photo" src={eventPhoto.url} alt="Guests celebrating around a photo booth at an elegant event" fetchPriority="high" /><div className="reference-hero-veil" /><div className="reference-home-lockup"><h1><span>The Photobooth</span><strong>Experience</strong><em>you need.</em></h1><span className="reference-fine-rule" /><p>Step in a guest. Walk out a legend.</p><small>Weddings · Quinceañeras · Corporate · Celebrations</small></div><a className="reference-scroll" href="#event-slideshow">Scroll<span /></a></section>
      <section className="reference-slideshow" id="event-slideshow" aria-label="Event slideshow" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}><div className="reference-reel">{slides.map((item, i) => <div className={`reference-slide${i === slide ? ' is-active' : ''}`} aria-hidden={i !== slide} key={item.name}><img src={item.image} alt={item.name} loading="lazy" /></div>)}</div><Button type="button" variant="ghost" size="icon" className="reference-slide-arrow reference-slide-prev" aria-label="Previous slide" onClick={() => setSlide(i => (i - 1 + slides.length) % slides.length)}><ArrowLeft /></Button><Button type="button" variant="ghost" size="icon" className="reference-slide-arrow reference-slide-next" aria-label="Next slide" onClick={() => setSlide(i => (i + 1) % slides.length)}><ArrowRight /></Button><div className="reference-slide-dots">{slides.map((item, i) => <Button type="button" variant="ghost" key={item.name} aria-label={`Go to slide ${i + 1}`} aria-pressed={slide === i} onClick={() => setSlide(i)} className={`reference-slide-dot${slide === i ? ' is-active' : ''}`}><span /></Button>)}</div></section>
      <section className="reference-home-cta"><span className="reference-countdown" aria-hidden="true">3 · 2 · 1</span><div><span className="reference-caps">Your cue</span><h2>Ready when <em>the flash is.</em></h2><p>Choose your experience, or save your date before someone else does.</p><div className="reference-home-cta-buttons"><Button asChild className="reference-light"><Link to="/packages">View Packages</Link></Button><Button asChild className="reference-gold"><Link to="/booking">Book Now<ArrowRight size={20} /></Link></Button></div></div></section>
    </main><ReferenceFooter />
  </div>;
}
