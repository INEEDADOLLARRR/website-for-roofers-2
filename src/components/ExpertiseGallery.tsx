import type { Key } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionSettle } from './SectionSettle';
import { BlurReveal } from './BlurReveal';

const expertiseItems = [
    {
        id: 1,
        title: "Commercial Systems",
        description: "Engineered solutions for large-scale enterprise infrastructure. Utilizing advanced membrane technologies and structural integrations for maximum durability.",
        image: "https://picsum.photos/seed/commercial/900/675",
        features: ["TPO & EPDM Solutions", "Thermal Efficiency", "25-Year Warranty"]
    },
    {
        id: 2,
        title: "Modern Estates",
        description: "Bespoke architectural roofing designed for luxury residential properties. Merging aesthetic brilliance with uncompromising weather protection.",
        image: "https://picsum.photos/seed/estates/900/675",
        features: ["Slate & Tile", "Architectural Shingles", "Custom Flashing"]
    },
    {
        id: 3,
        title: "Metal Fabrication",
        description: "Precision-crafted custom metalwork. From standing seam roofs to intricate architectural details, our metal shop delivers perfection.",
        image: "https://picsum.photos/seed/metalwork/900/675",
        features: ["Standing Seam", "Copper Work", "Zinc Finishes"]
    }
];

function ExpertiseCard({ item, index }: { item: typeof expertiseItems[0], index: number, key?: Key }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-7 lg:gap-20 mb-14 md:mb-24`}>
            <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto"
            >
                <motion.div style={{ y }} className="absolute inset-x-0 -top-[10%] -bottom-[10%]">
                    <img
                        src={item.image}
                        alt={item.title}
                        width={900}
                        height={675}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>

            <div className="flex-1 flex flex-col justify-center py-6">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="flex items-center gap-3 mb-5">
                        <span className="text-brand-silver/30 font-display text-xs uppercase tracking-widest">0{index + 1}</span>
                        <div className="h-[1px] w-10 bg-brand-silver/15" />
                    </div>

                    <h3 className="font-display text-2xl lg:text-4xl font-medium tracking-tight mb-5 text-brand-white">{item.title}</h3>
                    <p className="text-brand-silver/60 text-sm leading-relaxed mb-7 max-w-lg font-light">{item.description}</p>

                    <ul className="space-y-3 mb-8" role="list">
                        {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2.5 text-xs font-medium tracking-wide text-brand-white/80">
                                <div className="w-1 h-1 rounded-full bg-brand-blue" />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a href="#contact" className="group inline-flex items-center gap-2 text-brand-blue font-semibold uppercase tracking-wider text-[10px] md:text-xs hover:text-brand-white transition-colors duration-300">
                        Explore Capabilities
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}

export function ExpertiseGallery() {
    return (
        <section id="expertise" aria-label="Our expertise" className="py-14 md:py-24 bg-brand-black text-brand-white overflow-hidden relative border-t border-brand-silver/5">
            <SectionSettle className="container mx-auto px-5 md:px-6 max-w-6xl">
                <div className="max-w-2xl mb-12 md:mb-20">
                    <BlurReveal delay={0}>
                        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-4 text-balance">
                            <span className="block">Uncompromising Quality.</span>
                            <span className="text-brand-silver/50">Exceptional Execution.</span>
                        </h2>
                    </BlurReveal>
                    <BlurReveal delay={0.1}>
                        <p className="text-brand-silver/50 text-sm leading-relaxed max-w-lg font-light">
                            We deliver gorgeous designs using the very best frameworks and materials available in the industry.
                        </p>
                    </BlurReveal>
                </div>

                <div>
                    {expertiseItems.map((item, index) => (
                        <ExpertiseCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </SectionSettle>
        </section>
    );
}
