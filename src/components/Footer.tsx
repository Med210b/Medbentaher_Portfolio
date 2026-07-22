import { motion } from 'motion/react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticLink from './MagneticLink';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-silver/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-t from-bordeaux/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <Link to="/" onClick={scrollToTop} className="inline-block mb-6 group">
              <img 
                src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1783451886/e207c8cc-5d15-4b76-8cd1-3cf29e293121_rljtup.png" 
                alt="Med Ben Taher Logo" 
                className="w-24 h-24 object-contain group-hover:rotate-12 transition-transform duration-500"
              />
            </Link>
            <p className="text-silver/40 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed italic">
              “Building digital experiences beyond imagination, where luxury meets performance.”
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-silver/60">
            <Link to="/" onClick={scrollToTop} className="hover:text-silver transition-colors">Home</Link>
            <Link to="/#about" className="hover:text-silver transition-colors">About</Link>
            <Link to="/#projects" className="hover:text-silver transition-colors">Projects</Link>
            <Link to="/#services" className="hover:text-silver transition-colors">Services</Link>
            <Link to="/#contact" className="hover:text-silver transition-colors">Contact</Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <MagneticLink href="#" className="w-10 h-10 rounded-full glass text-silver/40 hover:text-bordeaux-glow">
              <Instagram size={18} />
            </MagneticLink>
            <MagneticLink href="#" className="w-10 h-10 rounded-full glass text-silver/40 hover:text-bordeaux-glow">
              <Twitter size={18} />
            </MagneticLink>
            <MagneticLink href="#" className="w-10 h-10 rounded-full glass text-silver/40 hover:text-bordeaux-glow">
              <Linkedin size={18} />
            </MagneticLink>
            <MagneticLink href="#" className="w-10 h-10 rounded-full glass text-silver/40 hover:text-bordeaux-glow">
              <Github size={18} />
            </MagneticLink>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <div className="text-silver font-mono text-xs tracking-widest mb-2 uppercase">© 2026 Med Ben Taher</div>
            <div className="text-silver/30 text-[10px] uppercase tracking-[0.2em]">All Rights Reserved. Premium Portfolio.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
