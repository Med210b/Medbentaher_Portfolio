import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, ExternalLink, Zap, Shield, BarChart3 } from 'lucide-react';
import { PROJECTS } from '../data/projectsData';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === id);
  const { scrollY } = useScroll();

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-navy-deep text-silver">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <button 
          onClick={() => navigate('/archive')}
          className="mt-6 flex items-center gap-2 text-bordeaux-glow hover:text-white transition-colors"
        >
          <ArrowLeft size={20} /> Back to Archive
        </button>
      </div>
    );
  }

  const headerOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const headerScale = useTransform(scrollY, [0, 300], [1, 1.1]);

  const getIcon = (index: number) => {
    switch (index) {
      case 0: return <Zap size={24} />;
      case 1: return <Shield size={24} />;
      case 2: return <BarChart3 size={24} />;
      default: return <Zap size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-navy-deep text-silver" style={{ '--project-color': project.color } as React.CSSProperties}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] blur-[150px] rounded-full" style={{ backgroundColor: project.color }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] blur-[120px] rounded-full" style={{ backgroundColor: project.secondaryColor }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-navy-deep/20 border-b border-white/5">
        <button onClick={() => navigate('/archive')} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-silver/60 hover:text-white transition-colors">
          <ArrowLeft size={18} /> Back
        </button>
        <span className="text-xs font-mono font-bold tracking-[0.3em] uppercase opacity-40">{project.category}</span>
        <div className="flex gap-4">
          <ExternalLink size={20} className="opacity-40 hover:opacity-100 cursor-pointer transition-opacity" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <motion.div style={{ opacity: headerOpacity, scale: headerScale }} className="relative z-10 max-w-5xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-mono font-bold tracking-[0.5em] uppercase mb-6"
            style={{ color: project.color }}
          >
            {project.category}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-tighter"
          >
            {project.title.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-4">{word}</span>
            ))}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-silver/60 max-w-2xl mx-auto mb-12 font-medium"
          >
            {project.heroText}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button 
              className="px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-2xl"
              style={{ backgroundColor: project.color, color: 'white' }}
            >
              Explore Project Case
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Tags */}
        <div className="absolute bottom-12 flex gap-4 opacity-40">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs font-mono tracking-widest border border-white/20 px-4 py-2 rounded-full">{tag}</span>
          ))}
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[40px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {project.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-10 rounded-[32px] text-center border border-white/5"
              >
                <div className="text-5xl font-black mb-2" style={{ color: project.color }}>{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-silver/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Architectural <span style={{ color: project.color }}>Core</span></h2>
            <p className="text-xl text-silver/50 leading-relaxed mb-12">
              Deep dive into the technical implementation and design philosophy that powers {project.title}. We focused on performance, accessibility, and unique visual language.
            </p>
            <div className="space-y-8">
              {project.features.map((feature, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 h-12 w-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: project.color }}>
                    {getIcon(i)}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-silver/40 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 blur-[100px] opacity-20 rounded-full" style={{ backgroundColor: project.color }} />
             <div className="relative aspect-square rounded-[32px] overflow-hidden border border-white/10 glass-panel p-4">
                <img src={project.image} alt="Feature visual" className="w-full h-full object-cover rounded-2xl opacity-50 grayscale hover:grayscale-0 transition-all duration-700" />
             </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="py-40 text-center px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-bordeaux/10 blur-[100px] rounded-full" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <h2 className="text-4xl md:text-6xl font-black text-silver mb-8">Have a project <span className="text-gradient-red">in mind?</span></h2>
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
            className="px-12 py-6 bg-bordeaux text-silver rounded-full font-bold text-xl hover:scale-105 active:scale-95 transition-all shadow-2xl glow-red"
          >
            Start a Conversation
          </button>
        </motion.div>

        <div className="pt-20 border-t border-white/5">
          <p className="text-xs font-mono font-bold tracking-[0.4em] uppercase mb-8 opacity-40">Want to see more?</p>
          <h2 
            onClick={() => navigate('/archive')}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-16 hover:text-bordeaux-glow cursor-pointer transition-colors"
          >
            Project <span className="text-gradient-bordeaux">Archive</span>
          </h2>
          <button 
            onClick={() => navigate('/archive')}
            className="group flex items-center gap-4 mx-auto text-2xl font-bold border-b-2 border-white/10 pb-2 hover:border-bordeaux transition-all"
          >
            View All Work <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
}
