import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';
import ThreeBackground from './ThreeBackground';
import InteractiveParticles from './InteractiveParticles';

export default function BackgroundEffect() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-navy-deep transition-colors duration-500">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Overlay Gradients */}
      <div className={`absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full ${theme === 'dark' ? 'bg-navy-dark/40' : 'bg-blue-200/20'} blur-[120px]`} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full ${theme === 'dark' ? 'bg-bordeaux/5' : 'bg-red-200/10'} blur-[150px]`} />
      
      {/* Grid Pattern */}
      <div 
        className={`absolute inset-0 ${theme === 'dark' ? 'opacity-[0.03]' : 'opacity-[0.05]'}`} 
        style={{ 
          backgroundImage: `linear-gradient(${theme === 'dark' ? '#E5E7EB' : '#0F172A'} 1px, transparent 1px), linear-gradient(90deg, ${theme === 'dark' ? '#E5E7EB' : '#0F172A'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Interactive Particles Layer */}
      <InteractiveParticles />
    </div>
  );
}
