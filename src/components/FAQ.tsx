import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary depending on project complexity, but a premium digital experience typically spans 6 to 12 weeks from initial architectural discovery to final deployment."
  },
  {
    question: "Do you offer full-stack development or just design?",
    answer: "I provide end-to-end solutions including strategic UI/UX design, high-performance frontend development, and robust backend architecture, ensuring a seamless and cohesive final product."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I specialize in the modern web ecosystem, primarily utilizing React, Next.js, and TypeScript for frontends, coupled with Framer Motion and Three.js for immersive visual experiences."
  },
  {
    question: "How do we start a new collaboration?",
    answer: "It begins with a strategic consultation where we define your vision and objectives. Once aligned, we move into the discovery phase to map out the architectural core of your project."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, I offer dedicated maintenance packages and performance auditing to ensure your digital asset continues to operate at peak performance and evolves with your brand."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 relative overflow-hidden bg-navy-dark/20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-bordeaux/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="text-bordeaux-glow" size={20} />
            <span className="text-xs font-mono font-bold tracking-[0.4em] uppercase text-silver/40">Inquiries</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-silver mb-6">
            Common <span className="text-gradient-red">Questions</span>
          </h2>
          <p className="text-silver/50 text-lg max-w-2xl mx-auto leading-relaxed">
            Transparent insights into the collaborative process and technical standards behind my work.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: i * 0.1,
                ease: [0.21, 0.45, 0.32, 0.9] 
              }}
              className={`glass-panel overflow-hidden transition-all duration-500 border ${
                activeIndex === i ? 'border-bordeaux/30 bg-white/[0.03]' : 'border-white/5 bg-transparent'
              } rounded-[24px]`}
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className={`text-lg font-bold transition-colors duration-300 ${
                  activeIndex === i ? 'text-bordeaux-glow' : 'text-silver/80 group-hover:text-silver'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 ${
                  activeIndex === i ? 'bg-bordeaux border-bordeaux rotate-90' : 'bg-white/5'
                }`}>
                  {activeIndex === i ? <Minus size={16} className="text-white" /> : <Plus size={16} className="text-silver/40" />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-silver/50 leading-relaxed text-base">
                      <div className="h-[1px] w-12 bg-bordeaux/30 mb-6" />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
