import { motion } from 'motion/react';
import { Smile, Layers, Rocket, Star } from 'lucide-react';

const STATS = [
  { icon: Smile, value: '50+', label: 'Happy Clients' },
  { icon: Layers, value: '80+', label: 'Projects Completed' },
  { icon: Rocket, value: '3+', label: 'Years Experience' },
  { icon: Star, value: '100%', label: 'Client Satisfaction' },
];

export function StatsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="relative z-40 mx-auto w-[92%] max-w-[1200px] lg:absolute lg:bottom-4 lg:left-1/2 lg:w-[75%] lg:-translate-x-1/2"
    >
      <div className="glass-panel grid grid-cols-2 gap-5 rounded-3xl border border-silver/10 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] sm:gap-6 sm:rounded-[30px] sm:px-6 sm:py-5 md:grid-cols-4 md:gap-0 md:px-8 md:py-6">
        {STATS.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className={`flex items-center gap-3 sm:gap-4 md:justify-center ${
                i !== 0
                  ? 'md:border-l md:border-[rgba(255,35,76,0.15)]'
                  : ''
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[rgba(255,35,76,0.3)] bg-[rgba(220,0,45,0.05)] sm:h-12 sm:w-12">
                <Icon className="h-4 w-4 text-[#ff3155] sm:h-5 sm:w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xl font-bold leading-none text-[#ff3155] sm:text-[24px] md:text-[28px]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] text-neutral-400 sm:text-xs">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
