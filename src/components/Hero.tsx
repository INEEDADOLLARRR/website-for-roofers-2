import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import heroVideo from '../assets/hero-video.mp4';
import { MagneticButton } from './MagneticButton';

// Rule 2: Animation variants for staggered text reveal
const springContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.2, // fast start
    }
  }
};

// Bounce spring for letters
const letterVariants = {
  hidden: { opacity: 0, y: 40, rotate: 5, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

// Helper for staggered word/letter grouping
const SplitText = ({ text, className = "" }: { text: string, className?: string }) => {
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex mr-[0.25em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Rule 3: Deep parallax and widescreen mask for the video background
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["110%", "100%"]);
  const clipPath = useTransform(scrollYProgress, [0, 1], ["inset(0% 0%)", "inset(15% 5%)"]);

  // Cinema border bars — grow from 0% to 15% height as user scrolls
  const borderHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "15%"]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  // Rule 3: Text fades out as you scroll down
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center bg-brand-black text-brand-white overflow-hidden">
      {/* Full-screen background video with parallax & masking */}
      <motion.div style={{ y, scale, clipPath }} className="absolute inset-0 z-0 transform-gpu overflow-hidden">
        {/* Rule 12: Grayscale to color transition on hover */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-[2000ms] ease-in-out cursor-default"
          src={heroVideo}
        />
        {/* Dark overlays for readability and cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/40 to-brand-black/90 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-brand-black/30 pointer-events-none" />
      </motion.div>

      {/* Cinema Letterbox Borders — closing curtain effect */}
      <motion.div
        style={{ height: borderHeight, opacity: borderOpacity }}
        className="absolute top-0 left-0 right-0 bg-brand-black z-40 pointer-events-none"
      />
      <motion.div
        style={{ height: borderHeight, opacity: borderOpacity }}
        className="absolute bottom-0 left-0 right-0 bg-brand-black z-40 pointer-events-none"
      />

      {/* Top Navigation Overlay */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: textOpacity }}
        className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-white rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-brand-black rounded-full" />
          </div>
          <span className="font-display font-semibold text-lg md:text-xl tracking-wide">VERRAZANO</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-brand-silver uppercase">
          <a href="#expertise" className="magnetic-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue hover:text-brand-white transition-colors duration-300 pb-1">Expertise</a>
          <a href="#projects" className="magnetic-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue hover:text-brand-white transition-colors duration-300 pb-1">Projects</a>
          <a href="/blog" className="magnetic-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue hover:text-brand-white transition-colors duration-300 pb-1">Blog</a>
          <a href="#about" className="magnetic-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue hover:text-brand-white transition-colors duration-300 pb-1">About</a>
        </div>

        <MagneticButton className="hidden md:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white px-6 py-2.5 bg-brand-white text-brand-black text-xs font-semibold rounded-full hover:bg-brand-silver transition-colors duration-300">
          Get Estimate
        </MagneticButton>
      </motion.nav>

      {/* Centered Typography */}
      <motion.div style={{ opacity: textOpacity }} className="container mx-auto px-6 relative z-10 flex flex-col pt-16">
        <motion.div
          variants={springContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl" // Reduced width for editorial feel
        >
          <motion.div variants={fadeUpVariants} className="text-brand-silver font-medium tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-brand-silver/50" />
            Signature Roofing Architecture
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-[1.05] mb-8 text-balance">
            <SplitText text="Precision-crafted" className="block text-brand-white" />
            <SplitText text="roofing for modern estates." className="block text-brand-silver/80" />
          </h1>

          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-12">
            <MagneticButton className="group relative px-8 py-4 bg-brand-white text-brand-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white">
              <span className="relative flex items-center gap-2 group-hover:text-brand-blue transition-colors duration-300 text-sm">
                View Our Process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Glass Details Card (Struktura style) */}
      <motion.div
        initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-10 right-10 z-20 hidden lg:block"
      >
        <div className="glass-panel-light p-6 rounded-2xl w-80 text-sm border border-brand-white/10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:bg-brand-white/10">
          <div className="flex justify-between items-start mb-4 border-b border-brand-silver/20 pb-4">
            <div>
              <p className="text-brand-silver text-[10px] mb-1 uppercase tracking-widest">Featured Project</p>
              <p className="font-semibold text-brand-white text-sm tracking-wide">The Ascendant</p>
            </div>
            {/* Rule 13: Pulse Dot */}
            <div className="relative w-2 h-2 mt-1">
              <div className="absolute inset-0 rounded-full bg-brand-yellow pulse-dot-ring" />
              <div className="relative w-full h-full rounded-full bg-brand-yellow shadow-[0_0_10px_rgba(255,184,0,0.8)]" />
            </div>
          </div>

          <div className="space-y-3 pt-1">
            <div className="flex justify-between items-center group">
              <span className="text-brand-silver text-[10px] tracking-widest uppercase">Area</span>
              <span className="text-brand-white font-medium text-xs tracking-wider group-hover:text-brand-yellow transition-colors duration-300 cursor-default">12,500 SQ FT</span>
            </div>
            <div className="flex justify-between items-center group">
              <span className="text-brand-silver text-[10px] tracking-widest uppercase">Materials</span>
              <span className="text-brand-white font-medium text-xs tracking-wider group-hover:text-brand-yellow transition-colors duration-300 cursor-default">Slate & Zinc</span>
            </div>
            <div className="flex justify-between items-center group">
              <span className="text-brand-silver text-[10px] tracking-widest uppercase">Status</span>
              <span className="text-brand-white font-medium text-xs tracking-wider group-hover:text-brand-yellow transition-colors duration-300 cursor-default">Completed 2024</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ delay: 1.8, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 left-10 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-3 z-20 origin-top pointer-events-none"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-brand-silver rotate-90 md:rotate-0 translate-y-4 md:translate-y-0 origin-left md:origin-center hidden md:block">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-brand-silver to-transparent animate-pulse hidden md:block" />
      </motion.div>
    </section>
  );
}
