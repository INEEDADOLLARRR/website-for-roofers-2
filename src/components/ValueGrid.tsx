import { motion } from 'motion/react';
import { Sparkles, Droplets, Clock, ArrowUpRight } from 'lucide-react';
import { SectionSettle } from './SectionSettle';
import { BlurReveal } from './BlurReveal';
import { MagneticButton } from './MagneticButton';

const values = [
  {
    icon: Sparkles,
    title: "Uncompromising Aesthetics",
    desc: "We build with the absolute highest standards to ensure your property not only performs flawlessly but looks cinematic.",
    image: "https://picsum.photos/seed/aesthetics/800/600"
  },
  {
    icon: Droplets,
    title: "Seamless Waterproofing",
    desc: "Our liquid elastomeric membrane conforms to every detail, creating a watertight, hyper-durable shield against extreme weather.",
    image: "https://picsum.photos/seed/waterproof/800/600"
  },
  {
    icon: Clock,
    title: "Generation-Spanning Life",
    desc: "Avoid expensive tear-offs. Our premium coatings add decades to your roof's lifespan, backed by uncompromising warranty options.",
    image: "https://picsum.photos/seed/longevity/800/600"
  }
];

export function ValueGrid() {
  return (
    <section className="py-24 bg-brand-black relative isolate border-t border-brand-silver/10 overflow-hidden">
      <SectionSettle className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 max-w-6xl mx-auto">
          <div className="max-w-xl">
            <BlurReveal delay={0}>
              <p className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-brand-blue" />
                Engineering Excellence
              </p>
            </BlurReveal>

            <BlurReveal delay={0.2} duration={1.2}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-white text-balance">
                Unequivocally superior <br className="hidden md:block" />
                <span className="text-brand-silver">craftsmanship.</span>
              </h2>
            </BlurReveal>
          </div>

          <BlurReveal delay={0.4}>
            <MagneticButton className="flex items-center gap-2 text-brand-white font-medium uppercase tracking-wider text-xs hover:text-brand-silver transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue group">
              View Specifications
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </MagneticButton>
          </BlurReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ delay: i * 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl glass-panel-light h-[450px] md:h-[500px] p-8 flex flex-col justify-end cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
            >
              {/* Rule 6: The Hidden Image Layer */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center scale-110 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-[2000ms] ease-[0.16,1,0.3,1]"
                  style={{ backgroundImage: `url(${val.image})` }}
                />
                <div className="absolute inset-0 bg-brand-black/90 group-hover:bg-brand-black/40 transition-colors duration-700 z-10" />
              </div>

              {/* Rule 6: Top Arrow Icon (Slides Right/Up & turns Gold) */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start z-20">
                <span className="text-brand-silver/30 font-display font-light text-xl">0{i + 1}</span>
                <ArrowUpRight className="w-6 h-6 text-brand-silver/50 group-hover:text-brand-yellow transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500 ease-out" />
              </div>

              {/* Rule 6: Content (Z-20) */}
              <div className="relative z-20 w-full mt-auto">
                <div className="flex items-center justify-between mb-4 transform transition-transform duration-500 ease-out group-hover:translate-y-[-4px]">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-brand-white">{val.title}</h3>
                </div>
                <div className="w-full h-px bg-brand-silver/10 mb-6 group-hover:bg-brand-silver/30 transition-colors duration-500" />
                <p className="text-brand-silver/60 group-hover:text-brand-white leading-relaxed font-light text-sm md:text-base transition-colors duration-500">
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
