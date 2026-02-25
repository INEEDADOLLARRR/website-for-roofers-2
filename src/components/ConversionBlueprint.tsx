import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';

const stats = [
  { icon: Shield, value: 2500, suffix: "+", label: "Projects Completed", description: "Across residential and commercial" },
  { icon: Award, value: 25, suffix: " Yrs", label: "Industry Experience", description: "Of uncompromising excellence" },
  { icon: Clock, value: 98, suffix: "%", label: "On-Time Delivery", description: "Surgical scheduling precision" },
  { icon: Users, value: 400, suffix: "+", label: "Enterprise Clients", description: "Who trust our craftsmanship" },
];

function AnimatedCounter({ value, suffix, inView }: { value: number, suffix: string, inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-display text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-brand-white tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section aria-label="Company statistics" className="py-14 md:py-28 bg-brand-black text-brand-white relative overflow-hidden border-t border-brand-silver/5">
      <div ref={ref} className="container mx-auto px-6 relative z-10 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-5 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-[1px] bg-brand-blue" />
            By The Numbers
            <span className="w-8 h-[1px] bg-brand-blue" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-5"
          >
            Excellence, quantified.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-silver/50 font-light leading-relaxed text-sm"
          >
            Decades of relentless pursuit of perfection, distilled into the metrics that matter.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 lg:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-brand-white/[0.03] border border-brand-white/5 flex items-center justify-center group-hover:bg-brand-white/[0.06] transition-colors duration-500">
                <stat.icon className="w-5 h-5 text-brand-silver/60 group-hover:text-brand-white transition-colors duration-500" aria-hidden="true" />
              </div>
              <div className="mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="font-display text-xs font-medium tracking-wider uppercase text-brand-white/80 mb-1">{stat.label}</p>
              <p className="text-brand-silver/40 text-xs font-light">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
