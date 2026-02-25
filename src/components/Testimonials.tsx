import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Michael Chen",
    role: "Property Asset Manager",
    content: "The level of precision Verrazano brought to our estate's roof replacement was unprecedented. They operate with a rare architectural sensibility.",
    rating: 5,
    avatarImage: "https://i.pravatar.cc/80?img=11"
  },
  {
    name: "Sarah Jenkins",
    role: "Architectural Designer",
    content: "When specifying complex standing seam metal systems, I only trust their fabrication team. Flawless execution. Every single time.",
    rating: 5,
    avatarImage: "https://i.pravatar.cc/80?img=5"
  },
  {
    name: "David Ross",
    role: "Estate Owner",
    content: "The entire process was practically invisible to us, yet the final result transformed the aesthetic of our entire property. Truly exceptional.",
    rating: 5,
    avatarImage: "https://i.pravatar.cc/80?img=12"
  },
  {
    name: "Elena Rostova",
    role: "Commercial Developer",
    content: "Their ability to fuse extreme weather resilience with breathtaking modern design completely elevated our latest high-rise project.",
    rating: 5,
    avatarImage: "https://i.pravatar.cc/80?img=9"
  },
  {
    name: "Marcus Thorne",
    role: "Heritage Restoration",
    content: "Restoring century-old slate requires true artisans. The Verrazano team matched the original quarry stone perfectly. A flawless integration.",
    rating: 5,
    avatarImage: "https://i.pravatar.cc/80?img=3"
  },
  {
    name: "Julianne Moore",
    role: "Boutique Hotelier",
    content: "We needed a roofing system that looked like a piece of art from the penthouse suites. They delivered a copper masterpiece that will age beautifully.",
    rating: 5,
    avatarImage: "https://i.pravatar.cc/80?img=16"
  }
];

export function Testimonials() {
  return (
    <section aria-label="Client testimonials" className="py-16 md:py-28 bg-brand-black text-brand-white overflow-hidden">
      <div className="container mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] uppercase mb-4 flex items-center gap-3"
            >
              <span className="w-6 h-[1px] bg-brand-blue" />
              Client Endorsements
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl md:text-4xl lg:text-5xl font-medium tracking-tight"
            >
              Trusted by visionaries.
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="hidden md:block text-brand-silver/50 max-w-sm font-light leading-relaxed text-sm"
          >
            We don't just build roofs; we secure legacies.
          </motion.p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-r from-brand-black to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-10 md:w-24 bg-gradient-to-l from-brand-black to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-6 px-3 md:px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
        >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <article
              key={i}
              className="flex flex-col p-5 md:p-7 glass-panel rounded-xl hover:border-brand-white/10 transition-colors duration-300 w-[260px] sm:w-[300px] md:w-[360px] shrink-0 hover:bg-brand-white/[0.03] group"
            >
              <div className="flex gap-0.5 mb-4" aria-label={`${testimonial.rating} out of 5 stars`}>
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} className="w-2.5 h-2.5 text-brand-yellow fill-brand-yellow" aria-hidden="true" />
                ))}
              </div>

              <blockquote className="flex-1 mb-6">
                <p className="font-display text-sm md:text-base leading-relaxed text-brand-silver/70 font-light group-hover:text-brand-white/80 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
              </blockquote>

              <div className="border-t border-brand-silver/5 pt-4 flex items-center gap-3">
                <img
                  src={testimonial.avatarImage}
                  alt={`${testimonial.name}, ${testimonial.role}`}
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-brand-white uppercase tracking-wider text-[9px] md:text-[10px] mb-0.5">{testimonial.name}</p>
                  <p className="text-brand-silver/40 text-[8px] md:text-[9px] uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
