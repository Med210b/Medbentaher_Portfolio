import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-navy-deep text-silver">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <button 
          onClick={() => navigate('/blog')}
          className="mt-6 flex items-center gap-2 text-bordeaux-glow hover:text-white transition-colors"
        >
          <ArrowLeft size={20} /> Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-deep pt-[120px] pb-20">
      <div className="mx-auto max-w-4xl px-4">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ x: -5, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => navigate('/blog')}
          className="mb-10 flex items-center gap-3 text-silver/60 hover:text-white transition-all group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-silver/10 bg-silver/5 group-hover:border-bordeaux-glow/40 shadow-lg">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="text-sm font-bold uppercase tracking-widest">Back to Insights</span>
        </motion.button>

        {/* Header */}
        <header className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex flex-wrap gap-4"
          >
            <span className="flex items-center gap-2 rounded-full border border-bordeaux-glow/20 bg-bordeaux-glow/5 px-4 py-1 text-xs font-bold tracking-widest text-bordeaux-glow">
              <Tag size={12} /> {post.category}
            </span>
            <span className="flex items-center gap-2 text-xs font-medium text-silver/40">
              <Calendar size={12} /> {post.date}
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold leading-tight text-silver sm:text-5xl lg:text-6xl"
          >
            {post.title}
          </motion.h1>
        </header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ 
            delay: 0.4, 
            duration: 0.8, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          style={{ transformStyle: 'preserve-3d' }}
          className="glass-panel rounded-[40px] p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative 3D Ambient Light */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-bordeaux/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div 
            className="prose prose-invert prose-silver max-w-none relative z-10
              prose-headings:text-silver prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-silver/70 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6
              prose-li:text-silver/70 prose-li:text-lg
              prose-strong:text-bordeaux-glow"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Footer Navigation */}
        <div className="mt-16 flex border-t border-silver/10 pt-10">
          <button
            onClick={() => navigate('/blog')}
            className="group flex flex-col gap-2 text-left"
          >
            <span className="text-xs font-bold uppercase tracking-tighter text-silver/40">Read more</span>
            <span className="text-xl font-bold text-silver group-hover:text-bordeaux-glow transition-colors">Explore other Insights</span>
          </button>
        </div>
      </div>
    </div>
  );
}
