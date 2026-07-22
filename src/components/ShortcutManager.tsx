import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Keyboard, X } from 'lucide-react';

export default function ShortcutManager() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showGuide, setShowGuide] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input or textarea
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      const key = e.key.toLowerCase();

      if (key === 'c') {
        if (location.pathname !== '/') {
          navigate('/');
          // Give time for home page to mount
          setTimeout(() => {
            const element = document.getElementById('contact');
            element?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          const element = document.getElementById('contact');
          element?.scrollIntoView({ behavior: 'smooth' });
        }
      }

      if (key === 'h') {
        if (location.pathname !== '/') {
          navigate('/');
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }

      if (key === 'w') {
        navigate('/work');
      }

      if (key === '?') {
        setShowGuide(prev => !prev);
      }

      if (key === 'escape') {
        setShowGuide(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, location.pathname]);

  return (
    <>
      {/* Shortcut Toggle Button */}
      <div className="fixed bottom-8 left-8 z-[120]">
        <button
          onClick={() => setShowGuide(!showGuide)}
          className="w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-silver/40 hover:text-bordeaux-glow hover:border-bordeaux/30 transition-all group"
          title="Keyboard Shortcuts (?)"
        >
          <Keyboard size={20} className="group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Shortcuts Guide Overlay */}
      <AnimatePresence>
        {showGuide && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 left-8 z-[120] w-64 glass-panel p-6 border border-bordeaux/20 rounded-3xl shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-mono font-bold tracking-[0.2em] uppercase text-silver">Shortcuts</h3>
              <button onClick={() => setShowGuide(false)} className="text-silver/40 hover:text-white">
                <X size={16} />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-silver/60 text-sm">Home Page</span>
                <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-bordeaux-glow">H</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-silver/60 text-sm">Work Page</span>
                <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-bordeaux-glow">W</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-silver/60 text-sm">Contact Form</span>
                <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-bordeaux-glow">C</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-silver/60 text-sm">Close Help</span>
                <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-silver/40">ESC</kbd>
              </div>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/5 text-[10px] font-mono text-silver/20 uppercase tracking-widest text-center">
              Luxury Experience
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
