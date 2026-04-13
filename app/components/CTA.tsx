'use client';
import { FaTiktok, FaYoutube, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ArrowUpRight } from 'lucide-react';

const socialLinks = [
  { label: 'TikTok', desc: 'Follow on TikTok', href: '#', icon: <FaTiktok size={24} /> },
  { label: 'YouTube', desc: 'Watch on YouTube', href: '#', icon: <FaYoutube size={24} /> },
  { label: 'Instagram', desc: 'Follow on Instagram', href: '#', icon: <FaInstagram size={24} /> },
  { label: 'Twitter', desc: 'Connect on X', href: '#', icon: <FaTwitter size={24} /> },
  { label: 'GitHub', desc: 'View GitHub Profile', href: '#', icon: <FaGithub size={24} /> },
  { label: 'LinkedIn', desc: 'Connect on LinkedIn', href: '#', icon: <FaLinkedin size={24} /> },
  { label: 'Email', desc: 'Send an Email', href: 'mailto:hello@myportfolio.dev', icon: <MdEmail size={24} /> },
];

export default function CTA() {
  return (
    <section style={{ position: 'relative', background: 'var(--primary)', color: 'var(--primary-foreground)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }} className="cta-grid">

          {/* Left sticky */}
          <div style={{
            position: 'sticky', top: 0, height: '100vh',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40,
          }} className="cta-left">
            <h2 style={{
              fontFamily: 'var(--font-sans)', fontSize: 'clamp(48px, 7vw, 96px)',
              fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1,
            }}>
              Let&apos;s build<br />together.
            </h2>
            <p style={{ fontSize: 24, fontWeight: 500, opacity: 0.8, maxWidth: 400, lineHeight: 1.4 }}>
              Available for architectural consulting, custom SaaS development, and technical partnerships.
            </p>

            <a href="#" style={{
              display: 'block', maxWidth: 400, padding: 24,
              background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: 16, textDecoration: 'none', color: 'var(--primary-foreground)',
              transition: 'background 0.5s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <MdEmail size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>The High-Signal Dev</h3>
                  <p style={{ fontSize: 14, opacity: 0.7 }}>Curated tech findings and dev explorations. Zero fluff.</p>
                </div>
                <ArrowUpRight size={20} style={{ opacity: 0.4, flexShrink: 0 }} />
              </div>
            </a>
          </div>

          {/* Right list */}
          <div style={{ padding: '96px 0 192px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 24, padding: 32,
                  borderRadius: 16, textDecoration: 'none',
                  background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                  color: 'var(--primary-foreground)', transition: 'background 0.5s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>{s.icon}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.4, marginBottom: 4 }}>{s.label}</p>
                  <p style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2 }}>{s.desc}</p>
                </div>
                <ArrowUpRight size={24} style={{ opacity: 0.4, flexShrink: 0 }} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .cta-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
          .cta-left { position: static !important; height: auto !important; padding: 96px 0 48px !important; }
        }
      `}</style>
    </section>
  );
}
