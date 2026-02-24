import type { Key } from 'react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionSettle } from './SectionSettle';
import { BlurReveal } from './BlurReveal';
import { MagneticButton } from './MagneticButton';

const expertiseItems = [
    {
        id: 1,
        title: "Commercial Systems",
        description: "Engineered solutions for large-scale enterprise infrastructure. Utilizing advanced membrane technologies and structural integrations for maximum durability.",
        image: "https://picsum.photos/seed/commercial/1200/900",
        features: ["TPO & EPDM Solutions", "Thermal Efficiency", "25-Year Warranty"]
    },
    {
        id: 2,
        title: "Modern Estates",
        description: "Bespoke architectural roofing designed for luxury residential properties. Merging aesthetic brilliance with uncompromising weather protection.",
        image: "https://picsum.photos/seed/estates/1200/900",
        features: ["Slate & Tile", "Architectural Shingles", "Custom Flashing"]
    },
    {
        id: 3,
        title: "Metal Fabrication",
        description: "Precision-crafted custom metalwork. From standing seam roofs to intricate architectural details, our metal shop delivers perfection.",
        image: "https://picsum.photos/seed/metalwork/1200/900",
        features: ["Standing Seam", "Copper Work", "Zinc Finishes"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, // BlurReveal built-in to the stagger
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
};

function ExpertiseCard({ item, index }: { item: typeof expertiseItems[0], index: number, key?: Key }) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch gap-12 lg:gap-24 mb-32`}>
            {/* Image Side — slide in from left/right */}
            <motion.div
                initial={{ opacity: 0, x: isEven ? -80 : 80, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex-1 relative overflow-hidden rounded-[2rem] aspect-[4/3] lg:aspect-auto"
            >
                <motion.div style={{ y }} className="absolute inset-x-0 -top-[20%] -bottom-[20%]">
                    {/* Rule 8: Ken Burns Image effect (8-second very slow zoom from 100% to 105%) */}
                    <motion.div
                        initial={{ scale: 1 }}
                        whileInView={{ scale: 1.05 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 8, ease: "linear" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                    />
                </motion.div>
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-brand-black/20 mix-blend-multiply pointer-events-none" />
            </motion.div>

            {/* Content Side */}
            <div className="flex-1 flex flex-col justify-center py-8">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-20%" }}
                >
                    <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                        <span className="text-brand-silver font-mono text-[10px] uppercase tracking-[0.2em]">0{index + 1}</span>
                        <div className="h-[1px] w-12 bg-brand-silver/30" />
                    </motion.div>

                    <motion.h3 variants={itemVariants} className="font-display text-3xl lg:text-5xl font-medium tracking-tight mb-6 text-brand-white">
                        {item.title}
                    </motion.h3>

                    <motion.p variants={itemVariants} className="text-brand-silver/80 text-sm md:text-base leading-relaxed mb-8 max-w-xl font-light">
                        {item.description}
                    </motion.p>

                    <motion.ul variants={itemVariants} className="space-y-4 mb-10">
                        {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-xs md:text-sm font-medium tracking-wide text-brand-white">
                                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                                {feature}
                            </li>
                        ))}
                    </motion.ul>

                    <motion.div variants={itemVariants}>
                        <MagneticButton className="group flex items-center gap-2 text-brand-blue font-semibold uppercase tracking-wider text-[10px] md:text-xs hover:text-brand-white transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue">
                            Explore Capabilities
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </MagneticButton>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export function ExpertiseGallery() {
    return (
        <section className="py-24 bg-brand-black text-brand-white overflow-hidden relative border-t border-brand-silver/10">
            <SectionSettle className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    className="max-w-3xl mb-24"
                >
                    <BlurReveal delay={0}>
                        <h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-balance">
                            <span className="block">Uncompromising Quality.</span>
                            <span className="text-brand-silver">Exceptional Execution.</span>
                        </h2>
                    </BlurReveal>

                    <BlurReveal delay={0.2} duration={1.2}>
                        <p className="text-brand-silver/80 text-sm md:text-base leading-relaxed max-w-xl font-light">
                            We deliver gorgeous designs using the very best frameworks and materials available in the industry. Every project is a testament to our precision and care.
                        </p>
                    </BlurReveal>
                </motion.div>

                <div>
                    {expertiseItems.map((item, index) => (
                        <ExpertiseCard key={item.id} item={item} index={index} />
                    ))}
                </div>
            </SectionSettle>
        </section>
    );
}
