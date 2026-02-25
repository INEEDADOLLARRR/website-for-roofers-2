import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const NAV_LINKS = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '#about' },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const borderHeight = useTransform(scrollYProgress, [0, 0.6], ["0%", "12%"]);
  const borderOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} aria-label="Hero" className="relative min-h-screen flex items-center justify-center bg-brand-black text-brand-white overflow-hidden">
      {/* Video background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0 transform-gpu overflow-hidden will-change-transform">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="https://picsum.photos/seed/hero-poster/1920/1080"
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/90 via-brand-black/50 to-brand-black/90 pointer-events-none" />
      </motion.div>

      {/* Cinema borders */}
      <motion.div style={{ height: borderHeight, opacity: borderOpacity }} className="absolute top-0 left-0 right-0 bg-brand-black z-40 pointer-events-none" />
      <motion.div style={{ height: borderHeight, opacity: borderOpacity }} className="absolute bottom-0 left-0 right-0 bg-brand-black z-40 pointer-events-none" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: textOpacity }}
        className="absolute top-0 left-0 w-full z-50 px-5 py-5 md:px-10 md:py-8 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a href="/" className="flex items-center gap-2" aria-label="Verrazano Roofing home">
          <div className="w-7 h-7 bg-brand-white rounded-full flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-brand-black rounded-full" />
          </div>
          <span className="font-display font-semibold text-base tracking-wide">VERRAZANO</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest text-brand-silver uppercase">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="magnetic-underline hover:text-brand-white transition-colors duration-300 pb-1">{link.label}</a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a href="#contact" className="hidden md:block px-5 py-2 bg-brand-white text-brand-black text-xs font-semibold rounded-full hover:bg-brand-silver transition-colors duration-300">
          Get Estimate
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full border border-brand-white/20 text-brand-white"
        >
          {menuOpen ? <X className="w-4 h-4" aria-hidden="true" /> : <Menu className="w-4 h-4" aria-hidden="true" />}
        </button>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-brand-black/98 flex flex-col"
          >
            <div className="px-5 py-5 flex items-center justify-between border-b border-brand-white/5">
              <span className="font-display font-semibold text-base tracking-wide text-brand-white">VERRAZANO</span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-white/10 text-brand-white"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col justify-center flex-1 px-8 gap-2" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display text-3xl font-medium text-brand-white py-3 border-b border-brand-white/5 hover:text-brand-silver transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="px-8 pb-10">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block w-full py-4 bg-brand-white text-brand-black text-center font-semibold rounded-xl text-sm"
              >
                Get Your Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main hero content */}
      <motion.div style={{ opacity: textOpacity }} className="container mx-auto px-5 md:px-6 relative z-10 flex flex-col pt-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={fadeUpVariants} className="text-brand-silver/50 font-medium tracking-[0.2em] text-[9px] md:text-xs uppercase mb-5 flex items-center gap-4">
            <span className="w-6 h-[1px] bg-brand-silver/30" />
            Signature Roofing Architecture
          </motion.div>

          <motion.h1 variants={fadeUpVariants} className="font-display text-[2rem] leading-[1.1] md:text-5xl lg:text-6xl font-medium tracking-tight mb-7 text-balance">
            <span className="block text-brand-white">Precision-crafted</span>
            <span className="block text-brand-silver/60">roofing for modern estates.</span>
          </motion.h1>

          <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
            <a href="#process" className="group px-7 py-3.5 bg-brand-white text-brand-black font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg text-sm">
              <span className="flex items-center gap-2 group-hover:text-brand-blue transition-colors duration-300">
                View Our Process <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
            <a href="tel:18005557663" className="flex items-center gap-2 text-brand-silver/60 hover:text-brand-white transition-colors duration-300 text-sm font-medium md:hidden">
              Call us now
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Featured project card — desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
        style={{ opacity: textOpacity }}
        className="absolute bottom-10 right-10 z-20 hidden lg:block"
      >
        <div className="glass-panel-light p-5 rounded-xl w-64 text-sm">
          <div className="flex justify-between items-start mb-3 border-b border-brand-silver/10 pb-3">
            <div>
              <p className="text-brand-silver/40 text-[10px] mb-0.5 uppercase tracking-widest">Featured</p>
              <p className="font-medium text-brand-white text-sm">The Ascendant</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-brand-yellow" />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs"><span className="text-brand-silver/40 uppercase tracking-widest">Area</span><span className="text-brand-white">12,500 SQ FT</span></div>
            <div className="flex justify-between text-xs"><span className="text-brand-silver/40 uppercase tracking-widest">Materials</span><span className="text-brand-white">Slate & Zinc</span></div>
            <div className="flex justify-between text-xs"><span className="text-brand-silver/40 uppercase tracking-widest">Status</span><span className="text-brand-white">Completed 2024</span></div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 pointer-events-none hidden md:flex"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-brand-silver/40">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-silver/25 to-transparent" />
      </motion.div>
    </section>
  );
}
