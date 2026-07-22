import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sun, Moon, Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Services', path: '/#services' },
  { name: 'Work', path: '/work' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const isSubPage = location.pathname !== '/';

  const handleLinkClick = (path: string) => {
    setOpen(false);
    if (path === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (path.startsWith('/#')) {
      const id = path.split('#')[1];
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="fixed inset-x-0 top-0 z-[100] flex h-[72px] items-center justify-between px-4 md:h-[90px] md:px-[70px] bg-navy-deep/80 backdrop-blur-md border-b border-silver/5"
    >
      <div className="flex items-center gap-3">
        {/* Mobile Back Button */}
        {isSubPage && (
          <button
            onClick={() => navigate(-1)}
            className="flex lg:hidden h-10 w-10 items-center justify-center rounded-full bg-silver/5 text-[#ff3155] border border-silver/10 active:scale-90 transition-transform"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        
        {/* Logo */}
        <Link to="/" onClick={() => handleLinkClick('/')} className="flex items-center gap-2 md:gap-3 group min-w-0">
          <span className="font-serif text-xl italic leading-none text-[#ff3155] sm:text-2xl md:text-3xl group-hover:rotate-12 transition-transform shrink-0">
            {'\u2727'}
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-lg md:text-xl truncate">
            <span className="text-[#ff3155]">Med</span>{' '}
            <span className="text-silver">Ben Taher</span>
          </span>
        </Link>
      </div>

      {/* Center nav (desktop) */}
      <nav className="hidden items-center gap-8 lg:flex">
        {NAV_LINKS.map((link) => {
          const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.pathname === '/');
          return (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleLinkClick(link.path)}
              className={`group relative text-[15px] font-medium transition-colors ${
                isActive ? 'text-[#ff3155]' : 'text-neutral-300 hover:text-silver'
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#ff3155]" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right actions (desktop) */}
      <div className="hidden items-center gap-4 lg:flex">
        <Link 
          to="/#contact"
          onClick={() => handleLinkClick('/#contact')}
          className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#ff2145] to-[#a10022] px-6 py-3 text-[15px] font-semibold text-silver shadow-[0_0_25px_rgba(220,0,45,0.5)] hover:scale-105 transition-transform"
        >
          Let's Talk
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-silver/20">
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-silver/10 bg-silver/5 text-neutral-200 transition-colors hover:bg-silver/10"
        >
          {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5 text-navy-deep" />}
        </button>
      </div>

      {/* Mobile controls */}
      <div className="flex items-center gap-2 lg:hidden">
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-silver/10 bg-silver/5 text-neutral-200 transition-colors active:bg-silver/10"
        >
          {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px] text-navy-deep" />}
        </button>
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-silver/10 bg-[#ff3155]/10 text-[#ff3155] active:scale-95 transition-all"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-4 top-[calc(100%+12px)] z-[100] flex flex-col gap-1 rounded-[32px] border border-silver/10 bg-[#0A0C14]/98 p-4 backdrop-blur-2xl lg:hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.path.startsWith('/#') && location.pathname === '/');
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`rounded-2xl px-5 py-4 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[rgba(220,0,45,0.15)] text-[#ff3155]'
                      : 'text-neutral-300 hover:bg-silver/5 hover:text-silver'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              to="/#contact"
              onClick={() => handleLinkClick('/#contact')}
              className="mt-3 flex items-center justify-center gap-3 rounded-[24px] bg-gradient-to-r from-[#ff2145] to-[#a10022] px-6 py-4 text-base font-bold text-silver shadow-[0_10px_30px_rgba(220,0,45,0.4)] active:scale-95 transition-transform"
            >
              Let's Talk
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
