import Hero from './components/Hero';
import Projects from './components/Projects';
import BlogSection from './components/BlogSection';
import ToolsSection from './components/ToolsSection';
import CTA from './components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <BlogSection />
      <ToolsSection />
      <CTA />
    </>
  );
}
