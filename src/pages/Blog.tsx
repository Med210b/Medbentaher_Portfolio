import { motion } from 'motion/react';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogData';

export default function Blog() {
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
            Latest <span className="text-bordeaux">Insights</span>
          </h1>
          <p className="text-silver/60 text-lg max-w-2xl mx-auto">
            Thoughts on design, technology, and the future of the digital landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30, rotateX: -5 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ 
                y: -10, 
                rotateX: 5, 
                z: 20,
                transition: { duration: 0.4 }
              }}
              transition={{ delay: i * 0.1 }}
              style={{ transformStyle: 'preserve-3d' }}
              className="glass p-8 rounded-[32px] border border-silver/5 group hover:border-bordeaux/30 transition-all duration-500 flex flex-col relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bordeaux/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
              
              <div className="relative z-10">
                <div className="text-bordeaux-glow text-xs font-mono uppercase tracking-[0.3em] mb-4">
                  {post.category}
                </div>
                <h3 className="text-2xl font-bold text-silver mb-4 group-hover:text-bordeaux-glow transition-colors">
                  {post.title}
                </h3>
                <p className="text-silver/50 mb-6 leading-relaxed flex-grow">
                  {post.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-silver/5 mt-auto">
                  <div className="flex items-center gap-4 text-xs text-silver/40 font-mono">
                    <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  </div>
                  <button 
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="text-silver hover:text-bordeaux-glow transition-all hover:scale-110 active:scale-95 bg-silver/5 p-3 rounded-full border border-silver/10 hover:border-bordeaux-glow"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
