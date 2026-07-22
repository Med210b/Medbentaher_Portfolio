import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundEffect from './components/BackgroundEffect';
import ShortcutManager from './components/ShortcutManager';
import BackToTop from './components/BackToTop';
import SoundManager from './components/SoundManager';
import Home from './pages/Home';
import Work from './pages/Work';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ProjectsArchive from './pages/ProjectsArchive';
import ProjectDetail from './pages/ProjectDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((currentScroll / scrollHeight) * 100);
    };
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[110]">
      <motion.div 
        className="h-full bg-gradient-to-r from-bordeaux via-bordeaux-glow to-bordeaux shadow-[0_0_10px_rgba(230,41,70,0.8)]" 
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-navy-deep flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl lg:text-6xl font-display font-black tracking-tighter text-silver mb-4"
        >
          <span className="text-bordeaux-glow">M</span>ED BEN TAHER
        </motion.div>
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="h-[2px] bg-bordeaux-glow mx-auto"
        />
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-4 text-silver/40 font-mono text-xs tracking-[0.4em] uppercase"
        >
          Luxury Digital Experience
        </motion.p>
      </div>
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div className="perspective-2000">
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, rotateY: 15, scale: 0.95, z: -100 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1, z: 0 }}
          exit={{ opacity: 0, rotateY: -15, scale: 1.05, z: 100 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1] 
          }}
          className="w-full"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/archive" element={<ProjectsArchive />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function ThemeApp() {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Check if the intro has already played in this session
    const hasPlayed = sessionStorage.getItem('introPlayed');
    if (hasPlayed) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem('introPlayed', 'true');
    }, 3000); // Slightly longer for a more premium feel

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen bg-navy-deep transition-colors duration-500">
        <ScrollToTop />
        <ScrollProgressBar />
        <CustomCursor />
        <BackgroundEffect />
        <ShortcutManager />
        <BackToTop />
        <SoundManager />
        
        <AnimatePresence mode="wait">
          {loading && <PageLoader key="page-loader" />}
        </AnimatePresence>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Navbar />
          
          <AnimatedRoutes />

          <Footer />
        </motion.div>
        
        {/* Cinematic Vignette */}
        <div className={`fixed inset-0 pointer-events-none ${theme === 'dark' ? 'shadow-[inset_0_0_200px_rgba(0,0,0,0.5)]' : 'shadow-[inset_0_0_150px_rgba(0,0,0,0.1)]'} z-[100] transition-shadow duration-500`} />
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ThemeApp />
    </ThemeProvider>
  );
}
