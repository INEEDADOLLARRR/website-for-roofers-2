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
    <span className="font-display text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-brand-white tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <section className="py-32 bg-brand-black text-brand-white relative overflow-hidden border-t border-brand-silver/10">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[200px]" />
      </div>

      <div ref={ref} className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-blue font-semibold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 flex items-center justify-center gap-4"
          >
            <span className="w-8 h-[1px] bg-brand-blue" />
            By The Numbers
            <span className="w-8 h-[1px] bg-brand-blue" />
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6"
          >
            Excellence, quantified.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-brand-silver font-light leading-relaxed"
          >
            Decades of relentless pursuit of perfection, distilled into the metrics that matter.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-8 rounded-2xl bg-brand-white/5 border border-brand-white/10 flex items-center justify-center group-hover:bg-brand-white/10 group-hover:scale-110 transition-all duration-500">
                <stat.icon className="w-6 h-6 text-brand-silver group-hover:text-brand-white transition-colors duration-500" />
              </div>
              <div className="mb-3">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <p className="font-display text-sm font-medium tracking-wider uppercase text-brand-white mb-2">{stat.label}</p>
              <p className="text-brand-silver/60 text-xs font-light">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
