import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Chen",
    role: "Property Asset Manager",
    content: "The level of precision Verrazano brought to our estate's roof replacement was unprecedented. They operate with a rare architectural sensibility.",
    rating: 5,
    propertyImage: "https://picsum.photos/seed/property1/800/600",
    avatarImage: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sarah Jenkins",
    role: "Architectural Designer",
    content: "When specifying complex standing seam metal systems, I only trust their fabrication team. Flawless execution. Every single time.",
    rating: 5,
    propertyImage: "https://picsum.photos/seed/property2/800/600",
    avatarImage: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "David Ross",
    role: "Estate Owner",
    content: "The entire process was practically invisible to us, yet the final result transformed the aesthetic of our entire property. Truly exceptional.",
    rating: 5,
    propertyImage: "https://picsum.photos/seed/property3/800/600",
    avatarImage: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Elena Rostova",
    role: "Commercial Developer",
    content: "Their ability to fuse extreme weather resilience with breathtaking modern design completely elevated our latest high-rise project.",
    rating: 5,
    propertyImage: "https://picsum.photos/seed/property4/800/600",
    avatarImage: "https://i.pravatar.cc/150?img=9"
  },
  {
    name: "Marcus Thorne",
    role: "Heritage Restoration",
    content: "Restoring century-old slate requires true artisans. The Verrazano team matched the original quarry stone perfectly. A flawless integration.",
    rating: 5,
    propertyImage: "https://picsum.photos/seed/property5/800/600",
    avatarImage: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Julianne Moore",
    role: "Boutique Hotelier",
    content: "We needed a roofing system that looked like a piece of art from the penthouse suites. They delivered a copper masterpiece that will age beautifully.",
    rating: 5,
    propertyImage: "https://picsum.photos/seed/property6/800/600",
    avatarImage: "https://i.pravatar.cc/150?img=16"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-brand-black text-brand-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 flex items-center gap-4"
            >
              <span className="w-8 h-[1px] bg-brand-blue" />
              Client Endorsements
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight"
            >
              Trusted by visionaries.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-brand-silver max-w-sm font-light leading-relaxed"
          >
            We don't just build roofs; we secure legacies. Hear from the owners and architects who demand nothing but the absolute best.
          </motion.div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Cinematic Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-brand-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-brand-black to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
        >
          {/* Double array for infinite seamless looping */}
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div
              key={i}
              className="flex flex-col p-8 glass-panel-light rounded-2xl border border-brand-white/5 hover:border-brand-white/10 transition-colors duration-300 backdrop-blur-md cursor-pointer w-[350px] md:w-[420px] lg:w-[460px] shrink-0 hover:bg-brand-white/5 group/card"
            >
              <div className="relative w-full aspect-[16/9] mb-8 overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover/card:scale-105 transition-transform duration-[2000ms] ease-out"
                  style={{ backgroundImage: `url(${testimonial.propertyImage})` }}
                />
                <div className="absolute inset-0 bg-brand-black/20 mix-blend-multiply transition-opacity duration-500 group-hover/card:opacity-0" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 text-brand-yellow fill-brand-yellow" />
                ))}
              </div>

              <blockquote className="flex-1 mb-10">
                <p className="font-display text-lg md:text-xl leading-relaxed text-brand-silver font-light group-hover/card:text-brand-white transition-colors duration-300">
                  "{testimonial.content}"
                </p>
              </blockquote>

              <div className="border-t border-brand-silver/10 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-brand-white/10">
                  <img
                    src={testimonial.avatarImage}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale group-hover/card:grayscale-0 transition-[filter] duration-500"
                  />
                </div>
                <div>
                  <p className="font-semibold text-brand-white uppercase tracking-wider text-[10px] md:text-xs mb-1">
                    {testimonial.name}
                  </p>
                  <p className="text-brand-silver text-[9px] md:text-[10px] uppercase tracking-widest">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
