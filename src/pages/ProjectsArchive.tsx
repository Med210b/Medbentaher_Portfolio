import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

export default function ProjectsArchive() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy-deep pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.button
              onClick={() => navigate('/')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-silver/40 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft size={16} /> Return Home
            </motion.button>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black text-silver leading-none"
            >
              Project <span className="text-gradient-bordeaux">Archive</span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-silver/40 text-lg md:text-xl max-w-sm font-medium leading-relaxed"
          >
            A collection of digital experiences, architectural systems, and visual narratives crafted over the years.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: (i % 2) * 0.1,
                ease: [0.21, 0.45, 0.32, 0.9] 
              }}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] mb-8 border border-white/5 bg-navy-base">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy-deep/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Overlay Info */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-navy-deep/40 backdrop-blur-sm">
                   <div className="bg-white text-black h-16 w-16 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                      <ArrowRight size={24} />
                   </div>
                </div>

                <div className="absolute top-6 right-6 flex gap-3">
                  <div className="h-10 w-10 rounded-full bg-navy-deep/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-white hover:scale-110 transition-transform">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase opacity-40">{project.category}</span>
                    <div className="h-[1px] w-8 bg-white/10" />
                  </div>
                  <h3 className="text-3xl font-bold text-silver group-hover:text-bordeaux-glow transition-colors">{project.title}</h3>
                </div>
                <div className="text-right">
                   <div className="flex flex-wrap gap-2 justify-end">
                      {project.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="text-[10px] font-mono tracking-widest text-silver/30 border border-white/5 px-3 py-1 rounded-full uppercase">{tag}</span>
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Let's Talk CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-40 text-center glass-panel p-20 rounded-[40px] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-bordeaux/20 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-navy-base/40 blur-[100px] rounded-full" />
          
          <h2 className="text-4xl md:text-6xl font-black text-silver mb-8 relative z-10">Have a project <span className="text-gradient-red">in mind?</span></h2>
          <button 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="relative z-10 px-12 py-6 bg-bordeaux text-white rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl"
          >
            Start a Conversation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
