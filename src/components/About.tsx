import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { label: 'Years Experience', value: 8, suffix: '+' },
  { label: 'Projects Completed', value: 120, suffix: '+' },
  { label: 'Happy Clients', value: 95, suffix: '%' },
  { label: 'Technologies Mastered', value: 25, suffix: '' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let start = 0;
      const duration = 2000;
      const increment = value / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
          setHasAnimated(true);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl lg:text-4xl font-display font-bold text-silver mb-1">
      {count}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Interactive Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-bordeaux/20 blur-[60px] rounded-full group-hover:bg-bordeaux/40 transition-all duration-700" />
              <motion.div 
                whileHover={{ rotateY: 5, rotateX: -2 }}
                className="relative glass-dark p-3 rounded-[40px] overflow-hidden border border-silver/10 transition-all duration-500 perspective-1000"
              >
                <img 
                  src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1783501581/0a56bb38-329e-4482-ab3b-f79afb1bf001_vrcero.png" 
                  alt="Med Ben Taher Portrait" 
                  className="w-full aspect-[4/5] object-cover object-center rounded-[32px] grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-10 bg-gradient-to-t from-navy-deep to-transparent">
                  <p className="text-bordeaux-glow font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1 sm:mb-2">Founder & CEO</p>
                  <h3 className="text-2xl sm:text-3xl font-bold text-silver">Med Ben Taher</h3>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1,
              ease: [0.21, 0.45, 0.32, 0.9]
            }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="w-10 h-[1.5px] bg-bordeaux" />
              <p className="text-silver/60 font-mono text-xs tracking-[0.4em] uppercase">About Me</p>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[0.9] tracking-tight">
              About <span className="text-bordeaux">Med</span> <span className="text-silver">Ben Taher</span>
            </h2>
            
            <div className="space-y-6 text-silver/50 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl">
              <p>
                As a creative <span className="text-silver font-medium">web designer and developer</span>, I specialize in building modern digital products that bridge the gap between aesthetics and functionality. My journey in technology is driven by a passion for excellence and a commitment to delivering high-end results.
              </p>
              <p>
                I don't just build websites; I create digital identities. Every project is a unique opportunity to push the boundaries of what's possible in the digital space, utilizing the latest tech stacks like <span className="text-bordeaux-glow">React, Next.js</span>, and advanced UI/UX principles.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-12 pt-6">
              {stats.slice(0, 2).map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <div className="text-[10px] text-silver/30 uppercase tracking-[0.3em] font-mono group-hover:text-silver/50 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
