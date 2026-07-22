import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, MotionValue } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
}

interface ParticleComponentProps {
  particle: Particle;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
}

export default function InteractiveParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const particleCount = 40;
    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      newParticles.push({
        id: i,
        x: x,
        y: y,
        baseX: x,
        baseY: y,
        size: Math.random() * 3 + 1,
      });
    }
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <ParticleComponent 
          key={p.id} 
          particle={p} 
          smoothX={smoothX} 
          smoothY={smoothY} 
        />
      ))}
    </div>
  );
}

function ParticleComponent({ 
  particle, 
  smoothX, 
  smoothY 
}: any) {
  const x = useMotionValue(`${particle.x}%`);
  const y = useMotionValue(`${particle.y}%`);

  useEffect(() => {
    const unsubscribeX = smoothX.on("change", (latestX: number) => {
      const rect = document.body.getBoundingClientRect();
      const px = (latestX / rect.width) * 100;
      const py = (smoothY.get() / rect.height) * 100;
      
      const dx = px - particle.baseX;
      const dy = py - particle.baseY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 15) {
        const force = (15 - distance) / 15;
        const moveX = dx * force * 5;
        const moveY = dy * force * 5;
        x.set(`${particle.baseX - moveX}%`);
        y.set(`${particle.baseY - moveY}%`);
      } else {
        x.set(`${particle.baseX}%`);
        y.set(`${particle.baseY}%`);
      }
    });

    return () => unsubscribeX();
  }, [smoothX, smoothY, particle.baseX, particle.baseY, x, y]);

  return (
    <motion.div
      style={{
        left: x,
        top: y,
        width: particle.size,
        height: particle.size,
      }}
      className="absolute bg-bordeaux/20 rounded-full blur-[1px]"
      animate={{
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
