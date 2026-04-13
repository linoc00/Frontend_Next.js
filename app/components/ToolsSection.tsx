'use client';
import Link from 'next/link';
import { ArrowRight, Terminal, Globe, MessageSquare, Wrench } from 'lucide-react';
import { tools } from '@/lib/data';

const iconMap: Record<string, React.ReactNode> = {
  '⌗': <Terminal size={16} />,
  '⬡': <Globe size={16} />,
  '◈': <MessageSquare size={16} />,
  '♫': <Wrench size={16} />,
};

export default function ToolsSection() {
  return (
    <section style={{
      padding: '128px 24px',
      borderTop: '1px solid rgba(229,229,229,0.4)',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'flex-end', justifyContent: 'space-between',
          gap: 32, marginBottom: 64,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              color: 'var(--foreground)',
            }}>
              <Wrench size={20} />
              <span style={{
                fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em',
              }}>Utility Belt</span>
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(40px, 7vw, 72px)',
              fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1,
              color: 'var(--foreground)',
            }}>Free Tools.</h2>
          </div>
          <Link href="/tools" style={{
            display: 'flex', alignItems: 'center', gap: 12,
            fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.2em', textDecoration: 'none',
            color: 'var(--foreground)', paddingBottom: 8,
          }}>
            <span style={{ borderBottom: '1px solid rgba(15,15,15,0.2)', paddingBottom: 4 }}>All Tools</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Tool cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {tools.map(tool => (
            <a key={tool.id} href={tool.url}
              style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                minHeight: 220, padding: 32, borderRadius: 16, textDecoration: 'none',
                background: 'var(--card)',
                border: '1px solid rgba(229,229,229,0.6)',
                transition: 'all 0.5s',
              }}
              className="tool-card"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* Icon */}
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: 'rgba(15,15,15,0.05)',
                  border: '1px solid rgba(15,15,15,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--foreground)',
                }}>
                  {iconMap[tool.icon] || <Wrench size={16} />}
                </div>

                <h4 style={{
                  fontFamily: 'var(--font-serif)', fontSize: 18, fontWeight: 700,
                  letterSpacing: '-0.01em', color: 'var(--foreground)',
                  transition: 'color 0.2s',
                }} className="tool-title">
                  {tool.title}
                </h4>

                <p style={{
                  fontSize: 14, color: 'rgba(115,115,115,0.8)',
                  lineHeight: 1.6, fontWeight: 500,
                }}>
                  {tool.description}
                </p>
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginTop: 24, paddingTop: 16,
                borderTop: '1px solid rgba(229,229,229,0.4)',
              }}>
                <span style={{
                  fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.2em', color: 'var(--foreground)',
                }}>Launch Tool</span>
                <ArrowRight size={16} style={{ color: 'var(--foreground)', opacity: 0, transition: 'opacity 0.2s' }} className="tool-arrow" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .tool-card:hover { border-color: rgba(15,15,15,0.4) !important; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .tool-card:hover .tool-title { color: var(--muted-foreground) !important; }
        .tool-card:hover .tool-arrow { opacity: 1 !important; }
      `}</style>
    </section>
  );
}
