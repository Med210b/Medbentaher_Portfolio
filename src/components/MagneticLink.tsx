import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';

interface MagneticLinkProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function MagneticLink({ children, className = '', href = '#' }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    
    // Magnetic pull strength (adjust values to tune the feel)
    const strength = 0.4;
    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={`relative inline-flex items-center justify-center transition-colors ${className}`}
    >
      <motion.span 
        className="relative z-10"
        whileHover={{ scale: 1.1 }}
      >
        {children}
      </motion.span>
      
      {/* Subtle hover background glow */}
      <motion.div
        className="absolute inset-0 bg-bordeaux/20 rounded-full blur-md opacity-0 -z-10"
        whileHover={{ opacity: 1, scale: 1.5 }}
      />
    </motion.a>
  );
}
