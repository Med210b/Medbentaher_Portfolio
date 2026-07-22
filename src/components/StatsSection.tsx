import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { Trophy, Coffee, Calendar, Code } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: number;
  suffix?: string;
  delay?: number;
}

function Counter({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001
  });

  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        springValue.set(value);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, value, springValue, delay]);

  return (
    <span ref={ref} className="inline-block">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

function StatItem({ icon, label, value, suffix, delay = 0 }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.21, 0.45, 0.32, 0.9]
      }}
      className="glass-panel group relative flex flex-col items-center rounded-[32px] p-8 text-center transition-all hover:border-bordeaux/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-bordeaux/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
      
      <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-silver/5 text-bordeaux-glow shadow-lg transition-transform group-hover:scale-110 group-hover:bg-bordeaux group-hover:text-white">
        {icon}
      </div>
      
      <div className="relative z-10 text-4xl font-bold text-silver sm:text-5xl">
        <Counter value={value} suffix={suffix} delay={delay + 0.2} />
      </div>
      
      <div className="relative z-10 mt-2 text-sm font-bold uppercase tracking-[0.2em] text-silver/40">
        {label}
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatItem 
            icon={<Trophy size={28} />} 
            label="Projects Completed" 
            value={150} 
            suffix="+" 
            delay={0.1}
          />
          <StatItem 
            icon={<Coffee size={28} />} 
            label="Cups of Coffee" 
            value={2400} 
            delay={0.2}
          />
          <StatItem 
            icon={<Calendar size={28} />} 
            label="Years Experience" 
            value={8} 
            suffix="+" 
            delay={0.3}
          />
          <StatItem 
            icon={<Code size={28} />} 
            label="Lines of Code" 
            value={500000} 
            suffix="+" 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}
