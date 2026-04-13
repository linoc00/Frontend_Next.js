'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { posts } from '@/lib/data';

export default function BlogSection() {
  return (
    <section style={{ padding: '128px 24px', maxWidth: 1280, margin: '0 auto' }}>
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
          color: 'var(--foreground)',
        }}>Blog.</h2>
        <Link href="/blog" style={{
          display: 'flex', alignItems: 'center', gap: 12,
          fontSize: 10, fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.2em', textDecoration: 'none',
          color: 'var(--foreground)', paddingBottom: 8,
          transition: 'color 0.2s',
        }}>
          <span style={{ borderBottom: '1px solid rgba(15,15,15,0.2)', paddingBottom: 4 }}>Read Archive</span>
          <ArrowRight size={20} />
        </Link>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 40,
      }}>
        {posts.slice(0, 6).map(post => (
          <Link key={post.id} href={`/blog/${post.slug}`}
            style={{ display: 'block', textDecoration: 'none' }}
            className="blog-post-card"
          >
            {/* Image placeholder */}
            <div style={{
              aspectRatio: '16/10', borderRadius: 16,
              background: 'var(--muted)',
              overflow: 'hidden', marginBottom: 20,
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)', fontSize: 48, fontWeight: 700,
                color: 'rgba(0,0,0,0.1)',
              }}>{post.title[0]}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {/* Date */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: 'var(--foreground)', flexShrink: 0,
                }} />
                <p style={{
                  fontSize: 9, fontWeight: 700, color: 'var(--muted-foreground)',
                  textTransform: 'uppercase', letterSpacing: '0.2em',
                }}>{post.date}</p>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700,
                lineHeight: 1.3, letterSpacing: '-0.01em',
                color: 'var(--foreground)', transition: 'color 0.2s',
              }} className="blog-title">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                fontSize: 14, color: 'rgba(115,115,115,0.8)', fontWeight: 500,
                lineHeight: 1.6,
                display: '-webkit-box', WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical', overflow: 'hidden',
              }}>
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .blog-post-card:hover .blog-title { color: var(--muted-foreground) !important; }
        .blog-post-card:hover > div:first-child { transform: scale(1.02); }
        .blog-post-card > div:first-child { transition: transform 0.5s ease; }
      `}</style>
    </section>
  );
}
