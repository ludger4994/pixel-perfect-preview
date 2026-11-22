import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const links = [{ name: 'Home', href: '/' }, { name: 'Experiences', href: '/keychain-station' }, { name: 'Packages', href: '/packages' }, { name: 'Contact', href: 'tel:9545485809' }];
export default function BookingNavigation() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navLinks = links.map(link => link.href.startsWith('tel:') ? <a key={link.name} href={link.href} onClick={() => setOpen(false)}>{link.name}</a> : <Link key={link.name} to={link.href} aria-current={link.name === 'Packages' && pathname === '/packages' ? 'page' : undefined} onClick={() => setOpen(false)}>{link.name}</Link>);
  return <header className="booking-header"><div className="booking-header-inner">
    <Link className="booking-wordmark" to="/">Photo Booth<span>LEGENDS</span></Link>
    <nav className="booking-desktop-nav" aria-label="Main navigation">{navLinks}</nav>
    <div className="booking-nav-actions"><a className="booking-call" href="tel:9545485809"><Phone size={15} /><span>954-548-5809</span></a><Button asChild className="booking-primary"><Link to="/booking">Book Now</Link></Button><Button variant="outline" size="icon" type="button" className="booking-menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(value => !value)}>{open ? <X /> : <Menu />}</Button></div>
  </div>{open && <nav className="booking-expanded-nav" aria-label="Mobile navigation">{navLinks}</nav>}</header>;
}