import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';
import { Code2, Layout, Database, Palette, Cpu, Globe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  description: string;
  icon: React.ReactNode;
  category: string;
}

const skillCategories: Skill[] = [
  {
    name: 'React / Next.js',
    level: 92,
    description: 'Expert in building scalable SPAs and SSR applications with optimized performance.',
    icon: <Code2 size={24} />,
    category: 'Frontend'
  },
  {
    name: 'TypeScript',
    level: 90,
    description: 'Advanced type-safe development ensuring robust and maintainable codebases.',
    icon: <Cpu size={24} />,
    category: 'Language'
  },
  {
    name: 'Tailwind CSS',
    level: 98,
    description: 'Rapid UI development with utility-first CSS for pixel-perfect designs.',
    icon: <Layout size={24} />,
    category: 'Styling'
  },
  {
    name: 'Node.js / Express',
    level: 85,
    description: 'Building secure, scalable RESTful APIs and real-time backend services.',
    icon: <Database size={24} />,
    category: 'Backend'
  },
  {
    name: 'UI / UX Design',
    level: 94,
    description: 'Crafting intuitive user journeys and high-fidelity interfaces in Figma.',
    icon: <Palette size={24} />,
    category: 'Design'
  },
  {
    name: 'PostgreSQL',
    level: 80,
    description: 'Relational database design, optimization, and complex query architecture.',
    icon: <Globe size={24} />,
    category: 'Database'
  }
];

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9]
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full glass p-8 rounded-[32px] border border-silver/5 group transition-colors duration-500 hover:border-bordeaux/40"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="relative z-10"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-2xl bg-bordeaux/10 text-bordeaux-glow group-hover:bg-bordeaux group-hover:text-white transition-colors duration-300">
            {skill.icon}
          </div>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-silver/30 uppercase bg-silver/5 px-3 py-1 rounded-full">
            {skill.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-silver mb-3 group-hover:text-bordeaux-glow transition-colors">
          {skill.name}
        </h3>
        
        <p className="text-sm text-silver/50 leading-relaxed mb-8">
          {skill.description}
        </p>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-silver/40 uppercase tracking-widest">Proficiency</span>
            <span className="text-xs font-mono text-bordeaux-glow">{skill.level}%</span>
          </div>
          <div className="h-1.5 w-full bg-navy-base rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
              className="h-full bg-gradient-to-r from-bordeaux to-bordeaux-glow rounded-full"
            />
          </div>
        </div>
      </div>

      {/* 3D Glow Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-bordeaux/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px] pointer-events-none" 
        style={{ transform: "translateZ(-10px)" }}
      />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-navy-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-bordeaux-glow font-mono text-xs tracking-[0.4em] uppercase mb-4"
          >
            Technical Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-silver"
          >
            Futuristic <span className="text-gradient-bordeaux">Capabilities</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-2000">
          {skillCategories.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
