import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StatsPanel } from './StatsPanel';
import { useTheme } from '../context/ThemeContext';
import { jsPDF } from 'jspdf';

export default function Hero() {
  const { theme } = useTheme();

  const handleDownloadCV = () => {
    const imageUrl = "https://res.cloudinary.com/dfjezzfhc/image/upload/v1784684032/06df01be-d893-4ad9-b03d-2723f8a59c8b_otedvg.png";
    
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = imageUrl;
    img.onload = () => {
      const doc = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (img.height * imgWidth) / img.width;
      
      doc.addImage(img, 'PNG', 0, 0, imgWidth, imgHeight);
      doc.save('Med_Ben_Taher_CV.pdf');
    };
  };

  return (
    <section id="home" className="relative w-full overflow-hidden bg-navy-deep pb-8 text-silver lg:h-screen lg:min-h-[820px] lg:pb-0 transition-colors duration-500">
      {/* Desktop Portrait Image (Faded Background) */}
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: theme === 'light' ? 0.2 : 0.4 }}
        transition={{ duration: 1.1 }}
        src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1783455369/a88f2283-f9d8-44fe-8750-cad90796c3d1_mwfvri.png"
        alt="Med Ben Taher Portrait"
        className="pointer-events-none absolute right-0 top-0 z-0 hidden h-full w-[60%] object-cover object-center lg:block"
      />
      
      {/* Fade so the left side stays dark enough for text */}
      <div className={`pointer-events-none absolute inset-0 z-[1] hidden bg-gradient-to-r from-navy-deep via-navy-deep/70 to-transparent lg:block`} />

      {/* Mobile: image banner in normal flow */}
      <div className="relative z-10 px-4 pt-[80px] lg:hidden">
        <div className="relative h-[400px] w-full overflow-hidden rounded-2xl border border-silver/5">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            src="https://res.cloudinary.com/dfjezzfhc/image/upload/v1783455369/a88f2283-f9d8-44fe-8750-cad90796c3d1_mwfvri.png"
            alt="Med Ben Taher Portrait"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Hero text content */}
      <div className="relative z-20 px-4 pt-8 sm:px-6 lg:absolute lg:left-[5%] lg:top-[24%] lg:w-1/2 lg:max-w-[640px] lg:px-0 lg:pt-0">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="h-[2px] w-10 bg-[#ff3155]" />
          <span className="text-sm font-semibold tracking-[0.25em] text-[#ff3155]">
            HELLO, I'M
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="hero-title text-[38px] leading-[1.1] sm:text-[64px] md:text-[80px] lg:whitespace-nowrap lg:text-[104px]"
        >
          <span className="text-gradient-red">Med</span>{' '}
          <span className="text-gradient-silver">Ben Taher</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-base font-medium text-silver sm:gap-x-4 sm:text-lg md:text-2xl"
        >
          <span>Web Designer</span>
          <span className="h-2 w-2 rounded-full bg-[#ff3155]" />
          <span>App Developer</span>
          <span className="h-2 w-2 rounded-full bg-[#ff3155]" />
          <span>UI/UX Designer</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-5 max-w-[460px] font-body text-base leading-relaxed text-silver/60 sm:mt-6 sm:text-[17px]"
        >
          I design and build modern websites and applications with focus on{' '}
          <span className="font-semibold text-[#ff3155]">user experience</span>,
          performance and clean, scalable code.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-7 flex flex-col gap-4 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"
        >
          <Link to="/work" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-[60px] w-full items-center justify-between rounded-2xl bg-gradient-to-r from-[#ff2145] to-[#a10022] px-7 text-[17px] font-semibold text-silver shadow-[0_0_35px_rgba(220,0,45,0.5)] sm:h-[68px] sm:w-[250px]"
            >
              View My Work
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-silver/20">
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.button>
          </Link>

          <div className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleDownloadCV}
              className="glass flex h-[60px] w-full items-center justify-between rounded-2xl border border-silver/12 px-7 text-[17px] font-semibold text-silver sm:h-[68px] sm:w-[250px]"
            >
              Download CV
              <Download className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <div className="absolute bottom-40 right-6 z-40 hidden flex-col items-center gap-2 lg:flex">
        <span className="h-8 w-[2px] rounded-full bg-gradient-to-b from-[#ff3155] to-transparent" />
        <span className="text-xs text-neutral-400">
          Scroll
          <br />
          Down
        </span>
      </div>

      {/* Stats: in flow on mobile, pinned to bottom on desktop */}
      <div className="mt-10 lg:mt-0">
        <StatsPanel />
      </div>
    </section>
  );
}
