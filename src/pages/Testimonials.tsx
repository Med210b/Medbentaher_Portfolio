import { motion } from 'motion/react';
import { Star, Quote, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechFlow",
    content: "Working with Med was a game-changer for our business. The attention to detail and technical expertise is unmatched.",
    rating: 5
  },
  {
    name: "Sarah Smith",
    role: "Marketing Director",
    content: "The user experience of our new application is incredible. We've seen a 40% increase in user engagement since the redesign.",
    rating: 5
  },
  {
    name: "Michael Brown",
    role: "Founder of StartupX",
    content: "Professional, creative, and highly skilled. Med delivered exactly what we needed on time and above expectations.",
    rating: 5
  }
];

export default function Testimonials() {
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
            Client <span className="text-bordeaux">Testimonials</span>
          </h1>
          <p className="text-silver/60 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[32px] border border-silver/5 relative group"
            >
              <Quote className="absolute top-6 right-8 text-bordeaux/20 group-hover:text-bordeaux/40 transition-colors" size={48} />
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-bordeaux-glow fill-bordeaux-glow" />
                ))}
              </div>
              <p className="text-silver/80 text-lg mb-8 leading-relaxed italic">
                "{t.content}"
              </p>
              <div>
                <h4 className="text-silver font-bold text-xl">{t.name}</h4>
                <p className="text-bordeaux-glow text-sm font-mono uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
