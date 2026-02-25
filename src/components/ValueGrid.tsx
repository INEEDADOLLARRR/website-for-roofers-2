import { motion } from 'motion/react';
import { Sparkles, Droplets, Clock, ArrowUpRight } from 'lucide-react';
import { SectionSettle } from './SectionSettle';
import { BlurReveal } from './BlurReveal';

const values = [
  {
    icon: Sparkles,
    title: "Uncompromising Aesthetics",
    desc: "We build with the absolute highest standards to ensure your property not only performs flawlessly but looks cinematic.",
    image: "https://picsum.photos/seed/aesthetics/600/450"
  },
  {
    icon: Droplets,
    title: "Seamless Waterproofing",
    desc: "Our liquid elastomeric membrane conforms to every detail, creating a watertight, hyper-durable shield against extreme weather.",
    image: "https://picsum.photos/seed/waterproof/600/450"
  },
  {
    icon: Clock,
    title: "Generation-Spanning Life",
    desc: "Avoid expensive tear-offs. Our premium coatings add decades to your roof's lifespan, backed by uncompromising warranty options.",
    image: "https://picsum.photos/seed/longevity/600/450"
  }
];

export function ValueGrid() {
  return (
    <section aria-label="Our values" className="py-16 md:py-24 bg-brand-black relative border-t border-brand-silver/5 overflow-hidden">
      <SectionSettle className="container mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-16 max-w-6xl mx-auto">
          <div className="max-w-xl">
            <BlurReveal delay={0}>
              <p className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] uppercase mb-4 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-brand-blue" />
                Engineering Excellence
              </p>
            </BlurReveal>
            <BlurReveal delay={0.1}>
              <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight text-brand-white text-balance">
                Unequivocally superior <span className="text-brand-silver/60">craftsmanship.</span>
              </h2>
            </BlurReveal>
          </div>

          <BlurReveal delay={0.2}>
            <a href="#expertise" className="hidden md:flex items-center gap-2 text-brand-white/60 font-medium uppercase tracking-wider text-xs hover:text-brand-white transition-colors duration-300 group">
              View Specifications
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </BlurReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-5 max-w-6xl mx-auto">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl glass-panel h-[320px] md:h-[420px] lg:h-[460px] p-6 flex flex-col justify-end cursor-pointer"
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={val.image}
                  alt={val.title}
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-[1500ms] ease-out"
                />
                <div className="absolute inset-0 bg-brand-black/90 group-hover:bg-brand-black/40 transition-colors duration-500 z-10" />
              </div>

              <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
                <span className="text-brand-silver/20 font-display text-base">0{i + 1}</span>
                <ArrowUpRight className="w-4 h-4 text-brand-silver/30 group-hover:text-brand-yellow transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500" />
              </div>

              <div className="relative z-20 w-full mt-auto">
                <h3 className="font-display text-lg md:text-xl font-medium tracking-tight text-brand-white mb-2.5">{val.title}</h3>
                <div className="w-full h-px bg-brand-silver/5 mb-4 group-hover:bg-brand-silver/20 transition-colors duration-500" />
                <p className="text-brand-silver/50 group-hover:text-brand-white/80 leading-relaxed font-light text-sm transition-colors duration-500">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionSettle>
    </section>
  );
}
