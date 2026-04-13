import Link from 'next/link';
import { posts } from '@/lib/data';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | My Portfolio',
  description: 'Writings on software, SaaS, and systems architecture.',
};

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 64 }}>
      {/* Header */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 32px 64px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div className="section-label">Archive</div>
        <h1
          style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(40px, 6vw, 80px)',
            fontWeight: 400,
            lineHeight: 1.0,
            color: 'var(--text)',
          }}
        >
          Blog.
        </h1>
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: 16,
            marginTop: 20,
            maxWidth: 480,
          }}
        >
          Writings on software engineering, SaaS building, and systems architecture. High-signal, zero fluff.
        </p>
      </div>

      {/* Posts */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px 120px',
        }}
      >
        {posts.map((post, i) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr auto',
              gap: 32,
              padding: '32px 0',
              borderBottom: '1px solid var(--border)',
              textDecoration: 'none',
              alignItems: 'start',
              transition: 'background 0.2s',
            }}
            className="post-row"
          >
            {/* Number */}
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 12,
                color: 'var(--text-dim)',
                paddingTop: 4,
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </div>

            {/* Content */}
            <div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
                {post.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(18px, 2.5vw, 26px)',
                  fontWeight: 400,
                  color: 'var(--text)',
                  lineHeight: 1.3,
                  marginBottom: 10,
                }}
              >
                {post.title}
              </h2>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: 14,
                  lineHeight: 1.6,
                  maxWidth: 580,
                }}
              >
                {post.excerpt}
              </p>
            </div>

            {/* Meta */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 8,
                paddingTop: 4,
                minWidth: 100,
              }}
            >
              <ArrowUpRight size={16} color="var(--text-dim)" />
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  color: 'var(--text-dim)',
                  textAlign: 'right',
                }}
              >
                {post.date}
              </span>
              <span
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  color: 'var(--text-dim)',
                }}
              >
                {post.readingTime} min
              </span>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .post-row:hover { background: var(--bg-2) !important; padding-left: 16px !important; }
        @media (max-width: 640px) {
          .post-row { grid-template-columns: 40px 1fr !important; }
          .post-row > div:last-child { display: none !important; }
        }
      `}</style>
    </div>
  );
}
