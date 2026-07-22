import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../data/projectsData';

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  // Show projects based on context (optional: could pass a prop, but for now we follow current logic)
  const isHomePage = window.location.pathname === '/';
  const displayProjects = isHomePage ? PROJECTS.slice(0, 3) : PROJECTS;

  const cardVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.21, 0.45, 0.32, 0.9]
      }
    })
  };

  return (
    <section id="projects" className="py-24 relative bg-navy-dark/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-bordeaux-glow font-mono text-xs tracking-[0.4em] uppercase mb-4"
            >
              Selected Portfolio
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-6xl font-bold text-silver"
            >
              {isHomePage ? 'Featured' : 'All'} <span className="text-gradient-bordeaux">Creations</span>
            </motion.h2>
          </div>
          {isHomePage && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/work')}
              className="px-8 py-3 glass rounded-full text-sm font-semibold text-silver hover:text-silver transition-all border-silver/10 hover:border-bordeaux-glow/40"
            >
              View All Projects
            </motion.button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => navigate(`/project/${project.id}`)}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                boxShadow: "0 20px 40px rgba(139, 0, 24, 0.15)"
              }}
              className="group relative h-[450px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              {/* Card Border Glow */}
              <div className="absolute inset-0 border border-silver/5 group-hover:border-bordeaux-glow/40 transition-colors duration-500 rounded-3xl" />

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 transition-transform duration-500 group-hover:-translate-y-4">
                <div className="flex gap-2 mb-3 sm:mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-silver/5 backdrop-blur-md rounded-full text-[10px] text-silver/80 border border-silver/5">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-bordeaux-glow font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-1 sm:mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-silver mb-2 sm:mb-4 group-hover:text-gradient-bordeaux transition-all">
                  {project.title}
                </h3>
                <p className="text-silver/60 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-bordeaux flex items-center justify-center text-silver shadow-lg glow-red"
                  >
                    <ExternalLink size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Reveal effect for card background on hover */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-bordeaux/10 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
