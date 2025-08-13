'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
  { href: '/events', label: 'Events' },
  { href: '/results', label: 'Results' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu open (prevents background scroll)
  useEffect(()=>{
    if (open) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = ''; }
    return ()=> { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="container-max flex items-center justify-between py-3">
        <Link href="/" className="font-extrabold text-xl">
          Cognition <span className="text-primary">Classes</span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-semibold hover:text-primary transition ${pathname===l.href? 'text-primary' : 'text-slate-700'}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="https://wa.me/919040760487" target="_blank" className="btn btn-primary text-sm">Enroll Now</Link>
        </div>

        {/* Mobile */}
        <button aria-label="Open Menu" className="md:hidden btn" onClick={()=>setOpen(true)}>
          <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/></svg>
        </button>

        {open && (
          <div className="mm-wrap">
            <div className="mm-backdrop" onClick={()=>setOpen(false)} />
            <div className="mm-panel">
              <div className="flex items-center justify-between mb-6">
                <div className="font-extrabold text-lg">Menu</div>
                <button aria-label="Close Menu" className="btn" onClick={()=>setOpen(false)}>
                  <svg width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M18.3 5.71L12 12.01l-6.29-6.3L4.3 7.12L10.59 13.4L4.3 19.7l1.41 1.41L12 14.82l6.29 6.29l1.41-1.41l-6.29-6.29l6.29-6.3z"/></svg>
                </button>
              </div>
              <ul className="space-y-2">
                {links.map(l => (
                  <li key={l.href}>
                    <Link
                      onClick={()=>setOpen(false)}
                      href={l.href}
                      className={`mm-link ${pathname===l.href? 'mm-link-active' : 'mm-link-hover'}`}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href="https://wa.me/919040760487" target="_blank" className="btn btn-primary w-full text-center">Enroll on WhatsApp</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
