export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  type: string;
  featured?: boolean;
  url?: string;
  year: string;
  status?: 'active' | 'archived';
};

export type Post = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readingTime: number;
  tags: string[];
};

export type Tool = {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Velocaption',
    description: 'Generate high-quality captions for your videos in seconds. Built natively for macOS to ensure privacy and peak performance.',
    tags: ['Swift', 'macOS', 'AI'],
    type: 'macOS Utility',
    featured: true,
    url: '#',
    year: '2024–2026',
    status: 'active',
  },
  {
    id: '2',
    title: 'LinkPreview AI',
    description: 'AI-powered link preview generation. Paste any URL and get a beautiful, accurate preview in milliseconds.',
    tags: ['Next.js', 'OpenAI', 'SaaS'],
    type: 'Web App',
    url: '#',
    year: '2025',
    status: 'active',
  },
  {
    id: '3',
    title: 'Speech Studio AI',
    description: 'Professional speech-to-text and audio editing for Mac creators. Privacy-first, runs entirely on device.',
    tags: ['Swift', 'Whisper', 'macOS'],
    type: 'Mac App',
    url: '#',
    year: '2025',
    status: 'active',
  },
  {
    id: '4',
    title: 'EasyPageGo',
    description: 'A website builder that was too clever for its own good. A lesson in over-engineering and scope creep.',
    tags: ['React', 'Node.js'],
    type: 'Web App',
    url: '#',
    year: '2023',
    status: 'archived',
  },
  {
    id: '5',
    title: 'isemailok.com',
    description: 'An email validation API that nobody asked for. Post-mortem of a product built without market research.',
    tags: ['Go', 'API'],
    type: 'API Service',
    url: '#',
    year: '2023',
    status: 'archived',
  },
];

export const posts: Post[] = [
  {
    id: '1',
    title: 'How SynthID Was Broken: Three Attacks That Defeated Google\'s AI Watermark',
    excerpt: 'Researchers broke Google\'s SynthID watermark in 3 ways. Spectral analysis drops detection by 91.4%, diffusion re-nosing overwrites it, and synonym swaps defeat text marking.',
    date: 'April 12, 2026',
    slug: 'how-synthid-was-broken',
    readingTime: 8,
    tags: ['AI', 'Security'],
  },
  {
    id: '2',
    title: 'Remote Terminal: iPhone to Mac via Tailscale',
    excerpt: 'Set up a secure remote terminal from your iPhone to your Mac using Tailscale and Remobi. No port forwarding, no SSH keys, zero internet exposure.',
    date: 'April 10, 2026',
    slug: 'remote-terminal-iphone-mac',
    readingTime: 5,
    tags: ['macOS', 'DevOps'],
  },
  {
    id: '3',
    title: 'BitNet b1.58: The 1-Bit LLM That Matches Full-Precision Models',
    excerpt: 'BitNet b1.58 replaces every Transformer weight with -1, 0, or 1, cutting energy use by 71.4x while matching FP16 quality at 3B+ parameters.',
    date: 'April 9, 2026',
    slug: 'bitnet-b158-1-bit-llm',
    readingTime: 10,
    tags: ['AI', 'Research'],
  },
  {
    id: '4',
    title: 'JSON-LD Structured Data for Blogs: A Real Implementation',
    excerpt: 'Pages with structured data are 2.3x more likely to appear in AI Overviews. Here is how I added BlogPosting JSON-LD to my Astro blog with real code.',
    date: 'April 7, 2026',
    slug: 'json-ld-structured-data',
    readingTime: 6,
    tags: ['SEO', 'Web'],
  },
  {
    id: '5',
    title: 'Building a SaaS in 72 Hours: What I Learned',
    excerpt: 'Speed is a feature. After launching 5 projects in 2025, here\'s what actually matters when you\'re racing to validate an idea before losing interest.',
    date: 'March 28, 2026',
    slug: 'saas-72-hours',
    readingTime: 7,
    tags: ['SaaS', 'Indie'],
  },
  {
    id: '6',
    title: 'Why I Switched from Vercel to Fly.io',
    excerpt: 'Cost, cold starts, and control. After hitting $300/month on Vercel, I moved to Fly.io and cut my bill by 80% while getting more control over infra.',
    date: 'March 15, 2026',
    slug: 'vercel-to-flyio',
    readingTime: 9,
    tags: ['DevOps', 'Cloud'],
  },
];

export const tools: Tool[] = [
  {
    id: '1',
    title: 'CSV Table Cleaner',
    description: 'Remove blank rows and optimize data for processing. Built with Go and WebAssembly for speed.',
    url: '#',
    icon: '⌗',
  },
  {
    id: '2',
    title: 'Conway\'s Game of Life',
    description: 'Interactive simulation of cellular automata. Explore patterns and watch life evolve.',
    url: '#',
    icon: '⬡',
  },
  {
    id: '3',
    title: 'WhatsApp Link & QR',
    description: 'One-click WhatsApp links and QR codes for leads. Privacy-first, no data stored.',
    url: '#',
    icon: '◈',
  },
  {
    id: '4',
    title: 'Free Audio Extractor',
    description: 'Extract audio as AAC, Opus, or WAV directly in your browser. No upload required.',
    url: '#',
    icon: '♫',
  },
];

export const socials = [
  { label: 'GitHub', url: '#' },
  { label: 'Twitter', url: '#' },
  { label: 'LinkedIn', url: '#' },
  { label: 'YouTube', url: '#' },
  { label: 'TikTok', url: '#' },
];
