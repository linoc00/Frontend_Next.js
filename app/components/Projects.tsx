'use client';
import { ArrowUpRight, ArrowRight, Skull } from 'lucide-react';
import { projects } from '@/lib/data';

export default function Projects() {
  const featured = projects.find(p => p.featured);
  const active = projects.filter(p => !p.featured && p.status === 'active');
  const archived = projects.filter(p => p.status === 'archived');

  return (
    <section id="projects" style={{
      background: 'var(--foreground)',
      color: 'var(--primary-foreground)',
      padding: '128px 24px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 32, marginBottom: 64,
        }}>
          <h2 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1,
          }}>
            Projects.
          </h2>
          <p style={{
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)',
            paddingBottom: 8,
          }}>
            2024 – 2026
          </p>
        </div>

        {/* Featured */}
        {featured && (
          <a href={featured.url || '#'} target="_blank" rel="noopener noreferrer"
            className="featured-card"
            style={{
              display: 'block', textDecoration: 'none',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 16, overflow: 'hidden',
              marginBottom: 32, transition: 'background 0.5s',
            }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }} className="featured-inner">
              {/* Image placeholder */}
              <div style={{
                aspectRatio: '16/9', background: 'rgba(0,0,0,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 48, fontFamily: 'var(--font-serif)' }}>
                  {featured.title[0]}
                </span>
              </div>
              {/* Content */}
              <div style={{ padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{
                    padding: '4px 12px', borderRadius: 9999,
                    background: 'var(--primary-foreground)', color: 'var(--primary)',
                    fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em',
                  }}>Featured</span>
                  <span style={{
                    fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)',
                  }}>{featured.type}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1,
                }}>{featured.title}</h3>
                <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, fontWeight: 500 }}>
                  {featured.description}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  color: 'var(--primary-foreground)', fontWeight: 700, paddingTop: 8,
                }}>
                  <span style={{ fontSize: 14 }}>Visit website</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </a>
        )}

        {/* Active grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 16, marginBottom: 32,
        }}>
          {active.map(p => (
            <a key={p.id} href={p.url || '#'} target="_blank"
              style={{
                display: 'flex', alignItems: 'center', gap: 24,
                padding: 24, textDecoration: 'none',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16, transition: 'background 0.5s',
                color: 'var(--primary-foreground)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
            >
              <div style={{
                width: 64, height: 64, borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                fontFamily: 'var(--font-serif)', fontSize: 24, fontWeight: 700,
              }}>{p.title[0]}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700 }}>{p.title}</h4>
                  <span style={{
                    fontSize: 9, fontWeight: 700, textTransform: 'uppercase',
                    letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)',
                  }}>{p.type}</span>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>{p.description.slice(0, 60)}...</p>
              </div>
              <ArrowUpRight size={20} color="rgba(255,255,255,0.2)" style={{ flexShrink: 0 }} />
            </a>
          ))}
        </div>

        {/* Lessons Learned */}
        {archived.length > 0 && (
          <div>
            <p style={{
              fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.3em', color: 'rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12,
            }}>
              <Skull size={14} /> Lessons Learned
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
              {archived.map(p => (
                <a key={p.id} href={p.url || '#'}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 24,
                    padding: 24, textDecoration: 'none',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px dashed rgba(255,255,255,0.06)',
                    borderRadius: 16, transition: 'all 0.5s',
                    color: 'var(--primary-foreground)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>{p.title}</h4>
                      <span style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.2)' }}>{p.type}</span>
                    </div>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{p.description.slice(0, 60)}...</p>
                  </div>
                  <ArrowRight size={16} color="rgba(255,255,255,0.2)" style={{ flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .featured-card:hover { background: rgba(255,255,255,0.1) !important; }
        @media (max-width: 768px) {
          .featured-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
