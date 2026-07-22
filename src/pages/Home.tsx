import { motion } from 'motion/react';
import Hero from '../components/Hero';
import SkillMarquee from '../components/SkillMarquee';
import About from '../components/About';
import StatsSection from '../components/StatsSection';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <SkillMarquee />
      <About />
      <StatsSection />
      <Services />
      <Projects />
      <Skills />
      <Experience />
      <FAQ />
      <Contact />
    </motion.main>
  );
}
