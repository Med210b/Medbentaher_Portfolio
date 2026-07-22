export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  color: string;
  secondaryColor: string;
  image: string;
  heroText: string;
  features: { title: string; desc: string }[];
  stats: { label: string; value: string }[];
}

export const PROJECTS: Project[] = [
  {
    id: 'chronos-luxury',
    title: 'Chronos Luxury',
    category: 'E-COMMERCE / WEB DESIGN',
    description: 'A premium e-commerce platform for high-end luxury timepieces with 3D product visualization.',
    heroText: 'Precision in every second. Elegance in every pixel.',
    tags: ['React', 'Three.js', 'Tailwind'],
    color: '#E62946',
    secondaryColor: '#1A1A1A',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Conversion Rate', value: '+24%' },
      { label: 'User Retention', value: '88%' },
      { label: 'Load Time', value: '0.8s' }
    ],
    features: [
      { title: '3D Configurator', desc: 'Real-time 3D watch customization using WebGL.' },
      { title: 'Global Logistics', desc: 'Integrated multi-currency and international shipping API.' },
      { title: 'Secure Vault', desc: 'Blockchain-based authenticity certification for every piece.' }
    ]
  },
  {
    id: 'nova-wallet',
    title: 'Nova Wallet',
    category: 'FINTECH / MOBILE APP',
    description: 'A futuristic cryptocurrency wallet with holographic visualizations and biometric security.',
    heroText: 'The future of finance, decentralized and beautiful.',
    tags: ['React Native', 'Firebase', 'Framer Motion'],
    color: '#7C3AED',
    secondaryColor: '#0F172A',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Active Users', value: '1.2M' },
      { label: 'Transaction Speed', value: '<2ms' },
      { label: 'Security Score', value: 'AAA' }
    ],
    features: [
      { title: 'Holographic UI', desc: 'Advanced shaders for realistic glass and light effects.' },
      { title: 'Smart Swap', desc: 'AI-driven algorithm for the lowest slippage across DEXs.' },
      { title: 'Multi-Chain', desc: 'Native support for 15+ major blockchain networks.' }
    ]
  },
  {
    id: 'aether-ai',
    title: 'Aether AI',
    category: 'DASHBOARD / UI/UX',
    description: 'An AI-powered analytics dashboard with real-time predictive modeling and data visualization.',
    heroText: 'Intelligence amplified. Data simplified.',
    tags: ['Next.js', 'D3.js', 'PostgreSQL'],
    color: '#10B981',
    secondaryColor: '#064E3B',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Accuracy', value: '99.9%' },
      { label: 'Data Points', value: '4B+' },
      { label: 'Efficiency', value: '+40%' }
    ],
    features: [
      { title: 'Predictive Flow', desc: 'Machine learning models forecasting market trends 48h in advance.' },
      { title: 'Live Canvas', desc: 'High-performance D3 visualizations handling millions of nodes.' },
      { title: 'Smart Alerts', desc: 'Context-aware notifications via NLP analysis.' }
    ]
  },
  {
    id: 'nebula-cloud',
    title: 'Nebula Cloud',
    category: 'SAAS / ARCHITECTURE',
    description: 'Decentralized cloud infrastructure platform with visual resource management.',
    heroText: 'Limitless computing at the edge of space.',
    tags: ['Go', 'React', 'Kubernetes'],
    color: '#3B82F6',
    secondaryColor: '#1E3A8A',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Uptime', value: '99.99%' },
      { label: 'Latency', value: '15ms' },
      { label: 'Nodes', value: '25k' }
    ],
    features: [
      { title: 'Visual Orchestrator', desc: 'Drag-and-drop cloud resource management.' },
      { title: 'Auto-Scaling', desc: 'Proprietary load-balancing engine for instant bursts.' },
      { title: 'Quantum Encryption', desc: 'Post-quantum secure data transmission.' }
    ]
  },
  {
    id: 'apex-studios',
    title: 'Apex Studios',
    category: 'AGENCY / CREATIVE',
    description: 'A cinematic portfolio for a high-end film production studio with fluid transitions.',
    heroText: 'Stories that move. Design that breathes.',
    tags: ['Motion', 'React', 'GSAP'],
    color: '#F59E0B',
    secondaryColor: '#451A03',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Awards', value: '12' },
      { label: 'Frame Rate', value: '60fps' },
      { label: 'Projects', value: '300+' }
    ],
    features: [
      { title: 'Fluid Canvas', desc: 'Physics-based page transitions for seamless navigation.' },
      { title: 'Dynamic Player', desc: 'Custom HLS video player with adaptive bitrate.' },
      { title: 'Asset Hub', desc: 'Internal collaborative tool for directors and editors.' }
    ]
  },
  {
    id: 'zenith-health',
    title: 'Zenith Health',
    category: 'HEALTHCARE / WEARABLE',
    description: 'A holistic health tracking ecosystem integrating wearable data and AI coaching.',
    heroText: 'Wellness redefined. Vitality synchronized.',
    tags: ['Swift', 'Kotlin', 'FastAPI'],
    color: '#EC4899',
    secondaryColor: '#500724',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Accuracy', value: '98%' },
      { label: 'Daily Users', value: '500k' },
      { label: 'Habits Built', value: '2M+' }
    ],
    features: [
      { title: 'Biometric Sync', desc: 'Real-time integration with Apple Health and Google Fit.' },
      { title: 'AI Coach', desc: 'Personalized wellness recommendations based on circadian rhythms.' },
      { title: 'Community Lounges', desc: 'Privacy-focused social spaces for health goals.' }
    ]
  },
  {
    id: 'orbit-social',
    title: 'Orbit Social',
    category: 'SOCIAL / WEB3',
    description: 'Privacy-first social network built on decentralized protocols with zero-knowledge proofs.',
    heroText: 'Connection without surveillance.',
    tags: ['Solidity', 'React', 'IPFS'],
    color: '#6366F1',
    secondaryColor: '#312E81',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Privacy', value: '100%' },
      { label: 'Data Leak', value: '0' },
      { label: 'Nodes', value: '10k+' }
    ],
    features: [
      { title: 'ZK Auth', desc: 'Log in without sharing a single byte of personal data.' },
      { title: 'Content Pinning', desc: 'Permanent media storage via decentralized IPFS nodes.' },
      { title: 'Governance', desc: 'DAO-controlled content moderation and feature roadmap.' }
    ]
  },
  {
    id: 'titan-logistics',
    title: 'Titan Logistics',
    category: 'ENTERPRISE / ERP',
    description: 'A massive supply chain management system for global shipping conglomerates.',
    heroText: 'Global commerce. Unstoppable momentum.',
    tags: ['Java', 'React', 'SQL'],
    color: '#475569',
    secondaryColor: '#0F172A',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Fleet Size', value: '2500' },
      { label: 'Daily Shipments', value: '45k' },
      { label: 'Fuel Saved', value: '12%' }
    ],
    features: [
      { title: 'Fleet Tracker', desc: 'Satellite-linked real-time positioning for all assets.' },
      { title: 'Predictive Maintenance', desc: 'Sensor-driven alert system for engine health.' },
      { title: 'Route Optimizer', desc: 'AI algorithm reducing transit time by 20%.' }
    ]
  },
  {
    id: 'velvet-vogue',
    title: 'Velvet Vogue',
    category: 'FASHION / AR',
    description: 'Luxury fashion marketplace featuring AR virtual try-on and digital tailoring.',
    heroText: 'Style meets silicon. Couture meets code.',
    tags: ['WebXR', 'React', 'Strapi'],
    color: '#D946EF',
    secondaryColor: '#4A044E',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Return Rate', value: '-35%' },
      { label: 'Avg Order', value: '$850' },
      { label: 'Users', value: '250k' }
    ],
    features: [
      { title: 'Mirror AR', desc: 'High-fidelity cloth simulation for virtual fitting.' },
      { title: 'Digital Tailor', desc: 'Measurement extraction from standard smartphone photos.' },
      { title: 'Limited Drops', desc: 'Smart-contract enabled exclusivity timers.' }
    ]
  },
  {
    id: 'echo-music',
    title: 'Echo Music',
    category: 'STREAMING / AUDIO',
    description: 'Spatial audio streaming platform for independent artists with lossless playback.',
    heroText: 'Hear every detail. Support every artist.',
    tags: ['Rust', 'WebAssembly', 'React'],
    color: '#EF4444',
    secondaryColor: '#450A0A',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600',
    stats: [
      { label: 'Bitrate', value: '24-bit' },
      { label: 'Artists', value: '150k' },
      { label: 'Royalties', value: 'x3' }
    ],
    features: [
      { title: 'Sonic Core', desc: 'Rust-powered audio engine for zero-latency playback.' },
      { title: 'Direct Pay', desc: 'Instant micro-payments to artists per stream.' },
      { title: 'Ambience AI', desc: 'Generative soundscapes that adapt to your room noise.' }
    ]
  }
];
