import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useRef } from 'react';

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <footer ref={ref} className="bg-brand-black text-brand-white relative overflow-hidden">
      {/* Immersive CTA Section */}
      <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-t-[3rem]">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[50%] -bottom-[50%] z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://picsum.photos/seed/footer-cta/1920/1080")' }}
          />
          <div className="absolute inset-0 bg-brand-black/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight mb-8 text-balance">
              Experience gorgeous designs built on the industry's best frameworks.
            </h2>
            <p className="text-xl text-brand-silver mb-12 max-w-2xl mx-auto font-light">
              Elevate your property with architectural roofing solutions that combine uncompromising aesthetics with generational durability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="group w-full sm:w-auto px-10 py-5 bg-brand-blue text-brand-white font-semibold rounded-full hover:bg-white hover:text-brand-blue transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white">
                Get Your Estimate <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="w-full sm:w-auto px-10 py-5 bg-brand-yellow text-brand-black font-semibold rounded-full hover:bg-white transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-white">
                View Past Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Standard Footer Links */}
      <div className="container mx-auto px-6 pt-20 pb-12 relative z-10 border-t border-brand-silver/10 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-white">
                <div className="w-3 h-3 bg-brand-black rounded-full" />
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-brand-white">
                VERRAZANO
              </span>
            </div>
            <p className="text-brand-silver/80 leading-relaxed mb-8 max-w-xs text-sm">
              Setting the standard for architectural roofing and premium exterior solutions across the region.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter profile" className="w-10 h-10 rounded-full border border-brand-silver/20 flex items-center justify-center text-brand-silver hover:bg-brand-white hover:text-brand-black hover:border-brand-white transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Instagram profile" className="w-10 h-10 rounded-full border border-brand-silver/20 flex items-center justify-center text-brand-silver hover:bg-brand-white hover:text-brand-black hover:border-brand-white transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" aria-label="LinkedIn profile" className="w-10 h-10 rounded-full border border-brand-silver/20 flex items-center justify-center text-brand-silver hover:bg-brand-white hover:text-brand-black hover:border-brand-white transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-brand-white mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="inline-block text-brand-silver/80 hover:text-brand-white transition-colors duration-300 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Commercial Systems</a></li>
              <li><a href="#" className="inline-block text-brand-silver/80 hover:text-brand-white transition-colors duration-300 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Modern Estates</a></li>
              <li><a href="#" className="inline-block text-brand-silver/80 hover:text-brand-white transition-colors duration-300 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Metal Fabrication</a></li>
              <li><a href="#" className="inline-block text-brand-silver/80 hover:text-brand-white transition-colors duration-300 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Annual Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="inline-block text-brand-silver/80 hover:text-brand-white transition-colors duration-300 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">About Us</a></li>
              <li><a href="#" className="inline-block text-brand-silver/80 hover:text-brand-white transition-colors duration-300 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Our Portfolio</a></li>
              <li><a href="#" className="inline-block text-brand-silver/80 hover:text-brand-white transition-colors duration-300 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Case Studies</a></li>
              <li><a href="/blog" className="inline-block text-brand-silver/80 hover:text-brand-white transition-colors duration-300 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Blog</a></li>
              <li><a href="#" className="inline-block text-brand-silver/80 hover:text-brand-white transition-colors duration-300 text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-brand-white mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-brand-blue mt-0.5" />
                <span className="text-brand-silver/80 text-sm">123 Architectural Way<br />Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-blue" />
                <span className="text-brand-silver/80 text-sm">1 (800) 555-ROOF</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-blue" />
                <span className="text-brand-silver/80 text-sm">hello@verrazanoroofing.com</span>
              </li>
            </ul>

            {/* Rule 11: Map Pins Pop-In */}
            <div className="relative w-full h-32 bg-brand-white/5 rounded-xl overflow-hidden mt-8 border border-brand-white/10 hidden lg:block">
              {/* Grid Background */}
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }} />

              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ type: "spring", delay: 0.2, bounce: 0.6 }}
                className="absolute top-6 left-1/4 w-3 h-3 bg-brand-silver rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ type: "spring", delay: 0.4, bounce: 0.6 }}
                className="absolute bottom-6 right-1/3 w-3 h-3 bg-brand-silver rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ type: "spring", delay: 0.6, bounce: 0.6 }}
                className="absolute top-1/2 right-1/4 w-4 h-4 bg-brand-yellow rounded-full shadow-[0_0_15px_rgba(255,184,0,0.6)] flex items-center justify-center transform -translate-y-1/2"
              >
                <div className="w-1.5 h-1.5 bg-brand-white rounded-full pulse-dot-ring" />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-silver/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-silver/60">
          <p>© {new Date().getFullYear()} Verrazano Roofing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-white transition-colors duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">Privacy Policy</a>
            <a href="#" className="hover:text-brand-white transition-colors duration-300 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
