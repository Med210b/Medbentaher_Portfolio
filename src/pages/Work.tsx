import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Projects from '../components/Projects';

export default function Work() {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20 bg-navy-deep min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="hidden sm:flex items-center gap-3 text-silver hover:text-silver transition-all mb-10 group bg-silver/5 px-4 py-2 rounded-full border border-silver/10 sm:bg-transparent sm:p-0 sm:border-0"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff3155]/10 text-[#ff3155] sm:bg-transparent sm:p-0 sm:w-auto sm:h-auto">
            <ArrowLeft size={22} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest font-bold sm:font-normal">Back to previous</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-silver mb-6">
            Our <span className="text-bordeaux">Work</span>
          </h1>
          <p className="text-silver/60 text-lg max-w-2xl mx-auto">
            A showcase of our latest projects and digital experiences crafted with passion and precision.
          </p>
        </motion.div>
        <Projects />
      </div>
    </motion.div>
  );
}
