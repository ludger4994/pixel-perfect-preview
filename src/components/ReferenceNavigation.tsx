import { Link } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as Dialog from '@radix-ui/react-dialog';

const links = [
  { title: 'Keychain Station', href: '/keychain-station', label: 'Signature' },
  { title: 'Packages', href: '/packages' },
  { title: 'Backdrops', href: '/keychain-station#backdrops' },
  { title: 'Cold Sparks & Clouds', href: '/keychain-station#sparks' },
  { title: 'Audio & Video Phone Booth', href: '/keychain-station#phone' },
];

export default function ReferenceNavigation({ keychain = false }: { keychain?: boolean }) {
  return <header className={`reference-header${keychain ? ' reference-header-keychain' : ''}`}><div className="reference-header-inner">
    <Dialog.Root><Dialog.Trigger asChild><Button type="button" variant="ghost" className="reference-menu-button" aria-label="Open menu"><span className="reference-menu-symbol"><Menu size={18} /></span><span>Menu</span></Button></Dialog.Trigger><Dialog.Portal><Dialog.Overlay className="reference-menu-overlay" /><Dialog.Content className="reference-menu-panel"><div className="reference-menu-top"><Dialog.Title>Menu</Dialog.Title><Dialog.Close asChild><Button type="button" variant="ghost" aria-label="Close menu"><X size={20} />Close</Button></Dialog.Close></div><Dialog.Description className="sr-only">Explore Photo Booth Legends experiences.</Dialog.Description><nav aria-label="Main menu">{links.map((link, i) => <Dialog.Close asChild key={link.title}><Link to={link.href}><span className="reference-menu-number">0{i + 1}</span><span>{link.label && <small>{link.label}</small>}{link.title}</span><ArrowRight size={20} /></Link></Dialog.Close>)}</nav><Dialog.Close asChild><Button asChild className="reference-gold"><Link to="/booking">Book Now<ArrowRight size={16} /></Link></Button></Dialog.Close></Dialog.Content></Dialog.Portal></Dialog.Root>
    <Link className="reference-brand" to="/">{keychain && <span className="reference-brand-mark">L</span>}<span>Photo Booth {keychain ? <em>Legends</em> : 'Legends'}{!keychain && <small>South Florida</small>}</span></Link>
    <Button asChild className={keychain ? 'reference-dark' : 'reference-gold reference-header-book'}><Link to="/booking">Book Now</Link></Button>
  </div></header>;
}