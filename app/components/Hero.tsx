'use client';
import { FaTiktok, FaYoutube, FaInstagram, FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socials = [
  { label: 'TikTok', href: '#', icon: <FaTiktok size={16} /> },
  { label: 'YouTube', href: '#', icon: <FaYoutube size={16} /> },
  { label: 'Instagram', href: '#', icon: <FaInstagram size={16} /> },
  { label: 'Twitter', href: '#', icon: <FaTwitter size={16} /> },
  { label: 'GitHub', href: '#', icon: <FaGithub size={16} /> },
  { label: 'LinkedIn', href: '#', icon: <FaLinkedin size={16} /> },
  { label: 'Email', href: 'mailto:hello@myportfolio.dev', icon: <MdEmail size={16} /> },
];

export default function Hero() {
  return (
    <section style={{
      paddingTop: 160, paddingBottom: 96,
      paddingLeft: 24, paddingRight: 24,
      maxWidth: 1280, margin: '0 auto',
    }}>
      <div style={{ maxWidth: 896 }}>
        <p style={{
          fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.3em', color: 'var(--muted-foreground)',
          marginBottom: 24,
        }}>
          Founder &amp; Systems Architect
        </p>

        <h1 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 'clamp(48px, 8vw, 96px)',
          fontWeight: 700, letterSpacing: '-0.02em',
          lineHeight: 1.1, color: 'var(--foreground)',
          marginBottom: 32,
        }}>
          Architecting<br />Digital Assets.
        </h1>

        <p style={{
          fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 500,
          color: 'var(--muted-foreground)', lineHeight: 1.4,
          letterSpacing: '-0.01em', maxWidth: 640, marginBottom: 16,
        }}>
          I&apos;m <strong style={{ color: 'var(--foreground)', fontWeight: 700 }}>Pasquale Cerullo</strong>,
          a software engineer building high-performance SaaS assets and native Mac utilities.
        </p>

        <p style={{
          fontSize: 18, color: 'rgba(115,115,115,0.8)',
          lineHeight: 1.6, maxWidth: 560, marginBottom: 40,
        }}>
          Escaping the hourly trap. Building automated SaaS assets &amp; native Mac utilities. Digital Nomad.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingTop: 16 }}>
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 16px', borderRadius: 9999,
                border: '1px solid rgba(229,229,229,0.6)',
                background: 'var(--card)',
                fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: 'var(--muted-foreground)',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--foreground)'; e.currentTarget.style.borderColor = 'rgba(15,15,15,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = 'var(--muted-foreground)'; e.currentTarget.style.borderColor = 'rgba(229,229,229,0.6)'; }}
            >
              {s.icon}
              <span>{s.label}</span>
            </a>
          ))}

          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '8px 16px', borderRadius: 9999,
            background: 'var(--primary)', color: 'var(--primary-foreground)',
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', textDecoration: 'none', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            <MdEmail size={16} />
            <span>Newsletter</span>
          </a>
        </div>
      </div>
    </section>
  );
}
