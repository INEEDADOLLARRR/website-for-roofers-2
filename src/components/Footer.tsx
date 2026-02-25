import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useRef } from 'react';

export function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <footer ref={ref} id="contact" className="bg-brand-black text-brand-white relative overflow-hidden">
      {/* CTA Section */}
      <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden rounded-t-[2rem]">
        <motion.div style={{ y }} className="absolute inset-x-0 -top-[30%] -bottom-[30%] z-0">
          <img
            src="https://picsum.photos/seed/footer-cta/1920/1080"
            alt="Premium roofing project"
            width={1920}
            height={1080}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-black/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-2xl md:text-4xl lg:text-6xl font-medium tracking-tight mb-5 text-balance">
              Experience gorgeous designs built on the industry's best frameworks.
            </h2>
            <p className="text-brand-silver/50 mb-10 max-w-xl mx-auto font-light text-sm leading-relaxed">
              Elevate your property with architectural roofing solutions that combine uncompromising aesthetics with generational durability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="group w-full sm:w-auto px-8 py-4 bg-brand-blue text-brand-white font-semibold rounded-full hover:bg-white hover:text-brand-blue transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                Get Your Estimate <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </a>
              <a href="#expertise" className="w-full sm:w-auto px-8 py-4 bg-brand-white/10 text-brand-white font-semibold rounded-full hover:bg-white hover:text-brand-black transition-colors duration-300 text-sm">
                View Past Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer links */}
      <div className="container mx-auto px-6 pt-16 pb-10 relative z-10 border-t border-brand-silver/5 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-brand-white">
                <div className="w-2.5 h-2.5 bg-brand-black rounded-full" />
              </div>
              <span className="font-display text-xl font-semibold tracking-tight text-brand-white">VERRAZANO</span>
            </div>
            <p className="text-brand-silver/50 leading-relaxed mb-6 max-w-xs text-sm font-light">
              Setting the standard for architectural roofing and premium exterior solutions across the region.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Twitter profile" className="w-9 h-9 rounded-full border border-brand-silver/10 flex items-center justify-center text-brand-silver/50 hover:bg-brand-white hover:text-brand-black hover:border-brand-white transition-colors duration-300">
                <Twitter className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="Instagram profile" className="w-9 h-9 rounded-full border border-brand-silver/10 flex items-center justify-center text-brand-silver/50 hover:bg-brand-white hover:text-brand-black hover:border-brand-white transition-colors duration-300">
                <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a href="#" aria-label="LinkedIn profile" className="w-9 h-9 rounded-full border border-brand-silver/10 flex items-center justify-center text-brand-silver/50 hover:bg-brand-white hover:text-brand-black hover:border-brand-white transition-colors duration-300">
                <Linkedin className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-brand-white mb-5 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-3" role="list">
              <li><a href="#" className="text-brand-silver/50 hover:text-brand-white transition-colors duration-300 text-sm">Commercial Systems</a></li>
              <li><a href="#" className="text-brand-silver/50 hover:text-brand-white transition-colors duration-300 text-sm">Modern Estates</a></li>
              <li><a href="#" className="text-brand-silver/50 hover:text-brand-white transition-colors duration-300 text-sm">Metal Fabrication</a></li>
              <li><a href="#" className="text-brand-silver/50 hover:text-brand-white transition-colors duration-300 text-sm">Annual Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-brand-white mb-5 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-3" role="list">
              <li><a href="#" className="text-brand-silver/50 hover:text-brand-white transition-colors duration-300 text-sm">About Us</a></li>
              <li><a href="#" className="text-brand-silver/50 hover:text-brand-white transition-colors duration-300 text-sm">Our Portfolio</a></li>
              <li><a href="#" className="text-brand-silver/50 hover:text-brand-white transition-colors duration-300 text-sm">Case Studies</a></li>
              <li><a href="/blog" className="text-brand-silver/50 hover:text-brand-white transition-colors duration-300 text-sm">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-brand-white mb-5 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-brand-silver/50 text-sm">123 Architectural Way<br />Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-blue shrink-0" aria-hidden="true" />
                <span className="text-brand-silver/50 text-sm">1 (800) 555-ROOF</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-blue shrink-0" aria-hidden="true" />
                <span className="text-brand-silver/50 text-sm">hello@verrazanoroofing.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-brand-silver/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-silver/30">
          <p>© {new Date().getFullYear()} Verrazano Roofing. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-brand-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
