import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Phone, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
const links = [
  { name: 'Home', href: '/' },
  { name: 'Photo Booths', children: [{ name: 'Selfie Booth', href: '/selfie-booth' }, { name: '360° Booth', href: '/360-booth' }, { name: 'Studio Booth', href: '/txr20-booth' }] },
  { name: 'Special Effects', children: [{ name: 'Cold Sparks', href: '/cold-sparks' }, { name: 'Dancing on the Clouds', href: '/dancing-on-the-clouds' }, { name: 'All Special Effects', href: '/special-effects' }] },
  { name: 'Events', children: [{ name: 'Weddings', href: '/weddings' }, { name: 'Corporate Events', href: '/corporate-events' }, { name: 'Birthdays & Parties', href: '/birthdays-private-parties' }, { name: 'Quinceañeras', href: '/quinceaneras' }, { name: 'Sweet 16', href: '/sweet-16' }, { name: 'Baby Showers', href: '/baby-showers' }, { name: 'School Events', href: '/school-events' }, { name: 'Brand Activations', href: '/brand-activations' }] },
  { name: 'Packages', href: '/packages' }, { name: 'Backdrops', href: '/backdrops' }, { name: 'Gallery', href: '/gallery' }, { name: 'Reviews', href: '/reviews' }, { name: 'FAQ', href: '/faq' }, { name: 'Service Areas', href: '/service-areas' }, { name: 'Contact', href: '/contact' },
];
export default function BookingNavigation() {
  const [open, setOpen] = useState(false);
  return <header className="booking-header"><div className="booking-header-inner">
    <Link className="booking-wordmark" to="/">Photo Booth<span>LEGENDS</span></Link>
    <nav className="booking-desktop-nav" aria-label="Booking page navigation"><Link to="/">Home</Link><Link to="/packages">Experiences</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link></nav>
    <div className="booking-nav-actions"><a className="booking-call" href="tel:9545485809"><Phone size={15} /><span>954-548-5809</span></a><Button variant="outline" size="icon" type="button" className="booking-menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button></div>
  </div>{open && <nav className="booking-expanded-nav" aria-label="All website pages">{links.map(link => link.children ? <details key={link.name}><summary>{link.name}<ChevronDown size={14} /></summary>{link.children.map(child => <Link to={child.href} key={child.href}>{child.name}</Link>)}</details> : <Link key={link.name} to={link.href || '/'}>{link.name}</Link>)}<Link to="/book">Package booking & payment</Link></nav>}</header>;
}