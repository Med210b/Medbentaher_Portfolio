import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../hooks/useSound';

export default function SoundManager() {
  const [isMuted, setIsMuted] = useState(true); // Default muted for better UX
  const { playHover, playClick, setMuted } = useSound();

  useEffect(() => {
    setMuted(isMuted);
  }, [isMuted, setMuted]);

  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a')) {
        playClick();
      }
    };

    const handleGlobalMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a')) {
        playHover();
      }
    };

    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('mouseover', handleGlobalMouseOver);

    return () => {
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('mouseover', handleGlobalMouseOver);
    };
  }, [playClick, playHover]);

  return (
    <div className="fixed bottom-8 left-24 z-[120]">
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-silver/40 hover:text-bordeaux-glow hover:border-bordeaux/30 transition-all group"
        title={isMuted ? "Unmute UI Sounds" : "Mute UI Sounds"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <VolumeX size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="unmuted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <Volume2 size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      
      {!isMuted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap px-3 py-1 rounded bg-bordeaux/20 border border-bordeaux/30 text-[10px] font-mono text-bordeaux-glow uppercase tracking-widest pointer-events-none"
        >
          Audio Enabled
        </motion.div>
      )}
    </div>
  );
}
