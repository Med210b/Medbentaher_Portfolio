import { motion } from 'motion/react';
import { Monitor, Smartphone, Palette, PenTool } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const services = [
  {
    title: 'Website Design',
    description: 'Modern responsive websites with premium interfaces and high-performance animations.',
    icon: <Monitor />,
    image: '/src/assets/images/futuristic_3d_code_icon_1783452273277.jpg',
    color: 'from-blue-500/20 to-navy-deep'
  },
  {
    title: 'Mobile App Development',
    description: 'Beautiful mobile applications with smooth user experience and native performance.',
    icon: <Smartphone />,
    image: '/src/assets/images/futuristic_3d_mobile_icon_1783452284352.jpg',
    color: 'from-bordeaux-light/20 to-navy-deep'
  },
  {
    title: 'UI/UX Design',
    description: 'Creative user interfaces focused on psychological patterns and seamless interactions.',
    icon: <Palette />,
    image: '/src/assets/images/futuristic_3d_design_icon_1783452296261.jpg',
    color: 'from-purple-500/20 to-navy-deep'
  },
  {
    title: 'Branding & Digital Identity',
    description: 'Crafting unique visual languages and strategic branding for luxury tech companies.',
    icon: <PenTool />,
    image: '/src/assets/images/futuristic_3d_branding_icon_1783452363061.jpg',
    color: 'from-red-500/20 to-navy-deep'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-bordeaux-glow font-mono text-xs tracking-[0.4em] uppercase mb-4"
          >
            My Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-silver"
          >
            Elite <span className="text-gradient-bordeaux">Solutions</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.8,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px]"
            >
              <div className="absolute inset-0 bg-navy-base/50 rounded-3xl border border-silver/5 transition-all duration-500 group-hover:border-bordeaux-glow/30 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className={cn("absolute inset-0 bg-gradient-to-b", service.color)} />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-6 sm:p-8 flex flex-col justify-end">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-silver/5 backdrop-blur-md flex items-center justify-center text-bordeaux-glow mb-4 sm:mb-6 group-hover:scale-110 group-hover:bg-bordeaux transition-all duration-500 group-hover:text-silver">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-silver mb-4 group-hover:text-bordeaux-glow transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-silver/60 text-sm leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    {service.description}
                  </p>
                  
                  <div className="h-1 w-0 bg-bordeaux-glow group-hover:w-full transition-all duration-500 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
