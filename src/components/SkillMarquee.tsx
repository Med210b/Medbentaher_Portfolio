import React from 'react';
import { motion } from 'motion/react';

const SKILLS = [
  'React',
  'Framer Motion',
  'Tailwind CSS',
  'TypeScript',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'UI/UX Design',
  'Motion Design',
  'Cloud Architecture'
];

export default function SkillMarquee() {
  // Triple the list to ensure seamless infinite scroll coverage
  const marqueeItems = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="relative w-full overflow-hidden border-y border-silver/5 bg-navy-deep/50 py-10 backdrop-blur-sm">
      {/* Cinematic Overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-40 bg-gradient-to-r from-navy-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-40 bg-gradient-to-l from-navy-deep to-transparent" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {marqueeItems.map((skill, index) => (
          <div
            key={`${skill}-${index}`}
            className="group relative mx-8 flex items-center justify-center px-6 py-3"
          >
            {/* Metallic Background Effect */}
            <div className="absolute inset-0 rounded-xl border border-silver/10 bg-gradient-to-b from-silver/10 to-transparent opacity-50 transition-all group-hover:border-bordeaux-glow group-hover:bg-bordeaux/10" />
            
            {/* Reflective Highlight */}
            <div className="absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-silver/30 to-transparent" />

            <span className="relative z-10 text-2xl font-black uppercase tracking-[0.2em] text-silver/40 transition-colors group-hover:text-silver">
              {skill}
            </span>
            
            {/* Decorative Dot */}
            <div className="ml-8 h-1.5 w-1.5 rounded-full bg-bordeaux/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
