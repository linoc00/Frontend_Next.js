'use client';
import Link from 'next/link';
import { FaTiktok, FaYoutube, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FileText, BookOpen } from 'lucide-react';

const sitemap = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Protocol', href: '/#protocol' },
  { label: 'Blog', href: '/blog' },
  { label: 'Tools', href: '/tools' },
];

const connect = [
  { label: 'TikTok', href: '#', icon: <FaTiktok size={14} /> },
  { label: 'LinkedIn', href: '#', icon: <FaLinkedin size={14} /> },
  { label: 'Twitter / X', href: '#', icon: <FaTwitter size={14} /> },
  { label: 'GitHub', href: '#', icon: <FaGithub size={14} /> },
  { label: 'Dev.to', href: '#', icon: <FileText size={14} /> },
  { label: 'Substack', href: '#', icon: <BookOpen size={14} /> },
  { label: 'YouTube', href: '#', icon: <FaYoutube size={14} /> },
  { label: 'Email', href: 'mailto:hello@myportfolio.dev', icon: <MdEmail size={14} /> },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--foreground)', color: 'var(--primary-foreground)',
      padding: '40px 24px', borderTop: '1px solid rgba(255,255,255,0.1)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 40, marginBottom: 80,
        }} className="footer-grid">
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-serif)' }}>
              myportfolio.dev
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              Based in Italy, working globally.<br />(Remote/Async)
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>Sitemap</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {sitemap.map(item => (
                <li key={item.label}>
                  <Link href={item.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>Connect</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {connect.map(item => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {item.icon} {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>Policies</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li><a href="/privacy" style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Cookie Policy</a></li>
              <li><button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'rgba(255,255,255,0.7)', padding: 0, fontFamily: 'inherit' }}>Privacy Settings</button></li>
            </ul>
          </div>
        </div>

        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)', marginBottom: 32 }} />

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>© {new Date().getFullYear()} myportfolio.dev. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', display: 'block', animation: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite' }} />
            <span style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.7)' }}>All systems operational</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  );
}
