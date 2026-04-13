'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
      background: 'rgba(255,255,255,0.98)',
      borderBottom: '1px solid rgba(229,229,229,0.5)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
      transition: 'transform 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 24px', height: 64,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
          <Link href="/" style={{
            fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 900,
            color: 'var(--foreground)', textDecoration: 'none',
            letterSpacing: '-0.02em',
          }}>
            myportfolio.dev
          </Link>
          <nav style={{ display: 'flex', gap: 32 }} className="desktop-nav">
            {[{ label: 'Blog', href: '/blog' }, { label: 'Tools', href: '/tools' }].map(item => (
              <Link key={item.href} href={item.href} style={{
                fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.2em', color: 'var(--muted-foreground)',
                textDecoration: 'none', fontFamily: 'var(--font-sans)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--foreground)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Lang switcher */}
          <div style={{
            display: 'inline-flex', alignItems: 'center',
            background: 'var(--muted)', borderRadius: 9999,
            padding: 2, fontSize: 10, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.1em',
          }} className="desktop-nav">
            <span style={{
              padding: '4px 10px', borderRadius: 9999,
              background: 'var(--background)',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
              color: 'var(--foreground)',
            }}>EN</span>
            <span style={{ padding: '4px 10px', color: 'var(--muted-foreground)', cursor: 'pointer' }}>IT</span>
          </div>

          {/* Contact button */}
          <button style={{
            background: 'var(--primary)', color: 'var(--primary-foreground)',
            border: 'none', borderRadius: 9999,
            padding: '8px 24px',
            fontSize: 10, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.2em',
            cursor: 'pointer', fontFamily: 'var(--font-sans)',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          className="desktop-nav"
          >
            Contact me
          </button>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--foreground)', padding: 4, display: 'none',
          }} className="mobile-toggle">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderTop: '1px solid var(--border)', background: 'var(--background)',
          padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {[{ label: 'Blog', href: '/blog' }, { label: 'Tools', href: '/tools' }].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.2em', color: 'var(--muted-foreground)', textDecoration: 'none',
            }}>{item.label}</Link>
          ))}
          <button style={{
            background: 'var(--primary)', color: 'var(--primary-foreground)',
            border: 'none', borderRadius: 9999, padding: '10px 24px',
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.2em', cursor: 'pointer', alignSelf: 'flex-start',
          }}>Contact me</button>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
