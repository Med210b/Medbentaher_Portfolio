import { motion } from 'motion/react';

const experiences = [
  {
    role: 'Senior Web Developer & UX Lead',
    company: 'Digital Vanguard Studio',
    period: '2022 - Present',
    description: 'Leading a team of designers and developers to create high-end digital solutions for international luxury brands.'
  },
  {
    role: 'Creative Interface Designer',
    company: 'Nebula Creative Agency',
    period: '2020 - 2022',
    description: 'Focused on interaction design and motion graphics for award-winning mobile applications and web platforms.'
  },
  {
    role: 'Full Stack App Developer',
    company: 'TechFlow Solutions',
    period: '2018 - 2020',
    description: 'Developed scalable full-stack applications using React, Node.js, and cloud infrastructure for fintech startups.'
  },
  {
    role: 'UI Designer & Web Specialist',
    company: 'Freelance & Open Source',
    period: '2016 - 2018',
    description: 'Built a strong foundation in modern web technologies while working with diverse clients across the globe.'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-bordeaux-glow font-mono text-xs tracking-[0.4em] uppercase mb-4"
          >
            My Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-silver"
          >
            Professional <span className="text-gradient-bordeaux">Timeline</span>
          </motion.h2>
        </div>

        <div className="relative border-l border-silver/5 ml-4">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.21, 0.45, 0.32, 0.9]
              }}
              className="mb-12 ml-6 sm:ml-8 relative group"
            >
              {/* Timeline Point */}
              <div className="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-navy-deep border-2 border-bordeaux group-hover:scale-150 group-hover:bg-bordeaux transition-all duration-300 shadow-[0_0_10px_rgba(139,0,24,0.5)]" />
              
              <div className="glass p-6 sm:p-8 rounded-3xl border-silver/5 hover:border-bordeaux-glow/30 transition-all duration-500">
                <span className="inline-block px-3 py-1 bg-bordeaux/20 text-bordeaux-glow text-[10px] font-bold uppercase tracking-widest rounded-full mb-4">
                  {exp.period}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-silver mb-2 group-hover:text-gradient-bordeaux transition-colors">
                  {exp.role}
                </h3>
                <p className="text-silver/60 text-sm sm:text-base font-medium mb-4">{exp.company}</p>
                <p className="text-silver/50 text-xs sm:text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
