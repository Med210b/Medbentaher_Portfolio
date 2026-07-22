export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  date: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'design',
    category: 'DESIGN',
    title: 'The Future of Web Design: What to Expect in 2026',
    description: 'Exploring the latest trends in UI/UX and how AI is shaping the way we build for the web.',
    date: 'July 5, 2026',
    content: `
      <h2>The Shift to Intelligent Interfaces</h2>
      <p>As we approach 2026, the boundary between static design and generative interfaces is blurring. AI is no longer just a tool for automation; it's becoming the architect of personalized user experiences.</p>
      
      <h3>Key Trends for 2026</h3>
      <ul>
        <li><strong>Hyper-Personalization:</strong> Interfaces that adapt in real-time based on user behavior and emotional state.</li>
        <li><strong>Spatial Computing:</strong> Designing for depth as AR/VR becomes mainstream in professional workflows.</li>
        <li><strong>Emotional Design:</strong> Moving beyond functionality to create deep psychological connections with users.</li>
      </ul>

      <p>Designers must now think in terms of "probability" rather than "precision," creating systems that allow AI to generate the most effective layouts for specific contexts.</p>
    `
  },
  {
    id: 'development',
    category: 'DEVELOPMENT',
    title: 'Building Scalable Applications with React and Motion',
    description: 'A deep dive into creating smooth, performance-focused animations for modern web apps.',
    date: 'June 28, 2026',
    content: `
      <h2>Performance at Scale</h2>
      <p>In the modern web, speed is a design requirement. Using React and Framer Motion allows us to build interfaces that feel organic and responsive without sacrificing load times.</p>
      
      <h3>Optimizing for the Future</h3>
      <p>Building scalable apps requires a rigorous approach to state management and component architecture. We explore how to leverage server components and edge computing to minimize latency.</p>
      
      <ul>
        <li>Component-based animation orchestration.</li>
        <li>Efficient re-rendering strategies.</li>
        <li>Integration with headless CMS for dynamic content delivery.</li>
      </ul>
    `
  },
  {
    id: 'branding',
    category: 'BRANDING',
    title: 'Mastering the Art of Digital Branding',
    description: 'How to create a consistent and powerful digital identity for your business or personal brand.',
    date: 'June 15, 2026',
    content: `
      <h2>Identity in a Digital-First World</h2>
      <p>Branding is no longer just about logos and colors; it's about the "vibe" and consistency across every digital touchpoint. We discuss the transition from visual identity to digital character.</p>
      
      <h3>Building Authority</h3>
      <p>A strong brand builds trust. In a world saturated with content, clarity and authenticity are your most valuable assets. Learn how to maintain a consistent voice while adapting to different platforms.</p>
    `
  }
];
