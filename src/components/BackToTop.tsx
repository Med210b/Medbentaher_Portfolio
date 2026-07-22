import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[120] w-14 h-14 rounded-full glass border border-bordeaux/20 flex items-center justify-center text-silver/60 hover:text-bordeaux-glow hover:border-bordeaux/40 transition-colors shadow-2xl group"
          aria-label="Back to top"
        >
          <div className="absolute inset-0 rounded-full bg-bordeaux/5 blur-xl group-hover:bg-bordeaux/10 transition-colors" />
          <ArrowUp size={24} className="relative z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
